import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['heroe.component.scss'],
})
export class HeroeComponent {
  nombre: string = 'Ironman';
  edad: number = 53;

  get nombreCapitalizado(): string {
    return this.nombre.toUpperCase();
  }

  obtenerNombre(): string {
    return `El Heroe ${this.nombre} tiene ${this.edad} años`;
  }

  cambiarNombre(): void {
    this.nombre = 'Spiderman';
  }
  cambiarEdad(): void {
    this.edad = 28;
  }
}
