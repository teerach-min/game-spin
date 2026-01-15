import { Injectable, Inject } from '@nestjs/common';
import {
  IUserRepository,
  USER_REPOSITORY,
} from '../repositories/user.repository';
import { UserEntity } from '../entities/user.entity';
import { LoginUserDto } from '../dtos/login-user.dto';

@Injectable()
export class LoginUserUseCase {
  constructor(
    @Inject(USER_REPOSITORY)
    private readonly userRepository: IUserRepository,
  ) {}

  async execute(dto: LoginUserDto): Promise<UserEntity> {
    const existingUser = await this.userRepository.findByName(dto.name);

    if (existingUser) {
      return existingUser;
    }

    return this.userRepository.create({
      name: dto.name,
      point: 0,
    });
  }
}
