import { ApiProperty } from '@nestjs/swagger';
import { GameFavorites } from '@prisma/client';

export class CreateGamesDto {
  @ApiProperty({
    description: 'Titulo do Game',
    example: 'GTA',
  })
  title: string[100];
  @ApiProperty({
    description: 'URL da Capa do Game',
    example: 'imagemdogame.com.br',
  })
  CoverImageUrl: string[255];
  @ApiProperty({
    description: 'Descrição do Game',
    example: 'Game de Ação',
  })
  description: string[100];
  @ApiProperty({
    description: 'Ano de Lançamento do Game',
    example: '2008',
  })
  year: number;
  @ApiProperty({
    description: 'Nota para o Game',
    example: '5',
  })
  imdbScore: number;
  @ApiProperty({
    description: 'URL do trailer do Game',
    example: 'trailerdogame.com.br',
  })
  trailerYouTubeUrl: string[255];
  @ApiProperty({
    description: 'URL da Game Play no YouTube',
    example: 'gameplay.com.br',
  })
  gameplayYouTubeUrl: string[255];

  // genres: GamesGenres[]
  //gameFavorites: GameFavorites[]
}
