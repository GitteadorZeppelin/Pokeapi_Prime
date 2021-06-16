import { Component, OnInit } from '@angular/core';
import { ApiKachuService } from '../Servicios/api-kachu.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit {

  listaPkmn = [];

  constructor(
    private apiKachu: ApiKachuService
  ) { }

  ngOnInit(): void {
    this.getPkmn(1);
  }


  getPkmn(page) {
    this.listaPkmn = [];
    for (let x = ((page-1)*12)+1; x <= (page*12); x++) {
      this.apiKachu.getPKMN(x).then(datos => {
        this.listaPkmn[datos.id-1] = datos
      }) 
    }    
  }

}
