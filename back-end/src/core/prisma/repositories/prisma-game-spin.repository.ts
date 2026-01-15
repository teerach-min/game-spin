import { IGameSpinRepository } from 'src/modules/game-spin/repositories/game-spin.repository';
import { PrismaService } from '../services/prisma.service';
import { GameSpinEntity } from 'src/modules/game-spin/entities/game-spin.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaGameSpinRepository implements IGameSpinRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<GameSpinEntity[]> {
    return this.prisma.gameSpin.findMany({
      orderBy: {
        createdAt: 'asc',
      },
    });
  }
}
