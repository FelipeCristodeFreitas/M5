-- CreateTable
CREATE TABLE "Users" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "email" VARCHAR(100) NOT NULL,
    "password" VARCHAR(100) NOT NULL,
    "cpf" VARCHAR(15) NOT NULL,
    "isAdmin" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Profiles" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(100) NOT NULL,
    "imageURL" VARCHAR(255) NOT NULL,
    "UserId" INTEGER NOT NULL,

    CONSTRAINT "Profiles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Games" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(100) NOT NULL,
    "CoverImageUrl" VARCHAR(255) NOT NULL,
    "description" VARCHAR(100) NOT NULL,
    "year" INTEGER NOT NULL,
    "imdbScore" INTEGER NOT NULL,
    "trailerYouTubeUrl" VARCHAR(255) NOT NULL,
    "gameplayYouTubeUrl" VARCHAR(255) NOT NULL,

    CONSTRAINT "Games_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Genres" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,

    CONSTRAINT "Genres_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GamesGenres" (
    "gameId" INTEGER NOT NULL,
    "genreId" INTEGER NOT NULL,

    CONSTRAINT "GamesGenres_pkey" PRIMARY KEY ("gameId","genreId")
);

-- CreateTable
CREATE TABLE "GameFavorites" (
    "profileId" INTEGER NOT NULL,
    "gameId" INTEGER NOT NULL,

    CONSTRAINT "GameFavorites_pkey" PRIMARY KEY ("profileId","gameId")
);

-- AddForeignKey
ALTER TABLE "Profiles" ADD CONSTRAINT "Profiles_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GamesGenres" ADD CONSTRAINT "GamesGenres_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Games"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GamesGenres" ADD CONSTRAINT "GamesGenres_genreId_fkey" FOREIGN KEY ("genreId") REFERENCES "Genres"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GameFavorites" ADD CONSTRAINT "GameFavorites_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profiles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GameFavorites" ADD CONSTRAINT "GameFavorites_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Games"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
