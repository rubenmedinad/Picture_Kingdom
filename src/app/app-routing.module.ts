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
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cartelera', component: CarteleraComponent },
  { path: 'ofertas', component: OfertasEspecialesComponent },
  { path: 'asientos', component: AsientosComponent },
  { path: 'promocion1', component: Promocion1Component },
  { path: 'promocion2', component: Promocion2Component },
  { path: 'promocion3', component: Promocion3Component },
  { path: 'sinopsis/:id', component: SinopsisComponent },
  { path: 'metodos', component: MetodospagoComponent },
  { path: 'asientos', component: AsientosComponent }

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
