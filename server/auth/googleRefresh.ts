import { Request , Response } from "express";
import { UserProfile } from "./googleAuth";
import supabase from "../model/supabase";


const RetrieveAccess = async(email: string | undefined): Promise<string | null | undefined> =>{
    const { data , error } = await supabase
    .from("register")
    .select("*")
    .eq("email", email)

    if (error){
        return null;
    }
    if(data && data?.length){
        const access_token: string = data[0]?.refresh_token;
        return access_token;
    }
}

const GoogleRefreshToken = ( req: Request , res: Response )=>{
    const google_token = req.cookies.authCookie;
    console.log(google_token);
    const email = (req.user as UserProfile)?.email;
    RetrieveAccess(email);

}

export default GoogleRefreshToken;