import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule}  from '@angular/common/http';
import { FormsModule  } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutinModuleModule } from './routing/app-routin-module/app-routin-module.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { CarrosModule } from './modules/carros/carros.module';
import { ProdutosModule } from './modules/produtos/produtos.module';
import { HomeModule } from './modules/home/home.module';
import { LayoutModule } from './modules/layout/layout.module';
import { TooltipModule } from 'ng2-tooltip-directive';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutinModuleModule,
    CarrosModule,
    ProdutosModule,
    HomeModule,
    LayoutModule,
    BrowserAnimationsModule,
    DialogModule,
    ButtonModule,
    TooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
