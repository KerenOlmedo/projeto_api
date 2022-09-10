import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProdutoController } from './Controller/produto.controller';
import { SetorController } from './Controller/setor.controller';
import { VendedorController } from './Controller/vendedor.controller';
import { ProdutoEntity } from './entity/Produto.entity';
import { SetorEntity } from './entity/Setor.entity';
import { VendedorEntity } from './entity/Vendedor.entity';
import { ProdutoRepository } from './Repository/Produto.repository';
import { SetorRepository } from './Repository/Setor.repository';
import { VendedorRepository } from './Repository/Vendedor.repository';
import { ProdutoService } from './Service/produto.service';
import { SetorService } from './Service/setor.service';
import { VendedorService } from './Service/vendedor.service';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '123456',
      database: 'API',
      entities: [__dirname + "/**/*.entity{.ts,.js}"],
      synchronize: false
  }),
    TypeOrmModule.forFeature([
      ProdutoEntity, VendedorEntity, SetorEntity
    ])
],
  controllers: [ProdutoController, VendedorController, SetorController],
  providers: [
    ProdutoService, ProdutoRepository, 
    VendedorService, VendedorRepository, 
    SetorService, SetorRepository
  ],
})
export class AppModule {}
