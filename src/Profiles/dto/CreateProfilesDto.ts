import { ApiProperty } from '@nestjs/swagger';
import { Users } from "../../users/entities/Users.entity";

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
    description: 'Email do usuario',
    example: 'felipe@gmail.com',
  })
  user: Users;
}
