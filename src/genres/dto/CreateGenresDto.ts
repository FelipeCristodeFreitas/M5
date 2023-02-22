import { ApiProperty } from "@nestjs/swagger";


export class CreateGenresDto{
    @ApiProperty({
        description: "Genero",
        example: "Ação"
    })
    name:       String[100];
 

}