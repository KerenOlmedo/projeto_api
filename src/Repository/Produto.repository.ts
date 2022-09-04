import { InjectRepository } from "@nestjs/typeorm";
import { ProdutoEntity } from "../entity/Produto.entity";
import { Repository } from "typeorm";
import { Produto } from "../Types/Produto";

export class ProdutoRepository {
    constructor(
        @InjectRepository(ProdutoEntity)
        private repository: Repository<ProdutoEntity>
    ){}

    async buscar(){
        return await this.repository.find()
    }

    async buscaId(produto: Produto){
        return await this.repository.findOne({where: {id: produto.id}})
    }

    async criar(produto: Produto){
       const produtoCriado = await this.repository.insert(produto)
        return produtoCriado
    }

    atualizar(produto: Produto){
        this.repository.update(produto.id, {nome:produto.nome, valor:produto.valor})
    }

    deletar(produto: Produto){
        this.repository.delete(produto.id)
    }
}