import { Controller, Get, Post, Put, Delete, Body, Query } from "@nestjs/common";
import { ApiBody, ApiTags } from "@nestjs/swagger";
import { VendedorService } from "../Service/vendedor.service";
import { Vendedor } from "../Types/Vendedor";

@ApiTags("Vendedores")
@Controller("vendedores")
export class VendedorController {
    constructor(
        private service: VendedorService
    ) {}

    @Get()
    async buscar(@Query() vendedor : Vendedor){
        return await this.service.buscar(vendedor)
    }

    @Post()
    @ApiBody({type: Vendedor})
    async criar(@Body() vendedor: Vendedor){
        return await this.service.criar(vendedor)
    }

    @Put()
    @ApiBody({type: Vendedor})
    async atualizar(@Body() vendedor: Vendedor){
        return await this.service.atualizar(vendedor)
    }

    @Delete()
    @ApiBody({type: Vendedor})
    async deletar(@Body() vendedor: Vendedor){
        return await this.service.deletar(vendedor)
    }
}