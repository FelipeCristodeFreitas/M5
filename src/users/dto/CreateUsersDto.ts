import { ApiProperty } from "@nestjs/swagger";


export class CreateUsersDto{
    @ApiProperty({
        description: "Nome do usuário",
        example: "John Doe"
    })
    name:       String[100];
    @ApiProperty({
        description: "Email do usuario",
        example: "felipe@gmail.com"
    }) 
    email:      String[100];
    @ApiProperty({
        description: "Senha do usuario",
        example: "batata123"
    }) 
    password:   String[100];
    @ApiProperty({
        description: "CPF do Usuario, somente numeros",
        example: "12345678900"
    }) 
    cpf:        String[15];
    @ApiProperty({
        description: "É perfil de ADM ou não",
        example: "Verdadeiro ou falso"
    }) 
    isAdmin:    boolean;
}