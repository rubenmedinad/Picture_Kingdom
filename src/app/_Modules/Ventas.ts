import { Asientos } from "./Asientos";
import { Horarios } from "./Horarios";
import { Peliculas } from "./Peliculas";
import { Usuarios } from "./Usuarios";
import { Sala } from "./Salas";

export class Ventas {
  ventaId: number;
  peliculaId: Peliculas;
  asientoId: Asientos;
  salaId: Sala;
  usuarioId: Usuarios;
  horarioId: Horarios;
  fechaventa:number;
  precio:number;
  tipo_entrada:String;


  constructor(
    ventaId: number,
    peliculaId: Peliculas,
    asientoId: Asientos,
    salaId: Sala,
    usuarioId: Usuarios,
    horarioId: Horarios,
    fechaventa: number,
    precio: number,
    tipo_entrada:String
  ) {
    this.ventaId = ventaId;
    this.peliculaId = peliculaId;
    this.asientoId = asientoId;
    this.salaId = salaId;
    this.usuarioId = usuarioId;
    this.horarioId = horarioId;
    this.fechaventa = fechaventa,
    this.precio = precio,
    this.tipo_entrada=tipo_entrada

}
}


