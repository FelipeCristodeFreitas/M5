<<<<<<< HEAD
import { Body, Controller, Get, Post } from "@nestjs/common";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { CreateUsersDto } from "./dto/CreateUsersDto";
import { UsersService } from "./users.service";
=======
import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { ApiOperation, ApiParam, ApiTags } from "@nestjs/swagger";
import { CreateUsersDto } from './dto/CreateUsersDto';
import { UsersService } from './users.service';
import { FindUserDto } from './dto/FindUserDto';
import { LoginUserDto } from './dto/LoginUserDto';
>>>>>>> 181cd2ed6fd9ad30c636d94908ba49aa2e39514d

@ApiTags("Users")
@Controller("users")
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  @ApiOperation({
    summary: "Listar todos os usuarios"
  })
  findAll() {
    return this.usersService.findAll();;
  }

  @Post()
  @ApiOperation({
    summary: "Criar novo usuario"
  })
  create(@Body() createUsersDto: CreateUsersDto) {
    return this.usersService.create(createUsersDto);
  }
}