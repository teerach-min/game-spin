import { Controller, Get, Param, Query } from '@nestjs/common';
import { GetAllRewardHistoryUseCase } from '../usecases/get-all-reward-history.usecase';
import { GetRewardHistoryByUserIdUseCase } from '../usecases/get-reward-history-by-user-id.usecase';
import { RedeemRewardUseCase } from '../usecases/redeem-reward.usecase';
import {
  PaginatedRewardHistoryResponseDto,
  PaginationQueryDto,
} from '../dtos/reward-history-response.dto';

@Controller({
  path: 'rewards/histories',
  version: '1',
})
export class RewardHistoryController {
  constructor(
    private readonly getAllRewardHistoryUseCase: GetAllRewardHistoryUseCase,
    private readonly getRewardHistoryByUserIdUseCase: GetRewardHistoryByUserIdUseCase,
    private readonly redeemRewardUseCase: RedeemRewardUseCase,
  ) {}

  @Get()
  async getAll(
    @Query() query: PaginationQueryDto,
  ): Promise<PaginatedRewardHistoryResponseDto> {
    const result = await this.getAllRewardHistoryUseCase.execute({
      page: query.page,
      limit: query.limit,
    });

    return PaginatedRewardHistoryResponseDto.fromEntities(
      result.data,
      query.page,
      query.limit,
      result.total,
    );
  }

  @Get(':userId')
  async getMy(
    @Param('userId') userId: string,
    @Query() query: PaginationQueryDto,
  ): Promise<PaginatedRewardHistoryResponseDto> {
    const result = await this.getRewardHistoryByUserIdUseCase.execute(userId, {
      page: query.page,
      limit: query.limit,
    });

    return PaginatedRewardHistoryResponseDto.fromEntities(
      result.data,
      query.page,
      query.limit,
      result.total,
    );
  }
}
