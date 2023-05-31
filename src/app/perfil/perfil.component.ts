import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PerfilPrueba } from '../_Modules/PerfilPrueba';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {
  constructor(private router: Router) {}
  perfil: PerfilPrueba = new PerfilPrueba("Ismael", "Penalva", "1", "aprobado@gmail.com", 1234);

  editarperfil() {
    this.router.navigate(['/editarperfil']);
  }
}