import { ApiProperty } from '@nestjs/swagger';

export class CreateProfilesDto {
  @ApiProperty({
    description: 'Nome do Perfil',
    example: 'Anderson Irmão',
  })
  title: string[100];
  @ApiProperty({
    description: 'URL da imagem de Foto de Perfil',
    example: 'Anderson Irmão',
  })
  imageURL: string[255];
  @ApiProperty({
    description: 'Id do usuario',
    example: 1,
  })
  UserId: number;
}
