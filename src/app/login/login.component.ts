import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  CORREO: string="";
  contrasena: string="";

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

