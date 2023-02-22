import { Injectable } from '@nestjs/common';
import { CreateGamesDto } from './dto/CreateGamesDto';
import { Games } from './entities/Games.entity';
import { PrismaService } from 'src/prisma/prisma.service';
import { GamesGenres } from '../gamesGenres/entities/GamesGenres.entity';

@Injectable()
export class GamesService {
  Games: Games[] = [];

  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.games.findMany({
      include: {
        genres: {
          include: {
            genre: {},
          },
        },
      },
    });
  }

  findOne(id: number): Promise<Games> {
    return this.prisma.games.findUnique({ where: { id } });
  }

  remove(id: number): Promise<Games> {
    return this.prisma.games.delete({ where: { id } });
  }

  async create(createGamesDto: CreateGamesDto): Promise<void> {
    const Games: Games = {
      title: createGamesDto.title,
      description: createGamesDto.description,
      CoverImageUrl: createGamesDto.CoverImageUrl,
      year: createGamesDto.year,
      imdbScore: createGamesDto.imdbScore,
      trailerYouTubeUrl: createGamesDto.trailerYouTubeUrl,
      gameplayYouTubeUrl: createGamesDto.gameplayYouTubeUrl,
    };
    try {
      const newGame = await this.prisma.games.create({
        data: Games,
      });
      const cat = createGamesDto.categoria.split('|');
      for (let i = 0; i < cat.length; i++) {
        const gamesGenres: GamesGenres = {
          genreId: parseInt(cat[i]),
          gameId: newGame.id,
        };
        try {
          const res = await this.prisma.gamesGenres.create({
            data: gamesGenres,
          });
          console.log(res);
        } catch (e) {
          console.log(e);
        }
      }

      console.log(newGame);
    } catch (e) {
      console.log(e);
      return;
    }
  }

  update(CreateGamesDto: CreateGamesDto, id) {
    const Games: Games = { ...CreateGamesDto };
    return this.prisma.games.update({
      where: { id },
      data: Games,
    });
  }
}
