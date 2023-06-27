import { Modal } from "../components/Modal"
import { useState } from "react"
import { IssueCreateForm } from "../components/IssueCreateForm"
import { button, label } from "../components/cssClasses"
import {BiPlus, BiReceipt, BiListUl, BiWifi0, BiChevronDown, BiGroup, BiSolidUser, BiStoreAlt, BiCalendarEvent, BiChevronUp} from "react-icons/bi"
import { CardBase } from "../components/CardBase"
import { DropDown } from "../components/Dropdown"

export const Dashboard = () => {
    const [issueModal, setIssueModal] = useState(false)
    const [issueDetail, setIssueDetail] = useState(false)
    const [issueStatusDrop, setIssueStatusDrop] = useState(false)
    const [assignPerson, setAssignPerson] = useState(false)



    
    return (
        <>
            <div class="">
                <div class="grid grid-cols-3 gap-4 mb-4">
                    <InfoCard title={"Totle Issue"} />
                    <InfoCard title={"Closed Issue"} />
                    <InfoCard title={"Open Issue"} />
                </div>
            </div>

            <section>
                <div className=" grid grid-cols-12">
                    <div className="col-span-8">

                        <div className="text-white flex justify-between mb-2">
                            <p className="flex text-1xl justify-center items-center gap-2"> <BiListUl className="text-2xl" /> All Issues</p>
                            <div onClick={() => setIssueModal(true)} className={`${button}`}> <BiPlus /> Create issue</div>
                        </div>
                        
                        <div className="" onClick={() => setIssueDetail(true)}>
                            <IssueListCard />
                        </div>

                    </div>
                </div>
            </section>

            {issueModal&& 
                <Modal close={() => setIssueModal(false)} css={" w-full"} header={<><BiReceipt/> Create Issue</>}>
                    <IssueCreateForm />
                    <div className=" flex justify-end mt-2">
                        <div className={`${button}`}><BiPlus /> Create Here</div>
                    </div>
                </Modal>
            }

            {issueDetail&& 
                <Modal close={() => setIssueDetail(false)} header={<><BiReceipt/> Detail</>}>
                    <div className="flex justify-between gap-4 mb-4">
                        <div className="text-white w-20">
                            <p className={`${label} flex items-center gap-2`}> <BiSolidUser /> Author</p>
                            <p className="text-gray-400 "> Vikas</p>
                        </div>
                        <div className="text-white w-auto">
                            <p className={`${label} flex items-center gap-2`}><BiCalendarEvent /> Creation Date</p>
                            <p className="text-gray-400 ">12.13.2024</p>
                        </div>
                        <div className="text-white w-auto">
                            <p className={`${label} flex items-center gap-2`}> <BiStoreAlt /> Department</p>
                            <p className="text-gray-400 ">Human Resource (HR)</p>
                        </div>
                    </div>
                    <div className="text-white w-auto mb-4">
                        <p className={`${label}`}>Deails Summary</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, in? Possimus amet asperiores iusto laudantium adipisci impedit deleniti animi, aspernatur cumque inventore! Voluptatibus perspiciatis expedita culpa officiis voluptas ad quia?</p>
                    </div>
                    
                    <div className="">
                        <p className={`${label}`}>Suportive Tags</p>
                        <div className="flex">
                            <div className="px-3 flex gap-2 bg-red-400 rounded ">hello </div>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="flex justify-end gap-4">
                            <div className="">
                                <div onClick={() => setAssignPerson(pre => !pre)} className={`${button} bg-slate-500 text-white`}><BiGroup />  Assign to Person</div>
                                <div className={`${!assignPerson? "hidden": ""} absolute z-50 w-auto mt-4`}>
                                    <DropDown cardBaseCss={`hover:bg-gray-600 cursor-pointer p-1 px-3 border rounded`} options={[{title: "hello world", click: () => {{console.log('clickewd...');}}}]} />
                                </div>
                            </div>

                            <div className="">
                                <div onClick={() => setIssueStatusDrop(pre => !pre )} className={`${button}`}>{issueStatusDrop? <BiChevronUp /> : <BiChevronDown />}  Change Status</div>
                                <div className={`${!issueStatusDrop? "hidden": ""} absolute z-50 w-auto mt-4`}>
                                    <DropDown cardBaseCss={`hover:bg-gray-600 cursor-pointer p-1 px-3 border rounded`} className={``} options={[{title: "hello worl", click: () => {{console.log('clickewd...');}}}]} />
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal>
            }
        </>
    )
}

const InfoCard = ({title}) => {
    return (
        <>
            <div class="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
                <p class="text-2xl text-gray-300 dark:text-gray-300">{title}</p>
            </div>
        </>
    )
} 


export const IssueListCard = () =>{
    return (
        <>
            <div className="rounded flex items-center hover:bg-gray-700 transition-all cursor-pointer justify-between px-2 bg-gray-600">
                <CardBase>
                    <div className="">
                        <small className="flex gap-2"><BiWifi0 className="" /> Vikas kumar <span className="text-gray-300">12/03/2023</span></small>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, velit.</p>
                    </div>
                </CardBase>
                <div className="flex items-center gap-3">
                    <div className="rounded bg-red-500 px-2 font-medium">issue</div>
                </div>  
            </div>
        </>
    )
} 