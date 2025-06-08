import { configureStore } from '@reduxjs/toolkit'

import counterState from './feature/counter/counterSlice'
import { useDispatch, useSelector } from 'react-redux';
import pokemonSlice from './feature/pokemons/pokemonSlice';
import { localStorageMiddleware } from './middlewares/localstorage-middleware';

export const store = configureStore({
    reducer: {
        counter: counterState,
        pokemons: pokemonSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
        .concat(localStorageMiddleware)
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()