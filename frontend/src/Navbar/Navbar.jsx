import { useState } from "react"
import { CardBase } from "../components/CardBase"
import {BiMenu, BiLayerPlus, BiPowerOff, BiReceipt, BiSolidCalendar, BiArrowBack, BiMenuAltLeft } from "react-icons/bi"
import { Link } from "react-router-dom"

export const Navbar = ({children}) => {

    const [sideNavClose, setSideNavClose] = useState(false)
    const [noti, setNoti] = useState(false)
    return (
        <>  
            <div className="relative">
                <div className="absolute z-50 m-4 right-0">
                <div class={`flex w-full max-w-sm overflow-hidden transform-cpu ${noti?"": "-translate-y-[7rem]"} transition-all bg-white rounded-lg shadow-md dark:bg-gray-600`}>
                    <div class="w-2 bg-gray-800 dark:bg-gray-300"></div>

                    <div class="flex items-center px-2 py-3">
                        <img class="object-cover w-10 h-10 rounded-full" alt="User avatar" src="https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=200" />

                        <div class="mx-3">
                            <p class="text-gray-600 dark:text-gray-200">Sara has replied on the uploaded image.</p>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        
            <button onClick={() => setSideNavClose(pre => !pre)} data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                <span className="sr-only">Open sidebar</span>
                <BiMenuAltLeft />
            </button>

            <aside id="default-sidebar" className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${!sideNavClose? "-translate-x-full": ""}  sm:translate-x-0`} aria-label="Sidebar">
                <div className="h-full px-3 py-4 overflow-y-auto dark:bg-gray-800">
                    <div className="flex justify-end">
                        <button className="sm:hidden text-white" onClick={() => setSideNavClose(pre => !pre)}><BiArrowBack /></button>
                    </div>
                    <button className="text-white right-0 " onClick={() => setNoti(pre => !pre)}>Test Notification</button>

                    <ul className="space-y-2 font-medium">
                        <li>
                            <Link to={"/"} >
                                <CardBase className={`hover:bg-gray-600 transition-all`} >
                                    <BiMenu />
                                    <span className="ml-3">Dashboard</span>
                                </CardBase>
                            </Link>
                        </li>
                        <li>
                            <Link to={"/todo"}>
                                <CardBase className={`hover:bg-gray-600 transition-all`}>
                                    <BiReceipt />
                                    <span className="ml-3">TODO</span>
                                </CardBase>
                            </Link>
                        </li>
                        <li>
                            <CardBase className={`hover:bg-gray-600 transition-all`}>
                                <BiSolidCalendar />
                                <span className="ml-3">Calender</span>
                            </CardBase>
                        </li>
                        <li>
                            <CardBase className={`hover:bg-gray-600 transition-all`}>
                            <BiPowerOff />
                            <span className="ml-3">Sign Out</span>
                            </CardBase>
                        </li>
                    </ul>
                </div>
            </aside>

            <div className="p-4 sm:ml-64 bg-gray-900 h-screen">
                {children}
            </div>
        </>

    )
}