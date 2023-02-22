<<<<<<< HEAD
import { Body, Controller, Get, Post } from "@nestjs/common";
import { CreateGamesDto } from "./dto/CreateGamesDto";
import { GamesService } from "./games.service";
import { ApiTags } from "@nestjs/swagger";
=======
import { Body, Controller, Get, Post, Put, Delete, Param } from "@nestjs/common";
import { CreateGamesDto } from './dto/CreateGamesDto';
import { GamesService } from './games.service';
import { ApiParam, ApiTags } from '@nestjs/swagger';
>>>>>>> 181cd2ed6fd9ad30c636d94908ba49aa2e39514d

@ApiTags("") 

@Controller("games")
export class GamesController {
  constructor(private gamesService: GamesService) {}

  @Get()
  findAll() {
    return this.gamesService.findAll();;
  }

  @Post()
  create(@Body() createGamesDto: CreateGamesDto) {
    return this.gamesService.create(createGamesDto);
  }
}