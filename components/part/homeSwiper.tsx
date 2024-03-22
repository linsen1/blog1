'use client';
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Navigation} from 'swiper/modules';
import Link from "next/link";




interface SwiperProps{
    infoData:object[]
}

export const revalidate = 60;

const HomeSwiperComponent:React.FC<SwiperProps> = ({...props}) => {

    const items = [
        {pic:'carousel1.jpeg',text:"carousel1"},
        {pic:'carousel2.jpeg',text:"carousel2"},
        {pic:'carousel3.jpeg',text:"carousel3"},
      ];

    return (
        <>
            <Swiper
                direction={'vertical'}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                navigation={true}
                modules={[ Autoplay, Pagination, Navigation]}
                className="swiper-wrapper"
            >

                    {props.infoData.map((item:any, i:number) => (

                            <SwiperSlide key={i}>
                                <Link href={`/article/article-detail/${item.url}`}>
                                <img src={item.pic} className="w-full h-[300px] sm:h-[500px] object-cover" alt="itemImage" />
                                </Link>
                                <div className="absolute left-1/2 bottom-0 h-[80px] z-[999] grid place-content-center w-full bg-gradient-to-r from-[#3b3f5c]  to-[#0e1726]  -translate-x-1/2 text-center text-white">
                                    <Link href={`/article/article-detail/${item.url}`}>
                                    <div className="text-white  block text-[24px] font-medium tracking-tight text-gray-800 dark:text-white-light">{item.text}</div>
                                    </Link>
                                </div>
                            </SwiperSlide>

                        )
                    )}


            </Swiper>
        </>
    );
};

export default HomeSwiperComponent;
