import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { CreateGenresDto } from './dto/CreateGenresDto';
import { GenresService } from './genres.service';
import { CreateGamesDto } from '../games/dto/CreateGamesDto';

@ApiTags('Genres')
@Controller('genres')
export class GenresController {
  constructor(private genresService: GenresService) {}

  @Get()
  @ApiOperation({
    summary: 'Listar todos os Generos',
  })
  findAll() {
    return this.genresService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Lista o genero por id',
  })
  @ApiParam({
    name: 'id',
    required: true,
    type: 'number',
  })
  findById(@Param('id') id) {
    id = parseInt(id);
    return this.genresService.findById(id);
  }

  @Post()
  @ApiOperation({
    summary: 'Criar novo Genero',
  })
  create(@Body() createUsersDto: CreateGenresDto) {
    return this.genresService.create(createUsersDto);
  }
  @Delete(':id')
  @ApiParam({
    name: 'id',
    required: true,
    type: 'number',
  })
  remove(@Param('id') id) {
    id = parseInt(id);
    return this.genresService.remove(id);
  }

  @Put(':id')
  @ApiParam({
    name: 'id',
    required: true,
    type: 'number',
  })
  update(@Body() createGenresDto: CreateGenresDto, @Param('id') id) {
    return this.genresService.update(createGenresDto, id);
  }
}
