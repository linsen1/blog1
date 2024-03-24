import React from 'react';
import Link from "next/link";
import Image from "next/image";
import {getResourceHomeList} from "@/components/lib/homeInterface";

const ResourceHomeCardComponent =async () => {
    const data =await  getResourceHomeList()
    return (
      <>
          {
              data.map((item:any,index:number)=>(
                  <div key={index} className="w-full  rounded-md border border-white-light bg-white shadow-[4px_6px_10px_-3px_#bfc9d4] dark:border-[#1b2e4b] dark:bg-[#191e3a] dark:shadow-none">
                      <div className="px-6 py-7">
                          <div className="-mx-6 -mt-7 mb-7 h-[200px] overflow-hidden rounded-tl-md rounded-tr-md relative ">

                              <Link href={`/resource/detail/${item.currentSlug}`}>
                                  <Image

                                      src={item.coverImage} alt={item.title}  fill  objectFit="cover" ></Image>
                              </Link>

                          </div>
                          <p className="mb-1.5 text-xs font-bold text-primary">{new Date(item._createdAt).toLocaleDateString("zh-cn")}</p>
                          <Link href={`/resource/detail/${item.currentSlug}`}>
                              <h5 className="mb-4 text-[18px] font-bold text-[#3b3f5c] leading-normal dark:text-white-light" >
                                  {item.title}
                              </h5>
                          </Link>
                          <Link href={`/resource/detail/${item.currentSlug}`}>
                              <p className="text-white-dark  line-clamp-2 ">{item.smallDescription}</p>
                          </Link>
                          <div className="flex gap-2 m-3">
                           <span className="hidden bg-primary
                           bg-secondary bg-success bg-danger bg-warning
                           bg-info bg-dark
                           "></span>


                              {
                                  item.tags.map((item:any,index:number)=>(
                                      <Link href={"/resource/tag-list?tag="+item.currentSlug}  key={index}>
                                   <span className={
                                       "badge "+item.colorValue
                                   }   key={index}>
                                       {item.name}
                                   </span>
                                      </Link>
                                  ))
                              }



                          </div>
                          <div className="relative mt-3 flex justify-between pt-4 before:absolute before:inset-x-0 before:top-0 before:mx-auto before:h-[1px] before:w-[250px] before:bg-white-light dark:before:bg-[#1b2e4b]">
                              <div className="flex items-center font-semibold">
                                  <div className="inline-block h-9 w-9 shrink-0 overflow-hidden rounded-full ltr:mr-2 rtl:ml-2.5">
                                   <span className="flex h-full w-full items-center justify-center bg-[#515365] text-white-light relative">
                                        <Image src="/assets/images/logo.png" alt="前端达人"  fill  objectFit="cover" ></Image>
                                   </span>
                                  </div>
                                  <div className="text-[#515365] dark:text-white-dark">前端达人</div>
                              </div>
                          </div>
                      </div>
                  </div>
              ))
          }

      </>
    );
};

export default ResourceHomeCardComponent;
