'use server'

import { getUserInfo } from "../../functions/mongo/mongo"
import { currentUser } from "@clerk/nextjs/server";

export async function fetchUserInfo(){
    const user = await currentUser();
    const email = user && user.emailAddresses.length > 0 ? user.emailAddresses[0].emailAddress : null;
    const result = await getUserInfo(email);
    return result; // returns an object containing {text_count: int, image_count: int}
}