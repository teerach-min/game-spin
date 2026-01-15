import { Injectable } from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';
import {
  IRedeemRewardHistoryRepository,
  PaginationOptions,
  PaginatedResult,
} from 'src/modules/rewards/repositories/redeem-reward-history.repository';
import { RedeemRewardHistoryEntity } from 'src/modules/rewards/entities/redeem-reward-history.entity';

@Injectable()
export class PrismaRedeemRewardHistoryRepository implements IRedeemRewardHistoryRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(
    userId: string,
    rewardId: string,
  ): Promise<RedeemRewardHistoryEntity> {
    return this.prisma.redeemRewardHistory.create({
      data: {
        userId,
        rewardId,
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
          },
        },
        reward: {
          select: {
            id: true,
            name: true,
            point: true,
          },
        },
      },
    });
  }

  async checkUserHasRedeemed(
    userId: string,
    rewardId: string,
  ): Promise<boolean> {
    const count = await this.prisma.redeemRewardHistory.count({
      where: {
        userId,
        rewardId,
      },
    });
    return count > 0;
  }

  async findByUserId(userId: string): Promise<RedeemRewardHistoryEntity[]> {
    return this.prisma.redeemRewardHistory.findMany({
      where: {
        userId,
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
          },
        },
        reward: {
          select: {
            id: true,
            name: true,
            point: true,
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async findByUserIdWithPagination(
    userId: string,
    options: PaginationOptions,
  ): Promise<PaginatedResult<RedeemRewardHistoryEntity>> {
    const { page, limit } = options;
    const skip = (page - 1) * limit;

    const [data, total] = await Promise.all([
      this.prisma.redeemRewardHistory.findMany({
        where: {
          userId,
        },
        include: {
          user: {
            select: {
              id: true,
              name: true,
            },
          },
          reward: {
            select: {
              id: true,
              name: true,
              point: true,
            },
          },
        },
        orderBy: {
          createdAt: 'desc',
        },
        skip,
        take: limit,
      }),
      this.prisma.redeemRewardHistory.count({
        where: {
          userId,
        },
      }),
    ]);

    return {
      data,
      total,
    };
  }
}
