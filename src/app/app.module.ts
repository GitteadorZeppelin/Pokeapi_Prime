import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokedexComponent } from './pokedex/pokedex.component';
import { PokedexModule } from './pokedex/pokedex.module';
import { PokemonModule } from './pokemon/pokemon.module';
import { ApiKachuService } from './Servicios/api-kachu.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PokedexModule,
    PokemonModule,
    RouterModule
  ],
  providers: [ApiKachuService, PokedexComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
