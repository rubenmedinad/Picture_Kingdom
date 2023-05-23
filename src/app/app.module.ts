import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CarteleraComponent } from './cartelera/cartelera.component';
import { OfertasEspecialesComponent } from './ofertas-especiales/ofertas-especiales.component';
import { Promocion1Component } from './promocion1/promocion1.component';
import { Promocion2Component } from './promocion2/promocion2.component';
import { Promocion3Component } from './promocion3/promocion3.component';
import { SinopsisComponent } from './sinopsis/sinopsis.component';
import { AsientosComponent } from './asientos/asientos.component';
import { MetodospagoComponent } from './metodospago/metodospago.component';
import { MenuComprasComponent } from './menu-compras/menu-compras.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { CompraofertasComponent } from './compraofertas/compraofertas.component';
import { PagotarjetaComponent } from './pagotarjeta/pagotarjeta.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CarteleraComponent,
    SinopsisComponent,
    OfertasEspecialesComponent,
    Promocion1Component,
    Promocion2Component,
    Promocion3Component,
    AsientosComponent,
    MenuComprasComponent,
    MetodospagoComponent,
    CompraofertasComponent,
    PagotarjetaComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    ReactiveFormsModule,
    FormsModule,
    BsDatepickerModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
