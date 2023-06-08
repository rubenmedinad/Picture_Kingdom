import { Dias } from "./Dias";
import { Horarios } from "./Horarios";
import { Peliculas } from "./Peliculas";
import { Sala } from "./Salas";

export class Asientos {
  asientoid: number;
  salaid: Sala;
  peliculaid: Peliculas;
  horarioid: Horarios;
  diaid: Dias;
  letra_fila: string;
  num_asiento: number;
  ocupado: boolean;

  constructor(
    asientoid: number,
    salaid: Sala,
    peliculaid: Peliculas,
    horarioid: Horarios,
    diaid: Dias,
    letra_fila: string,
    num_asiento: number,
    ocupado: boolean
  ) {
    this.asientoid = asientoid;
    this.salaid = salaid;
    this.peliculaid = peliculaid;
    this.horarioid = horarioid;
    this.diaid = diaid;
    this.letra_fila = letra_fila;
    this.num_asiento = num_asiento;
    this.ocupado = ocupado;
  }
}
