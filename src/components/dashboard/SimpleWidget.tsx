import Link from 'next/link'
import { FC } from 'react'
import { IoCafeOutline } from 'react-icons/io5'


interface SimpleWidgetProps {
    title?: string | number
    subtitle?: string
    label?: string
    icon?: React.ReactNode
    href?: string
    value?: number
    className?: React.HTMLAttributes<HTMLDivElement>['className']
}

export const SimpleWidget: FC<SimpleWidgetProps> = ({
    title,
    subtitle,
    label,
    icon,
    href,
    value,
    className
}) => {
    return (
        <div className={`bg-white shadow-xl p-3 sm:min-w-[25%] min-w-full w-full  rounded-2xl border-1 border-gray-50 ${className}`}>
            <div className="flex flex-col">
                {label && <div>
                    <h2 className="font-bold text-gray-600 text-center">{label}</h2>
                </div>
                }
                <div className="my-3">
                    <div className="flex flex-row items-center 
                    justify-center space-x-1 ">
                        {value && <div>
                            <h3 className="text-4xl text-gray-600 font-bold">{value}</h3>
                        </div>}
                        {icon && <div id="icon">
                            {icon ||
                                <IoCafeOutline size={50} className='text-indigo-500' />
                            }
                        </div>}
                        <div id="temp" className="text-start">
                            {title && <h4 className="text-4xl">{title}</h4>}
                        </div>
                    </div>
                    {subtitle && <p className="text-xs text-center text-gray-500">
                        {subtitle}
                    </p>}
                </div>

                {
                    href && <div className="w-full place-items-end text-right border-t-2 
                border-gray-100 mt-2">
                        <Link href={href} className="text-indigo-600 text-xs 
                    font-medium">
                            Más
                        </Link>
                    </div>
                }
            </div>
        </div>
    )
}