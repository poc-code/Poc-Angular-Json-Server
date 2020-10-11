import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './components/form/form.component';
import { TableComponent } from './components/table/table.component';
import { ConfirmacaoComponent } from './components/confirmacao/confirmacao.component';
import { SucessoComponent } from './components/sucesso/sucesso.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { LayoutRotasModule } from './routes/layout-rotas/layout-rotas.module';

@NgModule({
  declarations: [
    FormComponent, 
    TableComponent, 
    ConfirmacaoComponent, 
    SucessoComponent, 
    InicioComponent
  ],
  imports: [
    CommonModule,
    LayoutRotasModule
  ]
})
export class LayoutModule { }
