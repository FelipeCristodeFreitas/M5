import { ApiProperty } from '@nestjs/swagger';

export class FindUserDto {
  @ApiProperty({
    description: 'Email do usuario',
    example: 'felipe@gmail.com',
  })
  email: string[100];
}
