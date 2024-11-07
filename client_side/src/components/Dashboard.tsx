import React , { useEffect } from 'react';
import axios from "axios";

async function fetcher(){
    await axios.get("http://localhost:8080/get/dashboard/details")
    .then(response=>response.data.len)
    .then(result => console.log(result));
}

const Dashboard:React.FunctionComponent = ()=>{



useEffect(()=>{
    const result = fetcher();
    console.log(result);
})

    return(
        <section className='w-full h-100vh bg-red-500'>

        </section>
   )
}


export default Dashboard;