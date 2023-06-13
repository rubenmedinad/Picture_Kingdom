import { Component } from '@angular/core';
import { Peliculas } from '../_Modules/Peliculas';
import { PictureKingdomService } from '../picture-kingdom.service';
import { BasedeDatosService } from '../basede-datos.service';

@Component({
  selector: 'app-cartelera',
  templateUrl: './cartelera.component.html',
  styleUrls: ['./cartelera.component.css']
})
export class CarteleraComponent {
  peliculas: Peliculas[] = []
  ide:number = 0
  constructor(private servicio:BasedeDatosService){

  }
  ngOnInit(){
    this.servicio.listarpeliculas().subscribe(datos => this.peliculas=datos);

  }
}
