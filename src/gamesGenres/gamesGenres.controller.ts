import { Body, Controller, Get, Param, Post, Delete } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { CreateGamesGenresDto } from './dto/CreateGamesGenresDto';
import { GamesGenresService } from './gamesGenres.service';

@ApiTags('GamesGenres')
@Controller('GamesGenres')
export class GamesGenresController {
  constructor(private genresService: GamesGenresService) {}

  @Get()
  @ApiOperation({
    summary: 'Listar todos os Jogos vinculados a Generos',
  })
  findAll() {
    return this.genresService.findAll();
  }

  @Get('game/:id')
  @ApiOperation({
    summary: 'Listar todos os Generos por jogo',
  })
  @ApiParam({
    name: 'id',
    required: true,
    type: 'number',
  })
  findAllGamesPerGenres(@Param('id') id) {
    id = parseInt(id);
    return this.genresService.findGamesPerGenres(id);
  }

  @Delete('game/:id')
  @ApiOperation({
    summary: 'Listar todos os Generos por jogo',
  })
  @ApiParam({
    name: 'id',
    required: true,
    type: 'number',
  })
  removeAllGamesPerGenres(@Param('id') id) {
    id = parseInt(id);
    return this.genresService.removeGamesPerGenres(id);
  }

  @Get('gender/:id')
  @ApiOperation({
    summary: 'Listar todos os jogos do genero',
  })
  @ApiParam({
    name: 'id',
    required: true,
    type: 'number',
  })
  findAllGenresPerGames(@Param('id') id) {
    id = parseInt(id);
    return this.genresService.findGenresPerGame(id);
  }

  @Delete('gender/:id')
  @ApiOperation({
    summary: 'Remove todos os jogos do genero',
  })
  @ApiParam({
    name: 'id',
    required: true,
    type: 'number',
  })
  removeAllGenresPerGames(@Param('id') id) {
    id = parseInt(id);
    return this.genresService.removeGenresPerGame(id);
  }
  @Post()
  @ApiOperation({
    summary: 'Criar novo Jogos vinculados a Genero',
  })
  create(@Body() createUsersDto: CreateGamesGenresDto) {
    return this.genresService.create(createUsersDto);
  }
}
