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

  creoClase(tipo1, tipo2){
    if(tipo2 == undefined){
      return tipo1+"-top " + tipo1+"-left " + tipo1+"-right " + tipo1+"-bottom"
    } else {
      return tipo1+"-top " + tipo1+"-left " + tipo2.type.name+"-right " + tipo2.type.name+"-bottom"
    }
  }

}
