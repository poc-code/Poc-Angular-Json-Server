import { ConfirmacaoComponent } from './components/confirmacao/confirmacao.component';
import { FormComponent } from './components/form/form.component';
import { ProdutoService } from './../../services/produto.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './components/table/table.component';
import { LayoutRotasModule } from './routes/layout-rotas/layout-rotas.module';
import { CategoriaService } from 'src/app/services/categoria.service';
import { DataTablesModule } from 'angular-datatables';
import { TooltipModule } from 'ng2-tooltip-directive';
import { SucessoComponent } from './components/sucesso/sucesso.component';
import { ModalModule } from '../shared/modal/modal.module';
import { InicioComponent } from './components/inicio/inicio.component';

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
    LayoutRotasModule,
    TooltipModule,
    ModalModule
  ],
  providers: [
    ProdutoService,
    CategoriaService
  ]
})
export class LayoutModule { }
