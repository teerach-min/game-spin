import { PrismaClient } from '../generated';
import * as fs from 'fs';
import * as path from 'path';

export async function seedRewardHistory(prisma: PrismaClient) {
  const limitData = 10000;
  console.log('Seeding users and reward history from CSV...');

  // Delete all existing data first
  console.log('Deleting existing data...');
  await prisma.rewardHistory.deleteMany({});
  await prisma.user.deleteMany({});
  console.log('All existing data deleted.');

  const csvPath = path.join(__dirname, 'data', 'mock_data.csv');
  const csvContent = fs.readFileSync(csvPath, 'utf-8');
  const lines = csvContent.split('\n').filter((line) => line.trim() !== '');

  // Skip header line
  const dataLines = lines.slice(1);

  console.log(`Found ${dataLines.length} reward history records in CSV`);

  // Step 1: Aggregate points by user name
  console.log('Aggregating user points...');
  const userPointsMap = new Map<string, number>();
  const historyRecords: Array<{
    nickname: string;
    point: number;
    datetime: string;
  }> = [];

  // limit datalines to 1000
  const limitedDataLines = dataLines.slice(0, limitData);

  for (const line of limitedDataLines) {
    const [nickname, pointStr, datetime] = line.split(',');

    if (!nickname || !pointStr) {
      continue;
    }

    const point = parseInt(pointStr, 10);
    if (isNaN(point)) {
      continue;
    }

    const trimmedName = nickname.trim();
    const currentPoints = userPointsMap.get(trimmedName) || 0;
    userPointsMap.set(trimmedName, currentPoints + point);

    historyRecords.push({
      nickname: trimmedName,
      point: point,
      datetime: datetime || '',
    });
  }

  console.log(`Found ${userPointsMap.size} unique users`);

  // Step 2: Create all users
  console.log('Creating users...');
  const users = Array.from(userPointsMap.entries()).map(([name, point]) => ({
    name,
    point,
  }));

  const batchSize = 5000;
  let usersCreated = 0;

  for (let i = 0; i < users.length; i += batchSize) {
    const batch = users.slice(i, i + batchSize);
    await prisma.user.createMany({
      data: batch,
      skipDuplicates: true,
    });
    usersCreated += batch.length;

    if ((i + batchSize) % 10000 === 0 || i + batchSize >= users.length) {
      console.log(
        `Created ${Math.min(i + batchSize, users.length)}/${users.length} users...`,
      );
    }
  }

  console.log(`Users created: ${usersCreated}`);

  // Step 3: Get user IDs for mapping
  console.log('Loading user IDs...');
  const allUsers = await prisma.user.findMany({
    select: { id: true, name: true },
  });
  const userIdMap = new Map<string, string>();
  allUsers.forEach((user) => {
    userIdMap.set(user.name, user.id);
  });

  // Step 4: Create reward history records using bulk insert with transaction
  console.log('Creating reward history records using bulk insert...');
  let historyCreated = 0;
  let historySkipped = 0;

  // Prepare all history data first
  const allHistoryData: Array<{
    userId: string;
    rewardPoint: string;
    createdAt: Date;
  }> = [];

  for (const record of historyRecords) {
    const userId = userIdMap.get(record.nickname);
    if (!userId) {
      historySkipped++;
      continue;
    }

    // Parse datetime - handle format: "2025-06-19 01:00:12.367 +0700"
    let createdAt: Date;
    try {
      createdAt = new Date(record.datetime);
      if (isNaN(createdAt.getTime())) {
        createdAt = new Date();
      }
    } catch {
      createdAt = new Date();
    }

    allHistoryData.push({
      userId,
      rewardPoint: record.point.toString(),
      createdAt,
    });
  }

  // Use transaction with multiple createMany calls for better performance
  const bulkBatchSize = 10000; // Larger batch for bulk insert

  for (let i = 0; i < allHistoryData.length; i += bulkBatchSize) {
    const batch = allHistoryData.slice(i, i + bulkBatchSize);

    try {
      // Use transaction to batch multiple createMany operations
      await prisma.$transaction(
        async (tx) => {
          // Split into smaller chunks within transaction to avoid timeout
          const chunkSize = 2000;
          for (let j = 0; j < batch.length; j += chunkSize) {
            const chunk = batch.slice(j, j + chunkSize);
            await tx.rewardHistory.createMany({
              data: chunk,
              skipDuplicates: true,
            });
          }
        },
        {
          timeout: 60000, // 60 seconds timeout
        },
      );
      historyCreated += batch.length;
    } catch (error) {
      console.error(
        `Error in bulk insert at batch ${i}:`,
        error instanceof Error ? error.message : error,
      );
      // Fallback to regular createMany if transaction fails
      try {
        const fallbackChunkSize = 1000;
        for (let j = 0; j < batch.length; j += fallbackChunkSize) {
          const chunk = batch.slice(j, j + fallbackChunkSize);
          await prisma.rewardHistory.createMany({
            data: chunk,
            skipDuplicates: true,
          });
          historyCreated += chunk.length;
        }
      } catch (fallbackError) {
        console.error(
          `Fallback createMany also failed at batch ${i}:`,
          fallbackError instanceof Error
            ? fallbackError.message
            : fallbackError,
        );
        historySkipped += batch.length;
      }
    }

    if (
      (i + bulkBatchSize) % 50000 === 0 ||
      i + bulkBatchSize >= allHistoryData.length
    ) {
      console.log(
        `Processed ${Math.min(i + bulkBatchSize, allHistoryData.length)}/${allHistoryData.length} history records... (${historyCreated} created, ${historySkipped} skipped)`,
      );
    }
  }

  console.log('\n✨ Reward history seeded successfully!');
  console.log(`  - Users created: ${usersCreated}`);
  console.log(`  - History records created: ${historyCreated}`);
  console.log(`  - History records skipped: ${historySkipped}`);
}
