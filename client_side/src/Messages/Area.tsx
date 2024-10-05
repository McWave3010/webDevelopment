import React , { useState } from "react";
import axios from "axios";
import { Toaster , toast } from "react-hot-toast";

interface User {
    comment: string;
}

const Area: React.FC = ()=>{
    const [ data , setData ] = useState<User>({
        comment: ""
    });
    const minimum = 20;
    const column:number = 40;
    const row:number = 5;

    const handleChange = (event: any)=>{
       const { name , value } = event.target;
        setData({...data,[name]:value})
    }

    const handleData = async()=>{
        try{
        const response: any = await axios.post("http://localhost:8080/api/posts/comment",data, { withCredentials: true})
        if(response.status === 200){
            console.log(response.data);
            const result = response.data.mess;
            console.log(result);
            toast.success(result);
        }
    }catch(err: any){
            toast.error("Error occurred");
        }
        

    }
    return(
        
        <section className="w-full h-50vh antialiased text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900 flex justify-center items-center p-4">
            <Toaster position="top-right"/>
            <div className="w-full h-[70%] flex justify-center items-center flex-col gap-4">
                <textarea className="p-4 2xl:w-[60%] xl:w-[70%] lg:w-[70%] md:w-full sm:w-full xs:w-full resize-none focus:outline-none 2xl:h-[70%] xl:h-[70%] lg:h-[80%] md:h-full sm:h-full xs:h-full"
                    value={data.comment}
                    placeholder="Leave comment..."
                    onChange={handleChange}
                    cols={column}
                    rows={row}
                    spellCheck={true}
                    name="comment"
                    minLength={minimum}
                />
                <div className="2xl:w-[60%] xl:w-[70%] lg:w-[70%] md:w-full sm:w-full xs:w-full flex justify-end">
                    <button className="p-4 bg-stone-500" onClick={handleData}>Comment</button>
                </div>
            </div>
        </section>
    )
}

export default Area;