import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { PictureKingdomService } from '../picture-kingdom.service';
import jsPDF from 'jspdf';
import { Asientos } from '../_Modules/Asientos';
import { BasedeDatosService } from '../basede-datos.service';
import { Peliculas } from '../_Modules/Peliculas';
import { selectedSeats } from '../_Modules/SelectedSeats';

@Component({
  selector: 'app-finalizar-compra',
  templateUrl: './finalizar-compra.component.html',
  styleUrls: ['./finalizar-compra.component.css'],
})
export class FinalizarCompraComponent implements OnInit {
  asientos: any[] = [];
  informacion: any[] = [];
  asiento: Asientos = new Asientos(0, 0, 0, 0, 0, '', 0, true);
  pelicula: Peliculas = new Peliculas(0, '', '', '', '', '', '', '', '');
  asientosseleccionados: selectedSeats = new selectedSeats("",0)
  peliculas: Peliculas[] = [];
  ide: number = 0;

  constructor(
    private router: Router,
    private peliculasS: PictureKingdomService,
    private servicio: BasedeDatosService,
    private dialogRef: MatDialogRef<FinalizarCompraComponent>
  ) {}

  ngOnInit() {
    this.peliculasS.obtenerVentas();
    this.informacion = this.peliculasS.obtenerVentas();
    console.log(this.informacion);

    this.asientos = this.informacion[4]?.Asientos;
    console.log(this.asientos);

    this.ide = this.informacion[0];


    this.asientosseleccionados=this.asientos[0]
    console.log(this.asientosseleccionados)
    console.log(this.asientosseleccionados.row)

    this.servicio.listarpeliculas().subscribe((datos) => {
      this.peliculas = datos;
      const peliculaEncontrada = this.peliculas.filter(
        (pelicula) => pelicula.id == +this.ide
      );
      this.pelicula = peliculaEncontrada[0];
    });
    console.log(this.informacion[4]?.Entradas[1]?.nombreEntrada)
    this.insert();
  }

  volverAlHome() {
    this.router.navigate(['']);
    this.dialogRef.close();
  }

  descargarPDF() {
    const doc = new jsPDF('p', 'mm', 'a4'); // Tamaño de hoja DIN A4 (210x297 mm)

    // Obtener los datos de la compra y la película correspondiente al ID
    const peliculaID = parseInt(this.informacion[0]);
    const imagenURL = this.pelicula.imagen;

    const entradaWidth = 160; // Ancho de la entrada
    const entradaHeight = 80; // Alto de la entrada
    const margenVertical = 10; // Margen vertical entre entradas

    // Verificar que imagenURL tenga un valor antes de asignarlo
    if (imagenURL) {
      // Esperar a que se cargue la imagen antes de generar el PDF
      const imgElement = new Image();
      imgElement.onload = () => {
        // Calcular la cantidad de entradas necesarias
        let asientos = this.informacion[4]?.Asientos;
        if (asientos && asientos.length > 0) {
          asientos = asientos.flat(); // Utilizamos el método flat() para aplanar el array de asientos
        } else {
          asientos = [];
        }
        const cantidadEntradas = asientos?.length || 0;
        // Generar una entrada por asiento y tipo de entrada
        asientos?.forEach(
          (asiento: { row: string; seat: number }, index: number) => {
            // Obtener el tipo de entrada del elemento 5 de informacion
            const tipoEntrada = this.informacion[5]?.tipoEntrada;
            const Entrada = this.informacion[4]?.Entradas[index]?.nombreEntrada;
            const tipoEntradaAsociado =
              this.informacion[4]?.Entradas[index]?.precio;

            if (index > 0) {
              doc.addPage();
            }

            // Agregar la imagen de la película en la entrada
            doc.addImage(
              imgElement,
              'PNG',
              20, // Posición X de la entrada
              20, // Posición Y de la entrada
              entradaWidth / 3,
              entradaHeight
            );

            // Agregar los detalles de la entrada (título, duración, día, hora, asiento y tipo de entrada)
            const detallesX = 20 + entradaWidth / 3 + 10; // Posición X de los detalles
            const detallesY = 30; // Posición Y de los detalles

            doc.setFontSize(12);
            doc.setFont('helvetica', 'bold');
            doc.text(
              this.pelicula?.titulo ?? 'Sin título',
              detallesX,
              detallesY
            );

            doc.setFontSize(10);
            doc.setFont('helvetica', 'normal');
            doc.text(
              `Duración: ${this.pelicula?.duracion ?? 'Sin duración'}`,
              detallesX,
              detallesY + 10
            );
            doc.text(
              `Día: ${this.informacion[2]?.DiaID}`,
              detallesX,
              detallesY + 20
            );
            doc.text(
              `Hora: ${this.informacion[1]?.HoraID}`,
              detallesX,
              detallesY + 30
            );

            doc.text(
              `Asiento: Fila ${asiento.row}, Asiento ${asiento.seat}`,
              detallesX,
              detallesY + 40
            );

            doc.text(
              `Tipo de entrada: ${tipoEntrada} - ${tipoEntradaAsociado}`,
              detallesX,
              detallesY + 50
            );
          }
        );

        // Guardar el PDF
        doc.save('compra.pdf');
      };

      // Asignar la URL de la imagen y cargarla
      imgElement.src = imagenURL;
    } else {
      console.error('No se pudo obtener la URL de la imagen.');
    }
  }

  insert() {
    this.asiento = new Asientos(
      10,
      this.informacion[3],
      this.informacion[0],
      this.informacion[2],
      this.informacion[1],
      this.asientosseleccionados.row,
      this.asientosseleccionados.seat,
      false
    );
    console.log(this.asiento);
    this.servicio.agregarAsiento(this.asiento);
  }
}
