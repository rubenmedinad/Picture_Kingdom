import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  correo: string = "";
  contrasena: string = "";

  constructor(private router: Router) {}

  ngOnInit() {
  }

  navegarPerfil() {
    const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
    const usuarioExistente = usuarios.find((user: any) => user.email === this.correo && user.password === this.contrasena);

    if (usuarioExistente) {
      this.router.navigate(['/perfil']);
      alert("Has iniciado sesión con éxito");
    } else {
      alert("El usuario no existe o la contraseña es incorrecta");
    }
  }

  onSubmit() {
    console.log(this.correo);
    console.log(this.contrasena);
  }
}
