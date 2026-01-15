import {
  PaginatedResult,
  PaginationOptions,
  RewardHistoryEntity,
} from '../entities/reward-history.entity';

export const REWARD_HISTORY_REPOSITORY = Symbol('REWARD_HISTORY_REPOSITORY');

export interface IRewardHistoryRepository {
  findAllWithPagination(
    options: PaginationOptions,
  ): Promise<PaginatedResult<RewardHistoryEntity>>;
  findByUserIdWithPagination(
    userId: string,
    options: PaginationOptions,
  ): Promise<PaginatedResult<RewardHistoryEntity>>;
  findByUserId(userId: string): Promise<RewardHistoryEntity[]>;
  checkUserHasRedeemed(userId: string, rewardId: string): Promise<boolean>;
  create(userId: string, point: number): Promise<RewardHistoryEntity>;
}
