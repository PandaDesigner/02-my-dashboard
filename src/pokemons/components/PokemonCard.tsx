"use client";
import Image from "next/image";
import React from "react";
import { SimplePokemon } from "@/pokemons";
import Link from "next/link";
import { IoHeartOutline, IoHeartSharp } from "react-icons/io5";
import { useAppDispatch, useAppSelector } from '@/store';
import { toggleFavorite } from '@/store/feature/pokemons/pokemonSlice';



export const PokemonCard: React.FC<SimplePokemon> = ({ id, name }) => {
    const isFavorite = useAppSelector(state => !!state.pokemons.favorites[id]);
    const dispatch = useAppDispatch();
    const onToggle = () => {
        dispatch(toggleFavorite({ id, name }))
    }
    return (
        <div className="mx-auto right-0 mt-2 w-full min-w-45 ">
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
                <div className="text-center p-6 bg-slate-800 border-b flex flex-col items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center object-contain">
                        <Image
                            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
                            alt={name}
                            width={70}
                            height={70}
                            priority={false}
                            className="object-contain"
                        />
                    </div>
                    <p className="pt-2 text-lg font-semibold text-gray-50 capitalize">{name}</p>
                    <div className="mt-5">
                        <Link
                            className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100"
                            href={`/dashboard/pokemons/${name}`}
                        >
                            Más información
                        </Link>
                    </div>
                </div>
                <div>
                    <div
                        onClick={onToggle}
                        className="px-4 py-2 hover:bg-gray-100 flex cursor-pointer" >
                        <div className="text-red-600">
                            {
                                isFavorite
                                    ? (<IoHeartSharp />)
                                    : (<IoHeartOutline />)
                            }
                        </div>
                        <div className="pl-3">
                            <p
                                className="text-sm font-medium text-gray-800 leading-none">
                                {
                                    isFavorite
                                        ? 'Es Favorito'
                                        : 'No es Favorito'
                                }
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};