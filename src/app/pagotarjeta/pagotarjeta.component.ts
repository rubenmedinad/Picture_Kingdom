import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FinalizarCompraComponent } from '../finalizar-compra/finalizar-compra.component';
import { PictureKingdomService } from '../picture-kingdom.service';
import { Router } from '@angular/router';

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

  months: number[] = [];
  years: number[] = [];

  constructor(
    private router: Router,
    private dialog: MatDialog,
    private peliculasS: PictureKingdomService
  ) {}

  ngOnInit() {
    if(this.peliculasS.obtenerVentas().length == 0){
      this.router.navigateByUrl('/cartelera');
    }
    this.generateMonthOptions();
    this.generateYearOptions();
  }
  preventInvalidInput(event: any) {
    const invalidCharacters = ['e', '+', '-', '.']; // Caracteres no permitidos en un input de tipo number
    if (invalidCharacters.includes(event.key)) {
      event.preventDefault();
    }
  }

  formatCardNumber() {
    let formattedNumber = this.cardNumberValue.toString().replace(/-/g, ''); // Eliminar guiones existentes

    // Agregar guiones cada cuatro caracteres
    const chunks = [];
    for (let i = 0; i < formattedNumber.length; i += 4) {
      chunks.push(formattedNumber.substr(i, 4));
    }
    this.cardNumberValue = chunks.join('-');

    // Limitar el número de caracteres a 19
    if (this.cardNumberValue.length > 19) {
      this.cardNumberValue = this.cardNumberValue.slice(0, 19);
    }
  }



  cvvValueFocused: boolean = false;

  onCVVFocus() {
    this.cvvValueFocused = true;
  }

  toggleCVVVisibility(show: boolean) {
    if (!this.cvvValueFocused) {
      this.showCVV = show;
    }
  }



  enviar() {
    if (this.formValid()) {
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

  formValid() {
    const cardNumberValid = this.cardNumberValue.length === 19;
    const expirationMonthValid = !!this.expirationMonthValue;
    const expirationYearValid = !!this.expirationYearValue;
    const cvvValid = this.cvvValue.length === 3;

    return cardNumberValid && expirationMonthValid && expirationYearValid && cvvValid;
  }


  ActualizarArray() {
    this.peliculasS.rellenarVentas({ Datos_Bancarios: this.datosBancarios });
    console.log(this.peliculasS.obtenerVentas());
  }

  generateMonthOptions() {
    for (let i = 1; i <= 12; i++) {
      this.months.push(i);
    }
  }

  generateYearOptions() {
    const currentYear = new Date().getFullYear();
    const maxYear = 2065;
    for (let i = currentYear; i <= maxYear; i++) {
      this.years.push(i);
    }
  }

  abrirDialogo(): void {
    const dialogRef = this.dialog.open(FinalizarCompraComponent, {
      width: '500px', // Cambia el ancho del diálogo
      height: '300px', // Cambia la altura del diálogo
      disableClose: true,
      data: {}
    });
  }
}
