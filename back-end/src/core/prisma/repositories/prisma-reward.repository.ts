import { IRewardRepository } from 'src/modules/rewards/repositories/reward.repository';
import { PrismaService } from '../services/prisma.service';
import { Injectable } from '@nestjs/common';
import { RewardEntity } from '~modules/rewards/entities/reward-history.entity';

@Injectable()
export class PrismaRewardRepository implements IRewardRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<RewardEntity[]> {
    return this.prisma.reward.findMany({
      orderBy: {
        point: 'asc',
      },
    });
  }

  async findById(
    id: string,
  ): Promise<{ id: string; name: string; point: number } | null> {
    return this.prisma.reward.findUnique({
      where: { id },
      select: {
        id: true,
        name: true,
        point: true,
      },
    });
  }
}
