import { twMerge } from "tailwind-merge"
import { CardBase } from "./CardBase"


/**
 * This Dropdown component renders the dropdown div.
 * @param {Array} options This param accepts the Array of Objects which should contails the title and the click function.
 * click function will return the current click title as a return so accepts the in your functions.
 * @returns 
 */
export const DropDown = ({options, children, className, cardBaseCss}) => {
    return (
        <>
            <div className={twMerge("bg-gray-500 p-2 rounded", className)}>
                {options.map(item => (
                    <div onClick={item.click}>
                        <CardBase className={cardBaseCss}>
                            {item.title}
                        </CardBase>
                    </div>
                ))}
                {children}
            </div>
        </>
    )
}