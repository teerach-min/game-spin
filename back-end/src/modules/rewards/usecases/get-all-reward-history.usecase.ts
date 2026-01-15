import { Injectable, Inject } from '@nestjs/common';
import {
  IRewardHistoryRepository,
  REWARD_HISTORY_REPOSITORY,
} from '../repositories/reward-history.repository';
import {
  PaginatedResult,
  PaginationOptions,
  RewardHistoryEntity,
} from '../entities/reward-history.entity';

@Injectable()
export class GetAllRewardHistoryUseCase {
  constructor(
    @Inject(REWARD_HISTORY_REPOSITORY)
    private readonly rewardHistoryRepository: IRewardHistoryRepository,
  ) {}

  async execute(
    options: PaginationOptions,
  ): Promise<PaginatedResult<RewardHistoryEntity>> {
    return this.rewardHistoryRepository.findAllWithPagination(options);
  }
}
