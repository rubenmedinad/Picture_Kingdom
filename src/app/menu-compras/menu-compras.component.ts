import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PictureKingdomService } from '../picture-kingdom.service';
@Component({
  selector: 'app-menu-compras',
  templateUrl: './menu-compras.component.html',
  styleUrls: ['./menu-compras.component.css']
})
export class MenuComprasComponent {
  pasos: string[] = ['Asientos', 'Seleccione entradas', 'Pago', 'Detalle de compra'];
  pasoActual = 'Asientos';
  ide:number=0
  dia:string=""
  hora:string=""
  cantidadAsientos:any[]=[]
  array:any[]=[]

  constructor(private router: Router,private peliculasS: PictureKingdomService) {
  }
  volverAAsientos() {
    this.array=this.peliculasS.obtenerVentas()
    this.ide=this.array[0]
    this.hora=this.array[1]
    this.dia=this.array[2]
  }
  volverAMetodos() {
    this.array = this.peliculasS.obtenerVentas();
    if (this.array.length >= 4 && this.array[3].value>=1) {
      this.cantidadAsientos = this.array[3];
    }
  }

}
