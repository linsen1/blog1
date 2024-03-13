import React from 'react';
import Link from "next/link";
import IconPlayCircle from "@/components/icon/icon-play-circle";

const PageComponent = () => {
    return (
      <>
          <ul className="flex space-x-2 rtl:space-x-reverse">
              <li>
                  <Link href="/" className="text-primary hover:underline">
                      首页
                  </Link>
              </li>
              <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
                  <Link href="/video" className="text-primary hover:underline">
                      <span>视频</span>
                  </Link>
              </li>
          </ul>

          <div className="grid w-full grid-cols-1 sm:grid-cols-4 gap-4 p-5">
              <div className="panel h-full sm:col-span-3">
                  <div className="flex items-center justify-center">
                      <h1 className="m-4 text-4xl dark:text-white-light">如何清空 JavaScript 数组的内容</h1>
                  </div>


                  <div className="grid grid-cols-12 m-4">
                      <div className="col-span-4">
                          <div className="text-center">
                              <h6 className="mb-2 text-gray-700 dark:text-gray-100">标签</h6>
                              <p className="text-gray-500  text-15 mb-3  flex  justify-center gap-2 m-3 dark:text-white-dark">

                                      <Link href={"/article/tag-list?tag="}>
                                          <span>java</span>
                                      </Link>

                              </p>
                          </div>
                      </div>
                      <div className="col-span-4">
                          <div className="text-center">
                              <h6 className="mb-2 text-gray-700 dark:text-gray-100">日期</h6>
                              <p className="text-gray-500  text-15 mb-3 dark:text-white-dark">2024/2/25 22:44:08</p>
                          </div>
                      </div>
                      <div className="col-span-4">
                          <div className="text-center">
                              <p className="text-gray-500 dark:text-zinc-100 mb-2">作者</p>
                              <h5 className="text-15 mb-3 text-gray-500 dark:text-white-dark">前端达人</h5>
                          </div>
                      </div>
                  </div>

                  <hr className="my-4 border-gray-100 dark:border-zinc-600"/>

                  <div className="mt-6 w-full flex  flex-col items-center">

                      <div className="group w-5/6 relative h-[400px] overflow-hidden rounded-md">
                          <img src='/assets/images/knowledge/image-7.jpg' alt="video tutorial" className="h-full w-full cursor-pointer object-cover"  />
                          <button
                              type="button"
                              className="absolute left-1/2 top-1/2 grid h-[62px] w-[62px] -translate-x-1/2 -translate-y-1/2 place-content-center rounded-full text-white duration-300 group-hover:scale-110"
                          >
                              <IconPlayCircle className="h-[62px] w-[62px]" fill={true} />
                          </button>

                      </div>

                  </div>

                  <hr className="my-6 border-gray-100 dark:border-zinc-600"/>

                  <p className="text-xl dark:text-white-light">
                      另一个常用的方法是使用 splice() 方法。此函数将在删除条目之前返回数组的副本，如果您想在清除数组之前进行重新分配，这将很有帮助
                  </p>

              </div>
              <div className="panel h-full sm:col-span-1 flex flex-col items-center">

                  <div className="flex  justify-start w-full py-4">
                      <h1 className="text-[16px] dark:text-white-light">热门标签</h1>
                  </div>

                  <div className="flex gap-4 w-full">

                      <Link href={"/article/tag-list?tag="} >
                                <span className="badge bg-primary" >java</span>
                      </Link>

                  </div>

                  <div className="flex  justify-start w-full py-4 my-2">
                      <h1 className="text-[16px] dark:text-white-light">公众号</h1>
                  </div>


                  <div className="my-2">
                      <img
                          className="w-24 h-24 rounded-full overflow-hidden object-cover ring-2 ring-gray-500 dark:ring-white-dark"
                          src="/assets/images/logo.png"
                          alt="img"/>
                  </div>
                  <div>
                      <h1 className="text-2xl dark:text-white-light">前端达人</h1>
                  </div>

                  <div className="p-4 leading-6">
                        <span
                            className="dark:text-white-light">专注分享当下最实用的前端技术。关注前端达人，与达人一起学习进步！</span>
                  </div>

                  <div className="py-4">
                      <img src="/assets/images/qrcode.jpg"
                           className="w-28 h-28 ring-gray-500 ring-2 rounded-md overflow-hidden dark:ring-white-dark object-cover"/>
                  </div>

                  <div className="flex  justify-start w-full py-4">
                      <h1 className="text-[16px] dark:text-white-light">其他媒体</h1>
                  </div>

                  <div className="flex flex-col justify-start w-full gap-2">
                      <div className="text-[14px] dark:text-white-dark">头条号：前端达人</div>
                      <div className="text-[14px] dark:text-white-dark">抖音号：前端达人</div>
                      <div className="text-[14px] dark:text-white-dark">小红书：前端达人</div>
                      <div className="text-[14px] dark:text-white-dark">百家号：前端达人</div>
                      <div className="text-[14px] dark:text-white-dark">视频号：前端达人</div>
                      <div className="text-[14px] dark:text-white-dark">bilibili：前端达人</div>
                  </div>

              </div>

          </div>
      </>
    );
};

export default PageComponent;
