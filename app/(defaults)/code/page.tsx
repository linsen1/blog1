import React from 'react';
import {Metadata} from "next";
import IconCaretsDown from "@/components/icon/icon-carets-down";
import IconCaretDown from "@/components/icon/icon-caret-down";

export const metadata: Metadata = {
    title: '代码',
};
const PageComponent = () => {
    return (
       <>
           <div className="w-full  pt-5">
               <div className="mb-5 grid grid-cols-1 gap-2 sm:grid-cols-3 ">

                   <div className="w-full bg-white shadow-[4px_6px_10px_-3px_#bfc9d4] rounded border border-white-light dark:border-[#1b2e4b] dark:bg-[#191e3a] dark:shadow-none">
                       <div className="py-3 px-6">
                           <div className="my-4">    <span className="badge bg-primary ">JS</span> </div>
                           <h5 className="text-[#3b3f5c] text-xl font-semibold mb-4 dark:text-white-light">如何求两数之和</h5>
                           <p className="text-white-dark py-3">一个常见的功能函数</p>
                       </div>
                   </div>

                   <div className="w-full bg-white shadow-[4px_6px_10px_-3px_#bfc9d4] rounded border border-white-light dark:border-[#1b2e4b] dark:bg-[#191e3a] dark:shadow-none">
                       <div className="py-3 px-6">
                           <div className="my-4">    <span className="badge bg-warning ">CSS</span> </div>
                           <h5 className="text-[#3b3f5c] text-xl font-semibold mb-4 dark:text-white-light">如何画圆形</h5>
                           <p className="text-white-dark py-3">一个常见的功能函数</p>
                       </div>
                   </div>


                   <div className="w-full bg-white shadow-[4px_6px_10px_-3px_#bfc9d4] rounded border border-white-light dark:border-[#1b2e4b] dark:bg-[#191e3a] dark:shadow-none">
                       <div className="py-3 px-6">
                           <div className="my-4">    <span className="badge bg-primary ">React</span> </div>
                           <h5 className="text-[#3b3f5c] text-xl font-semibold mb-4 dark:text-white-light">一个毛玻璃效果</h5>
                           <p className="text-white-dark py-3">一个常见的功能函数</p>
                       </div>
                   </div>



                   <div className="w-full bg-white shadow-[4px_6px_10px_-3px_#bfc9d4] rounded border border-white-light dark:border-[#1b2e4b] dark:bg-[#191e3a] dark:shadow-none">
                       <div className="py-3 px-6">
                           <div className="my-4">    <span className="badge bg-primary ">JS</span> </div>
                           <h5 className="text-[#3b3f5c] text-xl font-semibold mb-4 dark:text-white-light">如何求两数之和</h5>
                           <p className="text-white-dark py-3">一个常见的功能函数</p>
                       </div>
                   </div>

                   <div className="w-full bg-white shadow-[4px_6px_10px_-3px_#bfc9d4] rounded border border-white-light dark:border-[#1b2e4b] dark:bg-[#191e3a] dark:shadow-none">
                       <div className="py-3 px-6">
                           <div className="my-4">    <span className="badge bg-warning ">CSS</span> </div>
                           <h5 className="text-[#3b3f5c] text-xl font-semibold mb-4 dark:text-white-light">如何画圆形</h5>
                           <p className="text-white-dark py-3">一个常见的功能函数</p>
                       </div>
                   </div>


                   <div className="w-full bg-white shadow-[4px_6px_10px_-3px_#bfc9d4] rounded border border-white-light dark:border-[#1b2e4b] dark:bg-[#191e3a] dark:shadow-none">
                       <div className="py-3 px-6">
                           <div className="my-4">    <span className="badge bg-primary ">React</span> </div>
                           <h5 className="text-[#3b3f5c] text-xl font-semibold mb-4 dark:text-white-light">一个毛玻璃效果</h5>
                           <p className="text-white-dark py-3">一个常见的功能函数</p>
                       </div>
                   </div>

               </div>

               <div className="max-w-full my-10">
                   <div className="flex w-full flex-col justify-center">
                       <ul className="inline-flex items-center space-x-1 rtl:space-x-reverse m-auto mb-4">
                           <li>
                               <button
                                   type="button"
                                   className="flex justify-center font-semibold p-2 rounded-full transition bg-white-light text-dark hover:text-white hover:bg-primary dark:text-white-light dark:bg-[#191e3a] dark:hover:bg-primary"
                               >
                                   <IconCaretsDown className="rotate-90 rtl:-rotate-90"/>
                               </button>
                           </li>
                           <li>
                               <button
                                   type="button"
                                   className="flex justify-center font-semibold p-2 rounded-full transition bg-white-light text-dark hover:text-white hover:bg-primary dark:text-white-light dark:bg-[#191e3a] dark:hover:bg-primary"
                               >
                                   <IconCaretDown className="h-5 w-5 rotate-90 rtl:-rotate-90"/>
                               </button>
                           </li>
                           <li>
                               <button
                                   type="button"
                                   className="flex justify-center font-semibold px-3.5 py-2 rounded-full transition bg-white-light text-dark hover:text-white hover:bg-primary dark:text-white-light dark:bg-[#191e3a] dark:hover:bg-primary"
                               >
                                   1
                               </button>
                           </li>
                           <li>
                               <button type="button" className="flex justify-center font-semibold px-3.5 py-2 rounded-full transition bg-primary text-white dark:text-white-light dark:bg-primary">
                                   2
                               </button>
                           </li>
                           <li>
                               <button
                                   type="button"
                                   className="flex justify-center font-semibold px-3.5 py-2 rounded-full transition bg-white-light text-dark hover:text-white hover:bg-primary dark:text-white-light dark:bg-[#191e3a] dark:hover:bg-primary"
                               >
                                   3
                               </button>
                           </li>
                           <li>
                               <button
                                   type="button"
                                   className="flex justify-center font-semibold p-2 rounded-full transition bg-white-light text-dark hover:text-white hover:bg-primary dark:text-white-light dark:bg-[#191e3a] dark:hover:bg-primary"
                               >
                                   <IconCaretDown className="h-5 w-5 -rotate-90 rtl:rotate-90"/>
                               </button>
                           </li>
                           <li>
                               <button
                                   type="button"
                                   className="flex justify-center font-semibold p-2 rounded-full transition bg-white-light text-dark hover:text-white hover:bg-primary dark:text-white-light dark:bg-[#191e3a] dark:hover:bg-primary"
                               >
                                   <IconCaretsDown className="-rotate-90 rtl:rotate-90"/>
                               </button>
                           </li>
                       </ul>
                   </div>
               </div>
           </div>
       </>
    );
};

export default PageComponent;
