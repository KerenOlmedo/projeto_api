import { Injectable } from '@nestjs/common';
import { VendedorResponse } from '../Types/VendedorResponse';
import { VendedorRepository } from '../Repository/Vendedor.repository';
import { Vendedor } from '../Types/Vendedor';
import { ListaVendedor } from '../Types/ListaVendedor';
import { response } from 'express';


@Injectable()
export class VendedorService{
    constructor(private repository: VendedorRepository){}

    async buscar(vendedor: Vendedor): Promise<VendedorResponse>{
        const response = new VendedorResponse()
        const resultados = await this.repository.buscar(vendedor)
        if (resultados.length > 0) {
            response.listaVendedor = new ListaVendedor()
            response.listaVendedor.vendedor = resultados.map((vendedor)=> {
                return vendedor
            })
            response.mensagem = mensagemSucess("encontrado")
        } else {
            response.mensagem = mensagemErro()
        }
        return response
    }

    async criar(vendedor: Vendedor): Promise<VendedorResponse>{
        const response = new VendedorResponse()
        try {
           const retornoVendedor = await this.repository.buscaCpf(vendedor)
           if (!retornoVendedor) {
            await this.repository.criar(vendedor)
            response.mensagem = mensagemSucess("cadastrado")
           } else {
            response.mensagem = "Vendedor já cadastrado neste CPF!"
           }
        } catch (error) {
            response.mensagem = error?.sqlMessage
        }
        return response
    }

    async atualizar(vendedor: Vendedor): Promise<VendedorResponse>{
        const response = new VendedorResponse()
        try {
            const retornoVendedor = await this.repository.buscaCpf(vendedor)
            if (retornoVendedor) {
                this.repository.atualizar(vendedor)
                response.mensagem = mensagemSucess("Atualizado")
            } else {
                response.mensagem = mensagemErro()
            }
        } catch (error) {
            return error
        }
    }

    deletar(vendedor: Vendedor): Promise<VendedorResponse>{
        const response = new VendedorResponse()
        try {
            const retornoVendedor = this.repository.buscaCpf(vendedor)
            if (retornoVendedor) {
                this.repository.deletar(vendedor)
                response.mensagem = mensagemSucess("deletado")
            } else {
                response.mensagem =  mensagemErro()
            }
        } catch (error) {
            return error
        }
    }

}

function mensagemSucess(mensagem:string) : string{
    const modeloMensage = `Vendedor ${mensagem} com sucesso!`
    return modeloMensage
}

function mensagemErro( ) : string {
    const modeloMensage = `Vendedor não encontrado!`
    return modeloMensage
}