import { Body, Controller, Get, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { CreateGenresDto } from "./dto/CreateGenresDto";
import { GenresService } from "./genres.service";

@ApiTags("Genres")
@Controller("genres")
export class GenresController {
  constructor(private genresService: GenresService) {}

  @Get()
  findAll() {
    return this.genresService.findAll();;
  }

  @Post()
  create(@Body() createUsersDto: CreateGenresDto) {
    return this.genresService.create(createUsersDto);
  }
}