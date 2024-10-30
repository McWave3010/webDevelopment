//study app

import React, { useState , useEffect } from 'react';
import template from "../assets/images/res.png";
import { motion } from 'framer-motion';
import rest from "../assets/images/template1.png";
import { Slide } from "react-awesome-reveal";
import Container from "../Messages/Container";




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
   <section className="w-full h-full bg-black">
    <section className='first overflow-hidden'>
      
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
              <span className="text-white opacity-90">BOOTSTRAP </span>
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
                          <span className='font-Quicksand 2xl:text-6xl text-center text-white xs:text-xl'>Creative design, 3D animation & modern CMS</span>
                      </div> 
                  </div> 
            </section>
          </motion.section>
      </Slide>

      <Container/>      
    </section>
  );
}

export default Home;
