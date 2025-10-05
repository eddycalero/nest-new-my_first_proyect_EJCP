
import { ApiProperty } from "@nestjs/swagger";
import { create } from "domain";

export class CreateUserDto {
        @ApiProperty({required: true, example: 'usuario@empresa.com'})
        
        email:string;

        @ApiProperty({required: true, example: 'Eddy Calero'})

        name: string;

        username?: string;

        @ApiProperty({required: true, example:'password123'})

        password: string;

        @ApiProperty({readOnly: true, example: 1, description: 'id del tenant'})
        tenantId: number;

}

