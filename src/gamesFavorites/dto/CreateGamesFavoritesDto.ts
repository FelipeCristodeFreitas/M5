import { ApiProperty } from '@nestjs/swagger';

export class CreateGamesFavoritesDto {
  @ApiProperty({
    description: 'ID do perfil',
    example: 1,
  })
  profileId: number;
  @ApiProperty({
    description: 'ID do Jogo',
    example: 1,
  })
  gameId: number;
}
