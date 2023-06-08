import { Dias } from "./Dias";
import { Peliculas } from "./Peliculas";
import { Sala } from "./Salas";

export class Horarios {
    horarioid: number;
    peliculaid: Peliculas;
    salaid: Sala;
    diaid: Dias;
    hora_inicio: string;

    constructor(
      horarioid: number,
      peliculaid: Peliculas,
      salaid: Sala,
      diaid: Dias,
      hora_inicio: string
    ) {
      this.horarioid = horarioid;
      this.peliculaid = peliculaid;
      this.salaid = salaid;
      this.diaid = diaid;
      this.hora_inicio = hora_inicio;
    }
  }
