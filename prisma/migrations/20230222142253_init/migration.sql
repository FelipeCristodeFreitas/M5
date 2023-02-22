-- DropForeignKey
ALTER TABLE "GameFavorites" DROP CONSTRAINT "GameFavorites_gameId_fkey";

-- DropForeignKey
ALTER TABLE "GamesGenres" DROP CONSTRAINT "GamesGenres_gameId_fkey";

-- DropForeignKey
ALTER TABLE "GamesGenres" DROP CONSTRAINT "GamesGenres_genreId_fkey";

-- AddForeignKey
ALTER TABLE "GamesGenres" ADD CONSTRAINT "GamesGenres_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Games"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GamesGenres" ADD CONSTRAINT "GamesGenres_genreId_fkey" FOREIGN KEY ("genreId") REFERENCES "Genres"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GameFavorites" ADD CONSTRAINT "GameFavorites_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Games"("id") ON DELETE CASCADE ON UPDATE CASCADE;
