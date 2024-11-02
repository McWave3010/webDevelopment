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
    if(data?.length){
        const access_token: string = data[0]?.refresh_token;
        return access_token;
    }
}

const GoogleRefreshToken = async( req: Request , res: Response )=>{
    const google_token = await req.cookies.authCookie;
    const email = (req.user as UserProfile)?.email;
    const response = await RetrieveAccess(email);
    if(!response){
        return res.status(403).json({ authenticated : false});
    }else{
        res.status(200).json({ authenticated: true });
    }
    
    
}

export default GoogleRefreshToken;