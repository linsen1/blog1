import React from 'react';
import {Metadata} from "next";
import {client, urlFor} from "@/components/lib/client";
import Link from "next/link";
import ArticleCard from "@/components/pages/articleCard";
import Pagination from "@/components/pages/pagination";



async function getData(start:number,end:number,current:string){
    const query = `

     *[_type == "article" &&
   references(*[_type == "tag" && slug.current =="${current}"]._id)][${start}...${end}]{

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

  const queryCount = `
  count(*[_type == "article" &&
   references(*[_type == "tag" && slug.current == "${current}"]._id)])
  `
    const data = await client.fetch(query);
    const count = await client.fetch(queryCount);

    return {data,count};
}

export const metadata: Metadata = {
    title: 'tag标签-前端达人',
};

export const revalidate = 60;



const tagPage = async ({searchParams}:any) => {


    let page:number = parseInt(searchParams.page, 10);
    let tag:string = searchParams.tag;

    page = !page || page < 1 ? 1 : page;

    const perPage:number = 12;

    const {data,count}= await getData((page-1)*perPage,(page-1)*perPage+perPage,tag);

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

    console.log(data,count);


    return (
        <div>
            {/*定义面包屑导航*/}
            <ul className="flex space-x-2 rtl:space-x-reverse">
                <li>
                    <Link href="/" className="text-primary hover:underline">
                        首页
                    </Link>
                </li>
                <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
                    <Link href="/article" className="text-primary hover:underline">
                        文章
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

            <div className="max-w-full grid grid-cols-1 gap-6  place-items-center sm:grid-cols-2 lg:grid-cols-3">

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
                    tagPath={searchParams.tag}
                />
            </div>


        </div>
    );
};

export default tagPage;
