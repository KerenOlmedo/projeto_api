import { ListaSetor } from "./ListaSetor"


export class SetorResponse {
    constructor() {
        this.ListaSetor = undefined
        this.mensagem = undefined
    }

    ListaSetor: ListaSetor

    mensagem: string
}