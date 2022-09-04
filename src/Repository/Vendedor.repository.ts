import { InjectRepository } from "@nestjs/typeorm";
import { Vendedor } from "../Types/Vendedor";
import { Repository } from "typeorm";
import { VendedorEntity } from "../entity/Vendedor.entity";


export class VendedorRepository {
    constructor(
        @InjectRepository(VendedorEntity)
        private repository: Repository<VendedorEntity>
    ){}
    
    async buscar(vendedor: Vendedor){
        return await this.repository.find({where: vendedor})
    }

    async buscaCpf(vendedor: Vendedor){
        const query = {where: {cpf: vendedor.cpf}}
        return await this.repository.findOne(query)
    }

    async criar(vendedor: Vendedor){
        return await this.repository.insert(vendedor)
    }

    async atualizar(vendedor: Vendedor){
        return await this.repository.update(vendedor.cpf, {nome: vendedor.nome, setor: vendedor.setor, id: vendedor.id})
    }

    deletar(vendedor: Vendedor){
        return this.repository.delete(vendedor.cpf)
    }
}