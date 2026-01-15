export class RewardHistoryEntity {
  id: string;
  rewardPoint: string;
  userId: string;
  createdAt: Date;
  user?: {
    id: string;
    name: string;
  };
}

export class PaginationOptions {
  page: number;
  limit: number;
}

export class PaginatedResult<T> {
  data: T[];
  total: number;
}

export class RewardEntity {
  id: string;
  name: string;
  point: number;
  createdAt: Date;
  updatedAt: Date;
}
