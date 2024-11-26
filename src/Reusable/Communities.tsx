import React from "react";
import Logo from "../assets/images/community.png"

interface Props {
    id?:any;
    name:string;
    link:string;
    description?: string;
}

const Communities:React.FunctionComponent<Props> = ({id , name , link , description })=>{


    const handleNavigation = ()=>{
        window.location.href = link;
    

    }
    return(
        <div className='group w-full h-10vh p-4  flex justify-center border-2 hover:bg-white border-slate-400 hover:shadow-slate-600 hover:shadow-lg  m-2 rounded-xl items-center gap-4 hover:cursor-pointer' onClick={handleNavigation}>
            <div className="w-[10%] h-full">
                <img className='w-full h-full object-cover rounded-full' src={Logo} alt=''/>
            </div>
            <div className='w-full flex justify-center items-start  h-full flex-col'>
                <span className="font-Poppins text-white group-hover:text-black">{name}</span>
                <span className="font-Poppins text-slate-500 text-xs group-hover:text-black">{description}</span>
            </div>
        </div>
    )
}


export default Communities;