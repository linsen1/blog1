'use client';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import { toggleSidebar } from '@/store/themeConfigSlice';
import AnimateHeight from 'react-animate-height';
import { IRootState } from '@/store';
import { useState, useEffect } from 'react';
import IconCaretsDown from '@/components/icon/icon-carets-down';
import IconMenuDashboard from '@/components/icon/menu/icon-menu-dashboard';
import IconCaretDown from '@/components/icon/icon-caret-down';
import IconMinus from '@/components/icon/icon-minus';
import IconMenuChat from '@/components/icon/menu/icon-menu-chat';
import IconMenuMailbox from '@/components/icon/menu/icon-menu-mailbox';
import IconMenuTodo from '@/components/icon/menu/icon-menu-todo';
import IconMenuNotes from '@/components/icon/menu/icon-menu-notes';
import IconMenuScrumboard from '@/components/icon/menu/icon-menu-scrumboard';
import IconMenuContacts from '@/components/icon/menu/icon-menu-contacts';
import IconMenuInvoice from '@/components/icon/menu/icon-menu-invoice';
import IconMenuCalendar from '@/components/icon/menu/icon-menu-calendar';
import IconMenuComponents from '@/components/icon/menu/icon-menu-components';
import IconMenuElements from '@/components/icon/menu/icon-menu-elements';
import IconMenuCharts from '@/components/icon/menu/icon-menu-charts';
import IconMenuWidgets from '@/components/icon/menu/icon-menu-widgets';
import IconMenuFontIcons from '@/components/icon/menu/icon-menu-font-icons';
import IconMenuDragAndDrop from '@/components/icon/menu/icon-menu-drag-and-drop';
import IconMenuTables from '@/components/icon/menu/icon-menu-tables';
import IconMenuDatatables from '@/components/icon/menu/icon-menu-datatables';
import IconMenuForms from '@/components/icon/menu/icon-menu-forms';
import IconMenuUsers from '@/components/icon/menu/icon-menu-users';
import IconMenuPages from '@/components/icon/menu/icon-menu-pages';
import IconMenuAuthentication from '@/components/icon/menu/icon-menu-authentication';
import IconMenuDocumentation from '@/components/icon/menu/icon-menu-documentation';
import { usePathname } from 'next/navigation';
import { getTranslation } from '@/i18n';
import IconHome from "@/components/icon/icon-home";
import IconBook from "@/components/icon/icon-book";
import IconVideo from "@/components/icon/icon-video";
import IconPencil from "@/components/icon/icon-pencil";
import IconCoffee from "@/components/icon/icon-coffee";
import IconMail from "@/components/icon/icon-mail";
import IconCode from "@/components/icon/icon-code";

const Sidebar = () => {
    const dispatch = useDispatch();
    const { t } = getTranslation();
    const pathname = usePathname();
    const [currentMenu, setCurrentMenu] = useState<string>('');
    const [errorSubMenu, setErrorSubMenu] = useState(false);
    const themeConfig = useSelector((state: IRootState) => state.themeConfig);
    const semidark = useSelector((state: IRootState) => state.themeConfig.semidark);
    const toggleMenu = (value: string) => {
        setCurrentMenu((oldValue) => {
            return oldValue === value ? '' : value;
        });
    };

    useEffect(() => {
        const selector = document.querySelector('.sidebar ul a[href="' + window.location.pathname + '"]');
        if (selector) {
            selector.classList.add('active');
            const ul: any = selector.closest('ul.sub-menu');
            if (ul) {
                let ele: any = ul.closest('li.menu').querySelectorAll('.nav-link') || [];
                if (ele.length) {
                    ele = ele[0];
                    setTimeout(() => {
                        ele.click();
                    });
                }
            }
        }
    }, []);

    useEffect(() => {
        setActiveRoute();
        if (window.innerWidth < 1024 && themeConfig.sidebar) {
            dispatch(toggleSidebar());
        }
    }, [pathname]);

    const setActiveRoute = () => {
        let allLinks = document.querySelectorAll('.sidebar ul a.active');
        for (let i = 0; i < allLinks.length; i++) {
            const element = allLinks[i];
            element?.classList.remove('active');
        }
        const selector = document.querySelector('.sidebar ul a[href="' + window.location.pathname + '"]');
        selector?.classList.add('active');
    };

    return (
        <div className={semidark ? 'dark' : ''}>
            <nav
                className={`sidebar fixed bottom-0 top-0 z-50 h-full min-h-screen w-[260px] shadow-[5px_0_25px_0_rgba(94,92,154,0.1)] transition-all duration-300 ${semidark ? 'text-white-dark' : ''}`}
            >
                <div className="h-full bg-white dark:bg-black">
                    <div className="flex items-center justify-between px-4 py-3">
                        <Link href="/" className="main-logo flex shrink-0 items-center">
                            <img className="ml-[5px] w-10 flex-none border border-gray-500  rounded-full" src="/assets/images/logo.png" alt="logo" />
                            <span className="align-middle text-xl  ltr:ml-1.5 rtl:mr-1.5 dark:text-white-light lg:inline">前端达人</span>
                        </Link>

                        <button
                            type="button"
                            className="collapse-icon flex h-8 w-8 items-center rounded-full transition duration-300 hover:bg-gray-500/10 rtl:rotate-180 dark:text-white-light dark:hover:bg-dark-light/10"
                            onClick={() => dispatch(toggleSidebar())}
                        >
                            <IconCaretsDown className="m-auto rotate-90" />
                        </button>
                    </div>

                   <ul className="relative space-y-0.5 p-4 py-0 font-semibold">

                       <li className="nav-item">
                           <ul>
                               <li className="nav-item">
                                   <Link href="/" className="group">
                                       <div className="flex items-center">
                                           <IconHome className="shrink-0 group-hover:!text-primary" />
                                           <span className="text-black ltr:pl-3 rtl:pr-3 dark:text-[#506690] dark:group-hover:text-white-dark">首页</span>
                                       </div>
                                   </Link>
                               </li>
                               <li className="nav-item">
                                   <Link href="/article" className="group">
                                       <div className="flex items-center">
                                           <IconBook className="shrink-0 group-hover:!text-primary" />
                                           <span className="text-black ltr:pl-3 rtl:pr-3 dark:text-[#506690] dark:group-hover:text-white-dark">文章</span>
                                       </div>
                                   </Link>
                               </li>
                               <li className="nav-item">
                                   <Link href="/video" className="group">
                                       <div className="flex items-center">
                                           <IconVideo className="shrink-0 group-hover:!text-primary" />
                                           <span className="text-black ltr:pl-3 rtl:pr-3 dark:text-[#506690] dark:group-hover:text-white-dark">视频</span>
                                       </div>
                                   </Link>
                               </li>
                               <li className="nav-item">
                                   <Link href="/question" className="group">
                                       <div className="flex items-center">
                                           <IconPencil className="shrink-0 group-hover:!text-primary" />
                                           <span className="text-black ltr:pl-3 rtl:pr-3 dark:text-[#506690] dark:group-hover:text-white-dark">面试题</span>
                                       </div>
                                   </Link>
                               </li>
                               <li className="nav-item">
                                   <Link href="/resource" className="group">
                                       <div className="flex items-center">
                                           <IconMenuDatatables className="shrink-0 group-hover:!text-primary" />
                                           <span className="text-black ltr:pl-3 rtl:pr-3 dark:text-[#506690] dark:group-hover:text-white-dark">资源与工具</span>
                                       </div>
                                   </Link>
                               </li>
                               <li className="nav-item">
                                   <Link href="/code" className="group">
                                       <div className="flex items-center">
                                           <IconCode className="shrink-0 group-hover:!text-primary" />
                                           <span className="text-black ltr:pl-3 rtl:pr-3 dark:text-[#506690] dark:group-hover:text-white-dark">常用代码</span>
                                       </div>
                                   </Link>
                               </li>



                               <li className="nav-item">
                                   <Link href="/liftstyle" className="group">
                                       <div className="flex items-center">
                                           <IconCoffee className="shrink-0 group-hover:!text-primary" />
                                           <span className="text-black ltr:pl-3 rtl:pr-3 dark:text-[#506690] dark:group-hover:text-white-dark">程序人生</span>
                                       </div>
                                   </Link>
                               </li>



                               <li className="nav-item">
                                   <Link href="/contact" className="group">
                                       <div className="flex items-center">
                                           <IconMail className="shrink-0 group-hover:!text-primary" />
                                           <span className="text-black ltr:pl-3 rtl:pr-3 dark:text-[#506690] dark:group-hover:text-white-dark">与我联系</span>
                                       </div>
                                   </Link>
                               </li>
                           </ul>
                       </li>


                    </ul>

                </div>
            </nav>
        </div>
    );
};

export default Sidebar;
