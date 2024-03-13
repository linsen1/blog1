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

