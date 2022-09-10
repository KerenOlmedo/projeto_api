import { Controller, Get, Post, Put, Delete, Body, Query } from "@nestjs/common";
import {ApiBody, ApiTags} from "@nestjs/swagger"
import { Setor } from "../Types/setor/Setor";
import { SetorService } from "../Service/setor.service";

@ApiTags("Setores")
@Controller("setores")
export class SetorController {
    constructor(
        private service: SetorService
    ){}

    @Get()
    async buscar(@Query() setor : Setor){
        return await this.service.buscar(setor)
    }

    @Post()
    @ApiBody({type: Setor})
    async criar(@Body() setor: Setor){
        return await this.service.criar(setor)
    }

    @Put()
    async atualizar(@Body() setor: Setor){
        return await this.service.atualizar(setor)
    }

    @Delete()
    async deletar(@Body() setor: Setor){
        return await this.service.deletar(setor)
    }
}