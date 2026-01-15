import { UserEntity } from '../entities/user.entity';
import { RedeemRewardHistoryResponseDto } from '../../rewards/dtos/redeem-reward-history-response.dto';

export class UserProfileWithRewardHistoryDto {
  id: string;
  name: string;
  point: number;
  createdAt: Date;
  updatedAt: Date;
  redeemReward: RedeemRewardHistoryResponseDto[];

  static fromEntities(
    user: UserEntity,
    redeemRewardHistories: RedeemRewardHistoryResponseDto[],
  ): UserProfileWithRewardHistoryDto {
    const dto = new UserProfileWithRewardHistoryDto();
    dto.id = user.id;
    dto.name = user.name;
    dto.point = user.point;
    dto.createdAt = user.createdAt;
    dto.updatedAt = user.updatedAt;
    dto.redeemReward = redeemRewardHistories;
    return dto;
  }
}
