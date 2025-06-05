import {PokemonsResponse , SimplePokemon, PokemonGrid} from "../../../pokemons";
import React from "react";

const getPokemons = async (limit=20, offset=0):Promise<Array<SimplePokemon>> => {
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)

    const res:PokemonsResponse = await data.json();
    return res.results.map ( ( pokemon ) => {
        const id = pokemon.url.split ( '/' ).at ( -2 )!;
        return {
            id ,
            name : pokemon.name
        };
    } );
}

export const metadata = {
    title: 'Pokemon',
    description: 'Pokemon Client Side'
}

export default async function  PokemonPage ()  {
    const pokemons = await getPokemons(151);
    return (
        <>
            <h1>pokemon page</h1>
                <span className="text-5xl">listado de Pokemons <small>estaticos</small></span>
                <PokemonGrid pokemons={pokemons}/>
        </>
    );
};
