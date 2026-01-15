import { IRewardHistoryRepository } from 'src/modules/rewards/repositories/reward-history.repository';
import { PrismaService } from '../services/prisma.service';
import {
  PaginatedResult,
  PaginationOptions,
  RewardHistoryEntity,
} from 'src/modules/rewards/entities/reward-history.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaRewardHistoryRepository implements IRewardHistoryRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<RewardHistoryEntity[]> {
    return this.prisma.rewardHistory.findMany({
      include: {
        user: {
          select: {
            id: true,
            name: true,
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async findAllWithPagination(
    options: PaginationOptions,
  ): Promise<PaginatedResult<RewardHistoryEntity>> {
    const { page, limit } = options;
    const skip = (page - 1) * limit;

    const [data, total] = await Promise.all([
      this.prisma.rewardHistory.findMany({
        include: {
          user: {
            select: {
              id: true,
              name: true,
            },
          },
        },
        orderBy: {
          createdAt: 'desc',
        },
        skip,
        take: limit,
      }),
      this.prisma.rewardHistory.count(),
    ]);

    return {
      data,
      total,
    };
  }

  async findByUserId(userId: string): Promise<RewardHistoryEntity[]> {
    return this.prisma.rewardHistory.findMany({
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
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async findByUserIdWithPagination(
    userId: string,
    options: PaginationOptions,
  ): Promise<PaginatedResult<RewardHistoryEntity>> {
    const { page, limit } = options;
    const skip = (page - 1) * limit;

    const [data, total] = await Promise.all([
      this.prisma.rewardHistory.findMany({
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
        },
        orderBy: {
          createdAt: 'desc',
        },
        skip,
        take: limit,
      }),
      this.prisma.rewardHistory.count({
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

  async checkUserHasRedeemed(
    userId: string,
    rewardId: string,
  ): Promise<boolean> {
    const history = await this.prisma.rewardHistory.findFirst({
      where: {
        userId,
        rewardPoint: rewardId,
      },
    });
    return !!history;
  }

  async create(userId: string, point: number): Promise<RewardHistoryEntity> {
    return this.prisma.rewardHistory.create({
      data: {
        userId,
        rewardPoint: point.toString(),
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });
  }
}
