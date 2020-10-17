import { ProdutoService } from './../../services/produto.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './components/form/form.component';
import { TableComponent } from './components/table/table.component';
import { ConfirmacaoComponent } from './components/confirmacao/confirmacao.component';
import { SucessoComponent } from './components/sucesso/sucesso.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { LayoutRotasModule } from './routes/layout-rotas/layout-rotas.module';
import { CategoriaService } from 'src/app/services/categoria.service';
import { DataTablesModule } from 'angular-datatables';

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
    DataTablesModule,
    LayoutRotasModule
  ],
  providers: [
    ProdutoService,
    CategoriaService
  ]
})
export class LayoutModule { }
