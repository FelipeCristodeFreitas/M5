import { ApiProperty } from '@nestjs/swagger';

export class CreateGamesGenresDto {
  @ApiProperty({
    description: 'ID do Genero',
    example: 1,
  })
  genreId: number;
  @ApiProperty({
    description: 'ID do Jogo',
    example: 1,
  })
  gameId: number;
}
