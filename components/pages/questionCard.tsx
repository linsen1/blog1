import React from 'react';
import Link from "next/link";


interface QuestionCardProps {
    key:any
    title:string,
    content:string,
    slug:string,
    classType:string
}

const QuestionCardComponent = ({key,title,content,slug,classType}:QuestionCardProps) => {
    return (

            <div className="border border-gray-500/20 rounded-md shadow-[rgb(31_45_61_/_10%)_0px_2px_10px_1px] dark:shadow-[0_2px_11px_0_rgb(6_8_24_/_39%)] p-6 pt-12 mt-8 relative">
                <div className="bg-primary absolute text-white-light ltr:left-6 rtl:right-6 -top-8 w-16 h-16 rounded-md flex items-center justify-center mb-5 mx-auto">
                    <span className="text-2xl">{classType}</span>
                </div>
                <h5 className="text-dark text-lg font-semibold mb-3.5 dark:text-white-light">{title}</h5>
                <p className="text-white-dark text-[15px]  mb-3.5 line-clamp-2">{content}</p>
                <Link href={`/question/article-detail/${slug}`}>
                <button type="button" className="text-primary font-semibold hover:underline group">
                    查看
                </button>
                </Link>
            </div>

    );
};

export default QuestionCardComponent;
