import React from 'react';
import {Metadata} from "next";
import {getDiaryList} from "@/components/lib/interface";
import LiftCard from "@/components/pages/liftCard";
import Pagination from "@/components/pages/pagination";


export const metadata: Metadata = {
    title: '程序人生',
};


export const revalidate = 60;
const PageComponent =async ({searchParams}:any) => {

    let page = parseInt(searchParams.page, 10);

    page = !page || page < 1 ? 1 : page;

    const perPage:number = 4;

    const {data,count} = await getDiaryList((page-1)*perPage,(page-1)*perPage+perPage);

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


    return (
        <>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-3  pt-5">
                {
                    data.map((item:any,index:number)=>(
                        <LiftCard key={index}
                                  url={item.coverImage}
                                  title={item.title}
                                  content={item.smallDescription}
                                  author='前端达人'
                                  avatar='/assets/images/logo.png'
                                  slug={item.currentSlug}
                                  date={item._createdAt}/>
                    ))
                }
            </div>

            <div className="max-w-full my-10">
                <div className="flex w-full flex-col justify-center">
                    <Pagination
                        isPageOutOfRange={isPageOutOfRange}
                        page={page}
                        prevPage={prevPage}
                        pageNumbers={pageNumbers}
                        nextPage={nextPage}
                        tagPath={null}
                    />
                </div>
            </div>
        </>
    );
};

export default PageComponent;
