import { Module, forwardRef } from '@nestjs/common';
import { GameSpinController } from './controllers/game-spin.controller';
import { GetAllGameSpinsUseCase } from './usecases/get-all-game-spins.usecase';
import { SpinGameUseCase } from './usecases/spin-game.usecase';
import { DatabaseModule } from '../../core/prisma/prisma.module';
import { PrismaGameSpinRepository } from '../../core/prisma/repositories/prisma-game-spin.repository';
import { GAME_SPIN_REPOSITORY } from './repositories/game-spin.repository';
import { UserModule } from '../user/user.module';
import { RewardsModule } from '../rewards/rewards.module';

@Module({
  imports: [DatabaseModule, UserModule, forwardRef(() => RewardsModule)],
  controllers: [GameSpinController],
  providers: [
    GetAllGameSpinsUseCase,
    SpinGameUseCase,
    {
      provide: GAME_SPIN_REPOSITORY,
      useClass: PrismaGameSpinRepository,
    },
  ],
  exports: [GetAllGameSpinsUseCase, SpinGameUseCase],
})
export class GameSpinModule {}
