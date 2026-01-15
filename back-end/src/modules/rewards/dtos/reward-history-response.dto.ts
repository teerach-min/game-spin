import { RewardHistoryEntity } from '../entities/reward-history.entity';
import { IsOptional, IsNumber, Min } from 'class-validator';
import { Type } from 'class-transformer';

export class PaginationQueryDto {
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(1)
  page: number = 1;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(1)
  limit: number = 20;
}

export class RewardHistoryResponseDto {
  id: string;
  rewardPoint: string;
  userId: string;
  userName: string;
  createdAt: Date;

  static fromEntity(entity: RewardHistoryEntity): RewardHistoryResponseDto {
    const dto = new RewardHistoryResponseDto();
    dto.id = entity.id;
    dto.rewardPoint = entity.rewardPoint;
    dto.userId = entity.userId;
    dto.userName = entity.user?.name || '';
    dto.createdAt = entity.createdAt;
    return dto;
  }
}

export class PaginatedRewardHistoryResponseDto {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  data: RewardHistoryResponseDto[];

  static fromEntities(
    entities: RewardHistoryEntity[],
    page: number,
    limit: number,
    total: number,
  ): PaginatedRewardHistoryResponseDto {
    const dto = new PaginatedRewardHistoryResponseDto();
    dto.page = page;
    dto.limit = limit;
    dto.total = total;
    dto.totalPages = Math.ceil(total / limit);
    dto.data = entities.map((entity) =>
      RewardHistoryResponseDto.fromEntity(entity),
    );
    return dto;
  }
}
