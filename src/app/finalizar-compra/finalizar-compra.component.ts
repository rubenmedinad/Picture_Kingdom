import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PictureKingdomService } from '../picture-kingdom.service';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-finalizar-compra',
  templateUrl: './finalizar-compra.component.html',
  styleUrls: ['./finalizar-compra.component.css'],
})
export class FinalizarCompraComponent implements OnInit {
  constructor(private router: Router, private peliculasS: PictureKingdomService) {}

  ngOnInit() {
    // Código relacionado con la inicialización del componente
  }

  volverAlHome() {
    this.router.navigate(['']);
  }

  descargarPDF() {
    const doc = new jsPDF('p', 'mm', 'a4'); // Tamaño de hoja DIN A4 (210x297 mm)

    // Obtener los datos de la compra y la película correspondiente al ID
    const compra = this.peliculasS.obtenerVentas();
    const peliculaID = parseInt(compra[0].PeliculaID);
    const pelicula = this.peliculasS.peliculas.find((p) => p.id === peliculaID);
    const imagenURL = pelicula?.imagen;
    // Crear un elemento de imagen HTML para la imagen de la película
    const imgElement = new Image();

    // Verificar que imagenURL tenga un valor antes de asignarlo
    if (imagenURL) {
      imgElement.src = imagenURL;

      // Esperar a que la imagen se cargue antes de agregarla al PDF
      imgElement.onload = () => {
        const imagenWidth = 60; // Ancho de la imagen de la película
        const imagenHeight = 60; // Alto de la imagen de la película
        const imagenX = (210 - imagenWidth) / 2; // Posición X centrada de la imagen de la película

        // Agregar la primera página con el logo ocupando todo el espacio
        

        const tiposEntradaUnicos = Array.from(
          new Set(
            compra[4]?.Entradas.map((entrada: any) => entrada.nombreEntrada)
          )
        );

        // Generar una página separada para cada tipo de entrada y asiento
        tiposEntradaUnicos.forEach((tipoEntrada: any, index: number) => {
          if (index > 0) {
            doc.addPage();
          }

          // Definir la posición de los elementos de texto en cada página
          const tituloX = 20; // Posición X del título
          const tituloY = 100; // Posición Y del título
          const duracionX = 20; // Posición X de la duración
          const duracionY = 110; // Posición Y de la duración
          const diaX = 20; // Posición X del día
          const diaY = 120; // Posición Y del día
          const horaX = 20; // Posición X de la hora
          const horaY = 130; // Posición Y de la hora
          const asientoX = 20; // Posición X del asiento
          const asientoY = 140; // Posición Y del asiento
          const entradaX = 20; // Posición X de la entrada
          const entradaY = 150; // Posición Y de la entrada

          // Agregar la imagen de la película en cada página
          doc.addImage(
            imgElement,
            'PNG',
            imagenX,
            20,
            imagenWidth,
            imagenHeight
          );

          // Agregar el título de la película
          doc.setFontSize(16);
          doc.setFont('helvetica', 'bold');
          doc.text(pelicula?.titulo ?? 'Sin título', tituloX, tituloY);

          // Agregar la duración de la película
          doc.setFontSize(12);
          doc.setFont('helvetica', 'normal');
          doc.text(
            `Duración: ${pelicula?.duracion ?? 'Sin duración'}`,
            duracionX,
            duracionY
          );

          // Agregar el día
          doc.setFontSize(12);
          doc.setFont('helvetica', 'normal');
          doc.text(`Día: ${compra[2]?.DiaID}`, diaX, diaY);

          // Agregar la hora
          doc.setFontSize(12);
          doc.setFont('helvetica', 'normal');
          doc.text(`Hora: ${compra[1]?.HoraID}`, horaX, horaY);

          // Agregar el asiento
          doc.setFontSize(12);
          doc.setFont('helvetica', 'normal');
          doc.text(
            `Asiento: Fila ${compra[3]?.Asientos[index]?.row}, Asiento ${compra[3]?.Asientos[index]?.seat}`,
            asientoX,
            asientoY
          );

          // Agregar las entradas correspondientes al tipo de entrada actual
          doc.setFontSize(12);
          doc.setFont('helvetica', 'normal');
          const entradasFiltradas = compra[4]?.Entradas.filter(
            (entrada: any) => entrada.nombreEntrada === tipoEntrada
          );
          entradasFiltradas.forEach((entrada: any, entradaIndex: number) => {
            const entradaText = `${entrada.nombreEntrada} - Cantidad: ${entrada.numero} - Precio: ${entrada.precio} - Total: ${entrada.total}`;
            doc.text(entradaText, entradaX, entradaY + entradaIndex * 6);
          });
        });

        // Guardar el PDF
        doc.save('compra.pdf');
      };
    } else {
      console.error('No se pudo obtener la URL de la imagen.');
    }
  }
}
