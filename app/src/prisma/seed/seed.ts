/* eslint-disable no-console */
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main(): Promise<void> {
  if (process.env.NODE_ENV === 'production') {
    throw new Error('Refusing to seed if in production mode!!!');
  }
  console.log('Seeding...');

  await prisma.hero.createMany({
    data: [
      { name: 'Tony Stark' },
      { name: 'Steve Rogers' },
      { name: 'Natasha Romanoff' },
    ],
  });

  console.log('Seeding complete');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => {
    void (async () => {
      await prisma.$disconnect();
    })();
  });
