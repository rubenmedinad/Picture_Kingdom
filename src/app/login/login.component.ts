import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PictureKingdomService } from '../picture-kingdom.service';
import { BasedeDatosService } from '../basede-datos.service';
import { Usuarios } from '../_Modules/Usuarios';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario: string = "";
  pass: string = "";
  usuarios: Usuarios[] = [];
  usuarioNoEncontrado:boolean = false
  userEncontrado:boolean = false
  secretKey: string = "1234";

  constructor(private peliculasS: PictureKingdomService,
    private activarrutas: ActivatedRoute,
    private rutes: Router,
    private servicio: BasedeDatosService) {}

  ngOnInit() {
  }

  login(){
    this.servicio.listarusuarios().subscribe(datos => {
      this.usuarios = datos;


      const usuarioEncontrado = this.usuarios.find((usuario) => usuario.usuario === this.usuario && usuario.pass === this.pass);
      this.userEncontrado = usuarioEncontrado !== undefined;

      if (this.userEncontrado) {
        // Encriptar la contraseña
        const password = this.usuario;
        const encryptedPassword = CryptoJS.AES.encrypt(password, this.secretKey).toString();


        localStorage.setItem('user', encryptedPassword);

        this.rutes.navigate(['/perfil']);

        // Desencriptar la contraseña
        const decryptedBytes = CryptoJS.AES.decrypt(encryptedPassword, this.secretKey);
        const decryptedPassword = decryptedBytes.toString(CryptoJS.enc.Utf8);
      } else {
        this.usuarioNoEncontrado = true;
      }
    });
  }
}
