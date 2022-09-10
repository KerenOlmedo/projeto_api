import { ListaProduto } from "./ListaProduto"


export class ProdutoResponse {
    constructor() {
        this.ListaProduto = undefined
        this.mensagem = undefined
    }

    ListaProduto: ListaProduto

    mensagem: string
}