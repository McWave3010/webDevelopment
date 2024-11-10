import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";



dotenv.config();
const supabase_url = `${process.env.SUPABASE_URL}`;
const supabase_key = `${process.env.SUPABASE_API_KEY}`;

const supabase = createClient(supabase_url , supabase_key);

try{
        
        if(supabase){
            console.log("Connected to supabase");
        }else{
            console.log("Error occurred");
        }
}catch(e: any){
    console.log("Error occurred");
}


export default supabase;