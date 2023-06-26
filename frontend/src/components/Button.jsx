import { Children } from "react"
import { button } from "./cssClasses"
import { twMerge } from 'tailwind-merge'

export const Button = ({children, className, click}) => {
    return (
        <>
            <button onClick={click} className={twMerge(button, className)} >
                {children}
            </button>
        </>
    )
}