import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import {
  IUserRepository,
  USER_REPOSITORY,
} from '../repositories/user.repository';
import {
  IRedeemRewardHistoryRepository,
  REDEEM_REWARD_HISTORY_REPOSITORY,
} from '../../rewards/repositories/redeem-reward-history.repository';
import { RedeemRewardHistoryResponseDto } from '../../rewards/dtos/redeem-reward-history-response.dto';
import { UserProfileWithRewardHistoryDto } from '../dtos/user-profile-with-reward-history.dto';

@Injectable()
export class GetUserProfileWithRewardHistoryUseCase {
  constructor(
    @Inject(USER_REPOSITORY)
    private readonly userRepository: IUserRepository,
    @Inject(REDEEM_REWARD_HISTORY_REPOSITORY)
    private readonly redeemRewardHistoryRepository: IRedeemRewardHistoryRepository,
  ) {}

  async execute(userId: string): Promise<UserProfileWithRewardHistoryDto> {
    const user = await this.userRepository.findById(userId);

    if (!user) {
      throw new NotFoundException('User not found');
    }

    const redeemRewardHistories =
      await this.redeemRewardHistoryRepository.findByUserId(userId);

    const redeemRewardHistoryDtos = redeemRewardHistories.map((history) =>
      RedeemRewardHistoryResponseDto.fromEntity(history),
    );

    return UserProfileWithRewardHistoryDto.fromEntities(
      user,
      redeemRewardHistoryDtos,
    );
  }
}
