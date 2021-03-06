import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApikachuService } from '../apikachu.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  pkmn: any;
  urlimg: string;
  constructor(
    private apiKachu: ApikachuService,
    private route: ActivatedRoute
  ) { 

    this.pkmn = "";
    this.urlimg = "";
  }

  ngOnInit(): void {
    this.getPkmn();
  }

  getPkmn() {
    let num: any;
    this.route.params.subscribe(params => {
      num = params;
      num = num.num
    });
    this.apiKachu.getPKMN(num).then(datos => {
      this.pkmn = datos;
      console.log(datos);
    })
  }

  creoClase(tipo1: any, tipo2: any){
    if(tipo2 == undefined){
      return tipo1+"-top " + tipo1+"-left " + tipo1+"-right " + tipo1+"-bottom"
    } else {
      return tipo1+"-top " + tipo1+"-left " + tipo2.type.name+"-right " + tipo2.type.name+"-bottom"
    }
  }

  creoClaseTipo(tipo1: any){
      return tipo1+"-top " + tipo1+"-left " + tipo1+"-right " + tipo1+"-bottom"
  }

}
