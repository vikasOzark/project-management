export const CardBase = ({children, className}) => {
    return (
        <div  className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white ${className}`}>
            {children}
        </div>
    )
}