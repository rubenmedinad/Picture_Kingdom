import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PictureKingdomService {
  menuItems = [
    { name: 'Home', route: '/' },
    { name: 'About', route: '/about' },
    { name: 'Contact', route: '/contact' }
  ];
    constructor() { }
}
