import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaCategoriaComponent } from '../../components/categorias/lista-categoria/lista-categoria.component';
import { EdicaoCategoriaComponent } from '../../components/categorias/edicao-categoria/edicao-categoria.component';
import { ListaProdutoComponent } from '../../components/produtos/lista-produto/lista-produto.component';
import { EdicaoProdutoComponent } from '../../components/produtos/edicao-produto/edicao-produto.component';
import { DetalheProdutoComponent } from '../../components/produtos/detalhe-produto/detalhe-produto.component';
import { Routes, RouterModule } from '@angular/router';


const produtosrotas : Routes = [
  {
      path: '', 
      component: ListaCategoriaComponent,
      data: { tittle:'Produtos'},
      children: [
        { path: 'categoria/home', component: ListaCategoriaComponent },
        { path: 'categoria/edicao', component: EdicaoCategoriaComponent },
        { path: '', component: ListaCategoriaComponent },
        { path: 'edicao', component: EdicaoProdutoComponent },
        { path: 'detalhe', component: DetalheProdutoComponent },
      ]
  }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(produtosrotas)
  ],
  exports: [
    RouterModule
  ]

})
export class ProdutosRotasModule { }
