import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PictureKingdomService } from '../picture-kingdom.service';

@Component({
  selector: 'app-promocion1',
  templateUrl: './promocion1.component.html',
  styleUrls: ['./promocion1.component.css']
})
export class Promocion1Component implements OnInit {
  offers: any[] | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pictureKingdomService: PictureKingdomService
  ) {}

  ngOnInit() {
    this.offers = this.pictureKingdomService.getOffers();
  }

  buyOffer(offer: any) {
    if (offer && offer.id && offer.name && offer.image) {
      const { id, name, image } = offer;
      this.router.navigate(['/compraofertas', id, name, image]);
    }
  }
}
