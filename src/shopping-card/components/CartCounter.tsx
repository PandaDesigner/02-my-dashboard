'use client';
import React from 'react';

export const CartCounter = ( ) => {
    const [count, setCount] = React.useState(10);
    const handleCount = ( num: number ): void => {
        setCount ( prevCount => Math.max ( prevCount + num , 0 ) )
    };
    return (
        <>
            <span> Productos en el carrito</span>
            <span className="text-9xl">{ count }</span>
            <div className="flex space-x-4 mt-4">
                <button className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                        onClick={ () => handleCount(1) }
                >
                    +1
                </button>
                <button className="bg-red-900 text-white px-4 py-2 rounded hover:bg-red-600 transition"
                        onClick={ () => handleCount(-1) }
                >
                    -1
                </button>
            </div>
        </>
    );
};
