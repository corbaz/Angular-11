import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `
    <h1>{{ title }}</h1>
    <h3>la base es {{ base }}</h3>
    <button (click)="acumular(base)">{{ base }}</button>
    <span>{{ nro }}</span>
    <button (click)="acumular(-base)">-{{ base }}</button>
  `,
  styleUrls: ['./contador.component.scss'],
})
export class ContadorComponent {
  public title: string = 'Contador';
  public nro: number = 0;
  public base: number = 5;

  sumar() {
    this.nro += 1;
  }
  restar() {
    this.nro -= 1;
  }

  acumular(valor: number) {
    this.nro += valor;
  }
}
