import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { LoginUserUseCase } from '../usecases/login-user.usecase';
import { GetUserProfileWithRewardHistoryUseCase } from '../usecases/get-user-profile-with-reward-history.usecase';
import { LoginUserDto } from '../dtos/login-user.dto';
import { UserEntity } from '../entities/user.entity';
import { UserProfileWithRewardHistoryDto } from '../dtos/user-profile-with-reward-history.dto';

@Controller({
  path: 'users',
  version: '1',
})
export class UserController {
  constructor(
    private readonly loginUserUseCase: LoginUserUseCase,
    private readonly getUserProfileWithRewardHistoryUseCase: GetUserProfileWithRewardHistoryUseCase,
  ) {}

  @Post('login')
  async login(@Body() loginUserDto: LoginUserDto): Promise<UserEntity> {
    return this.loginUserUseCase.execute(loginUserDto);
  }

  @Get(':userId')
  async getProfile(
    @Param('userId') userId: string,
  ): Promise<UserProfileWithRewardHistoryDto> {
    return this.getUserProfileWithRewardHistoryUseCase.execute(userId);
  }
}
