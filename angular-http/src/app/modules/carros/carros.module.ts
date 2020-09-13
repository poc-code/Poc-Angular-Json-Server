import { FormsModule  } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './components/inicio/inicio.component';
import { EdicaoComponent } from './components/edicao/edicao.component';
import { CarrosRotasModule } from './routes/carros-rotas/carros-rotas.module';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    InicioComponent, 
    EdicaoComponent, 
    HomeComponent
  ],
  imports: [
    CommonModule,
    CarrosRotasModule,
    FormsModule
  ],
  exports:[
    EdicaoComponent,
    InicioComponent,
    HomeComponent
  ]
})
export class CarrosModule { }
