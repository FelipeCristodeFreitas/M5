import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUsersDto } from './dto/CreateUsersDto';
import { Users } from './entities/Users.entity';
import { FindUserDto } from './dto/FindUserDto';
import { LoginUserDto } from './dto/LoginUserDto';
import { UsersBasic } from './entities/UsersBasic.entity';

@Injectable()
export class UsersService {
  Users: Users[] = [];

  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.users.findMany({
      select: {
        email: true,
        name: true,
        cpf: true,
        id: true,
      },
    });
  }

  findOneByMail(findUserDto: FindUserDto): Promise<UsersBasic> {
    return this.prisma.users.findFirst({
      where: { email: findUserDto.email },
      select: { email: true, name: true, cpf: true, id: true },
    });
  }

  findOneById(id: number): Promise<UsersBasic> {
    return this.prisma.users.findFirst({
      where: { id },
      select: { email: true, name: true, cpf: true, id: true },
    });
  }

  async login(loginUserDto: LoginUserDto): Promise<Users> {
    const user = await this.prisma.users.findFirst({
      where: { email: loginUserDto.email, password: loginUserDto.password },
    });
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }

  create(CreateUsersDto: CreateUsersDto) {
    const Users: Users = { ...CreateUsersDto };
    return this.prisma.users.create({
      data: Users,
    });
  }
}
