import { Component } from '@angular/core';
import { pelicula } from '../_Modules/pelicula';
import { PictureKingdomService } from '../picture-kingdom.service';

@Component({
  selector: 'app-cartelera',
  templateUrl: './cartelera.component.html',
  styleUrls: ['./cartelera.component.css']
})
export class CarteleraComponent {
  peliculas: pelicula[] = []
  ide:number = 0
  constructor(private peliculasS:PictureKingdomService){
    this.peliculas = peliculasS.getPeliculas()
  }
  pelicula :pelicula= new pelicula(0,"","","","",0,"",0,"")

  ngOnInit(){
    this.pelicula=this.peliculas[this.ide]
  }
}
