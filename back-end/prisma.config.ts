// โหลด .env file ก่อน import อื่นๆ
import 'dotenv/config';
import { defineConfig } from 'prisma/config';

export default defineConfig({
  schema: './prisma/schema.prisma',
  migrations: {
    seed: 'ts-node -r tsconfig-paths/register src/core/prisma/seeds/main.ts',
  },
  datasource: {
    url: process.env.DATABASE_URL || '',
  },
});
