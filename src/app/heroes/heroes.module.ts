import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
  declarations: [HeroeComponent, ListadoComponent],
  exports: [ListadoComponent],
  imports: [CommonModule],
})

// la class se debe llamar com el archivo heroes.module Herores Module
export class HeroesModule {}
