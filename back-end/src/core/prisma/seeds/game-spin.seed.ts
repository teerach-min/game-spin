import { PrismaClient } from '../generated';

export async function seedGameSpins(prisma: PrismaClient) {
  console.log('Seeding game spins...');

  const gameSpins = [
    { point: 300 },
    { point: 500 },
    { point: 1000 },
    { point: 3000 },
  ];

  // delete all existing game spins
  await prisma.gameSpin.deleteMany({});

  for (const spin of gameSpins) {
    await prisma.gameSpin.create({
      data: {
        point: spin.point,
      },
    });
  }

  console.log('Game spins seeded successfully!');
}
