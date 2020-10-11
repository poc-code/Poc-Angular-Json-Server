import { ConfirmacaoComponent } from './../../components/confirmacao/confirmacao.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from '../../components/form/form.component';
import { TableComponent } from '../../components/table/table.component';
import { InicioComponent } from '../../components/inicio/inicio.component';
import { SucessoComponent } from '../../components/sucesso/sucesso.component';

const layouterotas : Routes = [{
  path: '', component: InicioComponent,
  data:{ tittle:'Layout'},
  children:[
    { path:'form', component: FormComponent },
    { path:'tabela', component: TableComponent },
    { path:'confirmacao', component: ConfirmacaoComponent },
    { path:'sucesso', component: SucessoComponent },
  ]
}]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(layouterotas)
  ],
  exports: [
    RouterModule
  ]
})
export class LayoutRotasModule { }
