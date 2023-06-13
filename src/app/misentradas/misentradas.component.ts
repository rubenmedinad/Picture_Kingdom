import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MisEntradas } from '../_Modules/MisEntradas';
import { PictureKingdomService } from '../picture-kingdom.service';
import { BasedeDatosService } from '../basede-datos.service';
import { Ventas } from '../_Modules/Ventas';
import * as CryptoJS from 'crypto-js';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-misentradas',
  templateUrl: './misentradas.component.html',
  styleUrls: ['./misentradas.component.css']
})
export class MisentradasComponent {
  ventas:Ventas[]=[]
  secretKey: string = "1234"

  constructor(private peliculasS: PictureKingdomService,
    private activarrutas: ActivatedRoute,
    private rutes: Router,
    private servicio: BasedeDatosService) {}

  ngOnInit() {
    this.servicio.listarventas().subscribe(datos => {
      this.ventas = datos;


      const userStorage = localStorage.getItem('user');
      if (userStorage !== null) {
        const decryptedBytes = CryptoJS.AES.decrypt(userStorage, this.secretKey);
        const decryptedPassword = decryptedBytes.toString(CryptoJS.enc.Utf8);

        this.ventas = this.ventas.filter(venta => venta.usuario === decryptedPassword);
      } else {
        this.rutes.navigate(['/login']);
      }
    });
  }
  descargarPDF(entrada: Ventas) {
    const doc = new jsPDF('p', 'mm', 'a4');

    // Obtiene la imagen correspondiente a la película
    const imagenURL = entrada.peliculaid.imagen;

    const entradaWidth = 220;
    const entradaHeight = 90;

    if (imagenURL) {
      const imgElement = new Image();
      imgElement.onload = () => {
        const tipoEntrada = entrada.tipo_entrada;
        const tipoEntradaAsociado = entrada.precio;

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
          entrada.peliculaid.titulo ?? 'Sin título',
          detallesX,
          detallesY
        );

        doc.setFontSize(12);
        doc.setFont('helvetica', 'normal');
        doc.text(
          `Duración: ${entrada.peliculaid.duracion ?? 'Sin duración'}`,
          detallesX,
          detallesY + 10
        );

        doc.text(`Día: ${entrada.diaid.dia}`, detallesX, detallesY + 20);
        doc.text(`Hora: ${entrada.horarioid.hora_inicio}`, detallesX, detallesY + 30);

        doc.text(
          `Asiento: Fila ${entrada.asientoid.letra_fila}, Asiento ${entrada.asientoid.num_asiento}`,
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

        const footerLines = doc.splitTextToSize(footerText, doc.internal.pageSize.getWidth() + 210);
        const footerY = doc.internal.pageSize.getHeight() - 30;

        doc.setLineWidth(0.5); // Grosor de la línea
        doc.setDrawColor(0, 0, 0); // Color de la línea (negro)
        doc.line(20, footerY - 5, doc.internal.pageSize.getWidth() - 20, footerY - 5); // Dibuja la línea

        doc.setFontSize(5);
        doc.text(footerLines, 20, footerY);

        doc.save('entrada.pdf');
      };

      imgElement.src = imagenURL;
    }
  }

}
