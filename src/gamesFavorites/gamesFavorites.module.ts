import { Module } from '@nestjs/common';
import { GamesFavoritesController } from './gamesFavorites.controller';
import { GamesFavoritesService } from './gamesFavorites.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [GamesFavoritesController],
  providers: [GamesFavoritesService],
})
export class GamesFavoritesModule {}
