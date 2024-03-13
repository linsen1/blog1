'use client';
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Link from 'next/link';
import {IRootState} from '@/store';
import {toggleTheme, toggleSidebar, toggleRTL} from '@/store/themeConfigSlice';

import IconMenu from '@/components/icon/icon-menu';

import IconSun from '@/components/icon/icon-sun';
import IconMoon from '@/components/icon/icon-moon';
import IconLaptop from '@/components/icon/icon-laptop';
import IconHome from "@/components/icon/icon-home";
import IconCoffee from "@/components/icon/icon-coffee";
import IconCode from "@/components/icon/icon-code";

import IconMail from '@/components/icon/icon-mail';

import IconPencil from "@/components/icon/icon-pencil";
import IconBook from "@/components/icon/icon-book";


import IconMenuDatatables from '@/components/icon/menu/icon-menu-datatables';
import IconVideo from "@/components/icon/icon-video";

import {usePathname, useRouter} from 'next/navigation';

const HeaderMain = () => {
    const pathname = usePathname();
    const dispatch = useDispatch();
    const router = useRouter();


    useEffect(() => {
        const selector = document.querySelector('ul.horizontal-menu a[href="' + window.location.pathname + '"]');
        if (selector) {
            const all: any = document.querySelectorAll('ul.horizontal-menu .nav-link.active');
            for (let i = 0; i < all.length; i++) {
                all[0]?.classList.remove('active');
            }

            let allLinks = document.querySelectorAll('ul.horizontal-menu a.active');
            for (let i = 0; i < allLinks.length; i++) {
                const element = allLinks[i];
                element?.classList.remove('active');
            }
            selector?.classList.add('active');

            const ul: any = selector.closest('ul.sub-menu');
            if (ul) {
                let ele: any = ul.closest('li.menu').querySelectorAll('.nav-link');
                if (ele) {
                    ele = ele[0];
                    setTimeout(() => {
                        ele?.classList.add('active');
                    });
                }
            }
        }
    }, [pathname]);



    const themeConfig = useSelector((state: IRootState) => state.themeConfig);








    return (

        <header className={`z-40 ${themeConfig.semidark && themeConfig.menu === 'horizontal' ? 'dark' : ''}`}>
            <div className="shadow-sm">
                <div className="relative flex w-full justify-between items-center bg-white px-5 py-6 dark:bg-black">

                    <div className="horizontal-logo flex items-center justify-between ltr:mr-2 rtl:ml-2 lg:hidden">
                        <Link href="/" className="main-logo flex shrink-0 items-center">
                            <img className="inline w-10 ltr:-ml-2 rtl:-mr-2" src="/assets/images/logo.png" alt="logo"/>
                            <span
                                className="hidden align-middle text-xl  font-semibold  transition-all duration-300 ltr:ml-4 rtl:mr-1.5 dark:text-white-light md:inline">前端达人</span>
                        </Link>
                        <button
                            type="button"
                            className="collapse-icon flex flex-none rounded-full bg-white-light/40 p-2 hover:bg-white-light/90 hover:text-primary ltr:ml-2 rtl:mr-2 dark:bg-dark/40 dark:text-[#d0d2d6] dark:hover:bg-dark/60 dark:hover:text-primary lg:hidden"
                            onClick={() => dispatch(toggleSidebar())}
                        >
                            <IconMenu className="h-5 w-5"/>
                        </button>
                    </div>
                    <div className="flex items-center space-x-1.5 ltr:ml-auto rtl:mr-auto rtl:space-x-reverse dark:text-[#d0d2d6] ltr:sm:ml-0 sm:rtl:mr-0 lg:space-x-2">

                        <div>
                            {themeConfig.theme === 'light' ? (
                                <button
                                    className={`${
                                        themeConfig.theme === 'light' &&
                                        'flex items-center rounded-full bg-white-light/40 p-2 hover:bg-white-light/90 hover:text-primary dark:bg-dark/40 dark:hover:bg-dark/60'
                                    }`}
                                    onClick={() => dispatch(toggleTheme('dark'))}
                                >
                                    <IconSun/>
                                </button>
                            ) : (
                                ''
                            )}
                            {themeConfig.theme === 'dark' && (
                                <button
                                    className={`${
                                        themeConfig.theme === 'dark' &&
                                        'flex items-center rounded-full bg-white-light/40 p-2 hover:bg-white-light/90 hover:text-primary dark:bg-dark/40 dark:hover:bg-dark/60'
                                    }`}
                                    onClick={() => dispatch(toggleTheme('system'))}
                                >
                                    <IconMoon/>
                                </button>
                            )}
                            {themeConfig.theme === 'system' && (
                                <button
                                    className={`${
                                        themeConfig.theme === 'system' &&
                                        'flex items-center rounded-full bg-white-light/40 p-2 hover:bg-white-light/90 hover:text-primary dark:bg-dark/40 dark:hover:bg-dark/60'
                                    }`}
                                    onClick={() => dispatch(toggleTheme('light'))}
                                >
                                    <IconLaptop/>
                                </button>
                            )}
                        </div>


                    </div>

                </div>

                {/* horizontal menu */}
                <ul className=" horizontal-menu hidden border-t border-[#ebedf2] bg-white px-6 py-3 font-semibold text-black rtl:space-x-reverse dark:border-[#191e3a] dark:bg-black dark:text-white-dark lg:space-x-1.5 xl:space-x-8 sm:flex sm:items-center sm:justify-between">
                    <li className="menu nav-item relative">
                        <Link href="/" className="nav-link">
                            <div className="flex items-center">
                                <IconHome className="shrink-0"/>
                                <span className="px-1">首页</span>
                            </div>
                        </Link>
                    </li>
                    <li className="menu nav-item relative">
                        <Link href="/article" className="nav-link">
                            <div className="flex items-center">
                                <IconBook className="shrink-0"/>
                                <span className="px-1">文章</span>
                            </div>
                        </Link>

                    </li>
                    <li className="menu nav-item relative">
                        <button type="button" className="nav-link">
                            <div className="flex items-center">
                                <IconVideo className="shrink-0"/>
                                <span className="px-1">视频</span>
                            </div>
                        </button>

                    </li>
                    <li className="menu nav-item relative">
                        <button type="button" className="nav-link">
                            <div className="flex items-center">
                                <IconPencil className="shrink-0"/>
                                <span className="px-1">面试题</span>
                            </div>

                        </button>

                    </li>
                    <li className="menu nav-item relative">
                        <button type="button" className="nav-link">
                            <div className="flex items-center">
                                <IconMenuDatatables className="shrink-0"/>
                                <span className="px-1">资源与工具</span>
                            </div>

                        </button>

                    </li>
                    <li className="menu nav-item relative">
                        <button type="button" className="nav-link">
                            <div className="flex items-center">
                                <IconCode className="shrink-0"/>
                                <span className="px-1">常用代码</span>
                            </div>

                        </button>

                    </li>
                    <li className="menu nav-item relative">
                        <button type="button" className="nav-link">
                            <div className="flex items-center">
                                <IconCoffee className="shrink-0"/>
                                <span className="px-1">程序人生</span>
                            </div>

                        </button>

                    </li>
                    <li className="menu nav-item relative">
                        <button type="button" className="nav-link">
                            <div className="flex items-center">
                                <IconMail  className="shrink-0"/>
                                <span className="px-1">与我联系</span>
                            </div>

                        </button>

                    </li>
                </ul>
            </div>



        </header>


    );
};

export default HeaderMain;
