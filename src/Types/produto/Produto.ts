import {ApiProperty} from "@nestjs/swagger"

export class Produto {
    constructor() {
        this.id = undefined
        this.nome = undefined
        this.valor = undefined
    }

    @ApiProperty({required: false})
    id: number

    @ApiProperty({required: false})
    nome: string

    @ApiProperty({required: false})
    valor: number
}