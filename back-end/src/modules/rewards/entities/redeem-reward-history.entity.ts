export class RedeemRewardHistoryEntity {
  id: string;
  userId: string;
  rewardId: string;
  createdAt: Date;
  user?: {
    id: string;
    name: string;
  };
  reward?: {
    id: string;
    name: string;
    point: number;
  };
}
