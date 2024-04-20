'use server'

import { getUserInfo } from "../../scripts/mongo/mongo_scripts"

export async function fetchUserInfo(email){
    const result = await getUserInfo(email);
    return result;
}