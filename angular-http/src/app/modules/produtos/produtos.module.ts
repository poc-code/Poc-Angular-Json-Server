import { NgModule } from '@angular/core';
import { FormsModule  } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ListaCategoriaComponent } from './components/categorias/lista-categoria/lista-categoria.component';
import { EdicaoCategoriaComponent } from './components/categorias/edicao-categoria/edicao-categoria.component';
import { DetalheCategoriaComponent } from './components/categorias/detalhe-categoria/detalhe-categoria.component';
import { ListaProdutoComponent } from './components/produtos/lista-produto/lista-produto.component';
import { EdicaoProdutoComponent } from './components/produtos/edicao-produto/edicao-produto.component';
import { DetalheProdutoComponent } from './components/produtos/detalhe-produto/detalhe-produto.component';
import { ProdutosRotasModule } from './routes/produtos-rotas/produtos-rotas.module';
import { InicioProdutoComponent } from './components/produtos/inicio-produto/inicio-produto.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
     ListaCategoriaComponent, 
     EdicaoCategoriaComponent,
     DetalheCategoriaComponent, 
     ListaProdutoComponent, 
     EdicaoProdutoComponent, 
     InicioProdutoComponent
    ],
  imports: [
    CommonModule,
    FormsModule,
    ProdutosRotasModule,
    NgbModule
  ],
  exports:[
    EdicaoCategoriaComponent
  ]
})
export class ProdutosModule { }
