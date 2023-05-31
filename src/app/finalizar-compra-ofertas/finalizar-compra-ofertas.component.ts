import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { PictureKingdomService } from '../picture-kingdom.service';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-finalizar-compra-ofertas',
  templateUrl: './finalizar-compra-ofertas.component.html',
  styleUrls: ['./finalizar-compra-ofertas.component.css'],
})
export class FinalizarCompraOfertasComponent implements OnInit {
  constructor(
    private router: Router,
    private pictureKingdomService: PictureKingdomService,
    private dialogRef: MatDialogRef<FinalizarCompraOfertasComponent>
  ) {}

  ngOnInit() {
    // Código relacionado con la inicialización del componente
  }

  volverAlHome() {
    this.router.navigate(['']);
    this.dialogRef.close();
  }

  descargarPDF() {
    const doc = new jsPDF();

    // Obtener los datos de compra del servicio
    const ventaOfertas = this.pictureKingdomService.getVenta_Ofertas();
    const oferta = ventaOfertas[ventaOfertas.length - 1];

    // Verificar que se haya realizado una compra
    if (oferta) {
      doc.setFontSize(20);
      doc.setFont('bold');
      doc.text('¡Ha realizado la compra con éxito!', 10, 20);

      doc.setFontSize(16);
      doc.setFont('bold');
      doc.text('Detalles de la compra:', 10, 40);

      doc.setFontSize(12);
      doc.setFont('normal');
      doc.text(`Nombre: ${oferta.name}`, 10, 60);
      doc.text(`Número de ofertas: ${oferta.numero}`, 10, 70);
      doc.text(`Precio total: ${oferta.totalPrice} €`, 10, 80);

      const imgData = oferta.image;
      doc.addImage(imgData, 'JPEG', 10, 100, 100, 100);

      doc.save('compra.pdf');
    }
  }
}
