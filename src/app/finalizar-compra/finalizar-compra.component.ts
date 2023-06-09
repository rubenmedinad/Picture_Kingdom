import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { PictureKingdomService } from '../picture-kingdom.service';
import jsPDF from 'jspdf';
import { Asientos } from '../_Modules/Asientos';
import { Sala } from '../_Modules/Salas';
import { Peliculas } from '../_Modules/Peliculas';
import { Horarios } from '../_Modules/Horarios';
import { Dias } from '../_Modules/Dias';
import { BasedeDatosService } from '../basede-datos.service';
import { selectedSeats } from '../_Modules/SelectedSeats';

  @Component({
    selector: 'app-finalizar-compra',
    templateUrl: './finalizar-compra.component.html',
    styleUrls: ['./finalizar-compra.component.css'],
  })
  export class FinalizarCompraComponent implements OnInit {
    pelicula: Peliculas = new Peliculas(0, "", "", "", "", "", "", "");
    dia:Dias = new Dias(0,"")
    sala:Sala = new Sala(0,"","");
    horario:Horarios = new Horarios(0,this.pelicula,this.sala,this.dia,"")
    asientosseleccionados: selectedSeats = new selectedSeats("",0)
    ide: number = 0;
    informacion : any[]=[]
    asientos: any[] = [];
    objetos: any[] = [];

    asiento : Asientos = new Asientos(0,this.sala,this.pelicula,this.horario,this.dia,'',0,false)
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

    this.insertAsientos();


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

  insertAsientos() {
    this.objetos=this.peliculasS.obtenerObjetos()
    this.pelicula=this.objetos[0]
    this.dia=this.objetos[1]
    this.sala=this.objetos[2]
    this.horario=this.objetos[3]
    console.log(this.pelicula,this.dia,this.sala,this.horario,)
    for (let i = 0; i < this.asientos.length; i++) {
      this.asientosseleccionados = this.asientos[i]
      let asiento = new Asientos(0,this.sala,this.pelicula,this.horario,this.dia,this.asientosseleccionados.row,this.asientosseleccionados.seat,false)
      console.log(asiento)
      this.servicio.agregarAsiento(asiento).subscribe(
        {next:data =>(console.log(data)),error:error=>console.error(error)}
      )
    }

  }
}
