import React from 'react';
import Link from "next/link";

interface CodeCardProps {
    key:any
    url: string;
    title:string,
    content:string,
    classType:string

}

const CodeCardComponent:React.FC<CodeCardProps > = ({...props}) => {
    return (
        <div>
            <div className="w-full bg-white shadow-[4px_6px_10px_-3px_#bfc9d4]  rounded border border-white-light dark:border-[#1b2e4b] dark:bg-[#191e3a] dark:shadow-none">
                <div className="px-16 h-[200px]">
                    <div className="my-4">    <span className="badge bg-primary ">{props.classType}</span> </div>
                    <Link  href={`/code/detail/${props.url}`}>
                    <h5 className="text-[#3b3f5c] h-[60px] text-xl font-semibold mb-4 dark:text-white-light leading-8 flex items-center">
                        <span className="line-clamp-2">{props.title}</span>
                    </h5>
                    </Link>
                    <p className="text-white-dark leading-6 flex items-center">
                        <span className="line-clamp-3">  {props.content} </span>

                    </p>
                </div>
            </div>
        </div>
    );
};

export default CodeCardComponent;
