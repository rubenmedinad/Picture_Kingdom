import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MisEntradas } from '../_Modules/MisEntradas';
import { PictureKingdomService } from '../picture-kingdom.service';
import { BasedeDatosService } from '../basede-datos.service';
import { Ventas } from '../_Modules/Ventas';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-misentradas',
  templateUrl: './misentradas.component.html',
  styleUrls: ['./misentradas.component.css']
})
export class MisentradasComponent {
  ventas:Ventas[]=[]
  secretKey: string = "1234"

  constructor(private peliculasS: PictureKingdomService,
    private activarrutas: ActivatedRoute,
    private rutes: Router,
    private servicio: BasedeDatosService) {}

  ngOnInit() {
    this.servicio.listarventas().subscribe(datos => {
      this.ventas = datos;
      console.log(this.ventas);

      const userStorage = localStorage.getItem('user');
      if (userStorage !== null) {
        // Desencriptar la contraseña
        const decryptedBytes = CryptoJS.AES.decrypt(userStorage, this.secretKey);
        const decryptedPassword = decryptedBytes.toString(CryptoJS.enc.Utf8);

        // Filtrar el array por decryptedPassword
        this.ventas = this.ventas.filter(venta => venta.usuario === decryptedPassword);
      } else {
        this.rutes.navigate(['/login']);
      }
    });
  }
  descargarPDF(entrada: MisEntradas) {
    
  }
}
