import { ApiProperty } from "@nestjs/swagger"
import { GameFavorites } from "@prisma/client"

<<<<<<< HEAD
export class CreateGamesDto{
    @ApiProperty({
        description: "Titulo do Game",
        example: "GTA"
    })
    title: String [100]
    @ApiProperty({
        description: "URL da Capa do Game",
        example: "imagemdogame.com.br"
    })
    CoverImageUrl: String [255]
    @ApiProperty({
        description: "Descrição do Game",
        example: "Game de Ação"
    })
    description: String [100]
    @ApiProperty({
        description: "Ano de Lançamento do Game",
        example: "2008"
    })
    year:    number
    @ApiProperty({
        description: "Nota para o Game",
        example: "5"
    })
    imdbScore: number 
    @ApiProperty({
        description: "URL do trailer do Game",
        example: "trailerdogame.com.br"
    })
    trailerYouTubeUrl: string [255]
    @ApiProperty({
        description: "URL da Game Play no YouTube",
        example: "gameplay.com.br"
    })
    gameplayYouTubeUrl: string  [255]
=======
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
>>>>>>> 181cd2ed6fd9ad30c636d94908ba49aa2e39514d

    // genres: GamesGenres[]
    //gameFavorites: GameFavorites[]
}

