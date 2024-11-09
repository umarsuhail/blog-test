'use client'
import { useState } from "react";
import { Comment } from "../utils/types";

type comments = {
    [key: string]: Comment[];
}
export default function Comments({ comments }: comments) {
    const [isOpen, setOpen] = useState(false);

    const upIcon = <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="none" stroke="currentColor" d="M4.5 9.5L8 6l3.5 3.5" /></svg>;
    const downIcon = <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M36 18L24 30L12 18" /></svg>

    const handleComments = () => {
        setOpen(!isOpen)
    }


    return (
        <div>
            <button onClick={handleComments} type="button" className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl  hover:text-gray-100 hover:bg-gray-500 gap-3" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
                <span>Comments</span>
                {isOpen ? upIcon : downIcon}
            </button>
            <div className="p-2">
                {isOpen && <div>
                    {comments?.map((items: Comment) => (<div key={items.id} className="flex">
                        <div className="p-2 my-2 border border-gray-300 w-full rounded-2xl ml-3">
                            <p className="text-xl text-blue-500 text-bold cursor-pointer w-full">
                                {items.name}
                            </p>
                            <span className="text-base italic text-gray-500">
                                {items.email}
                            </span>
                            <p className="mt-3">
                            {items.body}
                        </p>
                        </div>

                    </div>))}
                </div>}
            </div>
        </div>

    )
}
