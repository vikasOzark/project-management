import { useState } from 'react'
import '../index.css'
import { button, input, label } from './cssClasses'
import { DropDown } from './Dropdown'

export const IssueCreateForm = () => {
    const [tags, setTags] = useState(true)
    
    return (
        <>
            <div className="flex gap-2 mb-2">
                <div>
                    <label for="name" className={`${label}`}>Issue title</label>
                    <input type="text" name="name" id="name" className={`${input}`} placeholder="Issue title" required=""/>
                </div>
                <div>
                    <label  className={`${label}`}>Department</label>
                    <select name="" className={`${input} w-44`} id="">
                        <option value="">hello</option>
                        <option value="">hello</option>
                        <option value="">hello</option>
                    </select>
                </div>
            </div>
            <div className='mb-2'>
                <label for="name" className={`${label}`}>Issue Detail</label>
                <textarea name="name" id="name" className={`${input}`} placeholder="Type Detailed discription..." required=""/>
            </div>
            <div className='relative' >
                <label for="name" className={`${label}`}>Add Tags</label>
                <div className={`${input} flex gap-2`} onClick={() => setTags(pre => !pre)}>
                    <Multiselect />
                    <Multiselect />

                </div>
                <div className={`${tags? "hidden": ""} absolute z-50  w-auto mt-4`}>
                    <DropDown cardBaseCss={`hover:bg-gray-600 cursor-pointer p-1 px-3 border`} className={`w-fit`} options={[{title: "department issue", click: () => {{console.log('clickewd...');}}}]} >
                        <div className=" flex w-full gap-2 input mt-2">
                            <input type="text" name="name" id="name" className={`border-2 rounded px-3 bg-transparent `} placeholder="create tags.."/>
                            <button className={`${button}`}>Create & add</button>
                        </div>
                    </DropDown>
                </div>
            </div>
        </>
        
    )
}

const Multiselect = () => {
    return <div className="px-1 flex gap-2 bg-red-400 rounded ">hello <span>X</span></div>
}