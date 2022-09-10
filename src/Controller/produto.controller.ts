import { Controller, Get, Post, Put, Delete, Body, Query } from "@nestjs/common";
import {ApiBody, ApiTags} from "@nestjs/swagger"
import { Produto } from "../Types/Produto";
import { ProdutoService } from "../Service/produto.service";

@ApiTags("Produtos")
@Controller("produtos")
export class ProdutoController {
    constructor(
        private service: ProdutoService
    ){}

    @Get()
    async buscar(@Query() produto : Produto){
        return await this.service.buscar(produto)
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