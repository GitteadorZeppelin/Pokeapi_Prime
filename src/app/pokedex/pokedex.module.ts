import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokedexComponent } from './pokedex.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PokedexComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class PokedexModule { }
