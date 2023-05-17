import { Injectable } from '@angular/core';
import { pelicula } from './_Modules/pelicula';
@Injectable({
  providedIn: 'root'
})
export class PictureKingdomService {
  menuItems = [
    { name: 'Inicio', route: '/' },
    { name: 'Cartelera', route: '/cartelera' },
    { name: 'asientos', route: '/asientos' },
    { name: 'sinopsi', route: '/sinopsis' },
  
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
  peliculas: pelicula[] = [
    new pelicula( 1,"Super Mario Bros: La película", 'Adaptación de la franquicia de videojuegos Super Mario Bros.', 'Fernando, Manuel','Ruben, Ismael', 100,  'COMEDIA, AVENTURA, ANIMACIÓN', 2023 ,'../assets/mariosinopsis.jpg'),
    new pelicula( 2,"Película 2", 'Sinopsis de la Película 1.', 'director 1','reparto 1', 100,  'genero 1',  1990,'../assets/mariosinopsis.jpg'),
    new pelicula( 3,"Película 3", 'Sinopsis de la Película 1.', 'director 1','reparto 1', 100,  'genero 1',  1990,'../assets/mariosinopsis.jpg'),
    new pelicula( 4,"Película 4", 'Sinopsis de la Película 1.', 'director 1','reparto 1', 100,  'genero 1',  1990,'../assets/mariosinopsis.jpg'),
    new pelicula( 5,"Película 5", 'Sinopsis de la Película 1.', 'director 1','reparto 1', 100,  'genero 1',  1990,'../assets/mariosinopsis.jpg'),
    new pelicula( 6,"Película 6", 'Sinopsis de la Película 1.', 'director 1','reparto 1', 100,  'genero 1',  1990,'../assets/mariosinopsis.jpg'),
  ];
  getPeliculas():pelicula[] {
    return this.peliculas
  }

    constructor() { }
}
