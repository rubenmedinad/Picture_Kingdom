import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CarteleraComponent } from './cartelera/cartelera.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cartelera', component: CarteleraComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
