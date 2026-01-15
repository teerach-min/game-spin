-- CreateTable
CREATE TABLE "redeem_reward_histories" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "rewardId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "redeem_reward_histories_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "redeem_reward_histories_userId_idx" ON "redeem_reward_histories"("userId");

-- CreateIndex
CREATE INDEX "redeem_reward_histories_rewardId_idx" ON "redeem_reward_histories"("rewardId");

-- AddForeignKey
ALTER TABLE "redeem_reward_histories" ADD CONSTRAINT "redeem_reward_histories_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "redeem_reward_histories" ADD CONSTRAINT "redeem_reward_histories_rewardId_fkey" FOREIGN KEY ("rewardId") REFERENCES "rewards"("id") ON DELETE CASCADE ON UPDATE CASCADE;
