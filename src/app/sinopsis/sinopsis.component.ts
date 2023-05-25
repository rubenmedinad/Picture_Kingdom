import { Component } from '@angular/core';
import { Peliculas } from '../_Modules/Peliculas';
import { PictureKingdomService } from '../picture-kingdom.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Ventas } from '../_Modules/Ventas';

@Component({
  selector: 'app-sinopsis',
  templateUrl: './sinopsis.component.html',
  styleUrls: ['./sinopsis.component.css']
})
export class SinopsisComponent {
  peliculas: Peliculas[] = [];
  ide: number = 0;
  pelicula: Peliculas = new Peliculas(0, "", "", "", "", "", "", "", "");
  diasPeliculas: number[] = [];
  horariosPorDia: { [key: number]: string[] } = {};
  diaSeleccionado: number = 0;
  horaSeleccionada: string = '';


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
    this.peliculasS.vaciarVentas();
    this.generarFechas();
  }



  generarFechas() {
    const fechaActual = new Date();
    this.diasPeliculas = Array.from({ length: 6 }, (_, i) => i);

    const opcionesFecha = { weekday: 'short', month: 'long', day: 'numeric' };

    this.horariosPorDia = {
      0: ["16:00 PM", "17:00 PM", "18:00 PM", "20:00 PM", "22:00 PM", "24:00 PM"],
      1: ["17:00 AM", "18:00 PM", "19:00 PM", "20:00 PM"],
      2: ["17:00 AM", "19:00 PM", "20:00 PM", "21:00 PM"],
      3: ["16:00 AM", "18:00 PM", "20:00 PM"],
      4: ["18:00 PM", "20:00 PM", "22:00 PM"],
      5: ["16:00 AM", "18:00 PM", "20:00 PM", "22:00 PM", "24:00 PM"]
    };
  }

  cambiarDiaSeleccionado(dia: number) {
    
    this.diaSeleccionado = dia;

  }

  getHorariosPorDia(dia: number): string[] {

    return this.horariosPorDia[dia] || [];
  }
  obtenerHorariosPorDiaString(dia: number): string {
    const horarios = this.getHorariosPorDia(dia);
    return horarios.join(', ');
  }



  obtenerFechaActual(dia: number): string {
    const fechaActual = new Date();
    fechaActual.setDate(fechaActual.getDate() + dia);
    const opcionesFecha: Intl.DateTimeFormatOptions = {
      weekday: 'short',
      month: 'long',
      day: 'numeric'
    };
    return fechaActual.toLocaleDateString('es-ES', opcionesFecha);
  }



ActualizarArray(hora: string){
  this.horaSeleccionada = hora;
  this.peliculasS.rellenarVentas({PeliculaID:this.ide})
  this.peliculasS.rellenarVentas({ HoraID: this.horaSeleccionada });
  this.peliculasS.rellenarVentas({DiaID:this.obtenerFechaActual(this.diaSeleccionado)})
}



}
