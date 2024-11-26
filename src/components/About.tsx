import React from 'react';
import { Fade } from "react-awesome-reveal";
import Person1 from "../assets/images/image_one.png";
import Person2 from "../assets/images/image_two.png";
import Person3 from "../assets/images/image_three.png";
import Person4 from "../assets/images/image_four.png";

const About = () => {

  const handleClick = ()=>{
    window.location.href= "#show";
  }

  let delay = 100;
  return (
    <section className='w-full h-full'>
      <section className="w-full h-60vh bg-black flex justify-center items-start flex-col">
        <div className="relative w-full h-full p-4 flex justify-center items-center">
          <div className='absolute w-full h-full top-0 bg-black z-20 opacity-70'></div>
          <video autoPlay muted loop className='absolute top-0 w-full h-full object-cover'>
              <source src='/videos/learner.mp4'/>
          </video>
          
          <Fade
            direction='up'
            triggerOnce
            className="w-full h-full absolute z-40 flex justify-center items-center">
            <div className='w-full absolute h-full z-50 flex justify-center items-center flex-col gap-4'>
              <span className='font-Lexend text-white text-7xl text-center'>About this web development begineer course</span>
              <div className='w-[50%] h-5vh flex justify-center items-center'>
                <span className='font-Poppins text-white text-center opacity-70'>
                  This is a simple website development course beginner friendly giving the best web experience and documentation available
                </span>
              </div>
              <div className='w-[10%] h-[25%] absolute z-10 left-10 bottom-10 opacity-60'>
                  <img className="w-full h-full object-cover rounded-lg" src={Person1} alt=""/>
                </div>
                <div className='w-[10%] h-[45%] absolute z-20 left-40 bottom-20 opacity-60'>
                  <img className="w-full h-full object-cover rounded-lg" src={Person2} alt=""/>
                </div>
                <div className='w-[10%] h-[25%] absolute z-20 right-10 bottom-10 opacity-60'>
                  <img className="w-full h-full object-cover rounded-lg" src={Person3} alt=""/>
                </div>
                <div className='w-[10%] h-[45%] z-20 absolute right-40 bottom-20 opacity-60'>
                  <img className="w-full h-full object-cover rounded-lg" src={Person4} alt=""/>
                </div>
                <div className="w-full h-[20%] flex justify-center z-40 items-center">
                  <div className="w-[20%] flex justify-center items-center h-full gap-4">
                    <button className='bg-white w-[40%] text-black p-3 rounded-xl shadow-md shadow-white font-Poppins hover:cursor-pointer' onClick={handleClick}>Explore</button>
                    <a href='/courses' className='underline flex justify-center items-center font-Poppins text-white hover:cursor-pointer hover:scale-x-10'>Learn more
                      <svg className='hover:pl-2' xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M13.293 7.293a1 1 0 0 0 0 1.414L15.586 11H8a1 1 0 0 0 0 2h7.586l-2.293 2.293a.999.999 0 1 0 1.414 1.414L19.414 12l-4.707-4.707a1 1 0 0 0-1.414 0" />
                      </svg>
                    </a>
                  </div>
                </div>
            </div>
            
          </Fade>
        </div>
        <div className='w-full h-5vh bg-gradient-to-t from-black to-slate-600'></div>
      </section>
        <div className='w-full h-full bg-black flex justify-center items-center flex-col gap-4 p-4' id='show'>
            <div className='w-[70%] h-full flex justify-center items-center flex-col'>
                <div className='w-full h-full flex justify-center items-center'>
                    <span className="font-Lexend text-7xl text-white font-bold">Courses</span>
                </div>
                  <div className='w-full h-full grid grid-cols-4 gap-4 p-4'>
                  <div className='col-span-2 flex justify-center items-center flex-col w-full h-full bg-neutral-500 rounded-lg'>
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

                    <Fade direction='up' delay={delay * 2} triggerOnce>
                        <div className='bg-neutral-500 w-full h-full flex justify-center items-center flex-col gap-3 rounded-lg'>
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
                    </Fade>
                    <Fade direction='up' delay={delay* 3} triggerOnce>
                        <div className='bg-neutral-500 w-full h-full flex justify-center items-center flex-col rounded-lg'>
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
                    </Fade>
                    <Fade direction='up' delay={delay*4} triggerOnce>
                        <div className='bg-neutral-500 w-full h-full flex justify-center items-center flex-col rounded-lg'>
                            <div className="w-full p-4 h-full flex justify-between items-center">
                                <span className='text-3xl font-bold font-Poppins'>NODE JS</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 15 15">
                                    <path fill="currentColor" fillRule="evenodd" d="M14 4.213L7.5.42L1 4.213v6.574l1.006.587l2.057-.832A1.5 1.5 0 0 0 5 9.152V4h1v5.152a2.5 2.5 0 0 1-1.562 2.317l-1.34.542L7.5 14.58l6.5-3.792zM7 6a2 2 0 0 1 2-2h1.167C11.179 4 12 4.82 12 5.833V6h-1v-.167A.833.833 0 0 0 10.167 5H9a1 1 0 0 0 0 2h1a2 2 0 1 1 0 4H9a2 2 0 0 1-2-2h1a1 1 0 0 0 1 1h1a1 1 0 1 0 0-2H9a2 2 0 0 1-2-2" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="w-full p-4 h-full flex justify-center items-center">
                                <span className='font-Roboto text-xs'>
                                        Node.js is a JavaScript runtime environment that allows developers to write server-side applications using JavaScript.
                                        Express.js is a popular web application framework for Node.js that provides a set of features and tools for building web applications.
                                </span>
                            </div>
                        </div>
                    </Fade>
                    <Fade direction='up' delay={delay*5} triggerOnce>
                        <div className='bg-neutral-500 w-full h-full flex justify-center items-center flex-col rounded-lg'>
                            <div className="w-full p-4 h-full flex justify-between items-center">
                                <span className='text-3xl font-bold font-Poppins'>TAILWIND CSS</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M12 6c-2.67 0-4.33 1.33-5 4c1-1.33 2.17-1.83 3.5-1.5c.76.19 1.31.74 1.91 1.35c.98 1 2.09 2.15 4.59 2.15c2.67 0 4.33-1.33 5-4c-1 1.33-2.17 1.83-3.5 1.5c-.76-.19-1.3-.74-1.91-1.35C15.61 7.15 14.5 6 12 6m-5 6c-2.67 0-4.33 1.33-5 4c1-1.33 2.17-1.83 3.5-1.5c.76.19 1.3.74 1.91 1.35C8.39 16.85 9.5 18 12 18c2.67 0 4.33-1.33 5-4c-1 1.33-2.17 1.83-3.5 1.5c-.76-.19-1.3-.74-1.91-1.35C10.61 13.15 9.5 12 7 12" />
                                </svg>
                            </div>
                            <div className="w-full p-4 h-full flex justify-center items-center">
                                <span className='font-Roboto text-xs'>
                                        Tailwind CSS is a utility-first CSS framework developed by the team at Tailwind Labs.
                                         It provides a powerful, flexible, and accessible design system that helps developers build beautiful, responsive, and accessible websites quickly and efficiently.
                                </span>
                            </div>
                        </div>
                    </Fade>
                    <Fade direction='up' delay={delay*6} triggerOnce>
                        <div className='bg-neutral-500 w-full h-full flex justify-center items-center flex-col rounded-lg'>
                            <div className="w-full p-4 h-full flex justify-between items-center">
                                <span className='text-3xl font-bold font-Poppins'>BOOTSTRAP CSS</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M5.423 3.038c-1.284 0-2.233 1.124-2.19 2.342c.04 1.171-.013 2.688-.395 3.924c-.383 1.24-1.03 2.026-2.088 2.127v1.138c1.058.101 1.705.887 2.088 2.127c.382 1.237.435 2.753.394 3.924c-.042 1.218.907 2.342 2.192 2.342h13.154c1.284 0 2.234-1.124 2.192-2.342c-.041-1.171.012-2.687.393-3.924c.384-1.24 1.03-2.026 2.087-2.127v-1.138c-1.058-.101-1.703-.887-2.087-2.127c-.381-1.236-.434-2.753-.393-3.924c.042-1.218-.908-2.342-2.192-2.342zm10.581 11.033c0 1.678-1.251 2.696-3.328 2.696H9.14a.38.38 0 0 1-.382-.381V7.614a.38.38 0 0 1 .382-.38h3.515c1.732 0 2.869.937 2.869 2.378c0 1.01-.765 1.916-1.739 2.074v.053c1.326.145 2.22 1.064 2.22 2.332M12.29 8.442h-2.016v2.848h1.698c1.313 0 2.036-.529 2.036-1.474c0-.885-.622-1.374-1.718-1.374m-2.016 3.977v3.139h2.09c1.367 0 2.09-.549 2.09-1.58c0-1.03-.743-1.559-2.178-1.559z" />
                                </svg>
                            </div>
                            <div className="w-full p-4 h-full flex justify-center items-center">
                                <span className='font-Roboto text-xs'>
                                        Bootstrap is a popular, open-source front-end framework used to build responsive and mobile-first websites quickly and efficiently. 
                                        Developed by Twitter and initially released in 2011, it provides pre-designed components and a grid system, making web development faster and more consistent.
                                </span>
                            </div>
                        </div>
                    </Fade>
                    <Fade direction='up' delay={delay*7} triggerOnce>
                        <div className='bg-neutral-500 w-full h-full flex justify-center items-center flex-col rounded-lg'>
                            <div className="w-full p-4 h-full flex justify-between items-center">
                                <span className='text-3xl font-bold font-Poppins'>REACT</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M12 10.11c1.03 0 1.87.84 1.87 1.89c0 1-.84 1.85-1.87 1.85S10.13 13 10.13 12c0-1.05.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7c-.52-.59-1.03-1.23-1.51-1.9a23 23 0 0 1-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86c.27.06.57.11.88.16zm6.54-.76l.81-1.5l-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9s-1.17 0-1.71.03c-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47c.54.03 1.11.03 1.71.03s1.17 0 1.71-.03c.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7c.52.59 1.03 1.23 1.51 1.9c.82.08 1.63.2 2.4.36c.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86c-.27-.06-.57-.11-.88-.16zm1.45-7.05c1.47.84 1.63 3.05 1.01 5.63c2.54.75 4.37 1.99 4.37 3.68s-1.83 2.93-4.37 3.68c.62 2.58.46 4.79-1.01 5.63c-1.46.84-3.45-.12-5.37-1.95c-1.92 1.83-3.91 2.79-5.38 1.95c-1.46-.84-1.62-3.05-1-5.63c-2.54-.75-4.37-1.99-4.37-3.68s1.83-2.93 4.37-3.68c-.62-2.58-.46-4.79 1-5.63c1.47-.84 3.46.12 5.38 1.95c1.92-1.83 3.91-2.79 5.37-1.95M17.08 12c.34.75.64 1.5.89 2.26c2.1-.63 3.28-1.53 3.28-2.26s-1.18-1.63-3.28-2.26c-.25.76-.55 1.51-.89 2.26M6.92 12c-.34-.75-.64-1.5-.89-2.26c-2.1.63-3.28 1.53-3.28 2.26s1.18 1.63 3.28 2.26c.25-.76.55-1.51.89-2.26m9 2.26l-.3.51c.31-.05.61-.1.88-.16c-.07-.28-.18-.57-.29-.86zm-2.89 4.04c1.59 1.5 2.97 2.08 3.59 1.7c.64-.35.83-1.82.32-3.96c-.77.16-1.58.28-2.4.36c-.48.67-.99 1.31-1.51 1.9M8.08 9.74l.3-.51c-.31.05-.61.1-.88.16c.07.28.18.57.29.86zm2.89-4.04C9.38 4.2 8 3.62 7.37 4c-.63.35-.82 1.82-.31 3.96a23 23 0 0 1 2.4-.36c.48-.67.99-1.31 1.51-1.9" />
                                </svg>
                            </div>
                            <div className="w-full p-4 h-full flex justify-center items-center">
                                <span className='font-Roboto text-xs'>
                                    React.js is an open-source JavaScript library developed by Facebook for building user interfaces, particularly for single-page applications where dynamic content is a focus.
                                    It allows developers to create reusable UI components that manage their own state, making it efficient and flexible.
                                </span>
                            </div>
                        </div>
                    </Fade>
                  </div>
            </div>
          </div>
    </section>
        
  )
}


export default About;