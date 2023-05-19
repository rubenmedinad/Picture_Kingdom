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
    {name:'metodos', route:'/metodos'},
    
  ];
  entradas: any[] = [
    { nombreEntrada: 'Entrada 1', precio: 20, numero: 0 },
    { nombreEntrada: 'Entrada 2', precio: 30, numero: 0 },
    { nombreEntrada: 'Entrada 3', precio: 15, numero: 0 }
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
    new pelicula(1, "Super Mario Bros: La película", 'Adaptación de la franquicia de videojuegos Super Mario Bros.', 'Fernando, Manuel', 'Ruben, Ismael', 100, 'COMEDIA, AVENTURA, ANIMACIÓN', 2023, '../assets/mariosinopsis.jpg'),
    new pelicula(2, "Fast and Furious X", 'Sinopsis de Fast and Furious X', 'Director Fast', 'Reparto Fast', 120, 'ACCIÓN', 2022, '../assets/f&fcarrusel.jpg'),
    new pelicula(3, "La sirenita", 'Sinopsis de La sirenita', 'Director de La sirenita', 'Reparto de La sirenita', 110, 'ANIMACIÓN, FANTASÍA', 2023, '../assets/sirenitacarrusel.jpg'),
    new pelicula(4, "Spiderman: Cruzando el Universo", 'Sinopsis de Spiderman: Cruzando el Universo', 'Director de Spiderman', 'Reparto de Spiderman', 115, 'ACCIÓN, AVENTURA, ANIMACIÓN', 2022, '../assets/spiderman.jpg'),
    new pelicula(5, "Guardianes de la Galaxia 3", 'Sinopsis de Guardianes de la Galaxia 3', 'Director de Guardianes de la Galaxia', 'Reparto de Guardianes de la Galaxia', 130, 'ACCIÓN, CIENCIA FICCIÓN', 2023, '../assets/guardianes carrusel.jpg'),
    new pelicula(6, "Asedio", 'Sinopsis de Asedio', 'Director de Asedio', 'Reparto de Asedio', 105, 'ACCIÓN, SUSPENSE', 2022, '../assets/asediocarrusel.jpg'),
    new pelicula(7, "65", 'Sinopsis de 65', 'Director de 65', 'Reparto de 65', 95, 'DRAMA', 2023, '../assets/65carrusel.jpg'),
    new pelicula(8, "Love Again", 'Sinopsis de Love Again', 'Director de Love Again', 'Reparto de Love Again', 120, 'ROMANCE, COMEDIA', 2022, '../assets/loveagaincarrusel.jpg'),
    new pelicula(9, "Vaya Vacaciones", 'Sinopsis de Vaya Vacaciones', 'Director de Vaya Vacaciones', 'Reparto de Vaya Vacaciones', 100, 'COMEDIA', 2023, '../assets/vayavacacionescarrusel.jpg')
  ];
  getPeliculas():pelicula[] {
    return this.peliculas
  }

    constructor() { }
}
