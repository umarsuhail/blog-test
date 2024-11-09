'use client'
import { Card } from "../utils/types";
import { useRouter } from "next/navigation";

export default function CardComponent({title,description,postId}:Card) {
    const router = useRouter();
    
    const handleRoute=(postId:number)=>{
        router.push(`/posts/${postId}`);
    }
    return (
        <a className="block max-w-sm p-6 m-3 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 cursor-pointer hover:scale-110" onClick={()=>handleRoute(postId)}>
            <p className='italic text-gray-300 text-xs'>#{postId}</p>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">{description}</p>
        </a>

    )
}
