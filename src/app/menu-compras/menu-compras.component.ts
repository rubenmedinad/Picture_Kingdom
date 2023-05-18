import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-compras',
  templateUrl: './menu-compras.component.html',
  styleUrls: ['./menu-compras.component.css']
})
export class MenuComprasComponent {
  pasos: string[] = ['Asientos', 'Seleccione entradas', 'Pago', 'Detalle de compra'];
  pasoActual = 'Asientos';


}
