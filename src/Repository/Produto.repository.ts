import { InjectRepository } from "@nestjs/typeorm";
import { ProdutoEntity } from "../entity/Produto.entity";
import { Repository } from "typeorm";
import { Produto } from "../Types/Produto";

export class ProdutoRepository {
    constructor(
        @InjectRepository(ProdutoEntity)
        private repository: Repository<ProdutoEntity>
    ){}

    async buscar(produto: Produto){
        return await this.repository.find({where: produto})
    }

    async buscaId(produto: Produto){
        return await this.repository.findOne({where: {id: produto.id}})
    }

    async criar(produto: Produto){
       return await this.repository.insert(produto)
    }

    atualizar(produto: Produto){
        this.repository.update(produto.id, {nome:produto.nome, valor:produto.valor})
    }

    deletar(produto: Produto){
        this.repository.delete(produto.id)
    }
}