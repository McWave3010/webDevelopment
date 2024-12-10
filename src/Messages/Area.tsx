import React , { useState } from "react";
import axios from "axios";
import { Toaster , toast } from "react-hot-toast";

interface User {
    comment: string;
}

interface Handle {
    handleClicks: any;
}

const Area: React.FC<Handle> = ({ handleClicks })=>{
    const [ data , setData ] = useState<User>({
        comment: ""
    });
    const minimum = 20;
    const column:number = 40;
    const row:number = 5;

    const handleChange = (event: any)=>{
        event.preventDefault();
       const { name , value } = event.target;
        setData({...data,[name]:value})
    }


    const handleData = async()=>{
        try{
            const response: any = await axios.post("https://web-dev-learning.onrender.com/user/save/comment",data, { withCredentials: true})
        if(response){
            const result = response.data.mess;
            toast.success(result);
            
        }
    }catch(err: any){
            toast.error(err.response.data?.error);
        }

    }
    

    return(
        
        <section className="w-full bg-black bg-transparent h-100vh z-30 fixed bottom-0 flex flex-col justify-center items-center p-4">
            <Toaster position="top-right"/>
            <div className="w-[60%] h-[70%] z-50 antialiased text-slate-500 rounded-md dark:text-slate-400 bg-white dark:bg-slate-900 flex justify-center items-center flex-col gap-4">
                <div className="w-full">
                    <svg className="float-right text-white cursor-pointer" onClick={handleClicks} xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z" />
                    </svg>
                </div>
                <textarea required className="p-4 2xl:w-[70%] xl:w-[70%] lg:w-[70%] md:w-full sm:w-full xs:w-full resize-none focus:outline-none 2xl:h-[70%] xl:h-[70%] lg:h-[80%] md:h-full sm:h-full xs:h-full"
                    value={data.comment}
                    placeholder="Leave comment..."
                    onChange={handleChange}
                    cols={column}
                    rows={row}
                    spellCheck={true}
                    name="comment"
                    minLength={minimum}
                />
                <div className="2xl:w-[70%] xl:w-[70%] lg:w-[70%] md:w-full sm:w-full xs:w-full flex justify-end">
                    <button className="p-4 bg-stone-500" onClick={handleData}>Comment</button>
                </div>
            </div>
        </section>
    )
}

export default Area;