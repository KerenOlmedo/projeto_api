import {ApiProperty} from "@nestjs/swagger"

export class Produto {
    constructor() {
        this.id = undefined
        this.nome = undefined
        this.valor = undefined
    }

    @ApiProperty()
    id: number

    @ApiProperty()
    nome: string

    @ApiProperty()
    valor: number
}