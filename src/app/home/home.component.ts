import { Component } from '@angular/core';
import { Peliculas } from '../_Modules/Peliculas';
import { PictureKingdomService } from '../picture-kingdom.service';
import { BasedeDatosService } from '../basede-datos.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  peliculas: Peliculas[] = []
  ide:number = 0
  constructor(private peliculasS:PictureKingdomService, private servicio : BasedeDatosService){

  }
  pelicula :Peliculas= new Peliculas(0,"","","","","","","")

  ngOnInit(){
    this.servicio.listarpeliculas().subscribe(datos => this.peliculas=datos);
    this.pelicula=this.peliculas[this.ide-1]
  }

}
