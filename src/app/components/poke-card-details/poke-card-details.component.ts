import { PokemnonsDetails } from './../../interfaces/pokemnons-details';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-poke-card-details',
  templateUrl: './poke-card-details.component.html',
  styles: [
    'img { width: 400px; display: block; margin: 0px auto; }'
  ]
})
export class PokeCardDetailsComponent implements OnInit {

  @Input() pokemonDetails: PokemnonsDetails

  constructor() { }

  ngOnInit(): void {
  }

}
