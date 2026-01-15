import { RewardEntity } from '../entities/reward-history.entity';

export class RewardResponseDto {
  id: string;
  name: string;
  point: number;
  createdAt: Date;
  updatedAt: Date;

  static fromEntity(entity: RewardEntity): RewardResponseDto {
    const dto = new RewardResponseDto();
    dto.id = entity.id;
    dto.name = entity.name;
    dto.point = entity.point;
    dto.createdAt = entity.createdAt;
    dto.updatedAt = entity.updatedAt;
    return dto;
  }
}
