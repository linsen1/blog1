'use client'
import IconHeart from "@/components/icon/icon-heart";
import IconEye from "@/components/icon/icon-eye";
import Image from "next/image";
import {urlFor} from "@/components/lib/client";
import Link from "next/link";
import {array} from "yup";

interface ArticleCardProps {
    key:any
    url: string;
    alt:string;
    data:string,
    title:string,
    content:string,
    author:string,
    avatar:string,
    slug:string,
    tags:[]
}

const ArticleCard = ({key,url,alt,data,title,content,author,avatar,slug,tags}:ArticleCardProps) => {
    return (
       <>

               <div className="w-full  rounded-md border border-white-light bg-white shadow-[4px_6px_10px_-3px_#bfc9d4] dark:border-[#1b2e4b] dark:bg-[#191e3a] dark:shadow-none">
                   <div className="px-6 py-7">
                       <div className="-mx-6 -mt-7 mb-7 h-[200px] overflow-hidden rounded-tl-md rounded-tr-md relative ">

                           <Link href={`/article/article-detail/${slug}`}>
                           <Image
                               src={url} alt={alt}  fill  objectFit="cover" ></Image>
                           </Link>

                       </div>
                       <p className="mb-4 text-xs font-bold text-primary">{new Date(data).toLocaleDateString("zh-cn")}</p>
                       <div className="h-[60px] grid justify-start items-center ">
                           <h5 className="  text-[18px] font-bold text-[#3b3f5c]  dark:text-white-light leading-7" >
                               <Link href={`/article/article-detail/${slug}`}>
                               <span className="line-clamp-2"> {title} </span>
                               </Link>
                           </h5>
                       </div>


                       <Link href={`/article/article-detail/${slug}`}>
                       <p className="text-white-dark  line-clamp-2 my-2 ">{content}</p>
                       </Link>
                       <div className="flex gap-2 m-3">
                           <span className="hidden bg-primary
                           bg-secondary bg-success bg-danger bg-warning
                           bg-info bg-dark
                           "></span>
                           {
                               tags.map((item:any,index:number)=>(
                                   <Link href={"/article/tag-list?tag="+item.currentSlug}  key={index}>
                                   <span className={
                                       "badge "+item.colorValue
                                   }   key={index}>
                                       {item.name}
                                   </span>
                                   </Link>
                               ))
                           }
                       </div>
                       <div className="relative mt-3 flex justify-between pt-4 before:absolute before:inset-x-0 before:top-0 before:mx-auto before:h-[1px] before:w-full before:bg-white-light dark:before:bg-[#1b2e4b]">
                           <div className="flex items-center font-semibold">
                               <div className="inline-block h-9 w-9 shrink-0 overflow-hidden rounded-full ltr:mr-2 rtl:ml-2.5">
                                   <span className="flex h-full w-full items-center justify-center bg-[#515365] text-white-light relative">
                                        <Image src={avatar} alt={author}  fill  objectFit="cover" ></Image>
                                   </span>
                               </div>
                               <div className="text-[#515365] dark:text-white-dark">{author}</div>
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

       </>
    );
};

export default ArticleCard;
