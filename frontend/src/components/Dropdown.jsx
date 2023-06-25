import { CardBase } from "./CardBase"


/**
 * This Dropdown component renders the dropdown div.
 * @param {Array} options This param accepts the Array of Objects which should contails the title and the click function.
 * click function will return the current click title as a return so accepts the in your functions.
 * @returns 
 */
export const DropDown = ({options}) => {
    return (
        <>
            <div className="bg-gray-500 p-2 rounded">
                {options.map(item => (
                    <div onClick={item.click}>
                        <CardBase>
                            {item.title}
                        </CardBase>
                    </div>
                ))}
                
            </div>
        </>
    )
}