export class Asientos{

IdAsientos : number
IdSala : number
LetraFila : String
NumeroAsiento : number
Estado : boolean
Selecionado : boolean

constructor(
    idAsientos: number,
    idSala: number,
    letraFila: string,
    numeroAsiento: number,
    estado: boolean,
    selecionado: boolean
  ) {
    this.IdAsientos = idAsientos;
    this.IdSala = idSala;
    this.LetraFila = letraFila;
    this.NumeroAsiento = numeroAsiento;
    this.Estado = estado;
    this.Selecionado = selecionado;
  }


}