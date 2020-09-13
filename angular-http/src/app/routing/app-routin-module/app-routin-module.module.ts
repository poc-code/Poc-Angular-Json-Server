import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
  {
    path: 'carros',
    loadChildren:'src/app/modules/carros/carros.module#CarrosModule',
    data: { title: 'Carros' }
  },
  {
    path: 'produtos',
    loadChildren:'src/app/modules/produtos/produtos.module#ProdutosModule',
    data: { title: 'produtos' }
  },
  {
    path: 'home',
    loadChildren:'src/app/modules/home/home.module#HomeModule',
    data: { title: 'Home' }
  },
  { path: '', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  declarations: [],
  exports: [ RouterModule ],
  imports: [
    RouterModule.forRoot(routes)
  ]
})

export class AppRoutinModuleModule { }
