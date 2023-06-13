import { Component, OnInit } from '@angular/core';
import { Peliculas } from '../_Modules/Peliculas';
import { PictureKingdomService } from '../picture-kingdom.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Ventas } from '../_Modules/Ventas';
import { BasedeDatosService } from '../basede-datos.service';
import { Horarios } from '../_Modules/Horarios';
import { Dias } from '../_Modules/Dias';
import { Observable } from 'rxjs';
import { Sala } from '../_Modules/Salas';

@Component({
  selector: 'app-sinopsis',
  templateUrl: './sinopsis.component.html',
  styleUrls: ['./sinopsis.component.css']
})
export class SinopsisComponent {
  peliculas: Peliculas[] = [];
  ide: number = 0;
  pelicula: Peliculas = new Peliculas(0, "", "", "", "", "", "", "");
  dia:Dias = new Dias(0,"")
  sala:Sala = new Sala(0,"","");
  horario:Horarios = new Horarios(0,this.pelicula,this.sala,this.dia,"")
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
    this.servicio.listarpeliculas().subscribe(datos => {
      this.peliculas = datos;
      const peliculaEncontrada = this.peliculas.filter(pelicula => pelicula.id == +this.ide);
      if (peliculaEncontrada.length > 0) {
        this.pelicula = peliculaEncontrada[0];
        this.peliculasS.vaciarVentas();
        this.peliculasS.vaciarObjetos();
        this.peliculasS.rellenarVentas(this.ide)
        this.peliculasS.rellenarObjetos(this.pelicula)
      }
    });
    this.servicio.listardiass().subscribe(datos => {
      const fechaActual = new Date(); // Obtener la fecha actual
      const diaActual = fechaActual.getDate(); // Obtener el día actual (1-31)
      const diasJunio = datos.filter(dia => +dia.dia.split(',')[1].trim().split(' ')[0] >= diaActual); // Filtrar los días de junio a partir del día actual
      this.dias = diasJunio;
    })
  }
  obtenerIdDiaSeleccionado(dii:number): void {
    this.diaSeleccionado=dii
    this.servicio.obtenerPorPeliculaYDia(this.ide,this.diaSeleccionado).subscribe(datos => {
      this.horariosPorDia = datos;

    })
  }
  rellenarDia(dia:Dias):void{

    this.dia=dia;
  }
  obtenerHorario(hora:number,sala:any): void {
    this.horaSeleccionada=hora
    this.salaSeleccionada=sala.salaid;
  }
  rellenarHorario(h:Horarios,s:Sala): void {
    this.horario=h
    this.sala=s
  }
  actualizararray(): void {
    this.peliculasS.rellenarVentas(this.diaSeleccionado)
    this.peliculasS.rellenarVentas(this.horaSeleccionada)
    this.peliculasS.rellenarVentas(this.salaSeleccionada)
    this.peliculasS.rellenarObjetos(this.dia)
    this.peliculasS.rellenarObjetos(this.sala)
    this.peliculasS.rellenarObjetos(this.horario)
  }
}
