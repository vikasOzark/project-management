import { useState } from "react";
import { Button } from "./Button";
import { DropDown } from "./Dropdown"
import { GoChevronDown, GoChevronUp } from "react-icons/go";

export const TodoCard = ({author, date, detail, currentStatus}) => {
    const [isDropdown, setDropDown] = useState(false)
    
    return (
        <div className="rounded bg-gray-600 p-4 shadow-md">
            <div className="flex justify-between mb-2">
                <div className="">{author}</div>
                <div className="">{date}</div>
            </div>
            <div className="">
                <p className="text-md font-medium">TODO Detail</p>
                <p className="text-slate-300">{detail}</p>
            </div>
            <div className="flex justify-end relative">
                <Button click={() => setDropDown(pre => !pre)} className={`bg-slate-200 hover:bg-slate-300 `} >
                    {currentStatus}

                    {isDropdown? <GoChevronDown />: <GoChevronUp />}
                    
                </Button>
                {isDropdown? 
                    <div className="absolute mt-10">
                        <DropDown options={[{title: "hello world", click: () => {console.log(hello);}}]} />
                    </div>
                : null}
            </div>
                
        </div>
    )
}