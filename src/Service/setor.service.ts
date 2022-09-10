import { Injectable } from '@nestjs/common';
import { Setor } from '../Types/setor/Setor';
import { SetorResponse } from '../Types/setor/SetorResponse';
import { SetorRepository } from '../Repository/Setor.repository';
import { ListaSetor } from '../Types/setor/ListaSetor';

@Injectable()
export class SetorService {
    constructor(private repository: SetorRepository){}

    async buscar(setor: Setor): Promise<SetorResponse>{
        const response = new SetorResponse()
        const resultados = await this.repository.buscar(setor)
        if (resultados.length > 0) {
            response.ListaSetor = new ListaSetor()
            response.ListaSetor.setor = resultados.map((setor)=> {
                return setor
            })
            response.mensagem = mensagemSucess("encontrado")
        } else {
            response.mensagem = mensagemErro()
        }
        return response
    }

    async criar(setor: Setor): Promise<SetorResponse>{
        const response = new SetorResponse()
        try {  
            const retornoSetor = await this.repository.buscaId(setor)
            if (!retornoSetor) {
                this.repository.criar(setor)
                response.mensagem = mensagemSucess("criado")
            } else{
                response.mensagem = "O setor já existe!"
            }

        } catch (error) {
            response.mensagem = error?.sqlMessage
        }
        return response
    }

    async atualizar(setor: Setor): Promise<SetorResponse>{
        const response = new SetorResponse()
        try {
            const retornoSetor = await this.repository.buscaId(setor)
            if (retornoSetor) {
            this.repository.atualizar(setor)
            response.mensagem = mensagemSucess("atualizado")
            } else {
                response.mensagem = mensagemErro()
            }
        } catch (error) {
            response.mensagem = error?.sqlMessage
        }
        return response
    }

   async deletar(setor: Setor): Promise<SetorResponse>{
    const response = new SetorResponse()
    try {
            const retornoSetor = await this.repository.buscaId(setor)
            if (retornoSetor) {
                this.repository.deletar(setor)
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
    const modeloMensage = `Setor ${mensagem} com sucesso!`
    return modeloMensage
}

function mensagemErro( ) : string {
    const modeloMensage = `Setor não encontrado!`
    return modeloMensage
}