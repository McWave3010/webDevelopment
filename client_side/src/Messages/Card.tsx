import React from 'react';
import logo from "../assets/images/design.jpg";

interface Message {
    id?: string | number;
    created_date: string;
    message:string;
}


const Card:React.FunctionComponent<Message> = ({ created_date , message })=>{
    return (
        <div className='w-full h-[80%] bg-stone-950 flex justify-center items-center rounded-2xl flex-col gap-4 p-6'>
            <div className="w-[50%] h-[20%] flex justify-center items-center">
                <img src={logo} alt="web logo" className='h-full rounded-full'/>
            </div>
            <div className="w-full h-full p-4">
                <span className="font=Roboto text-md text-stone-300 text-center">{message}</span>
            </div>
            <div className="w-full h-[20%] flex justify-end items-center p-4">
                <span className='text-stone-400 font-Roboto font-bold'>{created_date}</span>
            </div>
        </div>
    )
}

export default Card;