export class Horarios {
    horarioid: number;
    peliculaid: number;
    salaid: number;
    diaid: number;
    hora_inicio: string;
  
    constructor(
      horarioid: number,
      peliculaid: number,
      salaid: number,
      diaid: number,
      hora_inicio: string
    ) {
      this.horarioid = horarioid;
      this.peliculaid = peliculaid;
      this.salaid = salaid;
      this.diaid = diaid;
      this.hora_inicio = hora_inicio;
    }
  }
  