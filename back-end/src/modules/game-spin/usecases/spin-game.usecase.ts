import { Injectable, Inject, BadRequestException } from '@nestjs/common';
import {
  IGameSpinRepository,
  GAME_SPIN_REPOSITORY,
} from '../repositories/game-spin.repository';
import {
  IUserRepository,
  USER_REPOSITORY,
} from '../../user/repositories/user.repository';
import {
  IRewardHistoryRepository,
  REWARD_HISTORY_REPOSITORY,
} from '../../rewards/repositories/reward-history.repository';
import { ErrorResponse } from '../../../common/errors/dtos/common-error.dto';
import { GameSpinEntity } from '../entities/game-spin.entity';
import { SpinGameDto, SpinResultDto } from '../dtos/game-spin-response.dto';
@Injectable()
export class SpinGameUseCase {
  constructor(
    @Inject(GAME_SPIN_REPOSITORY)
    private readonly gameSpinRepository: IGameSpinRepository,
    @Inject(USER_REPOSITORY)
    private readonly userRepository: IUserRepository,
    @Inject(REWARD_HISTORY_REPOSITORY)
    private readonly rewardHistoryRepository: IRewardHistoryRepository,
  ) {}

  private getRandomSpin(spins: GameSpinEntity[]): GameSpinEntity | null {
    if (spins.length === 0) {
      return null;
    }
    const randomIndex = Math.floor(Math.random() * spins.length);
    return spins[randomIndex];
  }

  async execute(dto: SpinGameDto): Promise<SpinResultDto> {
    const user = await this.userRepository.findById(dto.userId);
    if (!user) {
      const error: ErrorResponse = {
        code: 'USER_NOT_FOUND',
        reason: 'User not found',
        data: { userId: dto.userId },
      };
      throw new BadRequestException(error);
    }

    const allSpins = await this.gameSpinRepository.findAll();
    const randomSpin = this.getRandomSpin(allSpins);

    if (!randomSpin) {
      const error: ErrorResponse = {
        code: 'NO_SPINS_AVAILABLE',
        reason: 'No game spins available in database',
        data: {},
      };
      throw new BadRequestException(error);
    }

    const newPoint = user.point + randomSpin.point;
    const updatedUser = await this.userRepository.updatePoint(
      dto.userId,
      newPoint,
    );

    // Create reward history to log the point earned
    await this.rewardHistoryRepository.create(dto.userId, randomSpin.point);

    return SpinResultDto.fromEntities(randomSpin, updatedUser);
  }
}
