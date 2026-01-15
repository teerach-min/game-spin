import { PrismaClient } from '../generated';

export async function seedRewards(prisma: PrismaClient) {
  console.log('Seeding rewards...');

  const rewards = [
    { name: 'reward 1', point: 500 },
    { name: 'reward 2', point: 1000 },
    { name: 'reward 3', point: 10000 },
  ];

  for (const reward of rewards) {
    const existing = await prisma.reward.findFirst({
      where: { name: reward.name },
    });

    if (existing) {
      await prisma.reward.update({
        where: { id: existing.id },
        data: {
          point: reward.point,
        },
      });
    } else {
      await prisma.reward.create({
        data: {
          name: reward.name,
          point: reward.point,
        },
      });
    }
  }

  console.log('Rewards seeded successfully!');
}
