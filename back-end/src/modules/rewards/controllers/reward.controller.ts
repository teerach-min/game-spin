import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { RedeemRewardUseCase } from '../usecases/redeem-reward.usecase';
import { GetAllRewardsUseCase } from '../usecases/get-all-rewards.usecase';
import { GetRedeemRewardHistoryUseCase } from '../usecases/get-redeem-reward-history.usecase';
import { RedeemRewardDto } from '../dtos/redeem-reward.dto';
import {
  RedeemRewardHistoryResponseDto,
  PaginatedRedeemRewardHistoryResponseDto,
} from '../dtos/redeem-reward-history-response.dto';
import { RewardResponseDto } from '../dtos/reward-response.dto';
import { PaginationQueryDto } from '../dtos/reward-history-response.dto';

@Controller({
  path: 'rewards',
  version: '1',
})
export class RewardController {
  constructor(
    private readonly redeemRewardUseCase: RedeemRewardUseCase,
    private readonly getAllRewardsUseCase: GetAllRewardsUseCase,
    private readonly getRedeemRewardHistoryUseCase: GetRedeemRewardHistoryUseCase,
  ) {}

  @Get()
  async getAll(): Promise<RewardResponseDto[]> {
    const rewards = await this.getAllRewardsUseCase.execute();
    return rewards.map((reward) => RewardResponseDto.fromEntity(reward));
  }

  @Get(':userId/redeem-history')
  async getRedeemHistory(
    @Param('userId') userId: string,
    @Query() query: PaginationQueryDto,
  ): Promise<PaginatedRedeemRewardHistoryResponseDto> {
    const result =
      await this.getRedeemRewardHistoryUseCase.executeWithPagination(userId, {
        page: query.page,
        limit: query.limit,
      });

    return PaginatedRedeemRewardHistoryResponseDto.fromEntities(
      result.data,
      query.page,
      query.limit,
      result.total,
    );
  }

  @Post(':id/redeem')
  async redeem(
    @Param('id') id: string,
    @Body() dto: RedeemRewardDto,
  ): Promise<RedeemRewardHistoryResponseDto> {
    const request = {
      userId: dto.userId,
      rewardId: id,
    };
    const history = await this.redeemRewardUseCase.execute(request);
    return RedeemRewardHistoryResponseDto.fromEntity(history);
  }
}
