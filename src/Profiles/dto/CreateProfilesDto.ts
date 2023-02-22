import { ApiProperty } from "@nestjs/swagger"


export class CreateProfilesDto{
  @ApiProperty({
    description: "Nome do Perfil",
    example: "Anderson Irmão"
})  
  title         :String[100];
  @ApiProperty({
    description: "URL da imagem de Foto de Perfil",
    example: "Anderson Irmão"
}) 
    imageURL      :String[255];
  }

