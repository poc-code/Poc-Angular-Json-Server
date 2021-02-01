import { FormsModule  } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EdicaoComponent } from './components/edicao/edicao.component';
import { CarrosRotasModule } from './routes/carros-rotas/carros-rotas.module';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { CarrosInicioComponent } from './components/carros_inicio/carros_inicio.component';

@NgModule({
  declarations: [
    CarrosInicioComponent, 
    EdicaoComponent, 
    HomeComponent,
    CarrosInicioComponent
  ],
  imports: [
    CommonModule,
    CarrosRotasModule,
    FormsModule
  ],
  exports:[
    EdicaoComponent,
    CarrosInicioComponent,
    HomeComponent
  ]
})
export class CarrosModule { }
