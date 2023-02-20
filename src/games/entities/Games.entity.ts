import { GameFavorites, GamesGenres } from "@prisma/client"

export class Games{
    title:      String  [100]
    CoverImageUrl:   String [255]
    description:        String  [100]
    year:    number
    imdbScore: number
    trailerYouTubeUrl: string [255]
    gameplayYouTubeUrl: string [255]
    //genres: GamesGenres[]
    //gameFavorites: GameFavorites[]
}
