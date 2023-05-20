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
  peliculas: pelicula[] = [];
  ide: number = 0;
  pelicula: pelicula = new pelicula(0, "", "", "", "", "", "", "", "");
  DiasPeliculas: string[] = ["Hoy", "Lun 1 May", "Mar 2 May", "Mié 3 May", "Jue 4 May", "Vie 5 May"];
  HorariosPorDia: { [key: string]: string[] } = {
    "Hoy": ["16:00 PM", "17:00 PM", "18:00 PM", "20:00 PM", "22:00 PM", "24:00 PM"],
    "Lun 1 May": ["10:00 AM", "12:00 PM", "14:00 PM", "16:00 PM"],
    "Mar 2 May": ["11:00 AM", "13:00 PM", "15:00 PM", "17:00 PM"],
    "Mié 3 May": ["09:00 AM", "12:00 PM", "15:00 PM"],
    "Jue 4 May": ["14:00 PM", "16:00 PM", "18:00 PM"],
    "Vie 5 May": ["10:00 AM", "12:00 PM", "14:00 PM", "16:00 PM", "18:00 PM"]
  };
  diaSeleccionado: string = "";

  constructor(
    private peliculasS: PictureKingdomService,
    private activarrutas: ActivatedRoute,
    private rutes: Router
  ) {
    this.peliculas = peliculasS.getPeliculas();
  }

  ngOnInit() {
    this.activarrutas.params.subscribe(data => {
      this.ide = data['id'];
    });
    this.pelicula = this.peliculas[this.ide - 1];
  }

  cambiarDiaSeleccionado(dia: string) {
    this.diaSeleccionado = dia;
  }

  getHorariosPorDia(dia: string): string[] {
    return this.HorariosPorDia[dia] || [];
  }
}
