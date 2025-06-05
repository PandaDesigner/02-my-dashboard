import React from "react";

export default function MainLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <div className='text-slate-900 p-4 w-full'>
            {children}
        </div>
    );
}