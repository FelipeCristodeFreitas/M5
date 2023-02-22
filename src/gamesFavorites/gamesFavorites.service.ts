import { Injectable } from '@nestjs/common';
import { CreateGamesFavoritesDto } from './dto/CreateGamesFavoritesDto';
import { GamesFavorites } from './entities/gamesFavorites.entity';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class GamesFavoritesService {
  GamesFavorites: GamesFavorites[] = [];

  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.gameFavorites.findMany({
      include: {
        game: {
          include: {
            genres: {
              include: {
                genre: { select: { name: true } },
              },
            },
          },
        },
        profile: {
          include: {
            user: {
              select: {
                name: true,
                email: true,
              },
            },
          },
        },
      },
    });
  }

  findGenresPerGame(profileId: number): Promise<GamesFavorites[]> {
    return this.prisma.gameFavorites.findMany({
      where: { profileId },
      include: {
        game: {
          include: {
            genres: {
              include: {
                genre: { select: { name: true } },
              },
            },
          },
        },
        profile: {
          include: {
            user: {
              select: {
                name: true,
                email: true,
              },
            },
          },
        },
      },
    });
  }

  findGamesPerGenres(gameId: number): Promise<GamesFavorites[]> {
    return this.prisma.gameFavorites.findMany({
      where: { gameId },
      include: {
        game: {
          include: {
            genres: {
              include: {
                genre: { select: { name: true } },
              },
            },
          },
        },
        profile: {
          include: {
            user: {
              select: {
                name: true,
                email: true,
              },
            },
          },
        },
      },
    });
  }

  async deleteGamesAndProfile(
    profileId: number,
    gameId: number,
  ): Promise<boolean> {
    try {
      await this.prisma.gameFavorites.findMany({
        where: { profileId, gameId },
      });
      return true;
    } catch (e) {
      return false;
    }
  }

  async deleteGenresPerGame(profileId: number): Promise<boolean> {
    try {
      await this.prisma.gameFavorites.findMany({
        where: { profileId },
      });
      return true;
    } catch (e) {
      return false;
    }
  }

  async deleteGamesPerGenres(gameId: number): Promise<boolean> {
    try {
      await this.prisma.gameFavorites.findMany({
        where: { gameId },
      });
      return true;
    } catch (e) {
      return false;
    }
  }

  create(CreateGenresDto: CreateGamesFavoritesDto) {
    const GamesFavorites: GamesFavorites = { ...CreateGenresDto };

    return this.prisma.gameFavorites.create({
      data: GamesFavorites,
    });
  }
}
