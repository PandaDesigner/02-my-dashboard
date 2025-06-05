'use client';
import { useAppDispatch, useAppSelector } from '@/store';
import { addOne, initCountState, subtractOne } from '@/store/feature/counter/counterSlice';
import React, { FC, useEffect } from 'react';


interface PageProps {
    value?: number
}

interface CounterResponse {
    count: number;
    method: string;
    url: string;
    headers: Headers;
}

const getApiCounter = async (): Promise<CounterResponse> => {
    const res = await fetch('/api/counter')
    return await res.json()
}

export const CartCounter: FC<PageProps> = ({ value = 0 }) => {

    const count = useAppSelector(state => state.counter.count);
    const dispatch = useAppDispatch();

    useEffect(() => {

        if (value > 0) dispatch(initCountState(value))
        const data = getApiCounter()
        data.then((res) => {
            if (res.count === 0) return
            if (res.count === value) return
            if (res.count && value === 0) {
                dispatch(initCountState(res.count))
                return
            }
        })

    }, [dispatch, value])


    return (
        <>
            <span> Productos en el carrito </span>
            <span className="text-9xl">{count}</span>
            <div className="flex space-x-4 mt-4">
                <button
                    className="bg-blue-900 text-white px-4 py-2 
                rounded hover:bg-blue-600 transition"
                    onClick={() => dispatch(addOne())}
                >
                    +1
                </button>
                <button className="bg-red-900 text-white px-4 py-2 
                rounded hover:bg-red-600 transition"
                    onClick={() => dispatch(subtractOne())}
                >
                    -1
                </button>
            </div>
        </>
    );
};
