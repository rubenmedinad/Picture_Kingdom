import { Component } from '@angular/core';
import { PictureKingdomService } from '../picture-kingdom.service';
import { Perfil } from '../_Modules/Perfil';
import { MatDialog, MatDialogRef } from '@angular/material/dialog'; // Asegúrate de importar MatDialogRef también
import { MidialogoComponent } from '../midialogo/midialogo.component';

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

  constructor(private pictureKingdomService: PictureKingdomService, public dialog: MatDialog) {
    this.perfil = new Perfil('', '', '', '', '', '', 0);
    this.editar = {};
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
      }
    });
  }
}
