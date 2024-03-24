import React from 'react';
import {getLiftHomePost} from "@/components/lib/homeInterface";
import Image from "next/image";
import Link from "next/link";



export const revalidate = 60;
const LiftStyleHomeComponent = async () => {

    const data = await getLiftHomePost();

    return (
        <>
            {
                data.map(
                    (item:any,index:number)=>(
                        <div key={index} className="space-y-5 rounded-md border border-white-light bg-white p-5 shadow-[0px_0px_2px_0px_rgba(145,158,171,0.20),0px_12px_24px_-4px_rgba(145,158,171,0.12)] dark:border-[#1B2E4B] dark:bg-black">
                            <div className="max-h-56 overflow-hidden rounded-md">
                                <Link href={`/liftstyle/detail/${item.currentSlug}`}>
                                <img src={item.coverImage} alt={item.title} className="w-full object-cover" />
                                </Link>
                            </div>
                            <Link href={`/liftstyle/detail/${item.currentSlug}`}>
                            <h5 className="text-xl dark:text-white my-4">{item.title}</h5>
                            </Link>
                            <div className="flex">
                                <div className="me-4 overflow-hidden rounded-full bg-white-dark">
                                    <img src="/assets/images/logo.png" className="h-12 w-12 object-cover" alt="前端达人" />
                                </div>
                                <div className="flex-1">
                                    <h4 className="mb-1.5 font-semibold dark:text-white">前端达人</h4>
                                    <p>{new Date(item._createdAt).toLocaleDateString("zh-cn")}</p>
                                </div>
                            </div>
                        </div>
                    )
                )
            }

        </>
    );
};

export default LiftStyleHomeComponent;
