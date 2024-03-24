import React from 'react';
import {Metadata} from "next";
import {getVideoTagList} from "@/components/lib/interface";
import VideoCardComponent from "@/components/pages/viedeoCard";
import Pagination from "@/components/pages/pagination";
import Link from "next/link";


export async function generateMetadata({searchParams}:{searchParams:{tag:string}}): Promise<Metadata> {

    return {
        title: `${searchParams.tag} | 视频`,
    };
}
export const revalidate = 60;

const tagPage =async ({searchParams}:any) => {

    let page = parseInt(searchParams.page, 10);
    let tag:string = searchParams.tag;

    page = !page || page < 1 ? 1 : page;

    const perPage: number = 12;

    const {data, count} = await getVideoTagList((page - 1) * perPage, (page - 1) * perPage + perPage,tag);

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
                    <Link href="/video" className="text-primary hover:underline">
                        视频
                    </Link>
                </li>
                <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
                    <Link href="#" className="text-primary hover:underline">
                        标签
                    </Link>
                </li>
                <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
                    <Link href={"/article/tag-list?tag="+searchParams.tag} className="text-primary hover:underline">
                        <span>{searchParams.tag}</span>
                    </Link>
                </li>
            </ul>
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
                    tagPath={searchParams.tag}
                />
            </div>
        </>
    );
};

export default tagPage;
