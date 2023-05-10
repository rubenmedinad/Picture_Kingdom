import { Injectable } from '@angular/core';
import { pelicula } from './modulo/pelicula';

@Injectable({
  providedIn: 'root'
})
export class PictureKingdomService {
  menuItems = [
    { name: 'Inicio', route: '/' },
    { name: 'Cartelera', route: '/cartelera' },
    { name: 'Contact', route: '/contact' },
    { name: 'Sinopsis', route: '/sinopsis' }
  ];
    constructor() { }
    peliculas: pelicula[] = [
      new pelicula( 1,"MARIO", 'Sinopsis de la Película 1.', 'director 1','reparto 1', 100,  'genero 1',  1990,'../assets/mariosinopsis.jpg'),
      new pelicula( 2,"Película 2", 'Sinopsis de la Película 1.', 'director 1','reparto 1', 100,  'genero 1',  1990,'../assets/mariosinopsis.jpg'),
      new pelicula( 3,"Película 3", 'Sinopsis de la Película 1.', 'director 1','reparto 1', 100,  'genero 1',  1990,'../assets/mariosinopsis.jpg'),
      new pelicula( 4,"Película 4", 'Sinopsis de la Película 1.', 'director 1','reparto 1', 100,  'genero 1',  1990,'../assets/mariosinopsis.jpg'),
      new pelicula( 5,"Película 5", 'Sinopsis de la Película 1.', 'director 1','reparto 1', 100,  'genero 1',  1990,'../assets/mariosinopsis.jpg'),
      new pelicula( 6,"Película 6", 'Sinopsis de la Película 1.', 'director 1','reparto 1', 100,  'genero 1',  1990,'../assets/mariosinopsis.jpg'),
    ];
    getPeliculas():pelicula[] {
      return this.peliculas
    }
}
