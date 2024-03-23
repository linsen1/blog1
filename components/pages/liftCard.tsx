import React from 'react';
import Image from "next/image";
import Link from "next/link";


interface LifeCardProps {
    key:any
    url: string;
    title:string,
    content:string,
    author:string,
    avatar:string,
    slug:string,
    date:string,
}


const LiftCardComponent:React.FC<LifeCardProps> = ({...pros}) => {
    return (
        <div>
            <div
                className="space-y-5 h-auto rounded-md border border-white-light bg-white p-5 shadow-[0px_0px_2px_0px_rgba(145,158,171,0.20),0px_12px_24px_-4px_rgba(145,158,171,0.12)] dark:border-[#1B2E4B] dark:bg-black">
                <Link href={`/liftstyle/detail/${pros.slug}`}>
                <div className="h-40 overflow-hidden rounded-md grid place-content-center">
                    <img src={pros.url} className="w-full object-cover" alt={pros.title}  />
                </div>
                </Link>

                <Link href={`/liftstyle/detail/${pros.slug}`}>
                <h5 className="text-xl my-4  dark:text-white">
                    {pros.title}
                </h5>
                </Link>
                <div className="flex">
                    <div className="me-4 overflow-hidden rounded-full bg-white-dark">
                        <img src={pros.avatar} className="h-12 w-12 object-cover" alt={pros.author}/>
                    </div>
                    <div className="flex-1">
                        <h4 className="mb-1.5 font-semibold dark:text-white">{pros.author}</h4>
                        <p>{new Date(pros.date).toLocaleDateString("zh-cn")}</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default LiftCardComponent;
