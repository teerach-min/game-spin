import { Module, forwardRef } from '@nestjs/common';
import { RewardHistoryController } from './controllers/reward-history.controller';
import { GetAllRewardHistoryUseCase } from './usecases/get-all-reward-history.usecase';
import { GetRewardHistoryByUserIdUseCase } from './usecases/get-reward-history-by-user-id.usecase';
import { GetAllRewardsUseCase } from './usecases/get-all-rewards.usecase';
import { RedeemRewardUseCase } from './usecases/redeem-reward.usecase';
import { GetRedeemRewardHistoryUseCase } from './usecases/get-redeem-reward-history.usecase';
import { DatabaseModule } from '../../core/prisma/prisma.module';
import { PrismaRewardHistoryRepository } from '../../core/prisma/repositories/prisma-reward-history.repository';
import { PrismaRewardRepository } from '../../core/prisma/repositories/prisma-reward.repository';
import { PrismaRedeemRewardHistoryRepository } from '../../core/prisma/repositories/prisma-redeem-reward-history.repository';
import { REWARD_HISTORY_REPOSITORY } from './repositories/reward-history.repository';
import { REWARD_REPOSITORY } from './repositories/reward.repository';
import { REDEEM_REWARD_HISTORY_REPOSITORY } from './repositories/redeem-reward-history.repository';
import { UserModule } from '../user/user.module';
import { RewardController } from './controllers/reward.controller';

@Module({
  imports: [DatabaseModule, forwardRef(() => UserModule)],
  controllers: [RewardHistoryController, RewardController],
  providers: [
    GetAllRewardHistoryUseCase,
    GetRewardHistoryByUserIdUseCase,
    GetAllRewardsUseCase,
    RedeemRewardUseCase,
    GetRedeemRewardHistoryUseCase,
    {
      provide: REWARD_HISTORY_REPOSITORY,
      useClass: PrismaRewardHistoryRepository,
    },
    {
      provide: REWARD_REPOSITORY,
      useClass: PrismaRewardRepository,
    },
    {
      provide: REDEEM_REWARD_HISTORY_REPOSITORY,
      useClass: PrismaRedeemRewardHistoryRepository,
    },
  ],
  exports: [
    GetAllRewardHistoryUseCase,
    GetRewardHistoryByUserIdUseCase,
    RedeemRewardUseCase,
    REWARD_HISTORY_REPOSITORY,
    REWARD_REPOSITORY,
  ],
})
export class RewardsModule {}
