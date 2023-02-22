<<<<<<< HEAD
import { Body, Controller, Get, Post } from "@nestjs/common";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { CreateGenresDto } from "./dto/CreateGenresDto";
import { GenresService } from "./genres.service";
=======
import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ApiOperation, ApiParam, ApiTags } from "@nestjs/swagger";
import { CreateGenresDto } from './dto/CreateGenresDto';
import { GenresService } from './genres.service';
import { CreateGamesDto } from "../games/dto/CreateGamesDto";
>>>>>>> 181cd2ed6fd9ad30c636d94908ba49aa2e39514d

@ApiTags("Genres")
@Controller("genres")
export class GenresController {
  constructor(private genresService: GenresService) {}

  @Get()
  @ApiOperation({
    summary: "Listar todos os Generos"
  })
  findAll() {
    return this.genresService.findAll();;
  }

  @Post()
  @ApiOperation({
    summary: "Criar novo Genero"
  })
  create(@Body() createUsersDto: CreateGenresDto) {
    return this.genresService.create(createUsersDto);
  }
}