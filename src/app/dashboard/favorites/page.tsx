import { PokemonGrid } from "../../../pokemons";
import React from "react";
export const metadata = {
    title: 'Favorites',
    description: 'Pokemon Client Side'
}

export default async function FavoritePage() {

    return (
        <>
            <h1>pokemon page</h1>
            <span className="text-5xl">
                listado de Pokemons <small>favoritos</small>
            </span>
            <PokemonGrid pokemons={[]} />
        </>
    );
};
