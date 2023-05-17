import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CarteleraComponent } from './cartelera/cartelera.component';
import { OfertasEspecialesComponent } from './ofertas-especiales/ofertas-especiales.component';
import { SinopsisComponent } from './sinopsis/sinopsis.component';
import { AsientosComponent } from './asientos/asientos.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cartelera', component: CarteleraComponent },
  { path: 'ofertas', component: OfertasEspecialesComponent },
  { path: 'sinopsis/:id', component: SinopsisComponent },
  { path: 'asientos', component: AsientosComponent }

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
