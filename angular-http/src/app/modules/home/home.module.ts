import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { BenvindoComponent } from './components/home/benvindo/benvindo.component';
import { PromocoesComponent } from './components/home/promocoes/promocoes.component';
import { SobreNosComponent } from './components/home/sobre-nos/sobre-nos.component';
import { ContatoComponent } from './components/home/contato/contato.component';
import { HomeRotasModule } from './routes/home-rotas/home-rotas.module';

@NgModule({
  declarations: [
    HomeComponent,
    BenvindoComponent,
    PromocoesComponent,
    SobreNosComponent,
    ContatoComponent
],
  imports: [
    CommonModule,
    HomeRotasModule
 ]
})
export class HomeModule { }
