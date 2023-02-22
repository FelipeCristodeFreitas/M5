import { Body, Controller, Get, Param, Post, Delete } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { CreateGamesFavoritesDto } from './dto/CreateGamesFavoritesDto';
import { GamesFavoritesService } from './gamesFavorites.service';

@ApiTags('GamesFavorites')
@Controller('GamesFavorites')
export class GamesFavoritesController {
  constructor(private gamesFavoritesService: GamesFavoritesService) {}

  @Get()
  @ApiOperation({
    summary: 'Listar todos os Jogos vinculados a Perfis',
  })
  findAll() {
    return this.gamesFavoritesService.findAll();
  }

  @Get('games/:id')
  @ApiOperation({
    summary: 'Listar todos os Jogos vinculados a Perfis',
  })
  @ApiParam({
    name: 'id',
    required: true,
    type: 'number',
  })
  findAllGamesPerGenres(@Param('id') id) {
    id = parseInt(id);
    return this.gamesFavoritesService.findGamesPerGenres(id);
  }

  @Get('profile/:id')
  @ApiOperation({
    summary: 'Listar todos os Perfis vinculados a Jogos',
  })
  @ApiParam({
    name: 'id',
    required: true,
    type: 'number',
  })
  findAllGenresPerGames(@Param('id') id) {
    id = parseInt(id);
    return this.gamesFavoritesService.findGenresPerGame(id);
  }
  @Delete('games/:profileId/:gameId')
  @ApiOperation({
    summary: 'remove o jogo vinculado ao Perfil',
  })
  @ApiParam({
    name: 'profileId',
    required: true,
    type: 'number',
  })
  @ApiParam({
    name: 'gameId',
    required: true,
    type: 'number',
  })
  deleteGamesAndProfile(
    @Param('profileId') profileId,
    @Param('gameId') gameId,
  ) {
    profileId = parseInt(profileId);
    gameId = parseInt(gameId);
    return this.gamesFavoritesService.deleteGamesAndProfile(profileId, gameId);
  }

  @Delete('games/:id')
  @ApiOperation({
    summary: 'remove todos os Jogos vinculados a Perfis',
  })
  @ApiParam({
    name: 'id',
    required: true,
    type: 'number',
  })
  deleteAllGamesPerGenres(@Param('id') id) {
    id = parseInt(id);
    return this.gamesFavoritesService.deleteGamesPerGenres(id);
  }

  @Delete('profile/:id')
  @ApiOperation({
    summary: 'remove todos os Perfis vinculados a Jogos',
  })
  @ApiParam({
    name: 'id',
    required: true,
    type: 'number',
  })
  deleteAllGenresPerGames(@Param('id') id) {
    id = parseInt(id);
    return this.gamesFavoritesService.deleteGenresPerGame(id);
  }

  @Post()
  @ApiOperation({
    summary: 'Criar novo Jogo vinculado a Perfil',
  })
  create(@Body() createUsersDto: CreateGamesFavoritesDto) {
    return this.gamesFavoritesService.create(createUsersDto);
  }
}
