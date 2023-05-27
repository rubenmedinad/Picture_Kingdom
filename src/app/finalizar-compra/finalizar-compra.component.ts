import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { PictureKingdomService } from '../picture-kingdom.service';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-finalizar-compra',
  templateUrl: './finalizar-compra.component.html',
  styleUrls: ['./finalizar-compra.component.css'],
})
export class FinalizarCompraComponent implements OnInit {
  constructor(
    private router: Router,
    private peliculasS: PictureKingdomService,
    private dialogRef: MatDialogRef<FinalizarCompraComponent>
  ) {}

  ngOnInit() {
    // Código relacionado con la inicialización del componente
  }

  volverAlHome() {
    this.router.navigate(['']);
    this.dialogRef.close();
  }

  descargarPDF() {
    const doc = new jsPDF('p', 'mm', 'a4'); // Tamaño de hoja DIN A4 (210x297 mm)

    // Obtener los datos de la compra y la película correspondiente al ID
    const compra = this.peliculasS.obtenerVentas();
    const peliculaID = parseInt(compra[0].PeliculaID);
    const pelicula = this.peliculasS.peliculas.find((p) => p.id === peliculaID);
    const imagenURL = pelicula?.imagen;

    const entradaWidth = 160; // Ancho de la entrada
    const entradaHeight = 80; // Alto de la entrada
    const entradaMargin = 10; // Margen entre entradas

    // Verificar que imagenURL tenga un valor antes de asignarlo
    if (imagenURL) {
      // Esperar a que se cargue la imagen antes de generar el PDF
      const imgElement = new Image();
      imgElement.onload = () => {
        // Calcular la cantidad de entradas necesarias
        const cantidadEntradas = compra[3]?.Asientos.length;

        // Generar una entrada por cada asiento
        for (let i = 0; i < cantidadEntradas; i++) {
          if (i > 0) {
            doc.addPage();
          }

          // Calcular la posición de la entrada
          const entradaX = 20; // Posición X de la entrada
          const entradaY = 20 + i * (entradaHeight + entradaMargin); // Posición Y de la entrada

          // Agregar la imagen de la película en la entrada
          doc.addImage(imgElement, 'PNG', entradaX, entradaY, entradaWidth / 3, entradaHeight);

          // Agregar los detalles de la entrada (título, duración, día, hora, asiento y tipo de entrada)
          const detallesX = entradaX + entradaWidth / 3 + 10; // Posición X de los detalles
          const detallesY = entradaY + 10; // Posición Y de los detalles

          doc.setFontSize(12);
          doc.setFont('helvetica', 'bold');
          doc.text(pelicula?.titulo ?? 'Sin título', detallesX, detallesY);

          doc.setFontSize(10);
          doc.setFont('helvetica', 'normal');
          doc.text(`Duración: ${pelicula?.duracion ?? 'Sin duración'}`, detallesX, detallesY + 10);
          doc.text(`Día: ${compra[2]?.DiaID}`, detallesX, detallesY + 20);
          doc.text(`Hora: ${compra[1]?.HoraID}`, detallesX, detallesY + 30);

          const asiento = compra[3]?.Asientos[i];
          doc.text(
            `Asiento: Fila ${asiento.row}, Asiento ${asiento.seat}`,
            detallesX,
            detallesY + 40
          );

          const tipoEntrada = compra[4]?.Entradas[i]?.nombreEntrada;
          doc.text(`Tipo de entrada: ${tipoEntrada}`, detallesX, detallesY + 50);
        }

        // Guardar el PDF
        doc.save('compra.pdf');
      };

      // Asignar la URL de la imagen y cargarla
      imgElement.src = imagenURL;
    } else {
      console.error('No se pudo obtener la URL de la imagen.');
    }
  }
}
