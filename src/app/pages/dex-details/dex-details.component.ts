import { PokemnonsDetails } from './../../interfaces/pokemnons-details';
import { PokeapiService } from './../../services/pokeapi.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dex-details',
  templateUrl: './dex-details.component.html',
  styles: [
  ]
})
export class DexDetailsComponent implements OnInit {

  pokemonName: string;
  pokemonDetails: PokemnonsDetails

  constructor(private pokeapiService: PokeapiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.pokemonName = this.route.snapshot.params['name']

    this.pokeapiService.loadPokemondetails(this.pokemonName).subscribe(
      details => {
        this.pokemonDetails = details
      }
    )

  }

}
