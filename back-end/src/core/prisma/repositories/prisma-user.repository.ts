import { IUserRepository } from 'src/modules/user/repositories/user.repository';
import { PrismaService } from '../services/prisma.service';
import { UserEntity } from 'src/modules/user/entities/user.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaUserRepository implements IUserRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(user: Partial<UserEntity>): Promise<UserEntity> {
    return this.prisma.user.create({
      data: {
        name: user.name,
        point: 0,
      },
    });
  }

  async findAll(): Promise<UserEntity[]> {
    return this.prisma.user.findMany();
  }

  async findById(id: string): Promise<UserEntity | null> {
    if (!id || id.trim() === '') {
      return null;
    }
    return this.prisma.user.findUnique({
      where: { id },
    });
  }

  async findByName(name: string): Promise<UserEntity | null> {
    return this.prisma.user.findFirst({
      where: { name },
    });
  }

  async updatePoint(id: string, point: number): Promise<UserEntity> {
    return this.prisma.user.update({
      where: { id },
      data: { point },
    });
  }
}
