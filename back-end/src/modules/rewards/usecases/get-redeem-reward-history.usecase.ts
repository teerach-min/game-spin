import { Injectable, Inject } from '@nestjs/common';
import {
  IRedeemRewardHistoryRepository,
  REDEEM_REWARD_HISTORY_REPOSITORY,
  PaginationOptions,
  PaginatedResult,
} from '../repositories/redeem-reward-history.repository';
import { RedeemRewardHistoryEntity } from '../entities/redeem-reward-history.entity';

@Injectable()
export class GetRedeemRewardHistoryUseCase {
  constructor(
    @Inject(REDEEM_REWARD_HISTORY_REPOSITORY)
    private readonly redeemRewardHistoryRepository: IRedeemRewardHistoryRepository,
  ) {}

  async execute(userId: string): Promise<RedeemRewardHistoryEntity[]> {
    return this.redeemRewardHistoryRepository.findByUserId(userId);
  }

  async executeWithPagination(
    userId: string,
    options: PaginationOptions,
  ): Promise<PaginatedResult<RedeemRewardHistoryEntity>> {
    return this.redeemRewardHistoryRepository.findByUserIdWithPagination(
      userId,
      options,
    );
  }
}
