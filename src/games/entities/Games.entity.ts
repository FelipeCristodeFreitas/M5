import { GameFavorites, GamesGenres } from '@prisma/client';

export class Games {
  title: string[100];
  CoverImageUrl: string[255];
  description: string[100];
  year: number;
  imdbScore: number;
  trailerYouTubeUrl: string[255];
  gameplayYouTubeUrl: string[255];
  //genres: GamesGenres[]
  //gameFavorites: GameFavorites[]
}
