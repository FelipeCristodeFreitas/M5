<<<<<<< HEAD
import { Injectable } from "@nestjs/common";
=======
import { Injectable, UnauthorizedException } from '@nestjs/common';
>>>>>>> 181cd2ed6fd9ad30c636d94908ba49aa2e39514d
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUsersDto } from "./dto/CreateUsersDto";
import { Users } from "./entities/Users.entity";

@Injectable()
export class UsersService {
  Users:Users[] = [];

  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.users.findMany();
  }

  findOne(id: number): Promise<Users> {
    return this.prisma.users.findUnique({ where: { id } });
  }

  create(CreateUsersDto: CreateUsersDto) {
    const Users:Users = {...CreateUsersDto};

    return this.prisma.users.create({
      data: Users,
    });

<<<<<<< HEAD
    //this.Users.push(Users);

    //return JSON.stringify(CreateUsersDto);
=======
  create(CreateUsersDto: CreateUsersDto) {
    const Users: Users = { ...CreateUsersDto };
    return this.prisma.users.create({
      data: Users,
    });
>>>>>>> 181cd2ed6fd9ad30c636d94908ba49aa2e39514d
  }
}