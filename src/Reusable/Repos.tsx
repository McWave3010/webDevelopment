import React from 'react';


type Id = {
    id: string | number;
}

interface Detail {
    id?: Id;
    name:string;
    status:boolean;
    description:string;
}

const Repos:React.FunctionComponent<Detail> = ({ name , status , description })=>{
    return(
        <section className='fixed bg-red-500 w-full h-full flex justify-center items-center'>
            <div className='w-[60%] h-full bg-blue-500'>
                <span>Hello</span>
            </div>
        </section>
    )
}


export default Repos;