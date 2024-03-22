import React from 'react';
import {Metadata} from 'next';
import HomeSwiperComponent from "@/components/part/homeSwiper";
import ArticleTopComponent from "@/components/part/articleTop";
import LiftStyleComponent from "@/components/part/liftStyleHomeComponent";
import Link from "next/link";

import VideoHomeComponent from "@/components/part/videoHomeCard";
import QuestionPartComponent from "@/components/part/questionHomePart";
import ResourceHomeCardComponent from "@/components/part/resourceHomeCard"
import CodeHomePartComponent from "@/components/part/codeHomePart";
import {getArticleTopHomeData} from "@/components/lib/homeInterface";


export const metadata: Metadata = {
    title: '首页',
};

export const revalidate = 60;



const PageComponent =async () => {

    const data = await getArticleTopHomeData();

    const items = data.map((item:any,index:number)=>(
        {
            pic:item.coverImage,
            text:item.title,
            url:item.currentSlug
        }
    ));


    return (


        <>


            <div className="w-full mt-2 sm:pt-5">
                <Link href='/article'>
                <h3 className="mb-6 text-xl font-bold md:text-3xl">文章</h3>
                </Link>

                <div className="w-full grid grid-cols-1  sm:grid-cols-5 sm:gap-2">

                    <div className="sm:col-span-3 h-[300px] sm:h-[500px] ">
                        < HomeSwiperComponent infoData={items}/>
                    </div>

                    <div className="h-auto sm:col-span-2   sm:h-[500px] flex flex-col gap-1 justify-between">
                        {/* @ts-expect-error Async Server Component */}
                        <ArticleTopComponent/>

                    </div>

                </div>


                <div className="mt-10">
                    <Link href='/video'>
                    <h3 className="mb-6 text-xl font-bold md:text-3xl">视频</h3>
                    </Link>

                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 ">
                        {/* @ts-expect-error Async Server Component */}
                        <VideoHomeComponent/>

                    </div>

                </div>

                <div className="mt-10">
                    <Link href='/question'>
                    <h3 className="mb-6 text-xl font-bold md:text-3xl">面试题</h3>
                    </Link>


                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 ">
                        {/* @ts-expect-error Async Server Component */}
                        <QuestionPartComponent/>

                    </div>

                </div>

                <div className="mt-10">
                    <Link href='/resource'>
                    <h3 className="mb-6 text-xl font-bold md:text-3xl">资源与工具</h3>
                    </Link>

                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 ">
                        {/* @ts-expect-error Async Server Component */}
                        <ResourceHomeCardComponent/>


                    </div>

                </div>


                <div className="mt-10">
                    <Link href={`/code`}>
                    <h3 className="mb-6 text-xl font-bold md:text-3xl">常用代码</h3>
                    </Link>

                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 ">
                        {/* @ts-expect-error Async Server Component */}
                        <CodeHomePartComponent/>

                    </div>

                </div>


                <div className="mt-10">
                    <Link href={`/liftstyle`}>
                    <h3 className="mb-6 text-xl font-bold md:text-3xl">程序人生</h3>
                    </Link>

                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 ">
                        {/* @ts-expect-error Async Server Component */}
                        <LiftStyleComponent/>
                    </div>

                </div>




            </div>
        </>
    );
};

export default PageComponent;
