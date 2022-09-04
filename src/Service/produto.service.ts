import { Injectable } from '@nestjs/common';
import { Produto } from '../Types/Produto';
import { ProdutoRepository } from '../Repository/Produto.repository';

@Injectable()
export class ProdutoService {
    constructor(private repository: ProdutoRepository){}

    async buscar(){
        return await this.repository.buscar()
    }

    async criar(produto: Produto){
        try {  
            const retornoProduto = await this.repository.buscaId(produto)
            if (!retornoProduto) {
                this.repository.criar(produto)
                return "Produto criado!"
            } else{
                return "Este produto já existe!"
            }

        } catch (error) {
            return error
        }
    }

    atualizar(produto: Produto){
        try {
            const retornoProduto = this.repository.buscaId(produto)
            if (retornoProduto) {
            this.repository.atualizar(produto)
            return "Produto atualizado com sucesso!"
            } else {
                return "Produto inexistente!"
            }
        } catch (error) {
            return error
        }
    }

   async deletar(produto: Produto){
        try {
            const retornoProduto = await this.repository.buscaId(produto)
            if (retornoProduto) {
                this.repository.deletar(produto)
                return "Produto deletado com sucesso!"
            } else {
                return "Produto não encontrado!"
            }
        } catch (error) {
            return error
        }
    }

}