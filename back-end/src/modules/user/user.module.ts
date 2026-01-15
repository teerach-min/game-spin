import { Module, forwardRef } from '@nestjs/common';
import { UserController } from './controllers/user.controller';
import { LoginUserUseCase } from './usecases/login-user.usecase';
import { GetUserProfileWithRewardHistoryUseCase } from './usecases/get-user-profile-with-reward-history.usecase';
import { DatabaseModule } from '../../core/prisma/prisma.module';
import { PrismaUserRepository } from '../../core/prisma/repositories/prisma-user.repository';
import { USER_REPOSITORY } from './repositories/user.repository';
import { RewardsModule } from '../rewards/rewards.module';
import { REDEEM_REWARD_HISTORY_REPOSITORY } from '~modules/rewards/repositories/redeem-reward-history.repository';
import { PrismaRedeemRewardHistoryRepository } from '~core/prisma/repositories/prisma-redeem-reward-history.repository';

@Module({
  imports: [DatabaseModule, forwardRef(() => RewardsModule)],
  controllers: [UserController],
  providers: [
    LoginUserUseCase,
    GetUserProfileWithRewardHistoryUseCase,
    {
      provide: USER_REPOSITORY,
      useClass: PrismaUserRepository,
    },
    {
      provide: REDEEM_REWARD_HISTORY_REPOSITORY,
      useClass: PrismaRedeemRewardHistoryRepository,
    },
  ],
  exports: [
    LoginUserUseCase,
    GetUserProfileWithRewardHistoryUseCase,
    USER_REPOSITORY,
  ],
})
export class UserModule {}
