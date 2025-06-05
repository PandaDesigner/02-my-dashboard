
export interface PokemonsResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<PokemonListItem>
}

export interface PokemonListItem {
  name: string;
  url: string;
}
