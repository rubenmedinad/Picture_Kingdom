import { Component } from '@angular/core';
import { Usuarios } from '../_Modules/Usuarios';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  
  guardarDatos(usuario: string, nombre: string, email: string, password: string, confirmPassword: string): void {
    if (usuario && nombre && email && password && confirmPassword && password === confirmPassword) {


      let usuarios= [];
      if (datosExistentes) {
        usuarios = JSON.parse(datosExistentes);
      }

      // Verificar si el usuario ya está registrado
      const usuarioExistente = usuarios.find((user: any) => user.usuario === usuario);

      if (usuarioExistente) {
        alert('Este nombre de usuario ya está registrado. Por favor, elija otro nombre de usuario.');
        return;
      }

      // Verificar si el correo electrónico ya está registrado
      const correoExistente = usuarios.find((user: any) => user.email === email);

      if (correoExistente) {
        alert('Este correo electrónico ya está registrado. Por favor, utilice otro correo electrónico.');
        return;
      }

      const nuevoUsuario = {
        usuario,
        nombre,
        email,
        password
      };

      // Agregar el nuevo usuario a la lista
      usuarios.push(nuevoUsuario);

      // Guardar la lista actualizada en el LocalStorage
      localStorage.setItem('usuarios', JSON.stringify(usuarios));

      // Limpiar los campos del formulario
      this.limpiarCampos();
    } else {
      alert('Por favor, complete todos los campos y asegúrese de que las contraseñas coincidan.');
    }
  }

  limpiarCampos(): void {
    // Limpiar los valores de los campos del formulario
    const inputs = document.getElementsByClassName('large-input') as HTMLCollectionOf<HTMLInputElement>;
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].value = '';
    }
  }
}
