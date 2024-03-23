import React from 'react';
import {PortableTextComponents} from "@portabletext/react";
import {urlFor} from "@/components/lib/client";
import CodeHighlight from "@/components/highlight";
import IconArrowLeft from "@/components/icon/icon-arrow-left";


export const myPortableTextComponents:PortableTextComponents = {
    types: {
        image: ({value}: any) => (
            <img
                src={urlFor(value).url()}
                alt="Post"
                className='m-10 w-fit h-auto object-cover border border-gray-100 dark:border-zinc-600 dark:bg-zinc-700 mx-auto p-1 rounded'
            />
        ),
        code: ({value}: any) => (
            <div className='my-2 mb-6'>
                <CodeHighlight>
                    <pre>
                      {value.code}
                    </pre>
                </CodeHighlight>

            </div>
        )
    },

    block: {
        // Ex. 1: customizing common block types
        h1: ({children}) => <h1 className="text-3xl font-semibold dark:text-white-light"> {children}</h1>,
        blockquote: ({children}) =>
            <div className="mb-5 flex items-center justify-center w-full">
            <blockquote
                className="w-full rounded-br-md  rounded-tr-md border border-l-2 border-white-light !border-l-primary bg-white p-2 text-black shadow-md ltr:pl-3.5 rtl:pr-3.5 dark:border-[#060818] dark:bg-[#060818]">
                <div className="flex flex-col justify-center ">

                <span className="m-0 text-[16px] not-italic text-[#515365] dark:text-white-light"> {children}</span>

                </div>
            </blockquote>
            </div>,

        // Ex. 2: rendering custom styles
        customHeading: ({children}) => (
            <h2 className="text-lg font-semibold dark:text-white-light">{children}</h2>
        ),
    },

    list: {
        // Ex. 1: customizing common list types
        bullet: ({children}) =>  <div className="w-full  rounded-md  p-5">
            <ul className="space-y-3 font-semibold">{children}</ul></div>,
        number: ({children}) => <div className="w-full  rounded-md  p-5">
            <ol className="mt-lg">{children}</ol></div>,

        // Ex. 2: rendering custom lists
        checkmarks: ({children}) => <ol className="m-auto text-lg">{children}</ol>,
    },

    listItem: {
        // Ex. 1: customizing common list types
        bullet: ({children}) => <li style={{listStyleType: 'none'}}>
            <IconArrowLeft className="inline text-primary ltr:mr-2 rtl:ml-2 rtl:rotate-180" />
            <span className="list-text">
            {children}
                </span>
        </li>,

        // Ex. 2: rendering custom list items
        checkmarks: ({children}) => <li>✅ {children}</li>,
    },

    marks: {
        // Ex. 1: custom renderer for the em / italics decorator


        // Ex. 2: rendering a custom `link` annotation
        link: ({value, children}) => {
            const target = (value?.href || '').startsWith('http') ? '_blank' : undefined
            return (
                <a href={value?.href} target={target} className="text-primary underline underline-offset-4" >
                    {children}
                </a>
            )
        },
    },

};

export const richTextStyles = `
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
