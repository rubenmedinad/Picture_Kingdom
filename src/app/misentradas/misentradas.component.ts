import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MisEntradas } from '../_Modules/MisEntradas';

@Component({
  selector: 'app-misentradas',
  templateUrl: './misentradas.component.html',
  styleUrls: ['./misentradas.component.css']
})
export class MisentradasComponent {
  constructor(private router: Router) {}
  mientrada: MisEntradas[] = [
    new MisEntradas("A todo gas", "1 Junio 12:00", "Fila F Asiento 10", "2"),
    new MisEntradas("El señor de los anillos", "2 Junio 18:30", "Fila B Asiento 5", "3"),
    new MisEntradas("La La Land", "3 Junio 20:15", "Fila C Asiento 12", "1"),
    new MisEntradas("Piratas del Caribe", "4 Junio 15:45", "Fila E Asiento 7", "4"),
    new MisEntradas("A todo gas", "1 Junio 12:00", "Fila F Asiento 10", "2"),
    new MisEntradas("El señor de los anillos", "2 Junio 18:30", "Fila B Asiento 5", "3"),
    new MisEntradas("La La Land", "3 Junio 20:15", "Fila C Asiento 12", "1"),
    new MisEntradas("Piratas del Caribe", "4 Junio 15:45", "Fila E Asiento 7", "4"),
    new MisEntradas("Jurassic Park", "5 Junio 14:00", "Fila D Asiento 3", "2")
  ];
  descargarPDF(entrada: MisEntradas) {
    // Aquí puedes implementar la lógica para descargar el PDF con los datos de la entrada seleccionada
    // Puedes acceder a los datos de la entrada utilizando la variable 'entrada' pasada como parámetro
    // Ejemplo: entrada.nombrepeli, entrada.fechapeli, entrada.asientospeli, entrada.salapeli

    // Llama a la función correspondiente en el componente 'FinalizarCompraComponent'
    // Puedes usar una redirección o una comunicación entre componentes para lograrlo
  }
}
