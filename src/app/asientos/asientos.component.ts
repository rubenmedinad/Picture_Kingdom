import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PictureKingdomService } from '../picture-kingdom.service';
import { BasedeDatosService } from '../basede-datos.service';
import { Asientos } from '../_Modules/Asientos';

interface Seat {
  row: string;
  name: number;
  occupied: boolean;
  selected: boolean;
}
interface Row {
  name: string;
  seats: Seat[];
}
@Component({
  selector: 'app-asientos',
  templateUrl: './asientos.component.html',
  styleUrls: ['./asientos.component.css'],
})
export class AsientosComponent {
  asientos : Asientos[] =[]
  seats: Row[] = [];
  selectedSeats: { row: string; seat: number }[] = [];
  pasoActual = 'Asientos';
  cantidadAsientos: number = 0;
  constructor(
    private router: Router,
    private peliculasS: PictureKingdomService,
    private servicio: BasedeDatosService
  ) {
    for (let i = 1; i <= 10; i++) {
      let row: Row = { name: String.fromCharCode(75 - i), seats: [] };

      for (let j = 1; j <= 14; j++) {
        let seat: Seat = {
          row: row.name,
          name: j,
          occupied: false,
          selected: false,
        };
        row.seats.push(seat);
      }
      this.seats.push(row);
    }
  }
  ngOnInit() {
    this.servicio.listarasientos().subscribe(datos => this.asientos=datos);
    if (this.peliculasS.obtenerVentas().length >= 4) {
      this.peliculasS.eliminarUltimoElemento(3);
   

    }
  }
  toggleSeatSelection(seat: Seat) {
    if (!seat.occupied) {
      seat.selected = !seat.selected;
      if (seat.selected) {
        const selectedSeat = { row: seat.row, seat: seat.name };
        this.selectedSeats.push(selectedSeat);
      } else {
        this.selectedSeats = this.selectedSeats.filter(
          (selectedSeat) =>
            selectedSeat.row !== seat.row || selectedSeat.seat !== seat.name
        );
      }
    }
  }
  reserveSeat() {
    // Encontrar los asientos seleccionados
    const selectedSeats = this.seats.reduce<Seat[]>((acc, row) => {
      const seats = row.seats.filter((seat) => seat.selected);
      return acc.concat(seats);
    }, []); // Marcar los asientos seleccionados como ocupados y reiniciar la selección
    selectedSeats.forEach((seat) => {
      seat.occupied = true;

      seat.selected = false;
    });
  }

  ActualizarArray() {
    this.cantidadAsientos = this.selectedSeats.length;
    console.log(this.cantidadAsientos);
    this.peliculasS.rellenarVentas({ Asientos: this.selectedSeats });
  }
}
