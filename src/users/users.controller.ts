import { Body, Controller, Get, Post } from "@nestjs/common";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { CreateUsersDto } from "./dto/CreateUsersDto";
import { UsersService } from "./users.service";

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