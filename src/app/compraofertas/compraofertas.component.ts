import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PictureKingdomService } from '../picture-kingdom.service';

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

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pictureKingdomService: PictureKingdomService
  ) {}

  ngOnInit() {
    this.offers = this.pictureKingdomService.getOffers();
    const idParam = this.route.snapshot.paramMap.get('id');
    this.selectedOfferId = idParam ? +idParam : undefined;
    this.calculatePrice();
  }

  buyOffer(offer: any) {
    // Código para realizar la compra
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
}
