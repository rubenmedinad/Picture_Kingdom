import { Component} from '@angular/core';
import { AsientosComponent } from '../asientos/asientos.component';
import { Promocion1Component } from '../promocion1/promocion1.component';
import { Promocion2Component } from '../promocion2/promocion2.component';

@Component({
  selector: 'app-menu-compras',
  templateUrl: './menu-compras.component.html',
  styleUrls: ['./menu-compras.component.css']
})
export class MenuComprasComponent {

  tabs = [
    { label: 'Inicio', route: '/asientos', component: AsientosComponent },
    { label: 'Acerca', route: '/promocion1', component: Promocion1Component },
    { label: 'Contacto', route: '/promocion2', component: Promocion2Component }
  ];

  activeTab = 0;

  setActiveTab(index: number) {
    this.activeTab = index;
  }
}



