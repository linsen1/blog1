import React from 'react';
import Link from "next/link";
import {getQuestionHomeList} from "@/components/lib/homeInterface";

const QuestionPartComponent =async () => {

    const data = await getQuestionHomeList()

    return (
       data.map((item:any,index:number)=>(
           <div key={index}>
               <div className="border border-gray-500/20 rounded-md shadow-[rgb(31_45_61_/_10%)_0px_2px_10px_1px] dark:shadow-[0_2px_11px_0_rgb(6_8_24_/_39%)] p-6 pt-12 mt-8 relative">
                   <div className="bg-primary absolute text-white-light ltr:left-6 rtl:right-6 -top-8 w-16 h-16 rounded-md flex items-center justify-center mb-5 mx-auto">
                       <span className="text-2xl">{item.classType}</span>
                   </div>
                   <Link href={`/question/detail/${item.currentSlug}`}>
                       <h5 className="text-dark text-lg font-semibold mb-3.5 dark:text-white-light">{item.title}</h5>
                   </Link>
                   <Link href={`/question/detail/${item.currentSlug}`}>
                       <p className="text-white-dark text-[15px]  mb-3.5 line-clamp-3">
                           {item.smallDescription}
                       </p>
                   </Link>
                   <Link href={`/question/detail/${item.currentSlug}`}>
                       <button type="button" className="text-primary font-semibold hover:underline group">
                           查看
                       </button>
                   </Link>
               </div>
           </div>
       ))
    );
};

export default QuestionPartComponent;
