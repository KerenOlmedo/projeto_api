import { Controller, Get, Post, Put, Delete, Body } from "@nestjs/common";
import {ApiBody} from "@nestjs/swagger"
import { Produto } from "../Types/Produto";
import { ProdutoService } from "../Service/produto.service";


@Controller("produtos")
export class ProdutoController {
    constructor(
        private service: ProdutoService
    ){}

    @Get()
    async buscar(){
        return await this.service.buscar()
    }

    @Post()
    @ApiBody({type: Produto})
    async criar(@Body() produto: Produto){
        return await this.service.criar(produto)
    }

    @Put()
    async atualizar(@Body() produto: Produto){
        return await this.service.atualizar(produto)
    }

    @Delete()
    async deletar(@Body() produto: Produto){
        return await this.service.deletar(produto)
    }
}