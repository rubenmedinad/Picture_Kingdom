import { Component } from '@angular/core';
import { Usuarios } from '../_Modules/Usuarios';
import { PictureKingdomService } from '../picture-kingdom.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BasedeDatosService } from '../basede-datos.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  contrasenasCoinciden: boolean = true;
  usuarioCoincide: boolean = true;
  usuario: string = "";
  nombre: string="";
  email: string="";
  password: string="";
  confirmPassword: string="";
  user:Usuarios = new Usuarios("","","","","");
  usuarios: Usuarios[] = [];
  registroExitoso:boolean = false;
  constructor(
    private peliculasS: PictureKingdomService,
    private activarrutas: ActivatedRoute,
    private rutes: Router,
    private servicio: BasedeDatosService
  ) {
  }

  registrarUsuario(): void {
    if (this.password !== this.confirmPassword) {
      this.contrasenasCoinciden = false;
      return;
    }
    this.contrasenasCoinciden = true;

    this.servicio.listarusuarios().subscribe(datos => {
      this.usuarios = datos;
      console.log(this.usuarios);
      const usuarioExistente = this.usuarios.find((u) => u.usuario === this.usuario);

      if (usuarioExistente) {
        this.usuarioCoincide = false;
        return;
      }
      this.usuarioCoincide = true;

      this.user = new Usuarios(
        this.usuario,
        this.password,
        this.nombre,
        this.email,"../../assets/azul.jpg"
      );
      console.log(this.user);

      this.servicio.agregarUsuario(this.user).subscribe(
        (response) => {
          // Manejar la respuesta del servidor
        },
        (error) => {
          // Manejar el error de la solicitud
        }
      );

      this.registroExitoso = true;
      setTimeout(() => {
        this.registroExitoso = false;
        this.rutes.navigate(['/login']);
      }, 3000);

    });
  }

}
