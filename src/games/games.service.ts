import { Injectable } from '@nestjs/common';
import { CreateGamesDto } from './dto/CreateGamesDto';
import { Games } from './entities/Games.entity';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class GamesService {
  Games: Games[] = [];

  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.games.findMany();
  }

  findOne(id: number): Promise<Games> {
    return this.prisma.games.findUnique({ where: { id } });
  }

  remove(id: number): Promise<Games> {
    return this.prisma.games.delete({ where: { id } });
  }

  create(CreateGamesDto: CreateGamesDto) {
    const Games: Games = { ...CreateGamesDto };
    return this.prisma.games.create({
      data: Games,
    });
  }
  update(CreateGamesDto: CreateGamesDto, id) {
    const Games: Games = { ...CreateGamesDto };
    return this.prisma.games.update({
      where: { id },
      data: Games,
    });
  }
}
