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
  cumpleRequisitos: boolean = true;
  usuario: string = "";
  nombre: string = "";
  email: string = "";
  password: string = "";
  confirmPassword: string = "";
  user: Usuarios = new Usuarios("", "", "", "", "");
  usuarios: Usuarios[] = [];
  registroExitoso: boolean = false;

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
      this.cumpleRequisitos = true; // Reiniciar el estado de validación
      return;
    }
    this.contrasenasCoinciden = true;

    // Validar la contraseña
    const regex = /^(?=.*\d.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
    if (!regex.test(this.password)) {
      this.cumpleRequisitos = false;
      return;
    }
    this.cumpleRequisitos = true;

    this.servicio.listarusuarios().subscribe(datos => {
      this.usuarios = datos;
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
        this.email,
        "../../assets/azul.jpg"
      );


      this.servicio.agregarUsuario(this.user).subscribe(
        (response) => {

        },
        (error) => {

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
