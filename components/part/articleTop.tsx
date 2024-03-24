import React from 'react';
import {getArticleHomeData} from "@/components/lib/homeInterface";
import Link from "next/link";

export const revalidate = 60;
const ArticleTopComponent = async () => {

    const data = await getArticleHomeData();


    return (
        <>
            {
                data.map((item: any, index: number) => (
                    <div
                        key={index}
                        className="w-full h-[160px] flex gap-2 bg-white shadow-[4px_6px_10px_-3px_#bfc9d4] rounded border border-white-light dark:border-[#1b2e4b] dark:bg-[#191e3a] dark:shadow-none">


                        <div className="mb-5 w-2/5 h-full overflow-hidden">
                            <Link href={`/article/article-detail/${item.currentSlug}`}>
                                <img className="rounded-tl h-full rounded-bl object-cover" src={item.coverImage}
                                     alt={item.title}/>
                            </Link>

                        </div>


                        <div className="w-3/5 flex flex-col justify-center gap-2 py-4 px-4 ">
                            <Link href={`/article/article-detail/${item.currentSlug}`}>
                            <p
                                className="mb-3  text-[#3b3f5c]  block text-[20px]  tracking-tight text-gray-800 dark:text-white-light leading-8 ">
                               <span className="line-clamp-2"> {item.title} </span>
                            </p>
                            </Link>
                            <p className="font-normal text-white-dark text-sm dark:text-white-light line-clamp-2">
                                <Link href={`/article/article-detail/${item.currentSlug}`}>
                                    {item.smallDescription}
                                </Link>
                            </p>
                        </div>

                    </div>
                ))
            }


        </>
    );
};

export default ArticleTopComponent;
