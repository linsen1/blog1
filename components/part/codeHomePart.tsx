import React from 'react';
import Link from "next/link";
import {getCodeHomeList} from "@/components/lib/homeInterface";



const CodeHomePartComponent =async () => {
    const data = await getCodeHomeList();
    return (
        <>
            {
                data.map((item:any,index:number)=>(
                    <div key={index} className="w-full bg-white shadow-[4px_6px_10px_-3px_#bfc9d4] rounded border border-white-light dark:border-[#1b2e4b] dark:bg-[#191e3a] dark:shadow-none">
                        <div className="py-3 px-6">
                            <div className="my-4">    <span className="badge bg-primary ">{item.classType}</span> </div>
                            <Link  href={`/code/detail/${item.currentSlug}`}>
                                <h5 className="text-[#3b3f5c] text-xl font-semibold mb-4 dark:text-white-light line-clamp-2">{item.title}</h5>
                            </Link>
                            <Link  href={`/code/detail/${item.currentSlug}`}>
                            <p className="text-white-dark  line-clamp-3">{item.smallDescription}</p>
                            </Link>
                        </div>
                    </div>
                ))
            }

        </>
    );
};

export default CodeHomePartComponent;
