import { Component } from '@angular/core';
import { PictureKingdomService } from '../picture-kingdom.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-metodospago',
  templateUrl: './metodospago.component.html',
  styleUrls: ['./metodospago.component.css']
})
export class MetodospagoComponent {
  entrada = {
    numero: 0
  };
  cantidadAsientos: number = 0;
  numero: number = 0;
  precioEntrada: number = 3.5;
  total: number = 0;

  entradas: any[] = []; // Declare the 'entradas' property

  constructor(
    private entradasService: PictureKingdomService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    console.log(this.entradasService.obtenerVentas())
    this.entradas = this.entradasService.entradas;
    this.entrada.numero = 0;
    this.route.params.subscribe(params => {
      this.cantidadAsientos = params['cantidadAsientos']; // Recibir el parámetro 'cantidadAsientos' del enrutador
    });

  }
  actualizarPrecioEntrada(event: any) {
    this.precioEntrada = event.target.value;
    this.calcularTotal();
  }

  decrementarNumero(entrada: any) {
    if (entrada.numero > 0) {
      entrada.numero--;
      this.validarCantidadAsientos();
      this.calcularTotal();
    }
  }

  incrementarNumero(entrada: any) {
    if (entrada.numero < this.cantidadAsientos && this.calcularTotalEntradas() < this.cantidadAsientos) {
      entrada.numero++;
      this.validarCantidadAsientos();
      this.calcularTotal();
    }
  }
  calcularTotalEntradas() {
    let totalEntradas = 0;
    for (const entrada of this.entradas) {
      totalEntradas += entrada.numero;
    }
    return totalEntradas;
  }

  validarCantidadAsientos() {
    let totalEntradas = 0;
    for (const entrada of this.entradas) {
      totalEntradas += entrada.numero;
    }

    if (totalEntradas > this.cantidadAsientos) {
      // Si la suma total de los números de entrada es mayor que cantidadAsientos, ajusta los números de entrada
      const exceso = totalEntradas - this.cantidadAsientos;
      let count = exceso;

      for (const entrada of this.entradas) {
        if (entrada.numero > 0) {
          const reduccion = Math.min(entrada.numero, count);
          entrada.numero -= reduccion;
          count -= reduccion;

          if (count === 0) {
            break;
          }
        }
      }
    }
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
