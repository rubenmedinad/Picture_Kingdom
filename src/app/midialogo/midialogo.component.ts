import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-midialogo',
  templateUrl: './midialogo.component.html',
  styleUrls: ['./midialogo.component.css']
})
export class MidialogoComponent {
  datos: any;
  imagenSeleccionada: string = "";
  imagenSeleccionada1: string = "assets/azul.jpg";
  imagenSeleccionada2: string = "assets/verde.jpg";
  imagenSeleccionada3: string = "assets/rojo.jpg";

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogoRef: MatDialogRef<MidialogoComponent>
  ) {
    if (data) {
      this.datos = data;
    }
  }

  seleccionarImagen(indice: number) {
    switch (indice) {
      case 1:
        this.imagenSeleccionada = this.imagenSeleccionada1;
        break;
      case 2:
        this.imagenSeleccionada = this.imagenSeleccionada2;
        break;
      case 3:
        this.imagenSeleccionada = this.imagenSeleccionada3;
        break;
      default:
        this.imagenSeleccionada = "";
        break;
    }
  }

  cerrarDialogo() {
    this.dialogoRef.close({ imagenSeleccionada: this.imagenSeleccionada });
  }
}
