export class Ventas {
  ventaId: number;
  peliculaId: number;
  asientoId: number;
  salaId: number;
  usuarioId: number;
  horarioId: number;
  precioTotal: number;
  numeroTarjeta: string;

  constructor(
    ventaId: number,
    peliculaId: number,
    asientoId: number,
    salaId: number,
    usuarioId: number,
    horarioId: number,
    precioTotal: number,
    numeroTarjeta: string
  ) {
    this.ventaId = ventaId;
    this.peliculaId = peliculaId;
    this.asientoId = asientoId;
    this.salaId = salaId;
    this.usuarioId = usuarioId;
    this.horarioId = horarioId;
    this.precioTotal = precioTotal;
    this.numeroTarjeta = numeroTarjeta;
  }
}



