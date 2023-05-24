import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pagotarjeta',
  templateUrl: './pagotarjeta.component.html',
  styleUrls: ['./pagotarjeta.component.css']
})
export class PagotarjetaComponent implements OnInit {
  form!: FormGroup;
  months: number[] = Array.from({ length: 12 }, (_, i) => i + 1);
  years: number[] = Array.from({ length: 28 }, (_, i) => 2005 - i);
  showCVV: boolean = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      cardNumber: ['', Validators.required],
      expirationMonth: ['', Validators.required],
      expirationYear: ['', Validators.required],
      cvv: ['', Validators.required]
    });
  }
  cardNumberValue: string = '';

  formatCardNumber() {
    let formattedNumber = this.cardNumberValue.replace(/-/g, ''); // Eliminar guiones existentes
    formattedNumber = formattedNumber.replace(/\D/g, ''); // Eliminar caracteres no numéricos
    const chunks = formattedNumber.match(/.{1,4}/g); // Dividir en grupos de 4 números
    if (chunks) {
      this.cardNumberValue = chunks.join('-'); // Unir con guiones
    }
  }
  toggleCVVVisibility() {
    this.showCVV = !this.showCVV;
  }


  submitForm() {
    // Aquí puedes agregar la lógica para procesar el formulario
    // Por ejemplo, puedes acceder a los valores ingresados en el formulario utilizando this.form.value
  }
}
