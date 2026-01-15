/*
  Warnings:

  - You are about to drop the column `rewardId` on the `reward_histories` table. All the data in the column will be lost.
  - Added the required column `rewardPoint` to the `reward_histories` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "reward_histories" DROP CONSTRAINT "reward_histories_rewardId_fkey";

-- DropIndex
DROP INDEX "reward_histories_rewardId_idx";

-- AlterTable
ALTER TABLE "reward_histories" DROP COLUMN "rewardId",
ADD COLUMN     "rewardPoint" TEXT NOT NULL;
