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
    { name: 'Cartelera', route: '/cartelera' }

  ];

  entradas: any[] = [
    { nombreEntrada: 'Normal', precio: 8.90, numero: 0 },
    { nombreEntrada: 'Abono Joven', precio: 6.50, numero: 0 },
    { nombreEntrada: 'Familia Numerosa', precio: 6.50, numero: 0 }
  ];

  pelis = [
    { titulo: 'Inicio', route: '/' },
    { name: 'Cartelera', route: '/cartelera' },
    { name: 'Contact', route: '/conñtact' }
  ];

  ventas: any[] = [];

  objetos:any[]=[];

  venta_ofertas: any[] = [];

  peliculas: Peliculas[] = [];

  offers = [
    { id: 1, name: "¡BLACK FRIDAY EN PICTURE KINGDOM!", image: '../assets/BANNER-PDF-ENTRADA-BLACK-FRIDAY.jpg', price: "9.99" },
    { id: 2, name: "¡Únete al Reino VIP de Picture Kingdom!", image: '../assets/bannner-promo1.jpg', price: "19.99" },
    { id: 3, name: "¡Consigue una entrada al cine al comprar paquetes de Popitas!", image: '../assets/venta_fb.jpg', price: "14.99" }
  ];

  imagenSeleccionada: string = '';

  getOffers(): any[] {
    return this.offers;
  }

  getPeliculas(): Peliculas[] {
    return this.peliculas;
  }

  rellenarVentas(params: any) {
    this.ventas.push(params);
  }
  rellenarObjetos(params: any) {
    this.objetos.push(params);
  }
  rellenarVenta_Ofertas(params: any) {
    this.venta_ofertas.push(params);
  }

  getVenta_Ofertas(): any[] {
    return this.venta_ofertas;
  }
  obtenerVentas(): any[] {
    return this.ventas;
  }
  obtenerObjetos(): any[] {
    return this.objetos;
  }

  vaciarVentas() {
    this.ventas = [];
  }
  vaciarObjetos(){
    this.objetos=[]
  }

  eliminarUltimoElemento(exceso: number): void {
    this.ventas.splice(exceso);
  }
  eliminarUltimoElementoObjetos(exceso: number): void {
    this.ventas.splice(exceso);
  }

  getImagenSeleccionada(imagenSeleccionada: string): void {
    this.imagenSeleccionada = imagenSeleccionada;
  }

  constructor( ) { }

}
