//study app

import React, { useState , useEffect } from 'react';
import logo from "../assets/images/design.webp";
import template from "../assets/images/res.png";
import { motion } from 'framer-motion';
import rest from "../assets/images/template1.png";
import { Slide } from "react-awesome-reveal";




const Home: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  

  // Function to update the mouse position
  const handleMouseMove = (event: any) => {
    setPosition({
      x: event.clientX + window.scrollX, // Add horizontal scroll offset
      y: event.clientY + window.scrollY, 
    });
  };

  // Listen to mousemove event when the component mounts
  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    

    // Cleanup event listener when component unmounts
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
    <section className='first overflow-hidden'>
      <section className='w-[100%] h-8vh flex justify-evenly items-center gap-3'>
          <div className='w-[100%] h-full flex justify-center items-center gap-2'>
            <img src={logo} alt='logo' className='2xl:w-[12%] rounded-full h-[95%] xs:w-[30%]'/>
            <span className='text-white opacity-80'>Web Dev</span>
          </div>
          <div className='w-[100%] h-full border-b-2 border-b-white hidden sm:block'>
            <ul className='w-[100%] flex justify-center items-center h-full'>
              <li><a className='p-4 text-white opacity-80' href='#home'>Home</a></li>
              <li><a className='p-4 text-white opacity-80' href="#home">About</a></li>
              <li><a className='p-4 text-white opacity-80' href="#home">Courses</a></li>
              <li><a className='p-4 text-white opacity-80' href="#home">Docs</a></li>
              <li><a className='p-4 text-white opacity-80' href="/user/login">Log in</a></li>
              <li><a className='p-4 text-white opacity-80' href="/user/register">Register</a></li>
            </ul>
          </div>
          <div className='w-[100%] h-full flex justify-center items-center'>
            <a className='p-4 text-white xs:p-2' href="/home">
              <svg  xmlns="http://www.w3.org/2000/svg" width="1.4em" height="1.4em" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.2 4.2 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.52 8.52 0 0 1-5.33 1.84q-.51 0-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23" />
              </svg>
            </a>
            <a className='p-4 text-white xs:p-2' href="/home">
              <svg xmlns="http://www.w3.org/2000/svg" width="1.4em" height="1.4em" viewBox="0 0 24 24">
                <path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z" />
              </svg>
            </a>
            <a className='p-4 text-white xs:p-2' href="/home">
            <svg xmlns="http://www.w3.org/2000/svg" width="1.4em" height="1.4em" viewBox="0 0 24 24">
              <path fill="currentColor" d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95" />
            </svg>
            </a>
          </div>
      </section>
      <section className='w-[100%] 2xl:h-48vh mt-2 flex justify-center items-center lg:h-30vh md:h-30vh sm:h-30vh xs:h-20vh'>
          <div className='w-[100%] h-full flex justify-center items-center'>
              <span className='font-Poppins lg:text-8xl text-white text-center md:text-6xl sm:text-5xl xs:text-3xl'>Web Development Beginner Course</span>
          </div>
      </section>
      <section className='w-[100%] h-10vh flex justify-center items-center'>
        <div className='w-[50%] h-[100%] flex justify-center items-center xs:w-[100%]'>
          <span className='font-Poppins text-white text-center opacity-70'>
            This is a simple website development course beginner friendly giving the best web experience and documentation available
          </span>
        </div>
      </section>
    </section>
      <section className='w-[100%] h-20vh flex justify-center items-center bg-black gap-4 p-3'>
        <section className='w-[85%] h-full flex justify-center items-center bg-black  overflow-hidden'>
          <div className='w-[4000px] h-[80%] flex justify-center items-center bg-black  gap-4 p-3 animate-slide'>
            <div className='w-[100px] h-full p-2'>
              <span className="text-white opacity-90">HTML</span>
            </div>
            <div className='w-[100px] h-full p-2'>
              <span className="text-white opacity-90">CSS</span>
            </div>
            <div className='w-[100px] h-full p-2'>
              <span className="text-white opacity-90">JAVASCRIPT</span>
            </div>
            <div className='w-[100px] h-full p-2'>
              <span className="text-white opacity-90">REACT</span>
            </div>
            <div className='w-[100px] h-full p-2'>
              <span className="text-white opacity-90">TAILWIND</span>
            </div>
            <div className='w-[100px] h-full p-2'>
              <span className="text-white opacity-90">EXPRESS JS</span>
            </div>
            <div className='w-[100px] h-full p-2'>
              <span className="text-white opacity-90">HTML</span>
            </div>
            <div className='w-[100px] h-full p-2'>
              <span className="text-white opacity-90">BOOTSTRAP CSS</span>
            </div>
            <div className='w-[100px] h-full p-2'>
              <span className="text-white opacity-90">JAVASCRIPT</span>
            </div>
            <div className='w-[100px] h-full p-2'>
              <span className="text-white opacity-90">REACT</span>
            </div>
            <div className='w-[100px] h-full p-2'>
              <span className="text-white opacity-90">TAILWIND</span>
            </div>
            <div className='w-[100px] h-full p-2'>
              <span className="text-white opacity-90">EXPRESS JS</span>
            </div>
      

            <div className='w-[100px] h-full p-2'>
              <span className="text-white opacity-90">HTML</span>
            </div>
            <div className='w-[100px] h-full p-2'>
              <span className="text-white opacity-90">CSS</span>
            </div>
            <div className='w-[100px] h-full p-2'>
              <span className="text-white opacity-90">JAVASCRIPT</span>
            </div>
            <div className='w-[100px] h-full p-2'>
              <span className="text-white opacity-90">REACT</span>
            </div>
            <div className='w-[100px] h-full p-2'>
              <span className="text-white opacity-90">TAILWIND</span>
            </div>
            <div className='w-[100px] h-full p-2'>
              <span className="text-white opacity-90">EXPRESS JS</span>
            </div>
            <div className='w-[100px] h-full p-2'>
              <span className="text-white opacity-90">HTML</span>
            </div>
            <div className='w-[100px] h-full p-2'>
              <span className="text-white opacity-90">CSS</span>
            </div>
            <div className='w-[100px] h-full p-2'>
              <span className="text-white opacity-90">JAVASCRIPT</span>
            </div>
            <div className='w-[100px] h-full p-2'>
              <span className="text-white opacity-90">REACT</span>
            </div>
            <div className='w-[100px] h-full p-2'>
              <span className="text-white opacity-90">TAILWIND</span>
            </div>
            <div className='w-[100px] h-full p-2'>
              <span className="text-white opacity-90">EXPRESS JS</span>
            </div>
        </div>
        </section>
      </section>
      <section className='w-[100%] h-20vh flex items-center p-6 xs:h-10vh'>
          <span className='lg:text-8xl font-Poppins font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-black xs:text-6xl'>Examples products</span>
      </section>
      <section className="w-[100%] h-full flex justify-center items-center gap-4 p-4 mb-4">
      <motion.div
        initial={{ opacity: 0, x: -100, scale: 0.3, rotate: 0 }}
        animate={{ opacity: 1, x: 0, scale: 1, }}
        transition={{ duration: 2 }}
        className=" w-full h-full p-4 flex justify-center items-center gap-4 flex-col"
      >
          <div className="w-[70%] h-full flex justify-center items-center gap-4 p-4">
            <img src={template} alt="template-images" className='w-full h-full object-fill rounded-lg mr-4' />
            <a href="/files/Restaurantly.zip" download="Template1" className="bg-gradient-to-r from-black via-blue-500 to-white bg-clip-text text-transparent font-bold font-Poppins p-3">
              Download Design
            </a>
          </div>
          <div className="w-[70%] h-full flex justify-center items-center gap-4 p-4">
          <a href="/files/template1.zip" download="Template2" className="bg-gradient-to-r from-black via-blue-500 to-white bg-clip-text text-transparent font-bold font-Poppins p-3">
              Download Design
            </a>
            <img src={rest} alt="template-images" className='w-full h-full object-fill rounded-lg mr-4' />
            
          </div>
          </motion.div>
      </section>
      <div
        style={{
          position: "absolute",   // Absolutely position the div
          left: `${position.x}px`, // Horizontal position based on mouse x
          top: `${position.y}px`,  // Vertical position based on mouse y
          width: "50px",           // Custom size
          height: "50px",
          border: "1px solid white",  // Custom styles (e.g., background color)
          borderRadius: "50%",     // Make it a circle
          transform: "translate(-50%, -50%)",  // Center the div at the mouse cursor
          pointerEvents: "none",
          filter: "blur(1px)"  
        
        }}
      ></div>
      <Slide direction='up' cascade triggerOnce>
        <section className='w-[100%] 2xl:h-20vh flex justify-start items-start p-6 lg:h-10vh md:h-10vh xs:h-10vh'>
          <span className='bg-gradient-to-r from-blue-600 via-white to-blue-500 bg-clip-text text-transparent lg:text-8xl font-bold font-Poppins p-3 xs:text-4xl '>Project-based learning</span>
        </section>
      </Slide>
      <Slide direction='left' triggerOnce>
          <motion.section
            initial={{ opacity: 0, x: -100, scale: 0.3, rotate: 0 , transform: "translateX(-50%)"}}
            animate={{ opacity: 1, x: 0, scale: 1, transform: "translateX(0)"}}
            transition={{ duration: 1  }} 
          >
            <section className='w-[100%] 2xl:h-70vh flex justify-center items-center gap-4 p-4 lg:h-10vh md:h-10vh xs:h-20vh'>  
                  <div className='w-[90%] h-full flex justify-center items-center gap-4 p-4 relative'>
                      <div className='w-[100%] h-full flex justify-center items-center'>
                        <video className='w-[100%] h-full opacity-40 2xl:flex lg:hidden md:hidden sm:hidden xs:hidden' autoPlay loop muted>
                          <source src="/videos/website.mp4" className='w-[100%] h-full object-fill'/>
                        </video>
                      </div>
                      <div className='absolute top-25 left-0 2xl:w-[60%] lg:w-[100%] md:w-[100%] xs:w-[100%] h-[50%] p-4 '>
                        <span className='font-bold uppercase text-white'>Web development Course</span><br/>
                          <span className='font-Quicksand 2xl:text-6xl text-center text-white xs:text-3xl'>Creative design, 3D animation & modern CMS</span>
                      </div> 
                  </div> 
            </section>
          </motion.section>
      </Slide>
    </>
  );
}

export default Home;
