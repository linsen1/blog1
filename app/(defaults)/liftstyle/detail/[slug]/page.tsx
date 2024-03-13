import React from 'react';
import Link from "next/link";
import {urlFor} from "@/components/lib/client";
import CodeHighlight from "@/components/highlight";
import {PortableText} from '@portabletext/react'
import { getLiftPost} from "@/components/lib/interface";



interface Params {
    params: {
        slug: string
    }
}


const PageComponent = async ({params}: Params) => {

    const post = await getLiftPost(params?.slug);



    return (
        <>

            <ul className="flex space-x-2 rtl:space-x-reverse">
                <li>
                    <Link href="/" className="text-primary hover:underline">
                        首页
                    </Link>
                </li>
                <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
                    <Link href="/liftstyle" className="text-primary hover:underline">
                        <span>程序人生</span>
                    </Link>
                </li>
            </ul>

            <div className="grid w-full grid-cols-1 sm:grid-cols-4 gap-4 p-5">
                <div className="panel h-full sm:col-span-3">
                    <div className="flex items-center justify-center">
                        <h1 className="m-4 text-4xl dark:text-white-light">{post.title}</h1>
                    </div>
                    <div className="flex items-center justify-center">
                        <div className="my-4 ">

                            <img
                                src={post.coverImage}
                                alt={post.title}
                                className="w-4/5 border border-gray-100 dark:border-zinc-600 dark:bg-zinc-700 mx-auto p-1 rounded"></img>

                        </div>
                    </div>

                    <div className="grid grid-cols-12 m-4">

                        <div className="col-span-6">
                            <div className="text-center">
                                <h6 className="mb-2 text-gray-700 dark:text-gray-100">日期</h6>
                                <p className="text-gray-500  text-15 mb-3 dark:text-white-dark">{new Date(post._createdAt).toLocaleString()}</p>
                            </div>
                        </div>
                        <div className="col-span-6">
                            <div className="text-center">
                                <p className="text-gray-500 dark:text-zinc-100 mb-2">作者</p>
                                <h5 className="text-15 mb-3 text-gray-500 dark:text-white-dark">前端达人</h5>
                            </div>
                        </div>
                    </div>

                    <hr className="my-4 border-gray-100 dark:border-zinc-600"/>

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
