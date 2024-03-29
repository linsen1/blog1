import React from 'react';
import VideoCardComponent from "@/components/pages/viedeoCard";
import IconCaretsDown from "@/components/icon/icon-carets-down";
import IconCaretDown from "@/components/icon/icon-caret-down";
import {Metadata} from "next";
import {getVideoList} from "@/components/lib/interface";
import {urlFor} from "@/components/lib/client";
import Pagination from "@/components/pages/pagination";

export const metadata: Metadata = {
    title: '视频',
};

export const revalidate = 60;

const PageComponent = async ({searchParams}: any) => {


    let page = parseInt(searchParams.page, 10);

    page = !page || page < 1 ? 1 : page;

    const perPage: number = 12;

    const {data, count} = await getVideoList((page - 1) * perPage, (page - 1) * perPage + perPage);

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
                <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
                    {
                        data.map((item: any, index: number) => (
                                <VideoCardComponent
                                    key={index}
                                    url={item.coverImage} alt={item.title}
                                    data={item._createdAt}
                                    title={item.title}
                                    content={item.smallDescription}
                                    author='前端达人'
                                    avatar='/assets/images/logo.png'
                                    slug={item.currentSlug}
                                    tags={item.tags}

                                />
                            )
                        )
                    }

                </div>
            </div>
            <div className="max-w-full my-10">
                <Pagination
                    isPageOutOfRange={isPageOutOfRange}
                    page={page}
                    prevPage={prevPage}
                    pageNumbers={pageNumbers}
                    nextPage={nextPage}
                    tagPath={null}
                />
            </div>
        </>

    );
};

export default PageComponent;
