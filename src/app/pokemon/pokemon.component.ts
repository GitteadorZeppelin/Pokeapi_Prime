import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiKachuService } from '../Servicios/api-kachu.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  pkmn: any;

  constructor(
    private apiKachu: ApiKachuService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getPkmn();
  }

  getPkmn() {
    let num: any;
    this.route.params.subscribe(params => {
      num = params.num;
    });

    this.apiKachu.getPKMN(num).then(datos => {
      this.pkmn = datos;
      console.log(datos.stats);
    })

  }

}
