import { Body, Controller, Get, Post } from "@nestjs/common";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { CreateGenresDto } from "./dto/CreateGenresDto";
import { GenresService } from "./genres.service";

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