import {ApiProperty} from "@nestjs/swagger"

export class Vendedor {
    constructor() {
        this.cpf = undefined
        this.id = undefined
        this.nome = undefined
        this.setor = undefined
    }

    @ApiProperty({required: false})
    cpf: number

    @ApiProperty({required: false})
    id: number

    @ApiProperty({required: false})
    nome: string

    @ApiProperty({required: false})
    setor: string
}