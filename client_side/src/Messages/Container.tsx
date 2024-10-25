import React , { useEffect , useState } from "react";
import axios from "axios";
import Card from "./Card";


const Container:React.FC = ()=>{
const [ promises , setPromise ] = useState<any>([])

    const fetchData = async()=>{
        try{
            const response = await axios.get("http://localhost:8080/api/get/comments");
            return response.data.data;
        }catch(err:any){
            console.error(err);
            return [];
        }
      
    }

    useEffect(()=>{
        async function getData(){
        const result = await fetchData();

        setPromise(result);
        }

        getData();
    },[])
    return (
        <section className="w-full h-full flex antialiased text-slate-500  bg-black justify-center items-center p-4">
            <div className="2xl:w-[70%] lx:w-[70%] lg:w-[80%] md:w-full sm:w-full xs:w-full h-full grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-1  2xl:gap-6 xl:gap-6 lg:gap-5 md:gap-4 sm:gap-3 xs:gap-2 p-4">
                {
                    promises.map((item:any)=>(
                      
                        <Card
                            key={item.id}
                            message={item.message}
                        />
                    ))
                }
            </div>
        </section>
    )
}

export default Container;