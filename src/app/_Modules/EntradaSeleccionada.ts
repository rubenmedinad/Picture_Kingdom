export class EntradaSeleccionada{
  nombreEntrada: string
  numero: number
  precio: number
  total: number
  constructor(nombreEntrada: string, numero: number, precio: number, total: number){
    this.nombreEntrada=nombreEntrada
    this.numero=numero
    this.precio=precio
    this.total=total
  }
}
