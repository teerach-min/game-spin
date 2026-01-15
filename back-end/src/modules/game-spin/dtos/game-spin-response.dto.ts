import { IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { GameSpinEntity } from '../entities/game-spin.entity';
import { UserEntity } from '~modules/user/entities/user.entity';

export class GameSpinResponseDto {
  id: string;
  point: number;
  createdAt: Date;
  updatedAt: Date;

  static fromEntity(entity: GameSpinEntity): GameSpinResponseDto {
    const dto = new GameSpinResponseDto();
    dto.id = entity.id;
    dto.point = entity.point;
    dto.createdAt = entity.createdAt;
    dto.updatedAt = entity.updatedAt;
    return dto;
  }
}

export class SpinGameDto {
  @IsNotEmpty()
  @IsString()
  @IsUUID()
  userId: string;
}

export class SpinResultDto {
  spin: {
    id: string;
    point: number;
  };
  user: {
    id: string;
    name: string;
    point: number;
  };

  static fromEntities(spin: GameSpinEntity, user: UserEntity): SpinResultDto {
    const dto = new SpinResultDto();
    dto.spin = {
      id: spin.id,
      point: spin.point,
    };
    dto.user = {
      id: user.id,
      name: user.name,
      point: user.point,
    };
    return dto;
  }
}
