import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FootbarComponent } from './shared/footbar/footbar.component';
import { LoginComponent } from './conponents/login/login.component';
import { RegistroComponent } from './conponents/registro/registro.component';
import { CotizadorComponent } from './conponents/cotizador/cotizador.component';
import { ContratoComponent } from './conponents/contrato/contrato.component';
import { PerfilComponent } from './conponents/perfil/perfil.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FootbarComponent,
    LoginComponent,
    RegistroComponent,
    CotizadorComponent,
    ContratoComponent,
    PerfilComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
