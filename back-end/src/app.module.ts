import { Module } from '@nestjs/common';
import { DatabaseModule } from './core/prisma/prisma.module';
import { UserModule } from './modules/user/user.module';
import { RewardsModule } from './modules/rewards/rewards.module';
import { GameSpinModule } from './modules/game-spin/game-spin.module';

@Module({
  imports: [DatabaseModule, UserModule, RewardsModule, GameSpinModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
