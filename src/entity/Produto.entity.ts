import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity("PRODUTO")
export class ProdutoEntity {
    @PrimaryColumn()
    id: number

    @Column()
    nome: string

    @Column({type: "float"})
    valor: number
}