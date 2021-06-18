import { Component, OnInit } from '@angular/core';
import { ApiKachuService } from '../Servicios/api-kachu.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit {

  listaPkmn = [];
  page: number;
  constructor(
    private apiKachu: ApiKachuService
  ) { }

  ngOnInit(): void {
    this.page = 1;
    this.getPkmn(this.page);
  }


  async getPkmn(page) {
    this.listaPkmn = [];
    let contador = 1;
    console.log(page)
    for (let x = ((page-1)*12)+1; x <= (page*12); x++) {
      await this.apiKachu.getPKMN(x).then(datos => {
        this.listaPkmn[contador-1] = datos
        contador++
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

  adelante(){
    this.page++;
    console.log(this.page)
    this.getPkmn(this.page);
  }
  atras(){
    this.page--;
    this.getPkmn(this.page);
  }
}
