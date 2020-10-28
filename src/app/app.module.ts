import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './app/home/home.component';
import { AtaqueComponent } from './app/ataque/ataque.component';
import { CadastroComponent } from './app/cadastro/cadastro.component';
import { SharedModule } from './shared/shared.module';
import { FieldDirective } from './field.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AtaqueComponent,
    CadastroComponent,
    FieldDirective,
  ],
  imports: [
    BrowserModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
