import { PrismaClient } from '../generated';
import * as fs from 'fs';
import * as path from 'path';

export async function seedRewardHistory(prisma: PrismaClient) {
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

  for (const line of dataLines) {
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

  // Step 4: Create reward history records
  console.log('Creating reward history records...');
  let historyCreated = 0;
  let historySkipped = 0;

  for (let i = 0; i < historyRecords.length; i += batchSize) {
    const batch = historyRecords.slice(i, i + batchSize);
    const historyData = [];

    for (const record of batch) {
      const userId = userIdMap.get(record.nickname);
      if (!userId) {
        historySkipped++;
        continue;
      }

      // Parse datetime - handle format: "2025-06-19 01:00:12.367 +0700"
      const createdAt = new Date(record.datetime);

      historyData.push({
        userId,
        rewardPoint: record.point.toString(),
        createdAt,
      });
    }

    if (historyData.length > 0) {
      await prisma.rewardHistory.createMany({
        data: historyData,
        skipDuplicates: true,
      });
      historyCreated += historyData.length;
    }

    if (
      (i + batchSize) % 50000 === 0 ||
      i + batchSize >= historyRecords.length
    ) {
      console.log(
        `Processed ${Math.min(i + batchSize, historyRecords.length)}/${historyRecords.length} history records... (${historyCreated} created)`,
      );
    }
  }

  console.log('\n✨ Reward history seeded successfully!');
  console.log(`  - Users created: ${usersCreated}`);
  console.log(`  - History records created: ${historyCreated}`);
  console.log(`  - History records skipped: ${historySkipped}`);
}
