import {ApiProperty} from "@nestjs/swagger"

export class Setor {
    constructor() {
        this.id = undefined
        this.nome = undefined
    }

    @ApiProperty({required: false})
    id: number

    @ApiProperty({required: false})
    nome: string
}