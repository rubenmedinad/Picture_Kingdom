import { Component, OnInit } from '@angular/core';
import { PictureKingdomService } from '../picture-kingdom.service';
@Component({
  selector: 'app-ofertas-especiales-cartel',
  templateUrl: './ofertas-especiales-cartel.component.html',
  styleUrls: ['./ofertas-especiales-cartel.component.css']
})
export class OfertasEspecialesCartelComponent implements OnInit {
  ofertas: any[] | undefined;

  constructor(private ofertasService: PictureKingdomService) { }

  ngOnInit(): void {
    this.ofertas = this.ofertasService.getOfertas();
  }
}
