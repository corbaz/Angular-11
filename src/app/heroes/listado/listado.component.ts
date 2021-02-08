import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss'],
})
export class ListadoComponent implements OnInit {
  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor'];
  delheroes: string[] = [];

  constructor() {}
  ngOnInit(): void {}

  addAllHeroes(): void {
    if (this.heroes.length < 4) {
      this.heroes = ['Spiderman', 'Ironman', 'Hulk', 'Thor'];
      console.log('Agregando Todos los Heroe :>> ', this.heroes);
      this.delheroes = [];
    } else {
      console.log('No hay nada que agregar:>> ');
    }
  }
  deleteAllHeroes(): void {
    if (this.heroes.length > 0) {
      this.delheroes = ['Spiderman', 'Ironman', 'Hulk', 'Thor'];
      console.log('borrando Todos los Heroe :>> ', this.heroes);
      this.heroes = [];
    } else {
      console.log('No hay nada que borrar:>> ');
    }
  }

  deleteFirstHeroe(): void {
    if (this.heroes.length > 0) {
      const addDel: string = this.heroes.shift() || '';
      this.delheroes.push(addDel);
      console.log('borrando Primer Heroe:', addDel);
    } else {
      console.log('No hay nada que borrar:>> ');
    }
  }
  deleteLastHeroe(): void {
    if (this.heroes.length > 0) {
      const addDel: string = this.heroes.pop() || '';
      this.delheroes.push(addDel);
      console.log('borrando Ultimo Heroe :>> ', addDel);
    } else {
      console.log('No hay nada que borrar:>> ');
    }
  }
}
