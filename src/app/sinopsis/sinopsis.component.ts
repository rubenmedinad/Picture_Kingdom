import { Component } from '@angular/core';
import { pelicula } from '../_Modules/pelicula';
import { PictureKingdomService } from '../picture-kingdom.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-sinopsis',
  templateUrl: './sinopsis.component.html',
  styleUrls: ['./sinopsis.component.css']
})
export class SinopsisComponent {
  peliculas: pelicula[] = []
  ide:number = 0
  constructor(private peliculasS:PictureKingdomService, private activarrutas: ActivatedRoute,
    private rutes: Router){
    this.peliculas = peliculasS.getPeliculas()
  }
  pelicula :pelicula= new pelicula(0,"","","","",0,"",0,"")

  ngOnInit(){
    this.activarrutas.params.subscribe(data => {
      this.ide = data['id'];
    })
    this.pelicula=this.peliculas[this.ide-1]
  }

}
