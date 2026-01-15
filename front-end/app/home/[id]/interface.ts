
export interface Reward {
    id: string;
    name: string;
    point: number;
    createdAt: string;
    updatedAt: string;
  }
  
  export interface RewardHistory {
    id: string;
    rewardPoint: string;
    userId: string;
    userName: string;
    createdAt: string;
  }
  
  export interface UserProfile {
    id: string;
    name: string;
    point: number;
    createdAt: string;
    updatedAt: string;
    redeemReward: RedeemRewardHistory[];
  }
  
  export interface PaginatedRewardHistoryResponse {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    data: RewardHistory[];
  }

  export interface RedeemRewardHistory {
    id: string;
    userId: string;
    rewardId: string;
    userName: string;
    rewardName: string;
    rewardPoint: number;
    createdAt: string;
  }

  export interface PaginatedRedeemRewardHistoryResponse {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    data: RedeemRewardHistory[];
  }
  