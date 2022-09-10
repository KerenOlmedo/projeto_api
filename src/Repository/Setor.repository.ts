import { InjectRepository } from "@nestjs/typeorm";
import { SetorEntity } from "../entity/Setor.entity";
import { Repository } from "typeorm";
import { Setor } from "../Types/setor/Setor";

export class SetorRepository {
    constructor(
        @InjectRepository(SetorEntity)
        private repository: Repository<SetorEntity>
    ){}

    async buscar(setor: Setor){
        return await this.repository.find({where: setor})
    }

    async buscaId(setor: Setor){
        return await this.repository.findOne({where: {id: setor.id}})
    }

    async criar(setor: Setor){
       return await this.repository.insert(setor)
    }

    atualizar(setor: Setor){
        this.repository.update(setor.id, {nome:setor.nome})
    }

    deletar(setor: Setor){
        this.repository.delete(setor.id)
    }
}