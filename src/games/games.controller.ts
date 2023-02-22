import { Body, Controller, Get, Post, Put, Delete, Param } from "@nestjs/common";
import { CreateGamesDto } from './dto/CreateGamesDto';
import { GamesService } from './games.service';
import { ApiParam, ApiTags } from '@nestjs/swagger';

@ApiTags('Games')
@Controller('games')
export class GamesController {
  constructor(private gamesService: GamesService) {}

  @Get()
  findAll() {
    return this.gamesService.findAll();
  }

  @Post()
  create(@Body() createGamesDto: CreateGamesDto) {
    return this.gamesService.create(createGamesDto);
  }

  @Put(':id')
  @ApiParam({
    name: 'id',
    required: true,
    type: 'number',
  })
  update(@Body() createGamesDto: CreateGamesDto, @Param('id') id) {
    return this.gamesService.update(createGamesDto, id);
  }

  @Get(':id')
  @ApiParam({
    name: 'id',
    required: true,
    type: 'number',
  })
  findOne(@Param('id') id) {
    id = parseInt(id);
    return this.gamesService.findOne(id);
  }

  @Delete(':id')
  @ApiParam({
    name: 'id',
    required: true,
    type: 'number',
  })
  remove(@Param('id') id) {
    id = parseInt(id);
    return this.gamesService.remove(id);
  }
}
