import { Injectable } from "@nestjs/common";
import { CreateGenresDto } from "./dto/CreateGenresDto";
import { Genres } from "./entities/Genres.entity";
import { PrismaService } from "src/prisma/prisma.service";


@Injectable()
export class GenresService {
  Genres:Genres[] = [];

  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.genres.findMany();
  }

  findOne(id: number): Promise<Genres> {
    return this.prisma.genres.findUnique({ where: { id } });
  }

  create(CreateGenresDto: CreateGenresDto) {
    const Genres:Genres = {...CreateGenresDto};

    return this.prisma.genres.create({
      data: Genres,
    });

    //this.Genres.push(Genres);

    //return JSON.stringify(CreateGenresDto);
  }
}