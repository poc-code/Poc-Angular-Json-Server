import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BenvindoComponent } from '../../components/home/benvindo/benvindo.component';
import { FaleConoscoComponent } from '../../components/home/fale-conosco/fale-conosco.component';
import { SobreNosComponent } from '../../components/home/sobre-nos/sobre-nos.component';
import { ContatoComponent } from '../../components/home/contato/contato.component';
import { MaisVendidosComponent } from '../../components/home/mais-vendidos/mais-vendidos.component';
import { PromocoesComponent } from '../../components/home/promocoes/promocoes.component';
import { TendenciasComponent } from '../../components/home/tendencias/tendencias.component';
import { DestaquesComponent } from '../../components/home/destaques/destaques.component';


const homerotas : Routes = [{
  path: 'home', 
  component: BenvindoComponent,
  children: [
    { path: 'fale-conosco', component: FaleConoscoComponent },
    { path: 'sobre-nos', component: SobreNosComponent },
    { path: 'contate-nos', component: ContatoComponent },
    { path: 'mais-vendendo', component: MaisVendidosComponent },
    { path: 'promocoes', component: PromocoesComponent },
    { path: 'tendencias', component: TendenciasComponent },
    { path: 'destaques', component: DestaquesComponent },
  ]
}];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(homerotas)
  ],
  exports:[
    RouterModule
  ]
})
export class HomeRotasModule { }
