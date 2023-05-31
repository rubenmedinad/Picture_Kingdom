import { Injectable } from '@angular/core';
import { Peliculas } from './_Modules/Peliculas';
import { EditarperfilComponent } from './editarperfil/editarperfil.component';
import {Ventas} from './_Modules/Ventas';
import { BasedeDatosService } from './basede-datos.service';

@Injectable({
  providedIn: 'root'
})
export class PictureKingdomService {

  menuItems = [
    { name: 'Inicio', route: '/' },
    { name: 'Cartelera', route: '/cartelera' },
    { name: 'Perfil', route: '/editarperfil' }

  ];
  entradas: any[] = [
    { nombreEntrada: 'Normal', precio: 8.90, numero: 0 },
    { nombreEntrada: 'Abono Joven', precio: 6.50, numero: 0 },
    { nombreEntrada: 'Familia Numerosa', precio: 6.50, numero: 0 }

  ];
  pelis = [
    { titulo  : 'Inicio', route: '/' },
    { name: 'Cartelera', route: '/cartelera' },
    { name: 'Contact', route: '/contact' }
  ];
  ventas:any[] = []

  peliculas: Peliculas[] = [];

  offers = [
    { id: 1, name: "¡BLACK FRIDAY EN PICTURE KINGDOM!", image: '../assets/BANNER-PDF-ENTRADA-BLACK-FRIDAY.jpg', price: "9.99" },
    { id: 2, name: "¡Únete al Reino VIP de Picture Kingdom!", image: '../assets/bannner-promo1.jpg', price: "19.99" },
    { id: 3, name: "¡Consigue una entrada al cine al comprar paquetes de Popitas!", image: '../assets/venta_fb.jpg', price: "14.99" }
  ];

  getOffers(): any[] {
    return this.offers;
  }
  getPeliculas():Peliculas[] {
    return this.peliculas
  }
  rellenarVentas(params: any) {
    this.ventas.push(params);
  }

  obtenerVentas(): any[] {
    return this.ventas;
  }
  vaciarVentas() {
    this.ventas = [];
  }
  eliminarUltimoElemento(exceso: number): void {

      this.ventas.splice(exceso);
  }

  constructor( ) { }

}
