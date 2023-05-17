import { Component } from '@angular/core';

interface Seat {
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
  styleUrls: ['./asientos.component.css']
})
export class AsientosComponent {
  seats: Row[] = [];

  constructor() {
    for (let i = 1; i <= 12; i++) {
      let row: Row = { name: String.fromCharCode(64 + i), seats: [] };
      for (let j = 1; j <= 14; j++) {
        let seat: Seat = { name: j, occupied: false, selected: false };
        row.seats.push(seat);
      }
      this.seats.push(row);
    }
  }

  toggleSeatSelection(seat: Seat) {
    if (!seat.occupied) {
      seat.selected = !seat.selected;
    }
  }
  reserveSeat() {
    // Encontrar los asientos seleccionados
    const selectedSeats = this.seats.reduce<Seat[]>((acc, row) => {
      const seats = row.seats.filter(seat => seat.selected);
      return acc.concat(seats);
    }, []);

    // Marcar los asientos seleccionados como ocupados y reiniciar la selección
    selectedSeats.forEach(seat => {
      seat.occupied = true;
      seat.selected = false;
    });
}

}
