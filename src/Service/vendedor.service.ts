import { Injectable } from '@nestjs/common';
import { VendedorResponse } from '../Types/VendedorResponse';
import { VendedorRepository } from '../Repository/Vendedor.repository';
import { Vendedor } from '../Types/Vendedor';
import { ListaVendedor } from '../Types/ListaVendedor';


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
            response.mensagem = "Vendedor encontrado com sucesso!"
        } else {
            response.mensagem = "Vendedor não encontrado!"
        }
        return response
    }

    async criar(vendedor: Vendedor): Promise<VendedorResponse>{
        const response = new VendedorResponse()
        try {
           const retornoVendedor = await this.repository.buscaCpf(vendedor)
           if (!retornoVendedor) {
            await this.repository.criar(vendedor)
            response.mensagem = "Vendedor cadastrado com sucesso!"
           } else {
            response.mensagem = "Vendedor já cadastrado neste CPF!"
           }
        } catch (error) {
            response.mensagem = error?.sqlMessage
        }
        return response
    }

    async atualizar(vendedor: Vendedor){
        try {
            const retornoVendedor = await this.repository.buscaCpf(vendedor)
            if (retornoVendedor) {
                this.repository.atualizar(vendedor)
                return "Vendedor atualizado com sucesso!"
            } else {
                return "Vendedor não encontrado"
            }
        } catch (error) {
            return error
        }
    }

    deletar(vendedor: Vendedor){
        try {
            const retornoVendedor = this.repository.buscaCpf(vendedor)
            if (retornoVendedor) {
                this.repository.deletar(vendedor)
                return "Vendedor deletado com sucesso!"
            } else {
                return "Vendedor não encontrado!"
            }
        } catch (error) {
            return error
        }
    }

    verificarBody(vendedor: Vendedor){
        for (const buscaParams of Object.keys(vendedor)) {
            console.log(buscaParams);
            
        }

    }

}