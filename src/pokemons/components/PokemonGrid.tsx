import React from "react";
import {PokemonCard , SimplePokemon} from "@/pokemons";


interface PropsPokemonGrid {
    pokemons: Array<SimplePokemon>;
}


export const PokemonGrid:React.FC<PropsPokemonGrid> = ({pokemons}) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {pokemons.map((pokemon) => (
                <PokemonCard key={pokemon.name} id={pokemon.id} name={pokemon.name} />
            ))}
        </div>
    );
};