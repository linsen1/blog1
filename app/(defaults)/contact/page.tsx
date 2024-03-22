import React from 'react';
import {Metadata} from "next";
import Link from "next/link";
import Image from "next/image";
import IconMenuMailbox from '@/components/icon/menu/icon-menu-mailbox';

export const metadata: Metadata = {
    title: '与我联系',
};

const PageComponent = () => {
    return (
       <>
           <div>

               <div className="relative flex min-h-screen items-center justify-center bg-[url(/assets/images/auth/map.png)] bg-cover bg-center bg-no-repeat px-6 py-10 dark:bg-[#060818] sm:px-16">
                   <img src="/assets/images/auth/coming-soon-object1.png" alt="image" className="absolute left-0 top-1/2 h-full max-h-[893px] -translate-y-1/2" />
                   <img src="/assets/images/auth/coming-soon-object2.png" alt="image" className="absolute left-24 top-0 h-40 md:left-[30%]" />
                   <img src="/assets/images/auth/coming-soon-object3.png" alt="image" className="absolute right-0 top-0 h-[300px]" />
                   <img src="/assets/images/auth/polygon-object.svg" alt="image" className="absolute bottom-0 end-[28%]" />
                   <div className="relative flex w-full max-w-[1502px] flex-col justify-between overflow-hidden rounded-md bg-white/60 backdrop-blur-lg dark:bg-black/50 lg:min-h-[758px] lg:flex-row lg:gap-10 xl:gap-0">
                       <div className="relative hidden w-full items-center justify-center bg-[linear-gradient(225deg,rgba(239,18,98,1)_0%,rgba(67,97,238,1)_100%)] p-5 lg:inline-flex lg:max-w-[835px] xl:-ms-28 ltr:xl:skew-x-[14deg] rtl:xl:skew-x-[-14deg]">
                           <div className="absolute inset-y-0 w-8 from-primary/10 via-transparent to-transparent ltr:-right-10 ltr:bg-gradient-to-r rtl:-left-10 rtl:bg-gradient-to-l xl:w-16 ltr:xl:-right-20 rtl:xl:-left-20"></div>
                           <div className="ltr:xl:-skew-x-[14deg] rtl:xl:skew-x-[14deg]">
                               <div className="flex justify-center items-center gap-2">
                                   <Link href="/" className="ms-10 block w-10 lg:w-12">
                                       <img src="/assets/images/logo.png" alt="Logo" className="w-full" />
                                   </Link>
                                   <div>
                                       <h1 className="text-4xl text-white dark:text-white-light">前端达人</h1>
                                   </div>
                               </div>

                               <div className="mt-24 hidden w-full max-w-[430px] lg:block">
                                   <img src="/assets/images/auth/contact-us.svg" alt="Cover Image" className="w-full" />
                               </div>
                           </div>
                       </div>
                       <div className="relative flex w-full flex-col items-center justify-center gap-6 px-4 pb-16 pt-6 sm:px-6 lg:max-w-[667px]">
                           <div className="flex w-full max-w-[440px] items-center gap-2 lg:absolute lg:end-6 lg:top-6 lg:max-w-full">
                               <Link href="/" className="block w-8 lg:hidden">
                                   <img src="/assets/images/logo.png" alt="Logo" className="mx-auto w-10" />
                               </Link>

                           </div>
                           <div className="w-full max-w-[440px] lg:mt-16">
                               <div className="mb-10 flex flex-col gap-6">
                                   <h1 className="text-3xl font-extrabold uppercase !leading-snug text-primary md:text-4xl">与我联系</h1>
                                   <p className="text-base  leading-normal text-white-dark">请微信关注「前端达人」公众号</p>
                                   <div>
                                       <Image src='/assets/images/qrcode.jpg' alt='前端达人公众号二维码' width={200} height={200} >
                                       </Image>
                                   </div>
                                   <div className="flex w-full gap-2 items-center">
                                       <div className="grid h-14 w-14 place-content-center rounded-md border border-white-dark/20 dark:border-[#191e3a]">
                                           <IconMenuMailbox className="h-6 w-6" />
                                       </div>
                                       <p className="text-base  leading-normal text-white-dark">519663@qq.com</p>
                                   </div>

                               </div>

                           </div>

                       </div>
                   </div>
               </div>
           </div>
       </>
    );
};

export default PageComponent;
