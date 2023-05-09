import { Component } from '@angular/core';
import { PictureKingdomService } from './picture-kingdom.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Picture_Kingdom';
  menuItems: any[];

  constructor(private menuService: PictureKingdomService) {
    this.menuItems = menuService.menuItems;
  }
}
