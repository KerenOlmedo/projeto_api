import { ListaVendedor } from "./ListaVendedor"


export class VendedorResponse {
    constructor() {
        this.listaVendedor = undefined
        this.mensagem = undefined
    }

    listaVendedor: ListaVendedor

    mensagem: string
}