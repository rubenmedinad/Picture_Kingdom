import { Component, OnInit } from '@angular/core';
import { Peliculas } from '../_Modules/Peliculas';
import { PictureKingdomService } from '../picture-kingdom.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Ventas } from '../_Modules/Ventas';
import { BasedeDatosService } from '../basede-datos.service';
import { Horarios } from '../_Modules/Horarios';
import { Dias } from '../_Modules/Dias';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sinopsis',
  templateUrl: './sinopsis.component.html',
  styleUrls: ['./sinopsis.component.css']
})
export class SinopsisComponent {
  peliculas: Peliculas[] = [];
  ide: number = 0;
  pelicula: Peliculas = new Peliculas(0, "", "", "", "", "", "", "");
  diasPeliculas: number[] = [];
  horariosPorDia: Horarios[]  = [];
  diaSeleccionado: number = 0;
  horaSeleccionada: number = 0;
  salaSeleccionada:any []=[];
  dias: Dias []= [];

  constructor(
    private peliculasS: PictureKingdomService,
    private activarrutas: ActivatedRoute,
    private rutes: Router,
    private servicio: BasedeDatosService
  ) {
  }
  ngOnInit() {
    this.ide = this.activarrutas.snapshot.params['id'];
    console.log("esto"+this.ide)
    this.servicio.listarpeliculas().subscribe(datos => {
      this.peliculas = datos;
      const peliculaEncontrada = this.peliculas.filter(pelicula => pelicula.id == +this.ide);
      if (peliculaEncontrada.length > 0) {
        this.pelicula = peliculaEncontrada[0];
        this.peliculasS.vaciarVentas();
        console.log(this.ide);
        this.peliculasS.rellenarVentas(this.ide)
      }
    });
    this.servicio.listardiass().subscribe(datos => {
      this.dias = datos;
    })
  }
  obtenerIdDiaSeleccionado(dii:number): void {
    this.diaSeleccionado=dii
    this.servicio.obtenerPorPeliculaYDia(this.ide,this.diaSeleccionado).subscribe(datos => {
      this.horariosPorDia = datos;

    })
  }
  obtenerHorario(hora:number,sala:any): void {
    this.horaSeleccionada=hora
    console.log(sala.nombre)
    this.salaSeleccionada=sala.salaid;
    console.log(this.salaSeleccionada)

  }
  actualizararray(): void {
    this.peliculasS.rellenarVentas(this.diaSeleccionado)
    this.peliculasS.rellenarVentas(this.horaSeleccionada)
    this.peliculasS.rellenarVentas(this.salaSeleccionada)
  }
}
