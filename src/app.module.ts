import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProdutoController } from './Controller/produto.controller';
import { VendedorController } from './Controller/vendedor.controller';
import { ProdutoEntity } from './entity/Produto.entity';
import { VendedorEntity } from './entity/Vendedor.entity';
import { ProdutoRepository } from './Repository/Produto.repository';
import { VendedorRepository } from './Repository/Vendedor.repository';
import { ProdutoService } from './Service/produto.service';
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
      ProdutoEntity, VendedorEntity
    ])
],
  controllers: [ProdutoController, VendedorController],
  providers: [ProdutoService, ProdutoRepository, VendedorService, VendedorRepository],
})
export class AppModule {}
