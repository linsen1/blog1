import React from 'react';
import {Metadata} from "next";
import Link from "next/link";
import Image from "next/image";
import {urlFor} from "@/components/lib/client";
import IconCaretsDown from "@/components/icon/icon-carets-down";
import IconCaretDown from "@/components/icon/icon-caret-down";

export const metadata: Metadata = {
    title: '资源与工具',
};

const PageComponent = () => {
    return (

        <>
            <div className="max-w-full grid grid-cols-1 gap-6 pt-5 place-items-center sm:grid-cols-2 lg:grid-cols-3">

                <div
                    className="w-full max-w-[22rem] rounded-md border border-white-light bg-white shadow-[4px_6px_10px_-3px_#bfc9d4] dark:border-[#1b2e4b] dark:bg-[#191e3a] dark:shadow-none">
                    <div className="px-6 py-7">
                        <div
                            className="-mx-6 -mt-7 mb-7 h-[200px] overflow-hidden rounded-tl-md rounded-tr-md relative ">

                            <Link href={`/article/article-detail/`}>


                                <Image
                                    src="/assets/images/article/1.webp" alt='图片' fill objectFit="cover"></Image>

                            </Link>

                        </div>
                        <p className="mb-1.5 text-xs font-bold text-primary">{new Date().toLocaleString()}</p>
                        <Link href={`/article/article-detail/`}>
                            <h5 className="mb-4 text-[18px] font-bold text-[#3b3f5c] leading-normal dark:text-white-light">
                                如何清空 JavaScript 数组的内容
                            </h5>
                        </Link>
                        <Link href={`/article/article-detail/`}>
                            <p className="text-white-dark  line-clamp-2 ">在 JavaScript
                                中清空数组意味着删除数组中的所有元素并留下一个空数组。以下是清空数组的 3 种方法：

                            </p>
                        </Link>
                        <div className="flex gap-2 m-3">
                            <span className="badge bg-warning">JavaScript</span>
                        </div>
                        <div
                            className="relative mt-3 flex justify-between pt-4 before:absolute before:inset-x-0 before:top-0 before:mx-auto before:h-[1px] before:w-[250px] before:bg-white-light dark:before:bg-[#1b2e4b]">
                            <div className="flex items-center font-semibold">
                                <div
                                    className="inline-block h-9 w-9 shrink-0 overflow-hidden rounded-full ltr:mr-2 rtl:ml-2.5">
                                   <span
                                       className="flex h-full w-full items-center justify-center bg-[#515365] text-white-light relative">
                                       <Image src='/assets/images/logo.png' alt="前端达人" fill objectFit="cover"></Image>

                                   </span>
                                </div>
                                <div className="text-[#515365] dark:text-white-dark">前端达人</div>
                            </div>
                            <div className="flex font-semibold">
                                {/*<div className="flex items-center text-primary ltr:mr-3 rtl:ml-3">
                                   <IconHeart className="h-4 w-4 ltr:mr-1 rtl:ml-1" />
                                   51
                               </div>*/}
                                {/* <div className="flex items-center text-primary">
                                   <IconEye className="h-4 w-4 ltr:mr-1 rtl:ml-1" />
                                   250
                               </div>*/}
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    className="w-full max-w-[22rem] rounded-md border border-white-light bg-white shadow-[4px_6px_10px_-3px_#bfc9d4] dark:border-[#1b2e4b] dark:bg-[#191e3a] dark:shadow-none">
                    <div className="px-6 py-7">
                        <div
                            className="-mx-6 -mt-7 mb-7 h-[200px] overflow-hidden rounded-tl-md rounded-tr-md relative ">

                            <Link href={`/article/article-detail/`}>


                                <Image
                                    src="/assets/images/article/1.webp" alt='图片' fill objectFit="cover"></Image>

                            </Link>

                        </div>
                        <p className="mb-1.5 text-xs font-bold text-primary">{new Date().toLocaleString()}</p>
                        <Link href={`/article/article-detail/`}>
                            <h5 className="mb-4 text-[18px] font-bold text-[#3b3f5c] leading-normal dark:text-white-light">
                                如何清空 JavaScript 数组的内容
                            </h5>
                        </Link>
                        <Link href={`/article/article-detail/`}>
                            <p className="text-white-dark  line-clamp-2 ">在 JavaScript
                                中清空数组意味着删除数组中的所有元素并留下一个空数组。以下是清空数组的 3 种方法：

                            </p>
                        </Link>
                        <div className="flex gap-2 m-3">
                            <span className="badge bg-warning">JavaScript</span>
                        </div>
                        <div
                            className="relative mt-3 flex justify-between pt-4 before:absolute before:inset-x-0 before:top-0 before:mx-auto before:h-[1px] before:w-[250px] before:bg-white-light dark:before:bg-[#1b2e4b]">
                            <div className="flex items-center font-semibold">
                                <div
                                    className="inline-block h-9 w-9 shrink-0 overflow-hidden rounded-full ltr:mr-2 rtl:ml-2.5">
                                   <span
                                       className="flex h-full w-full items-center justify-center bg-[#515365] text-white-light relative">
                                       <Image src='/assets/images/logo.png' alt="前端达人" fill objectFit="cover"></Image>

                                   </span>
                                </div>
                                <div className="text-[#515365] dark:text-white-dark">前端达人</div>
                            </div>
                            <div className="flex font-semibold">
                                {/*<div className="flex items-center text-primary ltr:mr-3 rtl:ml-3">
                                   <IconHeart className="h-4 w-4 ltr:mr-1 rtl:ml-1" />
                                   51
                               </div>*/}
                                {/* <div className="flex items-center text-primary">
                                   <IconEye className="h-4 w-4 ltr:mr-1 rtl:ml-1" />
                                   250
                               </div>*/}
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    className="w-full max-w-[22rem] rounded-md border border-white-light bg-white shadow-[4px_6px_10px_-3px_#bfc9d4] dark:border-[#1b2e4b] dark:bg-[#191e3a] dark:shadow-none">
                    <div className="px-6 py-7">
                        <div
                            className="-mx-6 -mt-7 mb-7 h-[200px] overflow-hidden rounded-tl-md rounded-tr-md relative ">

                            <Link href={`/article/article-detail/`}>


                                <Image
                                    src="/assets/images/article/1.webp" alt='图片' fill objectFit="cover"></Image>

                            </Link>

                        </div>
                        <p className="mb-1.5 text-xs font-bold text-primary">{new Date().toLocaleString()}</p>
                        <Link href={`/article/article-detail/`}>
                            <h5 className="mb-4 text-[18px] font-bold text-[#3b3f5c] leading-normal dark:text-white-light">
                                如何清空 JavaScript 数组的内容
                            </h5>
                        </Link>
                        <Link href={`/article/article-detail/`}>
                            <p className="text-white-dark  line-clamp-2 ">在 JavaScript
                                中清空数组意味着删除数组中的所有元素并留下一个空数组。以下是清空数组的 3 种方法：

                            </p>
                        </Link>
                        <div className="flex gap-2 m-3">
                            <span className="badge bg-warning">JavaScript</span>
                        </div>
                        <div
                            className="relative mt-3 flex justify-between pt-4 before:absolute before:inset-x-0 before:top-0 before:mx-auto before:h-[1px] before:w-[250px] before:bg-white-light dark:before:bg-[#1b2e4b]">
                            <div className="flex items-center font-semibold">
                                <div
                                    className="inline-block h-9 w-9 shrink-0 overflow-hidden rounded-full ltr:mr-2 rtl:ml-2.5">
                                   <span
                                       className="flex h-full w-full items-center justify-center bg-[#515365] text-white-light relative">
                                       <Image src='/assets/images/logo.png' alt="前端达人" fill objectFit="cover"></Image>

                                   </span>
                                </div>
                                <div className="text-[#515365] dark:text-white-dark">前端达人</div>
                            </div>
                            <div className="flex font-semibold">
                                {/*<div className="flex items-center text-primary ltr:mr-3 rtl:ml-3">
                                   <IconHeart className="h-4 w-4 ltr:mr-1 rtl:ml-1" />
                                   51
                               </div>*/}
                                {/* <div className="flex items-center text-primary">
                                   <IconEye className="h-4 w-4 ltr:mr-1 rtl:ml-1" />
                                   250
                               </div>*/}
                            </div>
                        </div>
                    </div>
                </div>


            </div>
            <div className="max-w-full my-10">
                <div className="flex w-full flex-col justify-center">
                    <ul className="inline-flex items-center space-x-1 rtl:space-x-reverse m-auto mb-4">
                        <li>
                            <button
                                type="button"
                                className="flex justify-center font-semibold p-2 rounded-full transition bg-white-light text-dark hover:text-white hover:bg-primary dark:text-white-light dark:bg-[#191e3a] dark:hover:bg-primary"
                            >
                                <IconCaretsDown className="rotate-90 rtl:-rotate-90"/>
                            </button>
                        </li>
                        <li>
                            <button
                                type="button"
                                className="flex justify-center font-semibold p-2 rounded-full transition bg-white-light text-dark hover:text-white hover:bg-primary dark:text-white-light dark:bg-[#191e3a] dark:hover:bg-primary"
                            >
                                <IconCaretDown className="h-5 w-5 rotate-90 rtl:-rotate-90"/>
                            </button>
                        </li>
                        <li>
                            <button
                                type="button"
                                className="flex justify-center font-semibold px-3.5 py-2 rounded-full transition bg-white-light text-dark hover:text-white hover:bg-primary dark:text-white-light dark:bg-[#191e3a] dark:hover:bg-primary"
                            >
                                1
                            </button>
                        </li>
                        <li>
                            <button type="button" className="flex justify-center font-semibold px-3.5 py-2 rounded-full transition bg-primary text-white dark:text-white-light dark:bg-primary">
                                2
                            </button>
                        </li>
                        <li>
                            <button
                                type="button"
                                className="flex justify-center font-semibold px-3.5 py-2 rounded-full transition bg-white-light text-dark hover:text-white hover:bg-primary dark:text-white-light dark:bg-[#191e3a] dark:hover:bg-primary"
                            >
                                3
                            </button>
                        </li>
                        <li>
                            <button
                                type="button"
                                className="flex justify-center font-semibold p-2 rounded-full transition bg-white-light text-dark hover:text-white hover:bg-primary dark:text-white-light dark:bg-[#191e3a] dark:hover:bg-primary"
                            >
                                <IconCaretDown className="h-5 w-5 -rotate-90 rtl:rotate-90"/>
                            </button>
                        </li>
                        <li>
                            <button
                                type="button"
                                className="flex justify-center font-semibold p-2 rounded-full transition bg-white-light text-dark hover:text-white hover:bg-primary dark:text-white-light dark:bg-[#191e3a] dark:hover:bg-primary"
                            >
                                <IconCaretsDown className="-rotate-90 rtl:rotate-90"/>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </>

    );
};

export default PageComponent;
