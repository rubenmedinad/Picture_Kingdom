import { Component, OnInit } from '@angular/core';
import { PictureKingdomService } from '../picture-kingdom.service';

@Component({
  selector: 'app-pagotarjeta',
  templateUrl: './pagotarjeta.component.html',
  styleUrls: ['./pagotarjeta.component.css']
})
export class PagotarjetaComponent implements OnInit {
  cardNumberValue: string = '';
  expirationMonthValue: string = '';
  expirationYearValue: string = '';
  cvvValue: string = '';
  showCVV: boolean = false;
  datosBancarios: { numeroCuenta: string, mes: number, anio: number, cvv: number }[]= [];

  constructor(private peliculasS: PictureKingdomService) {}

  ngOnInit() {}

  formatCardNumber() {
    let formattedNumber = this.cardNumberValue.replace(/[^0-9]/g, ''); // Eliminar caracteres no numéricos

    const chunks = [];
    for (let i = 0; i < formattedNumber.length; i += 4) {
      chunks.push(formattedNumber.substr(i, 4));
    }

    this.cardNumberValue = chunks.join('-'); // Unir con guiones

    // Limitar el número de caracteres a 19
    if (this.cardNumberValue.length > 19) {
      this.cardNumberValue = this.cardNumberValue.slice(0, 19);
    }
  }

  toggleCVVVisibility() {
    this.showCVV = !this.showCVV;
  }

  enviar() {
    if (
      this.cardNumberValue &&
      this.expirationMonthValue &&
      this.expirationYearValue &&
      this.cvvValue
    ) {
      const datos = {
        numeroCuenta: this.cardNumberValue,
        mes: Number(this.expirationMonthValue),
        anio: Number(this.expirationYearValue),
        cvv: Number(this.cvvValue)
      };

      this.datosBancarios.push(datos);
      console.log(this.datosBancarios);

      // Restablecer los campos
      this.cardNumberValue = '';
      this.expirationMonthValue = '';
      this.expirationYearValue = '';
      this.cvvValue = '';
    }
  }

  ActualizarArray() {
    this.peliculasS.rellenarVentas({ Datos_Bancarios: this.datosBancarios });
    console.log(this.peliculasS.obtenerVentas());
  }
}
