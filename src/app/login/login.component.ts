import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router) {}
  CORREO: string = "";
  contrasena: string = "";

  navegarPerfil() {
    this.router.navigate(['/perfil']);
  }
  onSubmit() {
    // Accede a los valores de los campos
    console.log(this.CORREO);
    console.log(this.contrasena);

    // Lógica para manejar el envío del formulario

  }
  /*function verificarContrasena(String contrasena) {
    // Reglas para la contraseña
    const reglas = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        if (reglas.test(contrasena)) {
      return true;
    } else {
      return false; // Contraseña inválida
    }
  }

  // Ejemplo de uso
  const contrasenaIngresada = "MiContraseña123!";
  const esValida = verificarContrasena(contrasenaIngresada);

  if (esValida) {
    console.log("La contraseña es válida.");
  } else {
    console.log("La contraseña es inválida.");
  }*/

}

