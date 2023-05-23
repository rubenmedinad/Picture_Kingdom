import { Component } from '@angular/core';
import { Peliculas } from '../_Modules/Peliculas';
import { PictureKingdomService } from '../picture-kingdom.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  peliculas: Peliculas[] = []
  ide:number = 0
  constructor(private peliculasS:PictureKingdomService){
    this.peliculas = peliculasS.getPeliculas()
  }
  pelicula :Peliculas= new Peliculas(0,"","","","","","","","")

  ngOnInit(){
    this.pelicula=this.peliculas[this.ide-1]
  }

}
