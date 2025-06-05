'use client';

import { FC } from 'react';
import { store } from './index';
import { Provider } from 'react-redux';

interface PropsProviders {
    children: React.ReactNode;
}

export const Providers: FC<PropsProviders> = ({ children }) => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}
