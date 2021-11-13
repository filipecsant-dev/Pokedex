import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pokemon } from '../types/pokemon.service';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  pokemons: Pokemon[] = [];

  constructor(private httpCliente: HttpClient) { 
    this.carregarPokemons();
  }

  async carregarPokemons() {
    const requisicao = await this.httpCliente
    .get<any>('https://pokeapi.co/api/v2/pokemon?limit=100&offset=151')
    .toPromise();

    this.pokemons = requisicao.results;
  }
}
