import { RedeemRewardHistoryEntity } from '../entities/redeem-reward-history.entity';

export class RedeemRewardHistoryResponseDto {
  id: string;
  userId: string;
  rewardId: string;
  userName: string;
  rewardName: string;
  rewardPoint: number;
  createdAt: Date;

  static fromEntity(
    entity: RedeemRewardHistoryEntity,
  ): RedeemRewardHistoryResponseDto {
    const dto = new RedeemRewardHistoryResponseDto();
    dto.id = entity.id;
    dto.userId = entity.userId;
    dto.rewardId = entity.rewardId;
    dto.userName = entity.user?.name || '';
    dto.rewardName = entity.reward?.name || '';
    dto.rewardPoint = entity.reward?.point || 0;
    dto.createdAt = entity.createdAt;
    return dto;
  }
}

export class PaginatedRedeemRewardHistoryResponseDto {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  data: RedeemRewardHistoryResponseDto[];

  static fromEntities(
    entities: RedeemRewardHistoryEntity[],
    page: number,
    limit: number,
    total: number,
  ): PaginatedRedeemRewardHistoryResponseDto {
    const dto = new PaginatedRedeemRewardHistoryResponseDto();
    dto.page = page;
    dto.limit = limit;
    dto.total = total;
    dto.totalPages = Math.ceil(total / limit);
    dto.data = entities.map((entity) =>
      RedeemRewardHistoryResponseDto.fromEntity(entity),
    );
    return dto;
  }
}
