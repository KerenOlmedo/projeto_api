import { Injectable } from '@nestjs/common';
import { VendedorRepository } from '../Repository/Vendedor.repository';
import { Vendedor } from '../Types/Vendedor';


@Injectable()
export class VendedorService{
    constructor(private repository: VendedorRepository){}

    async buscar(vendedor: Vendedor){
        return await this.repository.buscar(vendedor)
    }

    async criar(vendedor: Vendedor){
        try {
           const retornoVendedor = await this.repository.buscaCpf(vendedor)
           if (!retornoVendedor) {
            this.repository.criar(vendedor)
            return "Vendedor cadastrado com sucesso!"
           } else {
            return "Vendedor já cadastrado neste CPF!"
           }
        } catch (error) {
            return error
        }
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