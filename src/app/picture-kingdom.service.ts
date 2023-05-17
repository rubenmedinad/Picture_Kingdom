import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PictureKingdomService {
  menuItems = [
    { name: 'Inicio', route: '/' },
    { name: 'Cartelera', route: '/cartelera' },
    { name: 'asientos', route: '/asientos' }
  ];
  pelis = [
    { titulo  : 'Inicio', route: '/' },
    { name: 'Cartelera', route: '/cartelera' },
    { name: 'Contact', route: '/contact' }
  ];
  ofertas: any[] = [
    { nombre: 'BF', imagen: 'BANNER-PDF-ENTRADA-BLACK-FRIDAY.jpg', descripcion: '¡No te pierdas nuestras ofertas exclusivas para el Black Friday en PICTURE KINGDOM! Ven y descubre descuentos increíbles en toda la tienda.', precio: 10 },
    { nombre: 'GuardianesOferta', imagen: 'bannner-promo1.jpg', descripcion: 'Aprovecha nuestra promoción exclusiva en productos electrónicos. Ahorra en smartphones, laptops, y mucho más. ¡No te lo pierdas!', precio: 20 },
    { nombre: 'PKVIP', imagen: 'venta_fb.jpg', descripcion: 'No te pierdas nuestra gran liquidación de temporada con descuentos de hasta un 70%. Encuentra las mejores ofertas en moda, calzado y accesorios.', precio: 30 },
  ];
  getOfertas(): any[] {
    return this.ofertas;
  }

    constructor() { }
}
