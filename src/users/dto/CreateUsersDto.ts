import { ApiProperty } from "@nestjs/swagger";


export class CreateUsersDto{
    @ApiProperty({
        description: "Nome do usuário",
        example: "John Doe"
    })
    name:       String[100];
    email:      String[100];
    password:   String[100];
    cpf:        String[15];
    isAdmin:    boolean;
}