import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MisEntradas } from '../_Modules/MisEntradas';

@Component({
  selector: 'app-misentradas',
  templateUrl: './misentradas.component.html',
  styleUrls: ['./misentradas.component.css']
})
export class MisentradasComponent {
  constructor(private router: Router) {}
  mientrada: MisEntradas = new MisEntradas("A todo gas", "1 Junio 12:00", "Fila F Asiento 10", "2");
}
