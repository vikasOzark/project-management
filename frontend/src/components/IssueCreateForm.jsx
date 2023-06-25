import { useState } from 'react'
import '../index.css'
import { input, label } from './cssClasses'
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
                    <label for="name" className={`${label}`}>Department</label>
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
                <div className={`${tags? "hidden": ""} absolute z-50  w-full mt-4`}>
                    <DropDown options={[{title: "hekk", click: () => {{console.log('clickewd...');}}}]} />
                </div>
            </div>
        </>
        
    )
}

const Multiselect = () => {
    return <div className="px-1 flex gap-2 bg-red-400 rounded ">hello <span>X</span></div>
}