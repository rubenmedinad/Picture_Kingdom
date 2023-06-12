import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PerfilPrueba } from '../_Modules/PerfilPrueba';
import { Usuarios } from '../_Modules/Usuarios';
import { PictureKingdomService } from '../picture-kingdom.service';
import { BasedeDatosService } from '../basede-datos.service';
import * as CryptoJS from 'crypto-js';
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {
  constructor(private menuService: PictureKingdomService,private servicio: BasedeDatosService,private rutes: Router) {}
  user:Usuarios = new Usuarios("","","","","")
  usuarios: Usuarios[] = []
  secretKey: string = "1234"
  isLoggedIn: boolean = false
  ngOnInit(){
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
          localStorage.removeItem('user');
          window.location.reload();
        }
        if (decryptedPassword !== null) {
          this.isLoggedIn = true;
        } else {
          this.isLoggedIn = false;
        }
      })
    } else {
      this.rutes.navigate(['/login']);
    }
  }
  cerrarSesion(){
    localStorage.removeItem('user');
    this.rutes.navigate(['/login']);
  }

}
