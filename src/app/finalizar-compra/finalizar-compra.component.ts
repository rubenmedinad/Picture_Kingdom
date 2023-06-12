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
import { EntradaSeleccionada } from '../_Modules/EntradaSeleccionada';
import { Ventas } from '../_Modules/Ventas';
import * as CryptoJS from 'crypto-js';
@Component({
  selector: 'app-finalizar-compra',
  templateUrl: './finalizar-compra.component.html',
  styleUrls: ['./finalizar-compra.component.css'],
})
export class FinalizarCompraComponent implements OnInit {
  pelicula: Peliculas = new Peliculas(0, '', '', '', '', '', '', '');
  dia: Dias = new Dias(0, '');
  sala: Sala = new Sala(0, '', '');
  horario: Horarios = new Horarios(0, this.pelicula, this.sala, this.dia, '');
  asientosseleccionados: selectedSeats = new selectedSeats('', 0);
  entradaselecionada:EntradaSeleccionada = new EntradaSeleccionada("",0,0,0)
  ide: number = 0;
  informacion: any[] = [];
  asientos: any[] = [];
  entradas: any[] = [];
  objetos: any[] = [];
  a:Asientos[]=[]
  sitio:any
  secretKey: string = "1234"
  objetosDescripcion = this.peliculasS.obtenerObjetos();
  diaDescripcion = this.objetosDescripcion[1].dia;
  horarioDescripcion = this.objetosDescripcion[3].hora_inicio;

  asiento: Asientos = new Asientos(
    0,
    this.sala,
    this.pelicula,
    this.horario,
    this.dia,
    '',
    0,
    false
  );

  constructor(
    private router: Router,
    private peliculasS: PictureKingdomService,
    private servicio: BasedeDatosService,
    private dialogRef: MatDialogRef<FinalizarCompraComponent>
  ) {}

  ngOnInit() {
    this.peliculasS.obtenerVentas();
    this.informacion = this.peliculasS.obtenerVentas();
    console.log(this.informacion)

    this.asientos = this.informacion[4]?.Asientos
    console.log(this.asientos)
    this.entradas = this.informacion[5]?.Entradas
    console.log(this.entradas)
    this.ide = this.informacion[0]
    console.log(this.asientosseleccionados);

    this.insertAsientos()
  }

  volverAlHome() {
    this.router.navigate(['']);
    this.dialogRef.close();
  }
  descargarPDF() {
    const doc = new jsPDF('p', 'mm', 'a4');
    const imagenURL = this.pelicula.imagen;

    const entradaWidth = 220;
    const entradaHeight = 90;

    if (imagenURL) {
      const imgElement = new Image();
      imgElement.onload = () => {
        const asientos = this.informacion[4]?.Asientos?.flat() || [];

        asientos.forEach((asiento: { row: string; seat: number }, index: number) => {
          const tipoEntrada = this.informacion[5]?.Entradas[index]?.nombreEntrada;
          const tipoEntradaAsociado = this.informacion[5]?.Entradas[index]?.precio;

          if (index > 0) {
            doc.addPage();
          }

          doc.addImage(
            imgElement,
            'PNG',
            20,
            20,
            entradaWidth / 3,
            entradaHeight
          );

          const detallesX = 20 + entradaWidth / 3 + 10;
          const detallesY = 30;

          doc.setFontSize(14);
          doc.setFont('helvetica', 'bold');
          doc.text(
            this.pelicula?.titulo ?? 'Sin título',
            detallesX,
            detallesY
          );

          doc.setFontSize(12);
          doc.setFont('helvetica', 'normal');
          doc.text(
            `Duración: ${this.pelicula?.duracion ?? 'Sin duración'}`,
            detallesX,
            detallesY + 10
          );

          doc.text(`Día: ${this.diaDescripcion}`, detallesX, detallesY + 20);
          doc.text(`Hora: ${this.horarioDescripcion}`, detallesX, detallesY + 30);

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

          const footerText = `Picture Kingdom es el lugar perfecto para disfrutar de las mejores películas en la comodidad y el lujo que te mereces. Con una amplia selección de títulos de diversos géneros, desde emocionantes películas de acción hasta conmovedores dramas, tenemos algo para todos los amantes del cine. Nuestro compromiso es brindarte una experiencia cinematográfica inigualable. Desde el momento en que entras a nuestras modernas instalaciones, te envolvemos en un ambiente acogedor y lleno de magia.
            Nuestras cómodas butacas te permiten sumergirte por completo en la historia que se desarrolla en la pantalla. Además, nuestras salas de última generación están equipadas con la mejor tecnología de imagen y sonido, para que puedas disfrutar de una calidad audiovisual excepcional. Cada detalle está cuidadosamente diseñado para transportarte a otros mundos y hacerte vivir experiencias únicas. En Picture Kingdom valoramos tu tiempo y comodidad. Por eso, ofrecemos un sistema de compra de entradas rápido y sencillo,
            tanto en línea como en nuestras taquillas. Puedes elegir el horario y la película que más te guste, reservar tus asientos y tener la tranquilidad de saber que todo estará listo para ti cuando llegues. Nuestro equipo de profesionales está comprometido con brindarte un servicio excepcional en todo momento. Desde el amable personal que te da la bienvenida, hasta los expertos técnicos que garantizan que cada proyección sea perfecta, todos trabajamos en conjunto para que tu visita sea inolvidable. En Picture Kingdom
            nos esforzamos por superar tus expectativas y ofrecerte momentos mágicos. Te invitamos a ser parte de nuestra comunidad de amantes del cine y a disfrutar de las emociones que solo el séptimo arte puede brindar. ¡Te esperamos en Picture Kingdom con los brazos abiertos!`;

          const footerLines = doc.splitTextToSize(footerText, doc.internal.pageSize.getWidth()+210);
          const footerY = doc.internal.pageSize.getHeight() - 30;

          doc.setLineWidth(0.5); // Grosor de la línea
          doc.setDrawColor(0, 0, 0); // Color de la línea (negro)
          doc.line(20, footerY - 5, doc.internal.pageSize.getWidth() - 20, footerY - 5); // Dibuja la línea

          doc.setFontSize(5);
          doc.text(footerLines, 20, footerY);
        });

        doc.save('entrada.pdf');
      };

      imgElement.src = imagenURL;
    }
  }


  insertAsientos() {
    this.objetos = this.peliculasS.obtenerObjetos();
    this.pelicula = this.objetos[0];
    this.dia = this.objetos[1];
    this.sala = this.objetos[2];
    this.horario = this.objetos[3];
    console.log(this.pelicula, this.dia, this.sala, this.horario);
    for (let i = 0; i < this.asientos.length; i++) {

      this.asientosseleccionados = this.asientos[i];
      this.entradaselecionada = this.entradas[i];

      console.log(this.entradaselecionada)

      let asiento = new Asientos(
        0,
        this.sala,
        this.pelicula,
        this.horario,
        this.dia,
        this.asientosseleccionados.row,
        this.asientosseleccionados.seat,
        false
      );

      console.log(asiento);

      this.servicio.agregarAsiento(asiento).subscribe({
        next: (data) => {
          console.log(data);
          const userStorage = localStorage.getItem('user');
          if (userStorage !== null) {
            // Desencriptar la contraseña
            const decryptedBytes = CryptoJS.AES.decrypt(userStorage, this.secretKey);
            const decryptedPassword = decryptedBytes.toString(CryptoJS.enc.Utf8);
            const currentDate = new Date();
            const formattedDateTime = currentDate.toISOString().replace(/T/, ' ').replace(/\..+/, '');
              let venta = new Ventas(null,this.pelicula,data,this.sala,decryptedPassword,this.horario,this.dia,formattedDateTime,this.entradaselecionada.precio,this.entradaselecionada.nombreEntrada)
              this.servicio.agregarVentas(venta).subscribe(
              (response) => {
                // Manejar la respuesta del servidor
              },
              (error) => {
                // Manejar el error de la solicitud
              }
            );
          }
        },
        error: (error) => console.error(error),
      });
    }
  }
}
