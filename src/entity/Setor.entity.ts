import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { VendedorEntity } from "./Vendedor.entity";

@Entity("SETOR")
export class SetorEntity {
    @PrimaryColumn()
    id: number

    @Column()
    nome: string

    @OneToMany(()=> VendedorEntity, (vendedor) => vendedor.cpf)
    vendedores: VendedorEntity[]
}