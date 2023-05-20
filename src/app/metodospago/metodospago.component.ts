import { Component } from '@angular/core';
import { PictureKingdomService } from '../picture-kingdom.service';
@Component({
  selector: 'app-metodospago',
  templateUrl: './metodospago.component.html',
  styleUrls: ['./metodospago.component.css']
})
export class MetodospagoComponent {
  numero: number = 0;
  precioEntrada: number = 3.5;
  total: number = 0;

  entradas: any[] = []; // Declare the 'entradas' property

  constructor(private entradasService: PictureKingdomService) { }

  ngOnInit() {
    this.entradas = this.entradasService.entradas;
  }
  actualizarPrecioEntrada(event: any) {
    this.precioEntrada = event.target.value;
    this.calcularTotal();
  }

  decrementarNumero(entrada: any) {
    if (entrada.numero > 0) {
      entrada.numero--;
      this.calcularTotal();
    }
  }

  incrementarNumero(entrada: any) {
    entrada.numero++;
    this.calcularTotal();
  }

  calcularTotal() {
    this.total = 0;
    for (const entrada of this.entradas) {
      this.total += entrada.precio * entrada.numero;
    }
  }

  calcularTotalGeneral() {
    let totalGeneral = 0;
    for (const entrada of this.entradas) {
      totalGeneral += entrada.precio * entrada.numero;
    }
    return totalGeneral;
  }
}
