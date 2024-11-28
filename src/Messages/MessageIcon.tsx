
import React , {useState } from "react";
import Area from "./Area";



const MessageIcon = ()=>{
    const [ display , setDisplay ] = useState<boolean>(false)

    const handleClicker = ()=>{
        setDisplay(!display)
    }

    function handleclicks(): void {
        setDisplay(false);
    }

    return (
        <section className="w-full h-20vh p-4 flex justify-center items-center">
            <button onClick={handleClicker} className='font-Lexend bg-white text-black p-4 rounded-lg shadow-md shadow-white'>Comment
              <svg className="float-right text-black cursor-pointer" onClick={handleClicker} xmlns="http://www.w3.org/2000/svg" width="2em" height="1.2em" viewBox="0 0 24 24">
                <path fill="currentColor" fillRule="evenodd" d="M4.592 15.304C2.344 9.787 6.403 3.75 12.36 3.75h.321a8.07 8.07 0 0 1 8.068 8.068a8.98 8.98 0 0 1-8.982 8.982h-7.82a.75.75 0 0 1-.47-1.335l1.971-1.583a.25.25 0 0 0 .075-.29zM12.36 5.25c-4.893 0-8.226 4.957-6.38 9.488l.932 2.289a1.75 1.75 0 0 1-.525 2.024l-.309.249h5.689a7.48 7.48 0 0 0 7.482-7.482a6.57 6.57 0 0 0-6.568-6.568z" clipRule="evenodd" />
            </svg>  
            </button>
            
            {
                display ? <Area handleClicks={handleclicks}/> : null
            }
            
        </section>
    )
}

export default MessageIcon;