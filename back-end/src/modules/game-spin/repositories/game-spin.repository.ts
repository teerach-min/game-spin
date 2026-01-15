import { GameSpinEntity } from '../entities/game-spin.entity';

export const GAME_SPIN_REPOSITORY = Symbol('GAME_SPIN_REPOSITORY');

export interface IGameSpinRepository {
  findAll(): Promise<GameSpinEntity[]>;
}
