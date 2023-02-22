import { Module } from '@nestjs/common';
import { GamesGenresController } from './gamesGenres.controller';
import { GamesGenresService } from './gamesGenres.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [GamesGenresController],
  providers: [GamesGenresService],
})
export class GamesGenresModule {}
