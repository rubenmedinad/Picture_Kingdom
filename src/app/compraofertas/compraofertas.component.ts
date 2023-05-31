import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PictureKingdomService } from '../picture-kingdom.service';
import { MatDialog } from '@angular/material/dialog';
import { FinalizarCompraOfertasComponent } from '../finalizar-compra-ofertas/finalizar-compra-ofertas.component';

@Component({
  selector: 'app-compraofertas',
  templateUrl: './compraofertas.component.html',
  styleUrls: ['./compraofertas.component.css']
})
export class CompraofertasComponent implements OnInit {
  offers: any[] = [];
  selectedOfferId: number | undefined;
  entrada: any = {
    numero: 0,
    precio: 0
  };
  datosCompra: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pictureKingdomService: PictureKingdomService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.offers = this.pictureKingdomService.getOffers();
    const idParam = this.route.snapshot.paramMap.get('id');
    this.selectedOfferId = idParam ? +idParam : undefined;
    this.calculatePrice();
  }

  buyOffer(offer: any) {
    // Añadir los datos seleccionados al array datosCompra
    this.datosCompra.push({
      name: offer.name,
      price: this.entrada.precio,
      numero: this.entrada.numero,
      totalPrice: this.getTotalDeCompra(),
      image: offer.image
    });

    // Llamar al método del servicio para agregar los datos al array venta_ofertas
    this.pictureKingdomService.rellenarVenta_Ofertas(this.datosCompra[this.datosCompra.length - 1]);

  }


  incrementarNumero() {
    this.entrada.numero++;
    this.calculatePrice();
  }

  decrementarNumero() {
    if (this.entrada.numero > 0) {
      this.entrada.numero--;
      this.calculatePrice();
    }
  }

  calculatePrice() {
    const selectedOffer = this.offers.find((offer) => offer.id === this.selectedOfferId);
    if (selectedOffer) {
      this.entrada.precio = selectedOffer.price;
    }
  }

  getTotalDeCompra(): number {
    return this.entrada.precio * this.entrada.numero;
  }
  abrirDialogo(): void {
    const dialogRef = this.dialog.open(FinalizarCompraOfertasComponent, {
      width: '500px', // Cambia el ancho del diálogo
      height: '300px', // Cambia la altura del diálogo
      disableClose: true,
      data: {}
    });
  }
}
