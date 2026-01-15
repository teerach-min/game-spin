import { PrismaClient } from '../generated';
import { PrismaPg } from '@prisma/adapter-pg';
import { seedRewards } from './reward.seed';
import { seedGameSpins } from './game-spin.seed';
import { seedRewardHistory } from './reward-history.seed';
import 'dotenv/config';

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL as string,
});

const prisma = new PrismaClient({ adapter });

async function main() {
  console.log('Starting seed process...\n');

  try {
    await seedRewards(prisma);
    await seedGameSpins(prisma);
    await seedRewardHistory(prisma);
    console.log('\n✨ All seeds completed successfully!');
  } catch (error) {
    console.error('Error during seeding:', error);
    throw error;
  }
}

main()
  .catch((e) => {
    console.error('Fatal error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
