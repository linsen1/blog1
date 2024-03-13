import React from 'react';
import IconCaretsDown from '@/components/icon/icon-carets-down';
import IconCaretDown from '@/components/icon/icon-caret-down';
import Link from "next/link";

const Pagination = ({isPageOutOfRange, page, prevPage, pageNumbers, nextPage, tagPath}:

                        {isPageOutOfRange:boolean, page:number, prevPage:number, pageNumbers:number[],
                            nextPage:number,tagPath:any}) => {

        return (
            <div>
                {isPageOutOfRange ? (
                        <div>No more pages...</div>) :
                    (<div className="mb-5">
                        <div className="flex w-full flex-col justify-center">

                            <ul className="m-auto mb-4 inline-flex items-center space-x-1 rtl:space-x-reverse">

                                <Link href={tagPath ? `?tag=${tagPath}&page=1`:`?page=1`}>
                                <li>
                                    <button
                                        type="button"
                                        className="flex justify-center rounded-full bg-white-light p-2 font-semibold text-dark transition hover:bg-primary hover:text-white dark:bg-[#191e3a] dark:text-white-light dark:hover:bg-primary"
                                        disabled={page === 1}
                                    >
                                        <IconCaretsDown className="rotate-90 rtl:-rotate-90"/>
                                    </button>
                                </li>
                                </Link>

                                <Link href={tagPath ? `?tag=${tagPath}&page=${prevPage}`:`?page=${prevPage}`}>
                                    <li>
                                        <button
                                            type="button"
                                            className="flex justify-center rounded-full bg-white-light p-2 font-semibold text-dark transition hover:bg-primary hover:text-white dark:bg-[#191e3a] dark:text-white-light dark:hover:bg-primary"
                                            disabled={page === 1 }
                                        >
                                            <IconCaretDown className="h-5 w-5 rotate-90 rtl:-rotate-90"/>
                                        </button>
                                    </li>
                                </Link>

                                {
                                    pageNumbers.map((item,index) => (
                                        <Link href={ tagPath ? `?tag=${tagPath}&page=${item}` : `?page=${item}` } key={index}>
                                            <li>
                                                <button
                                                    type="button"
                                                    className={
                                                        page === item ? "flex justify-center rounded-full bg-primary px-3.5 py-2 font-semibold text-white transition dark:bg-primary dark:text-white-light" :
                                                            "flex justify-center rounded-full bg-white-light px-3.5 py-2 font-semibold text-dark transition hover:bg-primary hover:text-white dark:bg-[#191e3a] dark:text-white-light dark:hover:bg-primary"
                                                    }
                                                >
                                                    {item}
                                                </button>
                                            </li>
                                        </Link>
                                    ))
                                }


                                <Link href={tagPath ?`?tag=${tagPath}&page=${nextPage}`:`?page=${nextPage}`}>
                                    <li>
                                        <button
                                            type="button"
                                            className="flex justify-center rounded-full bg-white-light p-2 font-semibold text-dark transition hover:bg-primary hover:text-white dark:bg-[#191e3a] dark:text-white-light dark:hover:bg-primary"
                                            disabled={page === pageNumbers[pageNumbers.length - 1] }
                                        >
                                            <IconCaretDown className="h-5 w-5 -rotate-90 rtl:rotate-90"/>
                                        </button>
                                    </li>
                                </Link>

                                <Link href={tagPath ? `?tag=${tagPath}&page=${pageNumbers[pageNumbers.length - 1]}` :`?page=${pageNumbers[pageNumbers.length - 1]}`}>
                                <li>
                                    <button
                                        type="button"
                                        className="flex justify-center rounded-full bg-white-light p-2 font-semibold text-dark transition hover:bg-primary hover:text-white dark:bg-[#191e3a] dark:text-white-light dark:hover:bg-primary"
                                        disabled={page === pageNumbers[pageNumbers.length - 1] }
                                    >
                                        <IconCaretsDown className="-rotate-90 rtl:rotate-90"/>
                                    </button>
                                </li>
                                </Link>

                            </ul>

                        </div>
                    </div>)
                }

            </div>
        )
            ;
    }
;

export default Pagination;
