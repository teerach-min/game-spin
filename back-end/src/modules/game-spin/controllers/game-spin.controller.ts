import { Controller, Get, Post, Body } from '@nestjs/common';
import { GetAllGameSpinsUseCase } from '../usecases/get-all-game-spins.usecase';
import { SpinGameUseCase } from '../usecases/spin-game.usecase';
import {
  GameSpinResponseDto,
  SpinGameDto,
  SpinResultDto,
} from '../dtos/game-spin-response.dto';

@Controller({
  path: 'game-spins',
  version: '1',
})
export class GameSpinController {
  constructor(
    private readonly getAllGameSpinsUseCase: GetAllGameSpinsUseCase,
    private readonly spinGameUseCase: SpinGameUseCase,
  ) {}

  @Get()
  async getAll(): Promise<GameSpinResponseDto[]> {
    const spins = await this.getAllGameSpinsUseCase.execute();
    return spins.map((spin) => GameSpinResponseDto.fromEntity(spin));
  }

  @Post()
  async spin(@Body() dto: SpinGameDto): Promise<SpinResultDto> {
    return this.spinGameUseCase.execute(dto);
  }
}
