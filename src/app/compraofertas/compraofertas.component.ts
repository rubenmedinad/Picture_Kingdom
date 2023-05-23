import { Component, OnInit } from '@angular/core';
import { PictureKingdomService } from '../picture-kingdom.service';

@Component({
  selector: 'app-compraofertas',
  templateUrl: './compraofertas.component.html',
  styleUrls: ['./compraofertas.component.css']
})
export class CompraofertasComponent implements OnInit {
  offers: any[] = [];

  constructor(private pictureKingdomService: PictureKingdomService) {}

  ngOnInit() {
    this.offers = this.pictureKingdomService.getOfertas();
  }

  buyOffer(offer: any) {
    // Código para realizar la compra
  }
}

