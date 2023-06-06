export class Asientos {
  asientoid?: number;
  salaid: number;
  peliculaid: number;
  horarioid: number;
  diaid: number;
  letra_fila: string;
  num_asiento: number;
  ocupado: boolean;

  constructor(
    asientoid: number,
    salaid: number,
    peliculaid: number,
    horarioid: number,
    diaid: number,
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
