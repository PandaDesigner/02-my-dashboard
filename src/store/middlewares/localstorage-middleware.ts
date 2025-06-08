import { Middleware, MiddlewareAPI, Dispatch, AnyAction } from '@reduxjs/toolkit';
import { RootState } from '..';

export const localStorageMiddleware: Middleware =
    (store: MiddlewareAPI<Dispatch<AnyAction>, RootState>) => (next) => (action) => {
        const result = next(action);

        try {
            const favorites = store.getState().pokemons.favorites;
            localStorage.setItem('favorite-pokemons', JSON.stringify(favorites));
        } catch (e) {
            console.warn('localStorage middleware failed:', e);
        }

        return result;
    };
