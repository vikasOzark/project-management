import { Calender } from "../components/Calender";
import {GoChecklist, GoChevronUp, GoPlus} from "react-icons/go"
import { button } from "../components/cssClasses";
import { Button } from "../components/Button";
import { TodoCard } from "../components/TodoCard";

export const Todo = () => {
  return (
    <>
        <section>
            <div className="grid grid-cols-12 gap-4">
                <div className="text-white col-span-4  p-4 ">
                    <div className="">
                        <div className="flex justify-between mb-2">
                            <h3 className="text-lg font-medium flex items-center gap-2 mb-1"><GoChecklist className="text-lg" /> TODO</h3>
                            <Button className={` hover:bg-green-300 `} >
                                Create TODO 
                                <GoPlus />
                            </Button>
                        </div>
                        <div className="rounded bg-gray-600 p-4 shadow-md">
                            <div className="flex justify-between mb-2">
                                <div className="">Vikas</div>
                                <div className="">12.12.2024</div>
                            </div>
                            <div className="">
                                <p className="text-md font-medium">TODO Detail</p>
                                <p className="text-slate-300">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam soluta, velit ea impedit nobis voluptas officiis, temporibus eaque suscipit, dolore sed quod. Aperiam, odio maxime.</p>
                            </div>
                            <div className="flex justify-end">
                                <Button className={`bg-slate-200 hover:bg-slate-300 `} >
                                    Update Status
                                    <GoChevronUp />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-white col-span-4  p-4 ">
                    <h3 className="text-lg font-medium flex items-center gap-2 mb-2"><GoChecklist className="text-lg" />In Process</h3>
                    <TodoCard 
                        author={"Vikas "}
                        date={"12,12,2024"}
                        detail={"lorem hellow eol feere fdes uhf"}
                        currentStatus={"Pending"} />
                </div>
            </div>
        </section>
    </>
  )
};
