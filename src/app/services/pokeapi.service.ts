import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pokemnons } from '../interfaces/pokemnons';
import { PokemnonsDetails } from '../interfaces/pokemnons-details';

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {

  constructor(private httpClient: HttpClient) { }

  loadPokemons() {
    const url = `${environment.baseUrl}/pokemon?limit=100000&offset=0`
    return this.httpClient.get<Pokemnons>(url)
  }

  loadPokemondetails(name: string) {
    const url = `${environment.baseUrl}/pokemon/${name}`
    return this.httpClient.get<PokemnonsDetails>(url)
  }
}
