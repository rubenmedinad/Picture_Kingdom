import { Component, OnInit } from '@angular/core';
import { Peliculas } from '../_Modules/Peliculas';
import { PictureKingdomService } from '../picture-kingdom.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Ventas } from '../_Modules/Ventas';
import { BasedeDatosService } from '../basede-datos.service';
import { Horarios } from '../_Modules/Horarios';
import { Dias } from '../_Modules/Dias';

@Component({
  selector: 'app-sinopsis',
  templateUrl: './sinopsis.component.html',
  styleUrls: ['./sinopsis.component.css']
})
export class SinopsisComponent {
  peliculas: Peliculas[] = [];
  ide: number = 0;
  pelicula: Peliculas = new Peliculas(0, "", "", "", "", "", "", "", "");
  dias: Dias[] = [];
  horarios: Horarios[]  = [];
  diaSeleccionado: number = 0;
  horaSeleccionada: string = '';

  constructor(
    private peliculasS: PictureKingdomService,
    private activarrutas: ActivatedRoute,
    private rutes: Router,
    private servicio: BasedeDatosService
  ) {}

  ngOnInit() {
    this.ide = this.activarrutas.snapshot.params['id'];
    this.servicio.listarpeliculas().subscribe(datos => {
      this.peliculas = datos;
      const peliculaEncontrada = this.peliculas.filter(pelicula => pelicula.id === +this.ide);
      if (peliculaEncontrada.length > 0) {
        this.pelicula = peliculaEncontrada[0];
        this.peliculasS.vaciarVentas();

      }
    });
    this.servicio.listardiass().subscribe(datos => { this.dias = [datos]; });

    this.servicio.listarhorarios().subscribe(datos => {
      this.horarios = datos;
    });
   
  }
  seleccionarDia(dia: number) {
    this.diaSeleccionado = dia;
    console.log(dia);
  }
  getHorariosPorDia(): Horarios[] {
    return this.horarios.filter(horario => horario.diaid === this.diaSeleccionado);
  }
  
}