import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiKachuService {

  url = "https://pokeapi.co/api/v2/pokemon?limit=898&offset=0"

  constructor(
    private http: HttpClient
  ) { }


  getPKMN(id): Promise<any>{
    return this.http.get("https://pokeapi.co/api/v2/pokemon/" + id + "/").toPromise()
  }
}
