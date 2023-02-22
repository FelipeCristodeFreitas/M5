import { ApiProperty } from '@nestjs/swagger';

export class LoginUserDto {
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
}
