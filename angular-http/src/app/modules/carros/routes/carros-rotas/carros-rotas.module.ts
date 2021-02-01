import { EdicaoComponent } from './../../components/edicao/edicao.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from '../../components/home/home.component';
import { CarrosInicioComponent } from '../../components/carros_inicio/carros_inicio.component';

const carrosrotas : Routes =[
  {
    path: '',
    component: HomeComponent,
    data: { tittle:'Inicio'},
    children:[
      { path:':id/edicao',component: EdicaoComponent},
      { path:'inicio',component: CarrosInicioComponent},
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
