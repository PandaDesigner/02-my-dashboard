"use client";
import { PokemonGrid, SimplePokemon } from '@/pokemons';
import { useAppSelector } from '@/store';
import { IoHeart } from 'react-icons/io5';

export default function FavoriteGrid() {
    const pokemons: Array<SimplePokemon> =
        useAppSelector(state => Object.values(state.pokemons.favorites));


    return (
        <>
            {
                pokemons.length === 0
                    ? (<NoFavorites />)
                    : (<PokemonGrid pokemons={pokemons} />)
            }
        </>
    );
};

export const NoFavorites = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen col-span-4">
            <IoHeart size={100} className="text-red-500" />
            <p className="text-2xl font-bold">No hay pokemons favoritos</p>
        </div>
    );
};