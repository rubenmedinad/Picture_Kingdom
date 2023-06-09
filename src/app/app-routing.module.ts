import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CarteleraComponent } from './cartelera/cartelera.component';
import { OfertasEspecialesComponent } from './ofertas-especiales/ofertas-especiales.component';
import { SinopsisComponent } from './sinopsis/sinopsis.component';
import { AsientosComponent } from './asientos/asientos.component';
import { Promocion1Component } from './promocion1/promocion1.component';
import { Promocion2Component } from './promocion2/promocion2.component';
import { Promocion3Component } from './promocion3/promocion3.component';
import { MetodospagoComponent } from './metodospago/metodospago.component';
import { CompraofertasComponent } from './compraofertas/compraofertas.component';
import { PagotarjetaComponent } from './pagotarjeta/pagotarjeta.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { FinalizarCompraComponent } from './finalizar-compra/finalizar-compra.component';
import { EditarperfilComponent } from './editarperfil/editarperfil.component';
import { FinalizarCompraOfertasComponent } from './finalizar-compra-ofertas/finalizar-compra-ofertas.component';


import { PerfilComponent } from './perfil/perfil.component';
import { MisentradasComponent } from './misentradas/misentradas.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cartelera', component: CarteleraComponent },
  { path: 'ofertas', component: OfertasEspecialesComponent },
  { path: 'asientos', component: AsientosComponent },
  { path: 'promocion1', component: Promocion1Component },
  { path: 'promocion2', component: Promocion2Component },
  { path: 'promocion3', component: Promocion3Component },
  { path: 'tarjeta/:cantidadAsientos/:calcularTotalGeneral', component: PagotarjetaComponent },
  { path: 'sinopsis/:id', component: SinopsisComponent },
  { path: 'finalizar-compra-ofertas', component: FinalizarCompraOfertasComponent },
  { path: 'metodos/:cantidadAsientos', component: MetodospagoComponent },
  { path: 'compraofertas/:id/:name/:image', component: CompraofertasComponent },
  { path: 'login',component:LoginComponent},
  { path: 'finalizar', component: FinalizarCompraComponent },
  { path: 'registro',component:RegistroComponent},
  { path: 'registro',component:RegistroComponent},
  { path: 'editarperfil',component:EditarperfilComponent},
  { path: 'perfil', component:PerfilComponent},
  { path: 'misentradas', component:MisentradasComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
