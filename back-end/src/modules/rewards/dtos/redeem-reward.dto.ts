import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class RedeemRewardDto {
  @IsNotEmpty()
  @IsString()
  @IsUUID()
  userId: string;
}

export class RedeemRewardUseCaseDto {
  userId: string;
  rewardId: string;
}
