import { Component, OnInit } from '@angular/core';
import { Peliculas } from '../_Modules/Peliculas';
import { PictureKingdomService } from '../picture-kingdom.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Ventas } from '../_Modules/Ventas';
import { BasedeDatosService } from '../basede-datos.service';
import { Horarios } from '../_Modules/Horarios';

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
  horariosPorDia: { [key: number]: Horarios[] } = {};
  diaSeleccionado: number = 0;
  horaSeleccionada: string = '';


  constructor(
    private peliculasS: PictureKingdomService,
    private activarrutas: ActivatedRoute,
    private rutes: Router,
    private servicio: BasedeDatosService
  ) {
  }
  ngOnInit() {
    this.ide = this.activarrutas.snapshot.params['id'];
    this.servicio.listarpeliculas().subscribe(datos => {
      this.peliculas = datos;
      const peliculaEncontrada = this.peliculas.filter(pelicula => pelicula.id === +this.ide);
      if (peliculaEncontrada.length > 0) {
        this.pelicula = peliculaEncontrada[0];
        this.peliculasS.vaciarVentas();
        this.generarFechas();
        console.log(this.ide);
      } else {
        // Aquí puedes manejar el caso de que no se encuentre ninguna película con el ID proporcionado.
      }
    });
  }

  generarFechas() {
    const fechaActual = new Date();
    this.diasPeliculas = Array.from({ length: 6 }, (_, i) => i);
  
    this.servicio.listarhorarios().subscribe((horarios: Horarios[]) => {
      this.horariosPorDia = horarios.reduce((acumulador: { [key: number]: Horarios[] }, horario: Horarios) => {
        if (!acumulador[horario.diaid]) {
          acumulador[horario.diaid] = [];
        }
        acumulador[horario.diaid].push(horario);
        return acumulador;
      }, {});
    });
  }
  
  

  cambiarDiaSeleccionado(dia: number) {
    this.diaSeleccionado = dia;
  }

  getHorariosPorDia(dia: number): Horarios[] {
    return this.horariosPorDia[dia] || [];
  }

  obtenerHorariosPorDiaString(dia: number): string {
    const horarios = this.getHorariosPorDia(dia);
    return horarios.map(horario => horario.hora_inicio).join(', ');
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

  ActualizarArray(hora: Horarios) {
    this.horaSeleccionada = hora.hora_inicio;
    this.peliculasS.rellenarVentas({ PeliculaID: this.ide });
    this.peliculasS.rellenarVentas({ DiaID: this.obtenerFechaActual(this.diaSeleccionado) });
    this.peliculasS.rellenarVentas({ HoraID: this.horaSeleccionada });
  }
}