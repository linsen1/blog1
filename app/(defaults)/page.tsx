import React from 'react';
import {Metadata} from 'next';
import HomeSwiperComponent from "@/components/part/homeSwiper";
import ArticleTopComponent from "@/components/part/articleTop";
import LiftStyleComponent from "@/components/part/liftStyleCard";
import Link from "next/link";
import Image from "next/image";
import IconPlayCircle from "@/components/icon/icon-play-circle";
import VideoHomeComponent from "@/components/part/videoHomeCard";
import QuestionPartComponent from "@/components/part/questionHomePart";


export const metadata: Metadata = {
    title: '首页',
};


const PageComponent = () => {
    const items = [
        {pic: 'carousel1.jpeg', text: '1'},
        {pic: 'carousel2.jpeg', text: '2'},
        {pic: 'carousel3.jpeg', text: '3'},
    ];

    return (


        <>


            <div className="w-full mt-2 sm:pt-5">

                <h3 className="mb-6 text-xl font-bold md:text-3xl">文章</h3>

                <div className="w-full grid grid-cols-1  sm:grid-cols-5 sm:gap-2">

                    <div className="sm:col-span-3 h-[300px] sm:h-[500px] ">
                        < HomeSwiperComponent infoData={items}/>
                    </div>

                    <div className="h-auto sm:col-span-2   sm:h-[500px] flex flex-col gap-1 justify-between">
                        <ArticleTopComponent/>
                        <ArticleTopComponent/>
                        <ArticleTopComponent/>
                    </div>

                </div>


                <div className="mt-10">
                    <h3 className="mb-6 text-xl font-bold md:text-3xl">视频</h3>

                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 ">
                        <VideoHomeComponent/>
                        <VideoHomeComponent/>
                        <VideoHomeComponent/>
                    </div>

                </div>

                <div className="mt-10">
                    <h3 className="mb-6 text-xl font-bold md:text-3xl">面试题</h3>


                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 ">

                        <QuestionPartComponent/>
                        <QuestionPartComponent/>
                        <QuestionPartComponent/>

                    </div>

                </div>

                <div className="mt-10">
                    <h3 className="mb-6 text-xl font-bold md:text-3xl">资源与工具</h3>

                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 ">
                        <LiftStyleComponent/>
                        <LiftStyleComponent/>
                        <LiftStyleComponent/>
                    </div>

                </div>


                <div className="mt-10">
                    <h3 className="mb-6 text-xl font-bold md:text-3xl">常用代码</h3>

                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 ">
                        <LiftStyleComponent/>
                        <LiftStyleComponent/>
                        <LiftStyleComponent/>
                    </div>

                </div>


                <div className="mt-10">
                    <h3 className="mb-6 text-xl font-bold md:text-3xl">程序人生</h3>

                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 ">
                        <LiftStyleComponent/>
                        <LiftStyleComponent/>
                        <LiftStyleComponent/>
                    </div>

                </div>




            </div>
        </>
    );
};

export default PageComponent;
