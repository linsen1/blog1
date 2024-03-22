import {client} from "@/components/lib/client";


export async function getLiftHomePost() {
    const query = `
     *[_type == 'diary']| order( _createdAt desc )[0...3] {
     _id,
     title,
     "coverImage":coverImage_cn,
  smallDescription,
   content,
  _createdAt,
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


export async function getCodeHomeList() {
    const query = `
    *[_type=='codes'] | order(_createdAt desc) [0...3]{
  title,
  "coverImage":coverImage_cn,
  smallDescription,
  classType,
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


    return await client.fetch(query);

}


export async function getResourceHomeList() {
    const query = `
    *[_type=='resource'] | order(_createdAt desc) [0...3]{
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

    return await client.fetch(query);

}


export async function getQuestionHomeList() {
    const query = `
    *[_type=='question'] | order(_createdAt desc) [0...3]{
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
    return await client.fetch(query);
}


export async function getVideoHomeList() {
    const query = `
    *[_type=='video'] | order(_createdAt desc) [0...3]{
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


    return await client.fetch(query);
}


export async function getArticleHomeData() {
    const query = `
    *[_type=='article'] | order(_createdAt desc) [3...6]{
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


    return await client.fetch(query);

}


export async function getArticleTopHomeData() {
    const query = `
    *[_type=='article'] | order(_createdAt desc) [0...3]{
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


    return await client.fetch(query);

}
