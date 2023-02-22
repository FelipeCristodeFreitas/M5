import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { GamesModule } from './games/games.module';
import { GenresModule } from './genres/genres.module';
import { ProfilesModule } from './Profiles/profiles.module';

@Module({
  imports: [
    PrismaModule,
    UsersModule,
    GamesModule,
    GenresModule,
    ProfilesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
