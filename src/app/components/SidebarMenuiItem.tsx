'use client';

import Link, { LinkProps } from 'next/link'
import { usePathname } from 'next/navigation';
import React, { JSX, useEffect } from 'react'
import { MdOutlineImageNotSupported } from 'react-icons/md';


interface Props {
    path: string;
    icon?: JSX.Element;
    title: string;
    subTitle: string;
    res?: Omit<LinkProps, 'href'>
}


export const SidebarMenuItem: React.FC<Props> = ({
    path = '#',
    icon = <MdOutlineImageNotSupported size={40} />,
    title = 'No title',
    subTitle = 'No sub title',
    ...res
}) => {
    const isPathActive = usePathname();
    const [linkValidation, setLinkValidation] = React.useState(false);

    useEffect(() => {
        const isValid = new RegExp(path).test(isPathActive);
        setLinkValidation(isValid);
    }, [path, isPathActive]);



    return (
        <Link
            href={path}
            {...res}
            className={`w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 hover:bg-white/5 transition ease-linear duration-150 ${linkValidation ? 'bg-blue-700' : ''}`}
        >
            {icon}
            <div className="flex flex-col">
                <span className="text-lg font-bold leading-5 text-white">{title}</span>
                <span className="text-sm text-white/50 hidden md:block">{subTitle}</span>
            </div>
        </Link>
    )
}
