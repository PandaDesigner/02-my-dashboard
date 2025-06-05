import Image from 'next/image';
import React from 'react'
import {
    IoBasketballOutline,
    IoBrowsersOutline,
    IoCalculatorOutline,
    IoHeartOutline,
    IoLogoReact
} from 'react-icons/io5';
import { SidebarMenuItem } from './SidebarMenuItem';




const menuItemArray = [
    {
        path: '/dashboard/main',
        icon: <IoBrowsersOutline size={40} />,
        title: 'Dashboard',
        subTitle: 'Visualization',
    },
    {
        path: '/dashboard/counter',
        icon: <IoCalculatorOutline size={40} />,
        title: 'Counter',
        subTitle: 'Counter Client Side'
    },
    {
        path: '/dashboard/pokemons',
        icon: <IoBasketballOutline size={40} />,
        title: 'Pokemons',
        subTitle: 'Pokemons API'
    },
    {
        path: '/dashboard/favorites',
        icon: <IoHeartOutline size={40} />,
        title: 'Favorites',
        subTitle: 'Pokemons Favorites'
    }
]


export const Sidebar: React.FC = () => {
    return (
        <div id="menu"
            style={{
                width: '400px'
            }}
            className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64 left-0">
            <div id="logo" className="my-4 px-6">
                <h1 className="text-lg md:text-2xl font-bold text-white flex items-center">
                    <IoLogoReact />
                    {' '}Dash
                    <span className="text-blue-500">8</span>.
                </h1>
                <p className="text-slate-500 text-sm">Manage your actions and activities</p>
            </div>

            <div id="profile" className="px-6 py-10">
                <p className="text-slate-500">Welcome back,</p>
                <a href="#" className="inline-flex space-x-2 items-center">
                    <span>
                        <Image className="rounded-full w-8 h-8"
                            src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c"
                            width={50}
                            height={50}
                            alt="Avatar"
                        />
                    </span>
                    <span className="text-sm md:text-base font-bold">
                        Pedro Fernández
                    </span>
                </a>
            </div>

            <div id="nav" className="w-full px-6">

                {menuItemArray.map((itemLink) => {
                    const keyItem = `menu-${itemLink.path}`
                    return <SidebarMenuItem
                        key={keyItem}
                        path={itemLink.path}
                        icon={itemLink.icon}
                        title={itemLink.title}
                        subTitle={itemLink.subTitle} />
                })}
            </div>
        </div>
    )
}
