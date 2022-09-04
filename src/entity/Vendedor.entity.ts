import { Column, Entity, PrimaryColumn } from "typeorm"


@Entity("VENDEDOR")
export class VendedorEntity {
    @PrimaryColumn({type: "bigint"})
    cpf: number

    @Column()
    id: number

    @Column()
    nome: string

    @Column()
    setor: string
}