import React from 'react';
import {Metadata} from "next";
import QuestionCardComponent from "@/components/pages/questionCard";
import { getQuestionTagList} from "@/components/lib/interface";
import Pagination from "@/components/pages/pagination";
import Link from "next/link";


export const revalidate = 60;

export async function generateMetadata({searchParams}:{searchParams:{tag:string}}): Promise<Metadata> {

    return {
        title: `${searchParams.tag} | 面试题`,
    };
}

const PageComponent = async ({searchParams}: any) => {


    let page = parseInt(searchParams.page, 10);
    let tag:string = searchParams.tag;


    page = !page || page < 1 ? 1 : page;

    const perPage: number = 12;

    const {data, count} = await getQuestionTagList((page - 1) * perPage, (page - 1) * perPage + perPage,tag);



    const totalPages = Math.ceil(count / perPage);

    const prevPage = page - 1 > 0 ? page - 1 : 1;

    const nextPage = page + 1;

    const isPageOutOfRange = page > totalPages;

    const pageNumbers = [];
    const offsetNumber = 3;
    for (let i = page - offsetNumber; i <= page + offsetNumber; i++) {
        if (i >= 1 && i <= totalPages) {
            pageNumbers.push(i);
        }
    }

    console.log(data, count);



    return (
        <>
            <ul className="flex space-x-2 rtl:space-x-reverse">
                <li>
                    <Link href="/" className="text-primary hover:underline">
                        首页
                    </Link>
                </li>
                <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
                    <Link href="/question" className="text-primary hover:underline">
                        面试题
                    </Link>
                </li>
                <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
                    <Link href="#" className="text-primary hover:underline">
                        标签
                    </Link>
                </li>
                <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
                    <Link href={"/question/tag-list?tag="+searchParams.tag} className="text-primary hover:underline">
                        <span>{searchParams.tag}</span>
                    </Link>
                </li>
            </ul>
            <div className="w-full  pt-5">

                <div className="grid grid-cols-1 sm:grid-cols-3  w-full justify-center mb-5 gap-6">

                    {
                        data.map((item:any,index:number)=>(
                            <QuestionCardComponent
                                key={index}
                                classType={item.classType}
                                title={item.title}
                                content={item.smallDescription}
                                slug={item.currentSlug}
                            />
                        ))
                    }



                </div>


            </div>

            <div className="max-w-full my-10">
                <div className="flex w-full flex-col justify-center">
                    <Pagination
                        isPageOutOfRange={isPageOutOfRange}
                        page={page}
                        prevPage={prevPage}
                        pageNumbers={pageNumbers}
                        nextPage={nextPage}
                        tagPath={searchParams.tag}
                    />
                </div>
            </div>
        </>
    );
};

export default PageComponent;
