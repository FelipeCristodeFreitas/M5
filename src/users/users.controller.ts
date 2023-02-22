import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { ApiOperation, ApiParam, ApiTags } from "@nestjs/swagger";
import { CreateUsersDto } from './dto/CreateUsersDto';
import { UsersService } from './users.service';
import { FindUserDto } from './dto/FindUserDto';
import { LoginUserDto } from './dto/LoginUserDto';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  @ApiOperation({
    summary: 'Listar todos os usuarios',
  })
  findAll() {
    return this.usersService.findAll();
  }

  @Post('/find')
  @ApiOperation({
    summary: 'Buscar por email',
  })
  findOneByMail(@Body() findUserDto: FindUserDto) {
    return this.usersService.findOneByMail(findUserDto);
  }

  @Get('/:id')
  @ApiOperation({
    summary: 'Buscar por id',
  })
  @ApiParam({
    name: 'id',
    required: true,
    type: 'number',
  })
  findOneById(@Param('id') id) {
    id = parseInt(id);
    return this.usersService.findOneById(id);
  }

  @Post('/login')
  @ApiOperation({
    summary: 'Buscar por email',
  })
  login(@Body() loginUserDto: LoginUserDto) {
    return this.usersService.login(loginUserDto);
  }

  @Post()
  @ApiOperation({
    summary: 'Criar novo usuario',
  })
  create(@Body() createUsersDto: CreateUsersDto) {
    return this.usersService.create(createUsersDto);
  }
}
