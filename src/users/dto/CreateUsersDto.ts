import { ApiProperty } from '@nestjs/swagger';

export class CreateUsersDto {
  @ApiProperty({
    description: 'Nome do usuário',
    example: 'John Doe',
  })
  name: string[100];
  @ApiProperty({
    description: 'Email do usuario',
    example: 'felipe@gmail.com',
  })
  email: string[100];
  @ApiProperty({
    description: 'Senha do usuario',
    example: 'batata123',
  })
  password: string[100];
  @ApiProperty({
    description: 'CPF do Usuario, somente numeros',
    example: '12345678900',
  })
  cpf: string[15];
  @ApiProperty({
    description: 'É perfil de ADM ou não',
    example: false,
  })
  isAdmin: boolean;
}
