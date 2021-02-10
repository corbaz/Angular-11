import { Component, Input, OnInit } from '@angular/core';
import { Jugador } from '../interfaces/interfaces-jugadores';

@Component({
  selector: 'app-jugadores',
  templateUrl: './jugadores.component.html',
  styleUrls: ['./jugadores.component.scss'],
})
export class JugadoresComponent implements OnInit {
  @Input() data: Jugador[] = [];
  constructor() {}

  ngOnInit(): void {}
}
