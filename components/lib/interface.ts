import {client} from "@/components/lib/client";
import {groq} from "next-sanity";

export interface simpleArticle {
    title: string
    coverImage: string
    smallDescription: string
    _createdAt: string,
    currentSlug: string
}


export async function getUserByEmail(email: string) {
    return client.fetch(
        groq`*[_type == "user" && email == $email]{
        _id,
        createdAt,
        name,
        email
      }`,
        {email}
    );
}

export async function createUser(userData: { name: string, email: string ,platform_id:string}) {
    const {name, email,platform_id} = userData;

    // Add any additional validation or data preparation here

    // Create a new user document
    const newUser = await client.create({
        _type: "user",
        name,
        email,
        platform_id
    });

    return newUser;
}

export async function createBook(bookData: { nickname: any, content: any, userID: any,article_id:any }) {
    const {nickname, content, userID,article_id} = bookData;
    const newBook = await client.create({
        _type: "book",
        nickname,
        content,
        userID,
        article_id
    });
    return newBook;
}

//获取视频列表
export async function getVideoList(start:number,end:number){
    const query = `
    *[_type=='video'] | order(_createdAt desc) [${start}...${end}]{
  _id,
  title,
  "coverImage":coverImage_cn,
  smallDescription,
  _createdAt,
  "currentSlug":slug.current,
  tags[]-> {
      _id,
       "currentSlug":slug.current,
      name,
      color,
      colorValue
    }
}
    `
    const queryCount:string =`
    count(*[_type == "video"])
    `
    const data = await client.fetch(query);
    const count = await client.fetch(queryCount);


    return {data,count};
}

export async function getVideoPost(slug: string){
    const query = `
     *[_type == 'video' && slug.current == '${slug}'][0] {
     _id,
     title,
    "coverImage":coverImage_cn,
  smallDescription,
   content,
  _createdAt,
  video_url,
  "currentSlug":slug.current,
  tags[]-> {
      _id,
       "currentSlug":slug.current,
      name,
      color,
      colorValue
    }
  }`;


    return await client.fetch(query);
}


export async function getVideoTagList(start:number,end:number,current:string){
    const query = `
     *[_type == "video" &&
   references(*[_type == "tag" && slug.current =="${current}"]._id)][${start}...${end}]{
 _id,
title,
"coverImage":coverImage_cn,
  smallDescription,
  _createdAt,
  "currentSlug":slug.current,
  tags[]-> {
      _id,
       "currentSlug":slug.current,
      name,
      color,
      colorValue
    }

   }

    `

    const queryCount = `
  count(*[_type == "video" &&
   references(*[_type == "tag" && slug.current == "${current}"]._id)])
  `
    const data = await client.fetch(query);
    const count = await client.fetch(queryCount);

    return {data,count};
}




export async function getTags() {
    const query = `
     *[_type=='tag'] {
     name,
     "currentSlug":slug.current,
     color,
     colorValue
     }
    `;

    return await client.fetch(query);

}


export async function getQuestionList(start:number,end:number){
    const query = `
    *[_type=='question'] | order(_createdAt desc) [${start}...${end}]{
  _id,
  title,
  classType,
  "coverImage":coverImage_cn,
  smallDescription,
  _createdAt,
  "currentSlug":slug.current,
  tags[]-> {
      _id,
       "currentSlug":slug.current,
      name,
      color,
      colorValue
    }
}
    `
    const queryCount:string =`
    count(*[_type == "question"])
    `
    const data = await client.fetch(query);
    const count = await client.fetch(queryCount);


    return {data,count};
}
