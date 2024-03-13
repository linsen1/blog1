

import { createClient } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url'

export const  client =createClient({
    apiVersion:'2023-05-03',
    dataset:'production',
    projectId:'hm1nsib7',
    useCdn:true,
    token: process.env.NEXT_PUBLIC_SANITY_API_TOKEN,
})

const builder = imageUrlBuilder(client);
export function urlFor(source:any){
    return builder.image(source);
}
