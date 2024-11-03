import { Request , Response } from "express";
import supabase from "../model/supabase";
import { UserProfile } from "./googleAuth";

const verifyGithubToken = async(  email: string | undefined):Promise<any>=>{
    const { data , error} = await supabase
    .from("register")
    .select("*")
    .eq("email" , email)
    if (error){
        return null;
    }else if(data?.length){
        return data[0]?.refresh_token;
    }
}


const GithubVerify = async(req: Request , res: Response)=>{
    const githubAuthToken = req.cookies.gittoken;
    const email: string | undefined= (req.user as UserProfile)?.email;
    //console.log(email);
    switch(githubAuthToken){
        case undefined:
            return res.status(401).json({message: "No GitHub token, authorization denied"});
            
        case null:
            return res.status(401).json({message: "Invalid GitHub token, authorization denied"});
            
        default:
            const response = await verifyGithubToken(email);
            if(!response){
                return res.status(403).json({ authenticated : false});
            }else{
                res.status(200).json({ authenticated: true });
            }
    }

}

export default GithubVerify;