import {Metadata} from 'next';
import React from 'react';
import IconHeart from '@/components/icon/icon-heart';
import IconEye from '@/components/icon/icon-eye';
import ArticleCard from "@/components/pages/articleCard";
import Pagination from "@/components/pages/pagination";
import {client,urlFor} from "@/components/lib/client";
import {simpleArticle} from "@/components/lib/interface";

export const metadata: Metadata = {
    title: '文章',
};

async function getData(start:number,end:number) {
    const query = `
    *[_type=='article'] | order(_createdAt desc) [${start}...${end}]{
  title,
  "coverImage":coverImage.asset->url,
  smallDescription,
  _createdAt,
  "currentSlug":slug.current,
  tags[]-> {
      _id,
       "currentSlug":slug.current,
      name,
      color,
      colorValue
    }
}
    `
    const queryCount:string =`
    count(*[_type == "article"])
    `
    const data = await client.fetch(query);
    const count = await client.fetch(queryCount);


    return {data,count};

}

export const revalidate = 60;

const Article =async ({searchParams}:any) => {



    let page = parseInt(searchParams.page, 10);

    page = !page || page < 1 ? 1 : page;

    const perPage:number = 4;

    const {data,count} = await getData((page-1)*perPage,(page-1)*perPage+perPage);

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
                        <ArticleCard
                                     key={index}
                                     url={urlFor(item.coverImage).url()} alt='js'
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
    )
};

export default Article;
