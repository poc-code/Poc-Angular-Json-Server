import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaCategoriaComponent } from '../../components/categorias/lista-categoria/lista-categoria.component';
import { EdicaoCategoriaComponent } from '../../components/categorias/edicao-categoria/edicao-categoria.component';
import { ListaProdutoComponent } from '../../components/produtos/lista-produto/lista-produto.component';
import { EdicaoProdutoComponent } from '../../components/produtos/edicao-produto/edicao-produto.component';
import { DetalheProdutoComponent } from '../../components/produtos/detalhe-produto/detalhe-produto.component';
import { Routes, RouterModule } from '@angular/router';
import { InicioProdutoComponent } from '../../components/produtos/inicio-produto/inicio-produto.component';
import { AddCategoriaComponent } from '../../components/categorias/add-categoria/add-categoria.component';
import { CadastrarProdutoComponent } from '../../components/produtos/cadastrar-produto/cadastrar-produto.component';


const produtosrotas : Routes = [
  {
      path: '', component: InicioProdutoComponent,
      data: { tittle:'Produtos'},
      children: [
        { path: 'categoria/home', component: ListaCategoriaComponent },
        { path: 'categoria/:id', component: EdicaoCategoriaComponent },
        { path: '', component: CadastrarProdutoComponent },
        { path: 'edicao', component: EdicaoProdutoComponent },
        { path: 'detalhe', component: DetalheProdutoComponent },
        { path: 'novo', component: AddCategoriaComponent },
      ]
  }
];


@NgModule({
  declarations: [ ],
  imports: [
    CommonModule,
    RouterModule.forChild(produtosrotas)
  ],
  exports: [
    RouterModule
  ]

})
export class ProdutosRotasModule { }
