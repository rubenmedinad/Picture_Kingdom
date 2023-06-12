import { Component } from '@angular/core';
import { PictureKingdomService } from './picture-kingdom.service';
import { Usuarios } from './_Modules/Usuarios';
import { BasedeDatosService } from './basede-datos.service';
import * as CryptoJS from 'crypto-js';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Picture_Kingdom'
  menuItems: any[]
  isLoggedIn: boolean = false
  user:Usuarios = new Usuarios("","","","","")
  usuarios: Usuarios[] = []
  secretKey: string = "1234"
  us:string=""
  constructor(private menuService: PictureKingdomService,private servicio: BasedeDatosService,private rutes: Router) {
    this.menuItems = menuService.menuItems;
  }
  ngOnInit() {

    const userStorage = localStorage.getItem('user');
    if (userStorage !== null) {
      // Desencriptar la contraseña
      const decryptedBytes = CryptoJS.AES.decrypt(userStorage, this.secretKey);
      const decryptedPassword = decryptedBytes.toString(CryptoJS.enc.Utf8);
      console.log(decryptedPassword)
      this.servicio.listarusuarios().subscribe(datos => {
        this.usuarios = datos;
        console.log(this.usuarios);
        const usuarioExistente = this.usuarios.find(usuario => usuario.usuario === decryptedPassword);

        if (usuarioExistente) {
          this.user = usuarioExistente
          console.log(this.user)
        }else{
          localStorage.removeItem('user'); // Eliminar el valor del localStorage
          window.location.reload();
        }
        if (decryptedPassword !== null) {
          this.isLoggedIn = true;
        } else {
          this.isLoggedIn = false;
        }
      })
    } else {
      this.isLoggedIn = false;
    }
  }
}
