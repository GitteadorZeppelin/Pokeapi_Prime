import { Component, OnInit } from '@angular/core';
import { ApiKachuService } from '../Servicios/api-kachu.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit {

  listaPkmn: any; 
  constructor(
    private apiKachu: ApiKachuService
  ) { }

  ngOnInit(): void {
    this.getPkmn()
  }


  getPkmn(){
    this.apiKachu.getPkmn().subscribe(datos=>{
      
      this.listaPkmn = datos;
      this.listaPkmn = this.listaPkmn.results
      console.log(this.listaPkmn)
    })
  }
}
