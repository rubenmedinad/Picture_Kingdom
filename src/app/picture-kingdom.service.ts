import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PictureKingdomService {
  menuItems = [
    { name: 'Inicio', route: '/' },
    { name: 'Cartelera', route: '/cartelera' },
    { name: 'Contact', route: '/contact' }
  ];
    constructor() { }
}
