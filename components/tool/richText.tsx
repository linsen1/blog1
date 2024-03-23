import React from 'react';
import {PortableTextComponents} from "@portabletext/react";
import {urlFor} from "@/components/lib/client";
import CodeHighlight from "@/components/highlight";


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
                    <pre className="language-xml">
                      {value.code}
                    </pre>
                </CodeHighlight>

            </div>
        )
    },

    block: {
        // Ex. 1: customizing common block types
        h1: ({children}) => <h1 className="text-3xl font-semibold dark:text-white-light"> {children}</h1>,
        blockquote: ({children}) => <blockquote className="border-l-purple-500">{children}</blockquote>,

        // Ex. 2: rendering custom styles
        customHeading: ({children}) => (
            <h2 className="text-lg font-semibold dark:text-white-light">{children}</h2>
        ),
    },

    list: {
        // Ex. 1: customizing common list types
        bullet: ({children}) => <ul className="mt-xl">{children}</ul>,
        number: ({children}) => <ol className="mt-lg">{children}</ol>,

        // Ex. 2: rendering custom lists
        checkmarks: ({children}) => <ol className="m-auto text-lg">{children}</ol>,
    },

    listItem: {
        // Ex. 1: customizing common list types
        bullet: ({children}) => <li style={{listStyleType: 'disclosure-closed'}}>{children}</li>,

        // Ex. 2: rendering custom list items
        checkmarks: ({children}) => <li>✅ {children}</li>,
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
