import { Component } from '@angular/core';
import { Peliculas } from '../_Modules/Peliculas';
import { PictureKingdomService } from '../picture-kingdom.service';

@Component({
  selector: 'app-cartelera',
  templateUrl: './cartelera.component.html',
  styleUrls: ['./cartelera.component.css']
})
export class CarteleraComponent {
  peliculas: Peliculas[] = []
  ide:number = 0
  constructor(private peliculasS:PictureKingdomService){
    this.peliculas = peliculasS.getPeliculas()
  }
  pelicula :Peliculas= new Peliculas(0,"","","","","","","","")

  ngOnInit(){
    this.pelicula=this.peliculas[this.ide]
  }
}
