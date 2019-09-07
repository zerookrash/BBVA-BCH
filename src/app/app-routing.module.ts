import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Componentes
import { CotizadorComponent } from './conponents/cotizador/cotizador.component';
import { RegistroComponent } from './conponents/registro/registro.component';
import { ContratoComponent } from './conponents/contrato/contrato.component';
import { LoginComponent } from './conponents/login/login.component';


const routes: Routes = [
  { path: 'cotizador', component: CotizadorComponent },
  { path: 'contratacion', component: ContratoComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: '', redirectTo: 'cotizador', pathMatch: 'full' },
  { path: '**', component: CotizadorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
