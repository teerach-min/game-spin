import { Injectable, Inject } from '@nestjs/common';
import {
  IRewardRepository,
  REWARD_REPOSITORY,
} from '../repositories/reward.repository';
import { RewardEntity } from '../entities/reward-history.entity';

@Injectable()
export class GetAllRewardsUseCase {
  constructor(
    @Inject(REWARD_REPOSITORY)
    private readonly rewardRepository: IRewardRepository,
  ) {}

  async execute(): Promise<RewardEntity[]> {
    return this.rewardRepository.findAll();
  }
}
