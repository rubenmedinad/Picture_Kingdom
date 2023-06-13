import { Component } from '@angular/core';
import { PictureKingdomService } from '../picture-kingdom.service';
import { Perfil } from '../_Modules/Perfil';
import { MatDialog, MatDialogRef } from '@angular/material/dialog'; // Asegúrate de importar MatDialogRef también
import { MidialogoComponent } from '../midialogo/midialogo.component';
import { BasedeDatosService } from '../basede-datos.service';
import { Router } from '@angular/router';
import { Usuarios } from '../_Modules/Usuarios';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-editarperfil',
  templateUrl: './editarperfil.component.html',
  styleUrls: ['./editarperfil.component.css']
})
export class EditarperfilComponent {
  editar: any;
  perfil: Perfil;
  editarfoto: string = '../../assets/azul.jpg';
  imagenSeleccionada: string = '';
  user:Usuarios = new Usuarios("","","","","");
  usuarios: Usuarios[] = [];
  nuevaContrasena: string = '';
  secretKey: string = "1234";
  isLoggedIn: boolean = false;

  constructor(private pictureKingdomService: PictureKingdomService, public dialog: MatDialog, private menuService: PictureKingdomService,private servicio: BasedeDatosService,private rutes: Router) {
    this.perfil = new Perfil('', '', '', '', '', '', 0);
    this.editar = {};
  }

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

  openDialog(): void {
    const dialogRef = this.dialog.open(MidialogoComponent, {
      width: '250px',
      data: { imagenSeleccionada: this.editarfoto }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

      if (result) {
        this.editarfoto = result;
        console.log(this.editarfoto)
      }
    });
  }

  guardar(){
    // Asignar los valores ingresados a las propiedades del objeto user
    this.user.nombre = this.user.nombre;
    this.user.correo_electronico = this.user.correo_electronico;
    this.user.img = this.editarfoto;

    if (this.nuevaContrasena) {
      // Si se ingresó una nueva contraseña, actualizarla
      this.user.pass = this.nuevaContrasena;
    }

    this.servicio.agregarUsuario(this.user).subscribe(
      (response) => {
        // Manejar la respuesta del servidor
      },
      (error) => {
        // Manejar el error de la solicitud
      }
    );

    this.rutes.navigate(['/perfil']);
  }
}
