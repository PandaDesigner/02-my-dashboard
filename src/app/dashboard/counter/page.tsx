import React from "react";
import { CartCounter } from "@/shopping-card";


export const metadata = {
    title: 'Shopping Cart',
    description: 'Counter Client Side'
}

export default function CounterPage() {

    return (
        <div className="flex flex-col items-center justify-center w-full h-full">
            <h1>Shopping cart</h1>
            <CartCounter value={0} />
        </div>
    );
}