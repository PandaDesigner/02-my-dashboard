import { SimplePokemon } from "@/pokemons";
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface FavoriteState {
    [key: string]: SimplePokemon
}

interface PokemonState {
    favorites: FavoriteState
}

// // Get initial state from localStorage if available
// const getInitialState = (): PokemonState => {
//     // Return empty state if running on server
//     if (typeof window === 'undefined') {
//         return { favorites: {} };
//     }

//     const stored = localStorage.getItem('favorite-pokemons');
//     return stored ? JSON.parse(stored) : { favorites: {} };
// }

const initialState: PokemonState = {
    favorites: {}
}

const pokemonSlice = createSlice({
    name: 'pokemons',
    initialState,
    reducers: {
        toggleFavorite(state, action: PayloadAction<SimplePokemon>) {
            const pokemon = action.payload;
            const { id } = pokemon;

            if (!!state.favorites[id]) {
                delete state.favorites[id];
            } else {
                state.favorites[id] = pokemon;
            }

            // Save updated state to localStorage
            // if (typeof window !== 'undefined') {
            //     localStorage.setItem('favorite-pokemons',
            //         JSON.stringify(state.favorites));
            // }
        }
    }
});

export const { toggleFavorite } = pokemonSlice.actions;

export default pokemonSlice.reducer;
