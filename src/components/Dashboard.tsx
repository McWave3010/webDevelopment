/* eslint-disable @typescript-eslint/no-unused-vars */
import React , { useEffect , useState } from "react";
import axios from "axios";
import Communities from "../Reusable/Communities";
import { Fade } from "react-awesome-reveal";
import Calendar from "../Reusable/Calendar";





const Dashboard = ()=>{
    const [ data , setData ] = useState<any[]>([])
    const [ dater , setDate ] = useState<any>()

    let delay:number = 100;
        
    useEffect(()=>{
        async function fetchData(){
            const response = await axios.get('https://web-dev-learning.onrender.com/user/communities');
            setData(response.data); 
           
        }

        function displayDate(){
            const today = new Date();
            const date = today.getDate(); // Day of the month (1-31)
            
            // Get the day
            const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            const day = days[today.getDay()]; // Day of the week
           
             setDate(day);
        }
        fetchData();
        displayDate();
  
       
    },[])

  

    return(
        <section className='w-full h-screen bg-black p-4'>
            <div className='w-full h-[90%] p-4 gap-4 flex justify-center items-center'>
                 <div className='w-full h-full p-3'>
                    <span className="font-Lexend text-3xl text-white">My Learning Plan</span>
                    <div className="w-full mt-2 flex justify-evenly items-center h-[5%] gap-4">
                        <div className="w-full h-full bg-customColor rounded-lg text-white flex justify-center items-center">
                            <span className='font-Poppins text-slate-500'>Projects</span>
                        </div>
                        <div className="w-full h-full bg-customColor rounded-lg text-white flex justify-center items-center">
                            <span className='font-Poppins text-slate-500'>Problem Solving</span>
                        </div>
                        <div className="w-full h-full bg-customColor rounded-lg text-white flex justify-center items-center">
                            <span className='font-Poppins text-slate-500'>Critical thinking</span>
                        </div>
                        <div className="w-full h-full bg-customColor rounded-lg text-white flex justify-center items-center">
                            <span className='font-Poppins text-slate-500'>Study guide</span>
                        </div>
                        <div className="w-full h-full bg-customColor rounded-lg text-white flex justify-center items-center">
                            <span className='font-Poppins text-slate-500'>Programming</span>
                        </div>
                        <div className="w-full h-full bg-customColor rounded-lg text-white flex justify-center items-center">
                            <span className='font-Poppins text-slate-500'>Collaboration</span>
                        </div>
                        <div className="w-full h-full bg-customColor rounded-lg text-white flex justify-center items-center">
                            <span className='font-Poppins text-slate-500'>Clean code</span>
                        </div>
                    </div>
            <div className="w-full h-[80%] flex justify-start items-center gap-4">
                <div className='w-[100%] h-[70%]'>
                    <div className='w-full h-full grid grid-cols-4 gap-4'>
                        <div className='flex justify-center items-center flex-col w-full h-full bg-neutral-500 rounded-lg'>
                            <div className='w-full p-4 h-[30%] flex justify-between items-center rounded-md'>
                                <span className='text-xl font-bold font-Poppins'>HTML</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 48 48">
                                    <defs>
                                        <mask id="ipSHtmlFive0">
                                            <g fill="none" strokeWidth="4">
                                                <path fill="#fff" stroke="#fff" d="M37.804 5H10.196a2 2 0 0 0-1.991 2.187l2.688 28.666a2 2 0 0 0 1.153 1.63l11.116 5.13a2 2 0 0 0 1.676 0l11.116-5.13a2 2 0 0 0 1.154-1.63l2.687-28.666A2 2 0 0 0 37.804 5Z" />
                                                <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" d="M32 12H16l1 9h14l-1 11l-6 3l-6-3l-.5-5" />
                                            </g>
                                        </mask>
                                    </defs>
                                    <path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSHtmlFive0)" />
                                </svg>
                        </div>
                    </div>  

                    <Fade direction='up' delay={delay * 2} triggerOnce className='w-full h-full'>
                        <div className='bg-neutral-500 w-full h-full flex justify-center items-center flex-col gap-3 rounded-lg'>
                            <div className="w-full p-4 h-[30%] flex justify-between items-center">
                                <span className='text-xl font-bold font-Poppins'>CSS</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="m3 2l1.578 17.834L12 22l7.468-2.165L21 2zm13.3 14.722l-4.293 1.204H12l-4.297-1.204l-.297-3.167h2.108l.15 1.526l2.335.639l2.34-.64l.245-3.05h-7.27l-.187-2.006h7.64l.174-2.006H6.924l-.176-2.006h10.506z" />
                                </svg>
                            </div>
                        </div>
                    </Fade>
                    <Fade direction='up' delay={delay* 3} triggerOnce className='w-full h-full'>
                        <div className='bg-neutral-500 w-full h-full flex justify-center items-center flex-col rounded-lg'>
                            <div className="w-full p-4 h-full flex justify-between items-center">
                                <span className='text-xl font-bold font-Poppins'>JAVASCRIPT</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
                                    <g fill="none">
                                        <g clipPath="url(#akarIconsJavascriptFill0)">
                                            <path fill="currentColor" fillRule="evenodd" d="M0 0h24v24H0zm18.347 20.12c-1.113 0-1.742-.58-2.225-1.37l-1.833 1.065c.662 1.308 2.015 2.306 4.11 2.306c2.142 0 3.737-1.112 3.737-3.143c0-1.883-1.082-2.72-2.998-3.543l-.564-.241c-.968-.42-1.387-.693-1.387-1.37c0-.547.42-.966 1.08-.966c.647 0 1.064.273 1.451.966l1.756-1.127c-.743-1.307-1.773-1.806-3.207-1.806c-2.014 0-3.303 1.288-3.303 2.98c0 1.835 1.08 2.704 2.708 3.397l.564.242c1.029.45 1.642.724 1.642 1.497c0 .646-.597 1.113-1.531 1.113m-8.74-.015c-.775 0-1.098-.53-1.452-1.16l-1.836 1.112c.532 1.126 1.578 2.06 3.383 2.06c1.999 0 3.368-1.063 3.368-3.398v-7.7h-2.255v7.67c0 1.127-.468 1.416-1.209 1.416" clipRule="evenodd" />
                                        </g>
                                        <defs>
                                            <clipPath id="akarIconsJavascriptFill0">
                                                <path fill="#fff" d="M0 0h24v24H0z" />
                                            </clipPath>
                                        </defs>
                                    </g>
                                </svg>
                            </div>
                        </div>
                    </Fade>
                    <Fade direction='up' delay={delay*4} triggerOnce className='w-full h-full'>
                        <div className='bg-neutral-500 w-full h-full flex justify-center items-center flex-col rounded-lg'>
                            <div className="w-full p-4 h-full flex justify-between items-center">
                                <span className='text-xl font-bold font-Poppins'>NODE JS</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 15 15">
                                    <path fill="currentColor" fillRule="evenodd" d="M14 4.213L7.5.42L1 4.213v6.574l1.006.587l2.057-.832A1.5 1.5 0 0 0 5 9.152V4h1v5.152a2.5 2.5 0 0 1-1.562 2.317l-1.34.542L7.5 14.58l6.5-3.792zM7 6a2 2 0 0 1 2-2h1.167C11.179 4 12 4.82 12 5.833V6h-1v-.167A.833.833 0 0 0 10.167 5H9a1 1 0 0 0 0 2h1a2 2 0 1 1 0 4H9a2 2 0 0 1-2-2h1a1 1 0 0 0 1 1h1a1 1 0 1 0 0-2H9a2 2 0 0 1-2-2" clipRule="evenodd" />
                                </svg>
                            </div>
                        </div>
                    </Fade>
                    <Fade direction='up' delay={delay*5} triggerOnce className='w-full h-full'>
                        <div className='bg-neutral-500 w-full h-full flex justify-center items-center flex-col rounded-lg'>
                            <div className="w-full p-4 h-full flex justify-between items-center">
                                <span className='text-xl font-bold font-Poppins'>TAILWIND CSS</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M12 6c-2.67 0-4.33 1.33-5 4c1-1.33 2.17-1.83 3.5-1.5c.76.19 1.31.74 1.91 1.35c.98 1 2.09 2.15 4.59 2.15c2.67 0 4.33-1.33 5-4c-1 1.33-2.17 1.83-3.5 1.5c-.76-.19-1.3-.74-1.91-1.35C15.61 7.15 14.5 6 12 6m-5 6c-2.67 0-4.33 1.33-5 4c1-1.33 2.17-1.83 3.5-1.5c.76.19 1.3.74 1.91 1.35C8.39 16.85 9.5 18 12 18c2.67 0 4.33-1.33 5-4c-1 1.33-2.17 1.83-3.5 1.5c-.76-.19-1.3-.74-1.91-1.35C10.61 13.15 9.5 12 7 12" />
                                </svg>
                            </div>
                        </div>
                    </Fade>
                    <Fade direction='up' delay={delay*6} triggerOnce className="w-full h-full">
                        <div className='bg-neutral-500 w-full h-full flex justify-center items-center flex-col rounded-lg'>
                            <div className="w-full p-4 h-full flex justify-between items-center">
                                <span className='text-xl font-bold font-Poppins'>BOOTSTRAP CSS</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M5.423 3.038c-1.284 0-2.233 1.124-2.19 2.342c.04 1.171-.013 2.688-.395 3.924c-.383 1.24-1.03 2.026-2.088 2.127v1.138c1.058.101 1.705.887 2.088 2.127c.382 1.237.435 2.753.394 3.924c-.042 1.218.907 2.342 2.192 2.342h13.154c1.284 0 2.234-1.124 2.192-2.342c-.041-1.171.012-2.687.393-3.924c.384-1.24 1.03-2.026 2.087-2.127v-1.138c-1.058-.101-1.703-.887-2.087-2.127c-.381-1.236-.434-2.753-.393-3.924c.042-1.218-.908-2.342-2.192-2.342zm10.581 11.033c0 1.678-1.251 2.696-3.328 2.696H9.14a.38.38 0 0 1-.382-.381V7.614a.38.38 0 0 1 .382-.38h3.515c1.732 0 2.869.937 2.869 2.378c0 1.01-.765 1.916-1.739 2.074v.053c1.326.145 2.22 1.064 2.22 2.332M12.29 8.442h-2.016v2.848h1.698c1.313 0 2.036-.529 2.036-1.474c0-.885-.622-1.374-1.718-1.374m-2.016 3.977v3.139h2.09c1.367 0 2.09-.549 2.09-1.58c0-1.03-.743-1.559-2.178-1.559z" />
                                </svg>
                            </div>
                        </div>
                    </Fade>
                    <Fade direction='up' delay={delay*7} triggerOnce className="h-full w-full">
                        <div className='bg-neutral-500 w-full h-full flex justify-center items-center flex-col rounded-lg'>
                            <div className="w-full p-4 h-full flex justify-between items-center">
                                <span className='text-xl font-bold font-Poppins'>REACT</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M12 10.11c1.03 0 1.87.84 1.87 1.89c0 1-.84 1.85-1.87 1.85S10.13 13 10.13 12c0-1.05.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7c-.52-.59-1.03-1.23-1.51-1.9a23 23 0 0 1-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86c.27.06.57.11.88.16zm6.54-.76l.81-1.5l-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9s-1.17 0-1.71.03c-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47c.54.03 1.11.03 1.71.03s1.17 0 1.71-.03c.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7c.52.59 1.03 1.23 1.51 1.9c.82.08 1.63.2 2.4.36c.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86c-.27-.06-.57-.11-.88-.16zm1.45-7.05c1.47.84 1.63 3.05 1.01 5.63c2.54.75 4.37 1.99 4.37 3.68s-1.83 2.93-4.37 3.68c.62 2.58.46 4.79-1.01 5.63c-1.46.84-3.45-.12-5.37-1.95c-1.92 1.83-3.91 2.79-5.38 1.95c-1.46-.84-1.62-3.05-1-5.63c-2.54-.75-4.37-1.99-4.37-3.68s1.83-2.93 4.37-3.68c-.62-2.58-.46-4.79 1-5.63c1.47-.84 3.46.12 5.38 1.95c1.92-1.83 3.91-2.79 5.37-1.95M17.08 12c.34.75.64 1.5.89 2.26c2.1-.63 3.28-1.53 3.28-2.26s-1.18-1.63-3.28-2.26c-.25.76-.55 1.51-.89 2.26M6.92 12c-.34-.75-.64-1.5-.89-2.26c-2.1.63-3.28 1.53-3.28 2.26s1.18 1.63 3.28 2.26c.25-.76.55-1.51.89-2.26m9 2.26l-.3.51c.31-.05.61-.1.88-.16c-.07-.28-.18-.57-.29-.86zm-2.89 4.04c1.59 1.5 2.97 2.08 3.59 1.7c.64-.35.83-1.82.32-3.96c-.77.16-1.58.28-2.4.36c-.48.67-.99 1.31-1.51 1.9M8.08 9.74l.3-.51c-.31.05-.61.1-.88.16c.07.28.18.57.29.86zm2.89-4.04C9.38 4.2 8 3.62 7.37 4c-.63.35-.82 1.82-.31 3.96a23 23 0 0 1 2.4-.36c.48-.67.99-1.31 1.51-1.9" />
                                </svg>
                            </div>
                        </div>
                    </Fade>
                    <Fade direction='up' delay={delay*7} triggerOnce className="h-full w-full">
                        <div className='bg-neutral-500 w-full h-full flex justify-center items-center flex-col rounded-lg'>
                            <div className="w-full p-4 h-full flex justify-between items-center">
                                <span className='text-xl font-bold font-Poppins'>DOCKER</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 128 128">
                                    <path fill="currentColor" d="M86 118.4c0-.3.1-.6 0-.9c-.2-.3-.3-.5-.5-.7c-.5-.6-1-1.1-1.6-1.7l-5.9-6l4.6-4.7l2.5-2.7c.4-.4.9-1.2.9-1.8v-.4c0-.9-.4-1.4-1.3-1.6l.2.1h-.7c-.6 0-2.3 1.6-2.7 2.1c-1.5 1.5-2.5 2.9-4.5 4.4V92.6c0-1.1-.6-1.6-1.7-1.6H75c-1.1 0-2 .5-2 1.6v25.9c0 1.1.9 1.5 2 1.5h.3c1.1 0 1.7-.5 1.7-1.5v-4.6l3 2.9c.9.9 1.8 1.5 2.6 2.3c.4.4 1.2.9 1.8.9h.3c1 0 1.3-.5 1.5-1.3l-.2.1zM125.1 98h-.4c-2.2 0-4.2.6-6 1.9c-3 2.2-4.7 5.1-4.7 8.9v9.8c0 1.1.4 1.4 1.5 1.4h.3c1.1 0 2.2-.4 2.2-1.4v-9.2c0-2 .4-3.9 1.9-5.4c1.2-1.2 2.7-2.2 4.4-2.2c1.3 0 2.8-.3 2.8-1.9c0-1.2-.9-1.9-2-1.9m-15.4 5c-1.1-1.8-2.6-3.2-4.5-4.1c-3.5-1.7-7.2-1.9-10.6.1l-.5.3c-1.4.8-2.6 1.8-3.5 3.1c-2.6 3.8-2.9 8.1-.6 12.1l.2.4c1 1.7 2.3 3.1 4 4c3.6 2 7.5 2.2 11.1.2l.3-.2c1-.6 1.2-1.6.7-2.6c-.2-.4-.6-.7-1-.9h-.2c-.7-.1-2.6.7-3.3 1c-1.4.2-3 .3-4.4-.2l7.6-6.6c1.1-1 2.3-2.1 3.5-3c1-.8 2-1.9 1.2-3.3zm-6.9 3.6l-8.5 7.3c-.3-.3-.5-.7-.7-1c-.6-1-1-2.2-1-3.4c-.1-3 1-5.5 3.7-7c2-1.2 4.2-1.4 6.4-.6c1.1.4 2.4 1.1 3.1 2.1c-1 .9-2.1 1.7-3 2.6M22 91h-.3c-1.1 0-1.7.4-1.7 1.5v8.1c-2-1.8-4.4-2.5-7.2-2.5H12c-1.9 0-3.7.3-5.4 1.3c-3.6 2.1-5.6 5.2-5.6 9.4v.8c0 1.9.5 3.5 1.5 5.2c2.1 3.6 5.4 5.4 9.5 5.4h.8c1.9 0 3.9-.3 5.5-1.2c3.6-2.1 5.7-5.2 5.7-9.3v-17c0-1.3-.9-1.7-2-1.7m-3.1 21.8c-1.5 2.5-3.7 3.9-6.6 3.9c-1.2 0-2.4-.3-3.4-.9c-2.6-1.4-4.1-3.7-4.1-6.7c0-1.1.2-2.1.7-3.1c1.4-2.9 3.7-4.5 6.9-4.5c1.6 0 3 .5 4.2 1.4c2.1 1.5 3.3 3.5 3.3 6.1c.1 1.4-.3 2.6-1 3.8M37.6 98H37c-1.9 0-3.8.3-5.4 1.3c-3.6 2.1-5.6 5.2-5.6 9.4v.8c0 1.9.5 3.5 1.5 5.2c2.1 3.6 5.4 5.4 9.6 5.4h.8c1.9 0 3.8-.3 5.5-1.2c3.6-2.1 5.7-5.2 5.7-9.3v-.8c0-1.8-.6-3.3-1.4-4.8c-2.2-4-5.7-6-10.1-6m6.4 14.8c-1.5 2.4-3.6 3.9-6.5 3.9c-1.3 0-2.6-.3-3.8-1c-2.5-1.5-3.9-3.6-3.9-6.5c0-1.1.2-2.1.7-3.1c1.4-2.9 3.7-4.5 6.9-4.5c1.5 0 2.8.4 4 1.2c2.2 1.5 3.5 3.6 3.5 6.3c.1 1.2-.2 2.5-.9 3.7m24.5-13.4l-.1.1c-1.7-1.1-3.6-1.5-5.6-1.5H62c-1.9 0-3.8.3-5.4 1.3c-3.6 2.1-5.6 5.2-5.6 9.3v.8c0 1 .2 1.9.4 2.9c1.6 5.5 5.9 8.6 11.7 8.2c1.6-.1 5.9-.6 5.9-3v-.4c0-.9-.7-1.7-1.5-1.9l-.1-.2h-.7l-.2.3c-.9.4-2.4 1.2-3.4 1.2c-1.2 0-2.5 0-3.6-.6c-2.9-1.4-4.6-3.7-4.6-6.9c0-1.1.2-2.1.7-3.1c1.4-2.8 3.7-4.6 6.9-4.5c.6 0 1.7.3 2.3.6c.5.2 1.8 1 2.4 1h.2l.1-.2c.9-.2 1.6-.9 1.6-1.8v-.4c0-.4-.2-.7-.4-1zM5.8 68.2l.1.2c7.9 13.4 21.7 19 36.8 19c29.2 0 53.3-13.1 64.3-40.6c7.4.4 15-1.8 18.6-8.9l.9-1.8l-1.8-1c-4.3-2.5-10-2.8-14.8-1.4c-.6-5.2-4-9.7-8-12.9l-1.6-1.3l-1.3 1.6c-2.7 3.1-3.5 8.3-3.1 12.3c.3 2.9 1.2 5.9 3 8.3c-1.4.8-2.9 1.9-4.3 2.4c-2.8 1-5.9 2-8.9 2H79V32H66V7H51v12H26v13H13v14H1.8l-.2 1.5c-.5 6.4.3 12.6 3 18.5zM66 35h11v11H66zM53 9h11v11H53zm0 13h11v11H53zm0 13h11v11H53zM40 22h11v11H40zm0 13h11v11H40zm1.1 31.2c0 1.7-1.4 3.1-3.1 3.1s-3.1-1.4-3.1-3.1s1.4-3.1 3.1-3.1c1.7.1 3.1 1.4 3.1 3.1M28 22h10v11H28zm0 13h10v11H28zm-13 0h11v11H15zm2.4 38c1.6 0 3.2 0 4.7-.1c3.9-.2 7.3-.7 10.1-1.5c2.3 5.3 6.5 10.2 14 13.8l-3.5.1c-15.8-.1-24.3-5.4-31.3-12.4c2.1.1 4.1.1 6 .1M38 68.4c1.2 0 2.2-1 2.2-2.2c0-.3-.1-.6-.2-.8c-.2.3-.4.5-.8.5c-.5 0-.9-.4-.9-.9c0-.3.2-.6.4-.8c-.1-.1-.4-.2-.7-.2c-1.2 0-2.2 1-2.2 2.2c.1 1.2 1 2.2 2.2 2.2" />
                                </svg>
                            </div>
                        </div>
                    </Fade>
                  </div>
                        </div>  
                        <div className='w-[40%] h-[80%] p-2 rounded-md flex justify-center items-end flex-col'>
                            <div className="w-[45%] p-4 rounded-md bg-blue-800 flex justify-center items-end float-right">
                                <span className="font-Poppins">{dater}</span>
                            </div>
                            <div className="w-full h-full">
                                <Calendar/>
                            </div>
                        </div>   
                    </div> 
                </div>
                <div className='w-[40%] h-full p-4 gap-4 flex justify-center items-center flex-col'>
                    <span className='text-center font-Lexend text-3xl text-white'>Communities🧐</span>
                    <span className="text-slate-500 font-Poppins text-center">Join these communities to enhance your web development skills</span>
                    <div className='w-full h-full gap-4'>
                        {
                        data.map((item: any)=>{
                            return <Communities key={item.id} name={item.name} link={item.link} description={item.description}/>
                        })
                    }
                    </div>
                    <div>
                        <span className="text-slate-500 text-sm font-Poppins">You can also checkout <a className="text-blue-600" href="https://roadmap.sh/" target="_blank" rel='noopener noreferrer'>roadmap.sh</a></span>    
                    </div>  
                </div>
            </div>
           
        </section>
    )
}

export default React.memo(Dashboard);