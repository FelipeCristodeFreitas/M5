import { Body, Controller, Get, Post } from "@nestjs/common";
import { CreateGamesDto } from "./dto/CreateGamesDto";
import { GamesService } from "./games.service";
import { ApiTags } from "@nestjs/swagger";

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