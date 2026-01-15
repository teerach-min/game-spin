import { RewardEntity } from '../entities/reward-history.entity';

export const REWARD_REPOSITORY = Symbol('REWARD_REPOSITORY');

export interface IRewardRepository {
  findAll(): Promise<RewardEntity[]>;
  findById(
    id: string,
  ): Promise<{ id: string; name: string; point: number } | null>;
}
