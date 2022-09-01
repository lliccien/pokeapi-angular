import { Pokemon } from './../../interfaces/pokemnons';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-poke-card',
  templateUrl: './poke-card.component.html',
  styles: [
  ]
})
export class PokeCardComponent implements OnInit {

  @Input() pokemon: Pokemon
  constructor() { }

  ngOnInit(): void {
  }

}
