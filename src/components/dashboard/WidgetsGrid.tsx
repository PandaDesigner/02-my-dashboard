"use client";
import React from "react";
import { SimpleWidget } from "./SimpleWidget";
import { useAppSelector } from "@/store";
import { IoCart } from "react-icons/io5";

export default function WidgetsGrid(): React.JSX.Element {

    const isCartValue = useAppSelector(state => state.counter.count);

    return (
        <div className='w-full grid grid-cols-1 md:grid-cols-2 
    lg:grid-cols-3 gap-4'>

            <SimpleWidget
                label='contador'
                title={isCartValue}
                subtitle='contador de productos'
                icon={<IoCart size={50} className='text-indigo-500' />}
                href='/dashboard/counter'
            />
            <SimpleWidget />
            <SimpleWidget />
        </div>
    )
}
