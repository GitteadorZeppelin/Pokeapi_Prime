import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PokemonComponent } from './pokemon.component';



@NgModule({
  declarations: [PokemonComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class PokemonModule { }
