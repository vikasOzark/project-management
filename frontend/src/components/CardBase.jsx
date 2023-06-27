import { twMerge } from "tailwind-merge"

export const CardBase = ({children, className}) => {
    return (
        <div  className={twMerge("flex items-center p-2 text-gray-900 rounded-lg dark:text-white ${className}", className)}>
            {children}
        </div>
    )
}