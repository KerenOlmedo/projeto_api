import { Column, Entity, ManyToOne, PrimaryColumn } from "typeorm"
import { SetorEntity } from "./Setor.entity"


@Entity("VENDEDOR")
export class VendedorEntity {
    @PrimaryColumn({type: "bigint"})
    cpf: number

    @Column()
    id: number

    @Column()
    nome: string

    @ManyToOne(()=> SetorEntity, (setor) => setor.id, {eager: true})
    setor: SetorEntity
}