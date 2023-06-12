import { Asientos } from "./Asientos";
import { Dias } from "./Dias";
import { Horarios } from "./Horarios";
import { Peliculas } from "./Peliculas";
import { Sala } from "./Salas";

export class Ventas {
  ventaid?: number;
  peliculaid: Peliculas;
  asientoid: Asientos;
  salaid: Sala;
  usuario: string;
  horarioid: Horarios;
  diaid:Dias;
  fechaventa:string;
  precio:number;
  tipo_entrada:String;


  constructor(
    ventaId: number | null, // Indicar que ventaId puede ser null
    peliculaId: Peliculas,
    asientoId: Asientos,
    salaId: Sala,
    usuario: string,
    horarioId: Horarios,
    diaid: Dias,
    fechaventa: string,
    precio: number,
    tipo_entrada: String
      ) {
      if (ventaId !== null) { // Validar si ventaId no es null antes de asignarlo
          this.ventaid = ventaId;
      }
      this.peliculaid = peliculaId;
      this.asientoid = asientoId;
      this.salaid = salaId;
      this.usuario = usuario;
      this.horarioid = horarioId;
      this.diaid = diaid;
      this.fechaventa = fechaventa;
      this.precio = precio;
      this.tipo_entrada = tipo_entrada;
  }
}


