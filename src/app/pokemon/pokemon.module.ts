import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonComponent} from './pokemon.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PokemonComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class PokemonModule { }