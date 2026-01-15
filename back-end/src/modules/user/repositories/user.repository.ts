import { UserEntity } from '../entities/user.entity';

export const USER_REPOSITORY = Symbol('USER_REPOSITORY');

export interface IUserRepository {
  create(user: Partial<UserEntity>): Promise<UserEntity>;
  findAll(): Promise<UserEntity[]>;
  findById(id: string): Promise<UserEntity | null>;
  findByName(name: string): Promise<UserEntity | null>;
  updatePoint(id: string, point: number): Promise<UserEntity>;
}
