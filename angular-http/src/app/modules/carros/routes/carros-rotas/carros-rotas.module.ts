import { EdicaoComponent } from './../../components/edicao/edicao.component';
import { InicioComponent } from './../../components/inicio/inicio.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { HomeComponent } from '../../components/home/home.component';

const carrosrotas : Routes =[
  {
    path: '',
    component: HomeComponent,
    data: { tittle:'Inicio'},
    children:[
      { path:':id/edicao',component: EdicaoComponent},
      { path:'inicio',component: InicioComponent},
      { path: '', pathMatch: 'full', redirectTo: 'inicio' },
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(carrosrotas)
  ],
  exports:[ RouterModule ]
})
export class CarrosRotasModule { }
