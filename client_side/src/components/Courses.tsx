import React , { ChangeEvent, useState } from 'react';
import person from "../assets/images/david.jpg";
import person2 from "../assets/images/person1.png";
import person3 from "../assets/images/person3.png";
import { Slide , Fade } from "react-awesome-reveal";
import axios from "axios";



interface IframeProps {
    width?: string;
    height?: string;
    src?: string;
    title?: string;
  }

  

const Courses: React.FC<IframeProps> = ({ width="100%" , height="526" , src , title })=>{
  const [ display, setDisplay ] = useState<boolean>(true);
  const [ text , setText ] = useState<string>("")
  const [ formData , setformData ] = useState({
    prompt:""
  })
    const delay: number = 100;
    const style: React.CSSProperties = {
        clipPath: 'polygon(0 0, 80% 0, 100% 20%, 100% 100%, 0 100%)',
      };
    const handleGeminiButton = ()=>{
        setDisplay(!display);
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>)=>{
        const { value , name } = e.target;
        console.log(name);
        console.log({...formData});
        setformData({...formData , [name]: value})
    }


    const handleData = async(e:any)=>{
        e.preventDefault();
        const response = await axios.post("http://localhost:8080/api/openai", formData)
        setDisplay(false);
        setText(response.data.outputting);
    }



    return (
        <section className="w-full h-full bg-black">
            <section className='w-full h-100vh flex justify-center items-center bg-black'>
                <div className='w-full h-full  flex justify-center items-start'>
                    <section className="2xl:w-full 2xl:h-[90%] lg:w-full lg:h-full md:w-full md:h-full sm:w-full sm:h-full xs:w-full xs:h-full flex justify-center items-center 2xl:p-5 lg:p-5 md:p-4 sm:p-3 xs:p-2 bg-center bg-cover bg-no-repeat relative" id='bg-image'>  
                        <div className='absolute bg-gradient-to-r from-black via-stone-500 to-black opacity-60 top-0 w-full h-full'>
                        </div>
                        
                        <div className='2xl:w-[100%] 2xl:h-full 2xl:flex-row flex justify-center items-center gap-3 xl:w-full xl:h-full xl:flex-row lg:w-full lg:h-full lg:flex-row md:w-full md:h-full md:flex-col sm:w-full sm:h-full xs:w-full xs:h-full xs:flex-col'>
                            <Fade
                            direction='left'
                            triggerOnce
                            cascade
                            className='w-[100%] h-full flex justify-center items-center gap-4 z-30'>
                                <div className='2xl:w-[80%] 2xl:h-[80%] lg:w-[80%] lg:h-[80%] md:w-full md:h-full sm:w-full sm:h-full xs:w-full h-full flex justify-center items-center flex-col gap-4 z-30'>
                                    <div className='w-full h-[30%] flex justify-center items-center 2xl:p-4 lg:-4 md:p-4 sm:p-3 xs:p-2'>
                                        <span className='2xl:text-5xl lg:text-4xl md:text-4xl sm:text-3xl xs:text-3xl font-bold text-white'>Learn New Skills Online From Best <strong className='text-teal-400 underline'>Educators</strong></span>
                                    </div>
                                    <div className='w-full h-[20%] flex justify-center items-center p-4'>
                                        <span className='text-stone-300 2xl:text-xl lg:text-xl md:text-xl sm:text-sm xs:text-sm font-Poppins'>This is a simple website development course beginner friendly giving the best web experience and documentation available.</span>
                                    </div>
                                    <div className='w-full h-[40%] flex justify-start items-start gap-3 p-4 flex-col'>
                                        <div className='2xl:w-[30%] 2xl:h-[50%] lg:w-[30%] lg:h-[50%] md:w-[40%] md:h-full sm:w-[40%] sm:h-full sm:p-4 xs:w-[40%] xs:h-full xs:p-4 bg-black flex justify-center items-center rounded-md hover:cursor-pointer hover:bg-white '>
                                            <a className='w-full h-full flex justify-center items-center text-2xl hover:text-black hover:duration-100 text-white' href='#courses'>Courses</a>
                                        </div>
                                        <div className='w-[90%] h-[100%] flex justify-start items-center flex-col'>
                                            <div className='w-full h-full flex justify-start items-center gap-3'>
                                                <svg className='text-stone-300' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                                    <path fill="currentColor" d="M20 18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2zM4 6h16v10H4z" />
                                                </svg>
                                                <span className='text-stone-300 font-Poppins 2xl:text-xl lg:text-md md:text-md sm:text-sm xs:text-sm'>Learn anything about web development</span>
                                            </div>
                                            <div className='w-full h-full flex justify-start items-center gap-3'>
                                                <svg className='text-stone-300' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                                    <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
                                                        <path d="m2.573 8.463l8.659-4.329a.6.6 0 0 1 .536 0l8.659 4.33a.6.6 0 0 1 0 1.073l-8.659 4.329a.6.6 0 0 1-.536 0l-8.659-4.33a.6.6 0 0 1 0-1.073" />
                                                        <path d="M22.5 13V9.5l-2-1m-16 2v5.412a2 2 0 0 0 1.142 1.807l5 2.374a2 2 0 0 0 1.716 0l5-2.374a2 2 0 0 0 1.142-1.807V10.5" />
                                                    </g>
                                                </svg>
                                                <span className='text-stone-300 font-Poppins 2xl:text-xl lg:text-md md:text-md sm:text-sm xs:text-sm'>Over 2 millions students tried this platform</span>
                                            </div>
                                        </div> 
                                    </div>  
                                </div>
                            </Fade>
                            <Fade direction='up' triggerOnce className='w-full h-full'>
                                <div className='2xl:w-full 2xl:h-full xl:w-full xl:h-full lg:w-full lg:h-full md:w-full md:h-full flex justify-center items-center z-30 p-4 gap-10'>
                                    <div className='w-[70%] h-[90%] flex justify-center items-center rounded-lg relative '  style={style}>
                                        <img src={person} alt='person_one' className='w-full h-full object-cover rounded-lg'/>
                                        <div className='absolute bg-white w-[70%] h-8vh z-40 bottom-5 left-1 rounded-xl 2xl:flex lg:flex md:hidden sm:hidden xs:hidden justify-center items-center flex-col'>
                                            <span className='text-violet-500 text-sm'>Developer: David Sapa</span>
                                            <div>
                                                <a className='text-black' href='https://www.tiktok.com/@david_sapa_?lang=en&is_from_webapp=1&sender_device=mobile&sender_web_id=7400107309102810629'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                                    <path fill="currentColor" d="M16.6 5.82s.51.5 0 0A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6c0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64c0 3.33 2.76 5.7 5.69 5.7c3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48" />
                                                </svg>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='w-[70%] h-full flex justify-center items-center flex-col gap-10 rounded-lg' id='clipper'>
                                        <div className='w-full h-full rounded-lg relative'>
                                            <img src={person2} alt='person_one' className='w-full h-full object-cover rounded-lg'/>
                                            <div className='absolute bottom-1 left-1 w-[50%] h-7vh bg-white z-40 rounded-lg 2xl:flex lg:flex md:hidden sm:hidden xs:hidden justify-center items-center'>
                                            <span className='text-violet-600'>Developer</span>
                                        </div>
                                        </div>
                                        
                                        <div className='w-full h-full rounded-lg relative overflow-hidden' id='clipper'>
                                            <img src={person3} alt='person_one' className='w-full h-full object-cover rounded-lg'/>
                                            <div className='absolute bottom-1 left-1 w-[50%] h-7vh bg-white z-40 rounded-lg 2xl:flex lg:flex md:hidden sm:hidden xs:hidden justify-center items-center'>
                                                <span className='text-violet-600'>Designer</span>
                                            </div>
                                        </div>     
                                    </div>
                                </div>
                            </Fade>
                        </div>
                    </section>   
                </div>
            </section>
            <section className='bg-black 2xl:w-full 2xl:h-20vh lg:w-full lg:h-50vh md:w-full md:h-20vh sm:h-10vh xs:h-10vh flex justify-center items-center ' id='courses'>
                <div className='w-full h-full  flex justify-center items-center'>
                    <span className='2xl:text-8xl lg:text-6xl md:text-6xl sm:text-4xl xs:text-4xl font-bold font-Poppins text-white '>Courses</span>
                </div>
            </section>
       
            <section className='w-full h-full flex justify-center items-center p-2'>
                <div className='w-[90%] 2xl:h-70vh lg:h-full md:h-full sm:h-full xs:h-full 2xl:grid lg:grid 2xl:grid-cols-4 lg:grid-cols-4 md:flex md:flex-col sm:flex sm:flex-col xs:flex xs:flex-col gap-4 relative p-3'> 
                    <div className='col-span-2 flex justify-center items-center flex-col w-full h-full bg-blue-500 rounded-lg'>
                        <div className='w-full p-4 h-[30%] flex justify-between items-center rounded-md'>
                            <span className='text-3xl font-bold font-Poppins'>HTML</span>
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
                        <div  className='w-full h-[30%] p-4'>
                            <span className='font-Roboto text-xs'>HTML HyperText Markup Language is the standard language used to create and structure content on the web.
                                 It defines the structure of a webpage by using elements or tags to organize text, images, links, and other media into a coherent layout. 
                                HTML serves as the foundation of most websites.
                            </span>
                        </div>
                    </div>    
                    <Slide direction='up' delay={delay * 2} triggerOnce>
                        <div className='bg-blue-500 w-full h-full flex justify-center items-center flex-col gap-3 rounded-lg'>
                            <div className="w-full p-4 h-[30%] flex justify-between items-center">
                                <span className='text-3xl font-bold font-Poppins'>CSS</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="m3 2l1.578 17.834L12 22l7.468-2.165L21 2zm13.3 14.722l-4.293 1.204H12l-4.297-1.204l-.297-3.167h2.108l.15 1.526l2.335.639l2.34-.64l.245-3.05h-7.27l-.187-2.006h7.64l.174-2.006H6.924l-.176-2.006h10.506z" />
                                </svg>
                            </div>
                            <div className="w-full p-4 h-[30%] flex justify-center items-center">
                                <span className='font-Roboto text-xs'>
                                    CSS Cascading Style Sheets is a stylesheet language used to describe the presentation of HTML elements on a webpage. 
                                    It allows you to control the layout, colors, fonts, spacing, and overall design of web pages.
                                </span>
                            </div>
                        </div>
                    </Slide>
                    <Slide direction='up' delay={delay* 3} triggerOnce>
                        <div className='bg-blue-500 w-full h-full flex justify-center items-center flex-col rounded-lg'>
                            <div className="w-full p-4 h-full flex justify-between items-center">
                                <span className='text-3xl font-bold font-Poppins'>JAVASCRIPT</span>
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
                            <div className="w-full p-4 h-full flex justify-center items-center">
                                <span className='font-Roboto text-xs'>
                                JavaScript is a versatile, high-level programming language primarily used to create dynamic and interactive content on websites.
                                Originally developed for client-side scripting and also server-side as well.
                                </span>
                            </div>
                        </div>
                    </Slide>
                    <Slide direction='up' delay={delay*4} triggerOnce>
                        <div className='bg-blue-500 w-full h-full flex justify-center items-center flex-col rounded-lg'>
                            <div className="w-full p-4 h-full flex justify-between items-center">
                                <span className='text-3xl font-bold font-Poppins'>NODE JS</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 15 15">
                                    <path fill="currentColor" fillRule="evenodd" d="M14 4.213L7.5.42L1 4.213v6.574l1.006.587l2.057-.832A1.5 1.5 0 0 0 5 9.152V4h1v5.152a2.5 2.5 0 0 1-1.562 2.317l-1.34.542L7.5 14.58l6.5-3.792zM7 6a2 2 0 0 1 2-2h1.167C11.179 4 12 4.82 12 5.833V6h-1v-.167A.833.833 0 0 0 10.167 5H9a1 1 0 0 0 0 2h1a2 2 0 1 1 0 4H9a2 2 0 0 1-2-2h1a1 1 0 0 0 1 1h1a1 1 0 1 0 0-2H9a2 2 0 0 1-2-2" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="w-full p-4 h-full flex justify-center items-center">
                                <span className='font-Roboto text-xs'>
                                JavaScript is a versatile, high-level programming language primarily used to create dynamic and interactive content on websites.
                                Originally developed for client-side scripting and also server-side as well.
                                </span>
                            </div>
                        </div>
                    </Slide>
                    <Slide direction='up' delay={delay*5} triggerOnce>
                        <div className='bg-blue-500 w-full h-full flex justify-center items-center flex-col rounded-lg'>
                            <div className="w-full p-4 h-full flex justify-between items-center">
                                <span className='text-3xl font-bold font-Poppins'>TAILWIND CSS</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M12 6c-2.67 0-4.33 1.33-5 4c1-1.33 2.17-1.83 3.5-1.5c.76.19 1.31.74 1.91 1.35c.98 1 2.09 2.15 4.59 2.15c2.67 0 4.33-1.33 5-4c-1 1.33-2.17 1.83-3.5 1.5c-.76-.19-1.3-.74-1.91-1.35C15.61 7.15 14.5 6 12 6m-5 6c-2.67 0-4.33 1.33-5 4c1-1.33 2.17-1.83 3.5-1.5c.76.19 1.3.74 1.91 1.35C8.39 16.85 9.5 18 12 18c2.67 0 4.33-1.33 5-4c-1 1.33-2.17 1.83-3.5 1.5c-.76-.19-1.3-.74-1.91-1.35C10.61 13.15 9.5 12 7 12" />
                                </svg>
                            </div>
                            <div className="w-full p-4 h-full flex justify-center items-center">
                                <span className='font-Roboto text-xs'>
                                JavaScript is a versatile, high-level programming language primarily used to create dynamic and interactive content on websites.
                                Originally developed for client-side scripting and also server-side as well.
                                </span>
                            </div>
                        </div>
                    </Slide>
                    <Slide direction='up' delay={delay*6} triggerOnce>
                        <div className='bg-blue-500  w-full h-full flex justify-center items-center flex-col rounded-lg'>
                            <div className="w-full p-4 h-full flex justify-between items-center">
                                <span className='text-3xl font-bold font-Poppins'>BOOTSTRAP CSS</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M5.423 3.038c-1.284 0-2.233 1.124-2.19 2.342c.04 1.171-.013 2.688-.395 3.924c-.383 1.24-1.03 2.026-2.088 2.127v1.138c1.058.101 1.705.887 2.088 2.127c.382 1.237.435 2.753.394 3.924c-.042 1.218.907 2.342 2.192 2.342h13.154c1.284 0 2.234-1.124 2.192-2.342c-.041-1.171.012-2.687.393-3.924c.384-1.24 1.03-2.026 2.087-2.127v-1.138c-1.058-.101-1.703-.887-2.087-2.127c-.381-1.236-.434-2.753-.393-3.924c.042-1.218-.908-2.342-2.192-2.342zm10.581 11.033c0 1.678-1.251 2.696-3.328 2.696H9.14a.38.38 0 0 1-.382-.381V7.614a.38.38 0 0 1 .382-.38h3.515c1.732 0 2.869.937 2.869 2.378c0 1.01-.765 1.916-1.739 2.074v.053c1.326.145 2.22 1.064 2.22 2.332M12.29 8.442h-2.016v2.848h1.698c1.313 0 2.036-.529 2.036-1.474c0-.885-.622-1.374-1.718-1.374m-2.016 3.977v3.139h2.09c1.367 0 2.09-.549 2.09-1.58c0-1.03-.743-1.559-2.178-1.559z" />
                                </svg>
                            </div>
                            <div className="w-full p-4 h-full flex justify-center items-center">
                                <span className='font-Roboto text-xs'>
                                JavaScript is a versatile, high-level programming language primarily used to create dynamic and interactive content on websites.
                                Originally developed for client-side scripting and also server-side as well.
                                </span>
                            </div>
                        </div>
                    </Slide>
                    <Slide direction='up' delay={delay*7} triggerOnce>
                        <div className='bg-blue-500 w-full h-full flex justify-center items-center flex-col rounded-lg'>
                            <div className="w-full p-4 h-full flex justify-between items-center">
                                <span className='text-3xl font-bold font-Poppins'>REACT</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M12 10.11c1.03 0 1.87.84 1.87 1.89c0 1-.84 1.85-1.87 1.85S10.13 13 10.13 12c0-1.05.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7c-.52-.59-1.03-1.23-1.51-1.9a23 23 0 0 1-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86c.27.06.57.11.88.16zm6.54-.76l.81-1.5l-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9s-1.17 0-1.71.03c-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47c.54.03 1.11.03 1.71.03s1.17 0 1.71-.03c.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7c.52.59 1.03 1.23 1.51 1.9c.82.08 1.63.2 2.4.36c.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86c-.27-.06-.57-.11-.88-.16zm1.45-7.05c1.47.84 1.63 3.05 1.01 5.63c2.54.75 4.37 1.99 4.37 3.68s-1.83 2.93-4.37 3.68c.62 2.58.46 4.79-1.01 5.63c-1.46.84-3.45-.12-5.37-1.95c-1.92 1.83-3.91 2.79-5.38 1.95c-1.46-.84-1.62-3.05-1-5.63c-2.54-.75-4.37-1.99-4.37-3.68s1.83-2.93 4.37-3.68c-.62-2.58-.46-4.79 1-5.63c1.47-.84 3.46.12 5.38 1.95c1.92-1.83 3.91-2.79 5.37-1.95M17.08 12c.34.75.64 1.5.89 2.26c2.1-.63 3.28-1.53 3.28-2.26s-1.18-1.63-3.28-2.26c-.25.76-.55 1.51-.89 2.26M6.92 12c-.34-.75-.64-1.5-.89-2.26c-2.1.63-3.28 1.53-3.28 2.26s1.18 1.63 3.28 2.26c.25-.76.55-1.51.89-2.26m9 2.26l-.3.51c.31-.05.61-.1.88-.16c-.07-.28-.18-.57-.29-.86zm-2.89 4.04c1.59 1.5 2.97 2.08 3.59 1.7c.64-.35.83-1.82.32-3.96c-.77.16-1.58.28-2.4.36c-.48.67-.99 1.31-1.51 1.9M8.08 9.74l.3-.51c-.31.05-.61.1-.88.16c.07.28.18.57.29.86zm2.89-4.04C9.38 4.2 8 3.62 7.37 4c-.63.35-.82 1.82-.31 3.96a23 23 0 0 1 2.4-.36c.48-.67.99-1.31 1.51-1.9" />
                                </svg>
                            </div>
                            <div className="w-full p-4 h-full flex justify-center items-center">
                                <span className='font-Roboto text-xs'>
                                JavaScript is a versatile, high-level programming language primarily used to create dynamic and interactive content on websites.
                                Originally developed for client-side scripting and also server-side as well.
                                </span>
                            </div>
                        </div>
                    </Slide>
                </div>
            </section>
         
            <section className='bg-red-500 w-full h-100vh flex justify-center items-center gap-4 p-4 flex-col'>
                <div className='w-full h-5vh p-4 2xl:hidden lg:hidden md:hidden sm:flex xs:flex'>
                    <svg className='text-white' xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
                        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h10" />
                    </svg>
                </div>
                <div className='w-full h-full flex justify-center items-center p-3 bg-slate-500 gap-4'>
                        <div className='bg-green-500 w-[30%] h-full p-4 gap-4 2xl:flex justify-start items-center flex-col lg:flex md:hidden sm:hidden xs:hidden'>
                            <div className='bg-blue-500 w-full h-[5%] flex justify-center items-center'>
                                <a href="#starter" rel='noopener noreferer' className='w-full h-full flex justify-center items-center text-stone-500'>Setup</a>
                            </div>
                            <div className='bg-blue-500 w-full h-[5%] flex justify-center items-center'>
                                <a href="#history" rel='noopener noreferer' className='w-full h-full flex justify-center items-center text-stone-500'>History of the web</a>
                            </div>
                            <div className='bg-blue-500 w-full h-[5%] flex justify-center items-center'>
                                <a href="#html" rel='noopener noreferer' className='w-full h-full flex justify-center items-center text-stone-500'>HTML</a>
                            </div>
                            <div className='bg-blue-500 w-full h-[5%] flex justify-center items-center'>
                                <a href="#css" rel='noopener noreferer' className='w-full h-full flex justify-center items-center text-stone-500'>CSS</a>
                            </div>
                            <div className='bg-blue-500 w-full h-[5%] flex justify-center items-center'>
                                <a href="#javascript" rel='noopener noreferer' className='w-full h-full flex justify-center items-center text-stone-500'>JAVASCRIPT</a>
                            </div>
                        </div>
                        <div className='bg-green-500 overflow-scroll w-full h-full p-4 gap-4' id="setup">
                                <h1 className='text-5xl  text-white font-Poppins font-bold p-4' id="starter">Get Started</h1>  
                                <div className='w-full 2xl:h-[20%] lg:h-[30%] md:h-[40%] sm:h-[40%] xs:h-[40%] bg-purple-500 p-4'>
                                    <span className='text-white font-Roboto 2xl:text-sm lg:text-sm sm:text-xs xs:text-xs'>
                                        To even think about building as a beginner or a professional there
                                        are some essentials tools needed example for a carpenter to build a wooden structure
                                        he/she needs a hammer, nail and a wood all together to complete a setup so as a developer.
                                        But the tools needed by a developer is an IDE (Integrated Development Environment) and the popular one y
                                        used among developers is microsoft visual studio code to download link on the link <a href="https://code.visualstudio.com/" target='_blank' rel='noopener noreferrer' className='text-blue-400 underline'>here</a>

                                    </span>
                                </div>
                                <div className='w-full 2xl:h-70vh lg:h-[90%] md:h-full sm:h-full xs:h-full bg-orange-500 2xl:p-4 lg:p-4 md:p-3 sm:p-2 xs:p-2 flex justify-start items-start flex-col gap-0'>
                                    <h1 className='2xl:text-5xl text-white p-2 font-Poppins font-bold lg:text-5xl md:text-3xl sm:text-3xl xs:text-2xl  m-0 '>What is Visual studio Code?</h1><br/>
                                    <div className='w-full 2xl:h-[20%] lg:h-[100%] md:h-[100%] sm:h-[100%] xs:h-[100%] 2xl:p-4 lg:p-4 md:p-3 sm:p-2 xs:p-1'>
                                        <span className='font-Roboto text-white 2xl:p-2 lg:p-2 md:p-1 sm:p-1 xs:p-1 m-0 2xl:text-sm lg:text-sm sm:text-xs xs:text-xs'>
                                                Visual Studio Code (VS Code) is a free, open-source code editor developed by Microsoft. It is designed to be lightweight yet powerful, providing developers with a feature-rich environment for coding in a variety of languages. Here’s an overview of what VS Code offers:<br/>
                                                Key Features:<br/>
                                                Multi-language Support:<br/>
                                                VS Code supports a wide range of programming languages out-of-the-box (like JavaScript, Python, C++, and more) and can be extended to support many others via extensions.<br/>
                                                Extensibility:<br/>
                                                The editor can be customized with thousands of extensions from the marketplace, allowing users to add language support, debuggers, and tools for productivity, version control, and more.<br/>
                                                Integrated Git Support:<br/>
                                                Cross-platform:<br/>
                                                VS Code works on Windows, macOS, and Linux, making it a versatile tool for developers on any platform.<br/>
                                        </span>
                                    </div>
                                </div>
                                <div className='w-full 2xl:h-[70%] lg:h-[90%] md:h-full sm:h-40vh xs:h-[80%] bg-yellow-500 p-4' id='history'>
                                    <h1 className='2xl:text-5xl text-white font-Poppins font-bold lg:text-5xl md:text-3xl sm:text-3xl xs:text-3xl'>History of the web</h1><br/>
                                    <span className='font-Roboto text-white 2xl:text-sm lg:text-sm sm:text-xs xs:text-xs'>                 
                                        The web, short for World Wide Web (WWW), is a system of interlinked hypertext documents and multimedia content accessible via the internet.
                                        Created by Tim Berners-Lee in 1989, it allows users to view and interact with websites using web browsers. 
                                        The web relies on technologies like HTML (for structuring content), HTTP (for transferring data), and URLs (for locating resources).
                                        It revolutionized communication, commerce, and entertainment, evolving into a platform for interactive and user-driven experiences, like social media and web apps, forming a central part of modern life.
                                        You can read more about the web <a className='text-blue-500 underline' href='https://en.wikipedia.org/wiki/World_Wide_Web'>here</a>.
                                    </span>
                                </div>
                                <div className='w-full 2xl:h-[70%] lg:h-[90%] md:h-[70%] sm:h-40vh xs:h-[80%] bg-fuchsia-500 p-4' id='html'>
                                    <h1 className='2xl:text-5xl text-white font-Poppins font-bold lg:text-5xl md:text-3xl sm:text-3xl xs:text-3xl'>HTML</h1>
                                    <span className='font-Roboto'>HTML meaning HyperText Markup Language is structured language used to create the </span>
                                    <iframe width={width} height={height} src={src} title={title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
                                    </iframe>
                                </div>
                                <div className='w-full 2xl:h-[70%] lg:h-[90%] md:h-[70%] sm:h-40vh xs:h-[80%] bg-fuchsia-500 p-4' id='css'>
                                    <iframe width={width} height={height} src="https://www.youtube.com/embed/ieTHC78giGQ" title="CSS Full Course - Includes Flexbox and CSS Grid Tutorials" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

                                </div>
                                <div className='w-full 2xl:h-[70%] lg:h-[90%] md:h-[70%] sm:h-40vh xs:h-[80%] bg-fuchsia-500 p-4' id='css'>
                                    <iframe width={width} height={height} src="https://www.youtube.com/embed/PkZNo7MFNFg" title="Learn JavaScript - Full Course for Beginners" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

                                </div>
                            </div>
                    </div>
            </section>
            <section className='bg-blue-700 w-full h-50vh flex justify-center items-start flex-col'>
                <div className='w-full h-5vh bg-purple-500'>
                    <svg className='float-right shadow-md hover:cursor-pointer' onClick={handleGeminiButton} xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M24 12.024c-6.437.388-11.59 5.539-11.977 11.976h-.047C11.588 17.563 6.436 12.412 0 12.024v-.047C6.437 11.588 11.588 6.437 11.976 0h.047c.388 6.437 5.54 11.588 11.977 11.977z" />
                    </svg>
                </div>
                <div className='w-full h-full bg-white flex justify-center items-center'>
                    {
                        text && 
                        <div className='w-[80%] h-full overflow-scroll'>
                            <span className='text-sm font-Roboto'>{text}</span>
                        </div>
                    }
                </div>
                <div className='w-full bg-red-500 h-40vh flex justify-center items-center p-4'>
                    {   
                    display ? 
                        <div className='sticky bg-slate-200 w-[100%] h-full z-30 flex justify-center items-center flex-col p-4 rounded-full'>
                            <span className='text-6xl font-Poppins capitalize'>Ask gemini</span>
                            <form onSubmit={handleData} className='w-full h-full flex justify-center items-center flex-col gap-4'>
                                <input type="text" className='w-[60%] h-6vh p-4  font-Roboto focus:outline-none rounded-md' name='prompt' value={formData.prompt} onChange={handleChange} placeholder='Gemini assistant' />
                                <input type="submit" value="Ask" className='bg-blue-500 p-3 capitalize shadow-xl w-[20%] rounded-md hover:cursor-pointer' />
                            </form>
                        </div>
                    : null
                    }
                </div>
            </section>
        </section>
    )
}

export default Courses;

