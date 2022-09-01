import { Pokemon } from './../../interfaces/pokemnons';
import { PokeapiService } from './../../services/pokeapi.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dex',
  templateUrl: './dex.component.html',
  styles: [
  ]
})
export class DexComponent implements OnInit {

  pokemons:Pokemon[];

  constructor(private pokeapiService: PokeapiService) { }

  ngOnInit(): void {
    this.pokeapiService.loadPokemons().subscribe(
      pokemons => {
        this.pokemons = pokemons.results
      }
    )
  }

}
