import { Component } from '@angular/core';
import { PictureKingdomService } from '../picture-kingdom.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-metodospago',
  templateUrl: './metodospago.component.html',
  styleUrls: ['./metodospago.component.css']
})
export class MetodospagoComponent {
  entrada = {
    numero: 0
  };
  numero: number = 0;
  precioEntrada: number = 3.5;
  total: number = 0;
  entradasSeleccionadas: { nombreEntrada: string, numero: number, precio: number, total: number }[] = [];

  asientosLength: number = 0;
  A: any[] = [];
  entradas: any[] = [];

  constructor(
    private router: Router,
    private peliculasS: PictureKingdomService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    if(this.peliculasS.obtenerVentas().length == 0){
      this.router.navigateByUrl('/cartelera');
    }
    this.A = this.peliculasS.obtenerVentas();
    this.asientosLength = this.A[4].Asientos.length;
    console.log(this.asientosLength);
    console.log(this.peliculasS.obtenerVentas())
    this.entradas = this.peliculasS.entradas;
    if (this.peliculasS.obtenerVentas().length <= 6) {
      this.peliculasS.eliminarUltimoElemento(5);
    }
    this.inicializarNumerosEntradas();
  }

  inicializarNumerosEntradas() {
    // Lógica para inicializar los números de entradas en 9
    this.entradas.forEach((entrada) => {
      entrada.numero = 0;
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
    if (entrada.numero < this.asientosLength && this.calcularTotalEntradas() < this.asientosLength) {
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

    if (totalEntradas > this.asientosLength) {
      const exceso = totalEntradas - this.asientosLength;
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

  entradasSelected(): void {
    this.entradasSeleccionadas = [];

    // Recorrer las entradas seleccionadas
    for (const entrada of this.entradas) {
      // Agregar el objeto al array entradasSeleccionadas una a una
      for (let i = 0; i < entrada.numero; i++) {
        const entradaSeleccionada = {
          nombreEntrada: entrada.nombreEntrada,
          numero: 1,
          precio: entrada.precio,
          total: entrada.precio
        };
        this.entradasSeleccionadas.push(entradaSeleccionada);
      }
    }

    // Limpiar las entradas seleccionadas
    this.entradas = [];
  }

  ActualizarArray() {
    this.entradasSelected();
    this.peliculasS.rellenarVentas({ Entradas: this.entradasSeleccionadas });
  }
}
