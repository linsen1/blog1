import React from 'react';
import {Metadata} from "next";
import ArticleCard from "@/components/pages/articleCard";
import {getResourceList} from "@/components/lib/interface";
import Pagination from "@/components/pages/pagination";
import ResourceCard from "@/components/pages/resourceCard";

export const metadata: Metadata = {
    title: '资源与工具',
};

const PageComponent = async ({searchParams}:any) => {

    let page = parseInt(searchParams.page, 10);

    page = !page || page < 1 ? 1 : page;

    const perPage:number = 12;

    const {data,count} = await getResourceList((page-1)*perPage,(page-1)*perPage+perPage);

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
            <div className="max-w-full grid grid-cols-1 gap-6 pt-5 place-items-center sm:grid-cols-2 lg:grid-cols-3">

                {
                    data.map((item:any,index:number)=>(
                        <ResourceCard
                            key={item._id}
                            url={item.coverImage} alt='js'
                            data={item._createdAt}
                            title={item.title}
                            content={item.smallDescription}
                            author='前端达人'
                            avatar='/assets/images/logo.png'
                            slug={item.currentSlug}
                            tags={item.tags}
                        />
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
