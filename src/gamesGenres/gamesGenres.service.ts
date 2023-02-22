import { Injectable } from '@nestjs/common';
import { CreateGamesGenresDto } from './dto/CreateGamesGenresDto';
import { GamesGenres } from './entities/GamesGenres.entity';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class GamesGenresService {
  GamesGenres: GamesGenres[] = [];

  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.gamesGenres.findMany({
      include: {
        game: {},
        genre: {},
      },
    });
  }

  findGenresPerGame(genreId: number): Promise<GamesGenres[]> {
    return this.prisma.gamesGenres.findMany({
      where: { genreId },
      include: {
        game: {},
        genre: {},
      },
    });
  }

  findGamesPerGenres(gameId: number): Promise<GamesGenres[]> {
    return this.prisma.gamesGenres.findMany({
      where: { gameId },
      include: {
        game: {},
        genre: {},
      },
    });
  }

  async removeGenresPerGame(genreId: number): Promise<boolean> {
    try {
      await this.prisma.gamesGenres.deleteMany({ where: { genreId } });
      return true;
    } catch (e) {
      return false;
    }
  }

  async removeGamesPerGenres(gameId: number): Promise<boolean> {
    try {
      await this.prisma.gamesGenres.deleteMany({ where: { gameId } });
      return true;
    } catch (e) {
      return false;
    }
  }

  create(CreateGenresDto: CreateGamesGenresDto) {
    const GamesGenres: GamesGenres = { ...CreateGenresDto };

    return this.prisma.gamesGenres.create({
      data: GamesGenres,
    });
  }
}
