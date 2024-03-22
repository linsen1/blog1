
import React from 'react';
import Link from "next/link";
import IconPlayCircle from "@/components/icon/icon-play-circle";
import {getTags, getVideoPost} from "@/components/lib/interface";
import Image from "next/image";
import {PortableText} from '@portabletext/react'
import {urlFor} from "@/components/lib/client";
import CodeHighlight from "@/components/highlight";
import VideoPlayer from "@/components/pages/videoPlayer";
import RightInfoComponent from "@/components/pages/rightInfo";



interface Params {
    params: {
        slug: string
    }
}


export const revalidate = 60;

const PageComponent = async ({params}: Params) => {

    const post = await getVideoPost(params?.slug);
    const tags = await getTags();
    // console.log(post, "post");

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
                      <h1 className="m-4 text-4xl dark:text-white-light">{post.title}</h1>
                  </div>


                  <div className="grid grid-cols-12 m-4">
                      <div className="col-span-4">
                          <div className="text-center">
                              <h6 className="mb-2 text-gray-700 dark:text-gray-100">标签</h6>
                              <p className="text-gray-500  text-15 mb-3  flex  justify-center gap-2 m-3 dark:text-white-dark">

                                  {post?.tags.map((item: any, index: number) => (
                                      <Link href={"/video/tag-list?tag=" + item.currentSlug} key={index}>
                                          <span>{item.name}</span>
                                      </Link>
                                  ))}

                              </p>
                          </div>
                      </div>
                      <div className="col-span-4">
                          <div className="text-center">
                              <h6 className="mb-2 text-gray-700 dark:text-gray-100">日期</h6>
                              <p className="text-gray-500  text-15 mb-3 dark:text-white-dark">{new Date(post._createdAt).toLocaleString()}</p>
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

                      <div className="w-full grid place-content-center">
                          <VideoPlayer url={post.video_url} img={post.coverImage}/>
                      </div>

                  </div>

                  <hr className="my-6 border-gray-100 dark:border-zinc-600"/>

                  <div className="mt-4">
                      <div className={richTextStyles}>
                          <PortableText
                              value={post?.content}
                              components={myPortableTextComponents}
                          />
                      </div>

                  </div>

              </div>
              <div className="panel h-full sm:col-span-1 flex flex-col items-center">

                  <div className="flex  justify-start w-full py-4">
                      <h1 className="text-[16px] dark:text-white-light">热门标签</h1>
                  </div>

                  <div className="flex gap-4 w-full">

                      {
                          tags.map((item: any, index: number) => (
                              <Link href={"/video/tag-list?tag=" + item.currentSlug} key={index}>
                                <span className={
                                    "badge " + item.colorValue
                                } key={index}>{item.name}</span>
                              </Link>
                          ))
                      }

                  </div>

                  <RightInfoComponent/>

              </div>

          </div>
      </>
    );
};

export default PageComponent;




const myPortableTextComponents = {
    types: {
        image: ({value}: any) => (
            <img
                src={urlFor(value).url()}
                alt="Post"
                className='m-10 w-fit h-[300px] object-cover border border-gray-100 dark:border-zinc-600 dark:bg-zinc-700 mx-auto p-1 rounded'
            />
        ),
        code: ({value}: any) => (
            <div className='my-2 mb-6'>
                <CodeHighlight>
                    <pre className="language-xml">
                      {value.code}
                    </pre>
                </CodeHighlight>

            </div>
        )
    },
};

const richTextStyles = `
mt-8
text-justify
px-4
w-full
m-auto
text-lg
prose-headings:my-5
prose-heading:text-2xl
prose-p:mb-5
prose-p:leading-7
prose-li:list-disc
prose-li:leading-7
prose-li:ml-4
dark:text-white-light,

`;
