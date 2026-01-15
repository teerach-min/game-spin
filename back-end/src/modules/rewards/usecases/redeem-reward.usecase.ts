import { Injectable, Inject, BadRequestException } from '@nestjs/common';
import {
  IRedeemRewardHistoryRepository,
  REDEEM_REWARD_HISTORY_REPOSITORY,
} from '../repositories/redeem-reward-history.repository';
import {
  IUserRepository,
  USER_REPOSITORY,
} from '../../user/repositories/user.repository';
import {
  IRewardRepository,
  REWARD_REPOSITORY,
} from '../repositories/reward.repository';
import { RedeemRewardUseCaseDto } from '../dtos/redeem-reward.dto';
import { RedeemRewardHistoryEntity } from '../entities/redeem-reward-history.entity';
import { ErrorResponse } from '../../../common/errors/dtos/common-error.dto';

@Injectable()
export class RedeemRewardUseCase {
  constructor(
    @Inject(REDEEM_REWARD_HISTORY_REPOSITORY)
    private readonly redeemRewardHistoryRepository: IRedeemRewardHistoryRepository,
    @Inject(USER_REPOSITORY)
    private readonly userRepository: IUserRepository,
    @Inject(REWARD_REPOSITORY)
    private readonly rewardRepository: IRewardRepository,
  ) {}

  async execute(
    dto: RedeemRewardUseCaseDto,
  ): Promise<RedeemRewardHistoryEntity> {
    const user = await this.userRepository.findById(dto.userId);
    if (!user) {
      const error: ErrorResponse = {
        code: 'USER_NOT_FOUND',
        reason: 'User not found',
        data: { userId: dto.userId },
      };
      throw new BadRequestException(error);
    }

    const reward = await this.rewardRepository.findById(dto.rewardId);

    if (!reward) {
      const error: ErrorResponse = {
        code: 'REWARD_NOT_FOUND',
        reason: 'Reward not found',
        data: { rewardId: dto.rewardId },
      };
      throw new BadRequestException(error);
    }

    if (user.point < reward.point) {
      const error: ErrorResponse = {
        code: 'INSUFFICIENT_POINTS',
        reason: 'User does not have enough points to redeem this reward',
        data: {
          userPoint: user.point,
          requiredPoint: reward.point,
        },
      };
      throw new BadRequestException(error);
    }

    const hasRedeemed =
      await this.redeemRewardHistoryRepository.checkUserHasRedeemed(
        dto.userId,
        dto.rewardId,
      );

    if (hasRedeemed) {
      const error: ErrorResponse = {
        code: 'REWARD_ALREADY_REDEEMED',
        reason: 'User has already redeemed this reward',
        data: {
          userId: dto.userId,
          rewardId: dto.rewardId,
        },
      };
      throw new BadRequestException(error);
    }

    // Create redeem reward history
    return this.redeemRewardHistoryRepository.create(dto.userId, dto.rewardId);
  }
}
