import { Component } from '@angular/core';
import { pelicula } from '../_Modules/pelicula';
import { PictureKingdomService } from '../picture-kingdom.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  peliculas: pelicula[] = []
  ide:number = 0
  constructor(private peliculasS:PictureKingdomService){
    this.peliculas = peliculasS.getPeliculas()
  }
  pelicula :pelicula= new pelicula(0,"","","","","","","","")

  ngOnInit(){
    this.pelicula=this.peliculas[this.ide-1]
  }

}
