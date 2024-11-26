import React , { useEffect , useState } from "react";
import axios from "axios";
import Communities from "../Reusable/Communities";

const Dashboard = ()=>{
    const [ data , setData ] = useState<any[]>([])

    useEffect(()=>{
        async function fetchData(){
            const response = await axios.get('http://localhost:4000/user/communities');
            setData(response.data);
        }

        fetchData();
        
    },[])

    return(
        <section className='w-full h-screen bg-black p-4'>
            <div className='w-full h-full p-4 gap-4 flex justify-center items-center'>
                 <div className='w-full h-full bg-blue-500 p-3'>
                    <span className="font-Lexend text-4xl">My Learning Plan</span> 
                </div>
                <div className='w-[40%] h-full p-4 gap-4 flex justify-center items-center flex-col'>
                    <span className='text-center font-Lexend text-3xl text-white'>Communities🧐</span>
                    <span className="text-slate-500 font-Poppins text-center">Join these communities to enhance your web development skills</span>
                    <div className='w-full h-full bg-voilet-500 gap-4'>
                        {
                        data.map((item: any)=>{
                            return <Communities key={item.id} name={item.name} link={item.link}/>
                        })
                    }
                    </div>  
                </div>
            </div>
           
        </section>
    )
}

export default React.memo(Dashboard);