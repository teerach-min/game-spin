import { RedeemRewardHistoryEntity } from '../entities/redeem-reward-history.entity';

export const REDEEM_REWARD_HISTORY_REPOSITORY = Symbol(
  'REDEEM_REWARD_HISTORY_REPOSITORY',
);

export interface PaginationOptions {
  page: number;
  limit: number;
}

export interface PaginatedResult<T> {
  data: T[];
  total: number;
}

export interface IRedeemRewardHistoryRepository {
  create(userId: string, rewardId: string): Promise<RedeemRewardHistoryEntity>;
  checkUserHasRedeemed(userId: string, rewardId: string): Promise<boolean>;
  findByUserId(userId: string): Promise<RedeemRewardHistoryEntity[]>;
  findByUserIdWithPagination(
    userId: string,
    options: PaginationOptions,
  ): Promise<PaginatedResult<RedeemRewardHistoryEntity>>;
}
