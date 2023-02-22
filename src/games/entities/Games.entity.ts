<<<<<<< HEAD
import { GameFavorites, GamesGenres } from "@prisma/client"
=======
import { GameFavorites, GamesGenres } from '@prisma/client';
>>>>>>> 181cd2ed6fd9ad30c636d94908ba49aa2e39514d

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
