import { Injectable, Inject } from '@nestjs/common';
import {
  IGameSpinRepository,
  GAME_SPIN_REPOSITORY,
} from '../repositories/game-spin.repository';
import { GameSpinEntity } from '../entities/game-spin.entity';

@Injectable()
export class GetAllGameSpinsUseCase {
  constructor(
    @Inject(GAME_SPIN_REPOSITORY)
    private readonly gameSpinRepository: IGameSpinRepository,
  ) {}

  async execute(): Promise<GameSpinEntity[]> {
    return this.gameSpinRepository.findAll();
  }
}
