import { Injectable } from '@nestjs/common';
import { Produto } from '../Types/Produto';
import { ProdutoResponse } from '../Types/ProdutoResponse';
import { ProdutoRepository } from '../Repository/Produto.repository';
import { ListaProduto } from '../Types/ListaProduto';
import { Vendedor } from '../Types/Vendedor';

@Injectable()
export class ProdutoService {
    constructor(private repository: ProdutoRepository){}

    async buscar(produto: Produto): Promise<ProdutoResponse>{
        const response = new ProdutoResponse()
        const resultados = await this.repository.buscar(produto)
        if (resultados.length > 0) {
            response.ListaProduto = new ListaProduto()
            response.ListaProduto.produto = resultados.map((produto)=> {
                return produto
            })
            response.mensagem = mensagemSucess("encontrado")
        } else {
            response.mensagem = mensagemErro()
        }
        return response
    }

    async criar(produto: Produto): Promise<ProdutoResponse>{
        const response = new ProdutoResponse()
        try {  
            const retornoProduto = await this.repository.buscaId(produto)
            if (!retornoProduto) {
                this.repository.criar(produto)
                response.mensagem = mensagemSucess("criado")
            } else{
                response.mensagem = "O produto já existe!"
            }

        } catch (error) {
            response.mensagem = error?.sqlMessage
        }
        return response
    }

    async atualizar(produto: Produto): Promise<ProdutoResponse>{
        const response = new ProdutoResponse()
        try {
            const retornoProduto = await this.repository.buscaId(produto)
            if (retornoProduto) {
            this.repository.atualizar(produto)
            response.mensagem = mensagemSucess("atualizado")
            } else {
                response.mensagem = mensagemErro()
            }
        } catch (error) {
            response.mensagem = error?.sqlMessage
        }
        return response
    }

   async deletar(produto: Produto): Promise<ProdutoResponse>{
    const response = new ProdutoResponse()
    try {
            const retornoProduto = await this.repository.buscaId(produto)
            if (retornoProduto) {
                this.repository.deletar(produto)
                response.mensagem = mensagemSucess("deletado")
            } else {
                response.mensagem = mensagemErro()
            }
        } catch (error) {
            response.mensagem = error?.sqlMessage
        }
        return response
    }

}

function mensagemSucess(mensagem:string) : string{
    const modeloMensage = `Produto ${mensagem} com sucesso!`
    return modeloMensage
}

function mensagemErro( ) : string {
    const modeloMensage = `Produto não encontrado!`
    return modeloMensage
}