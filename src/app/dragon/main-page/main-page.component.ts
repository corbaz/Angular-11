import { Component, OnInit } from '@angular/core';
import { Jugador } from '../interfaces/interfaces-jugadores';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  nuevo: Jugador = {
    name: '',
    category: 0,
    side: 'revés - drive',
  };

  jugadores: Jugador[] = [
    {
      name: 'Bengoa',
      category: 1,
      side: 'drive',
    },
    {
      name: 'Corbaz',
      category: 6,
      side: 'reves',
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  agregar(): void {
    if (
      this.nuevo.name.trim().length > 0 &&
      this.nuevo.category > 0 &&
      this.nuevo.category < 8 &&
      (this.nuevo.side === 'drive' || this.nuevo.side === 'revés')
    ) {
      this.jugadores.push(this.nuevo);
      console.log('Grabado', this.nuevo);
      console.log('Listado', this.jugadores);
    } else {
      console.log('Datos Erroneo :>> ');
    }
    this.nuevo = {
      name: '',
      category: 0,
      side: 'revés - drive',
    };
  }
}
