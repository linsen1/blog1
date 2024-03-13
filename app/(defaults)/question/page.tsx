import React from 'react';
import IconCaretsDown from "@/components/icon/icon-carets-down";
import IconCaretDown from "@/components/icon/icon-caret-down";
import {Metadata} from "next";
import QuestionCardComponent from "@/components/pages/questionCard";
import {getQuestionList} from "@/components/lib/interface";
import Pagination from "@/components/pages/pagination";

export const metadata: Metadata = {
    title: '面试题',
};
export const revalidate = 60;

const PageComponent = async ({searchParams}: any) => {


    let page = parseInt(searchParams.page, 10);

    page = !page || page < 1 ? 1 : page;

    const perPage: number = 12;

    const {data, count} = await getQuestionList((page - 1) * perPage, (page - 1) * perPage + perPage);



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
                        tagPath={null}
                    />
                </div>
            </div>
        </>
    );
};

export default PageComponent;
