import React , { useEffect , useState } from 'react';
import axios from "axios";
import SimpleLineChart from './Graph';



const Dashboard:React.FunctionComponent = ()=>{
    const [ word , setword ] = useState<string>("person")


useEffect(()=>{
    async function fetcher(){
    await axios.get("http://localhost:8080/get/dashboard/details")
    .then(response=>setword(response.data.len))
}
    const result = fetcher();
    console.log(result);
},[])

    return(
        <section className='w-full h-100vh bg-black flex justify-center items-center gap-4'>
            <div className='w-[30%] h-full bg-green-500 p-4 gap-4'>
                <div className='w-full h-[10%] bg-red-500 p-4'>
                    <h2 className='text-4xl font-Poppins text-white lowercase'>Admin@Sammy</h2>
                </div>
                <div className='w-full h-[20%] bg-red-500 p-4'>
                    <h2 className='text-4xl font-Poppins text-white'>Dashboard</h2>
                </div>
            </div>
            <div className='w-full h-full bg-white'>
                <div className='w-full h-[10%] bg-red p-3'>
                    <div className='w-[10%] h-full bg-white shadow-md  rounded-md flex justify-center items-center'>
                        <div className='w-full h-full bg-blue-400 rounded-s-md flex justify-center items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4" />
                            </svg>
                        </div>
                        <span className='w-full h-full flex justify-center items-center'>{word}</span>
                    </div>
                </div>
                 <SimpleLineChart/>
            </div>
         
        </section>
   )
}


export default Dashboard;