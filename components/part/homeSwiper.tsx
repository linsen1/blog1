'use client';
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Navigation} from 'swiper/modules';




interface SwiperProps{
    infoData:object[]
}

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
                                <img src={`/assets/images/${item.pic}`} className="w-full " alt="itemImage" />
                                <div className="absolute left-1/2 top-3/4 z-[999] w-full -translate-x-1/2 text-center text-white">
                                    <div className="text-base  font-medium sm:text-xl">{item.text}</div>
                                </div>
                            </SwiperSlide>

                        )
                    )}


            </Swiper>
        </>
    );
};

export default HomeSwiperComponent;
