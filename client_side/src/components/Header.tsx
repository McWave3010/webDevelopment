import React , { useState , useEffect } from 'react';
import logo from "../assets/images/logo.jpg";



const Header = () => {
  const [ display , setDisplay ] = useState<boolean>(false);
  const [ pic , setpic ] = useState<string>('');
  const [ loaded , setLoaded ] = useState<boolean>(false);

  useEffect(() => {
    const fetchProfilePicture = async () => {
        try {
            const response = await fetch("http://localhost:4000/user/pic", {
                credentials: "include", // Include cookies in request
            });
            const data = await response.json();
            setLoaded(true);
            setpic(data.picture); // Set picture URL in state
        } catch (error) {
            console.error("Failed to fetch profile picture:", error);
        }
    };

    fetchProfilePicture();
},[]);

 
  const handleState = ()=>{
    setDisplay(!display);
  }

  const handleError = ()=>{
    setLoaded(false);
  }
  
    return(
      <section className='w-full 2xl:h-8vh lx:h-8vh lg:h-8vh md:h-10vh sm:h-8vh xs:h-8vh flex justify-start items-center flex-col bg-black'>
      <section className='w-[100%] h-8vh flex 2xl:justify-evenly xl:justify-evenly lg:justify-evenly md:justify-between sm:justify-between xs:justify-between items-center gap-3 bg-black'>
        <div className='w-[100%] h-full flex justify-center items-center gap-2'>
          <img src={logo} alt='logo' className='2xl:w-[15%] rounded-full h-[85%] xs:w-[30%]'/>
          <span className='text-white opacity-80'>Web Dev</span>
        </div>
        <div className='w-[100%] h-full 2xl:flex xl:flex lg:flex md:hidden sm:hidden xs:hidden'>
          <ul className='w-[100%] flex justify-center items-center h-full'>
            <li><a className='p-4 text-white opacity-80 active:text-orange-400 hover:opacity-100' href='/'>Home</a></li>
            <li><a className='p-4 text-white opacity-80 active:text-orange-400 hover:opacity-100' href="/courses">Courses</a></li>
            <li><a className='p-4 text-white opacity-80 active:text-orange-400 hover:opacity-100' href="/user/login">Log in</a></li>
            <li><a className='p-4 text-white opacity-80 active:text-orange-400 hover:opacity-100' href="/user/register">Register</a></li>
          </ul>
        </div>
        <div className='w-[100%] h-full flex 2xl:justify-center lx:justify-center lg:justify-center md:justify-end sm:justify-end xs:justify-end items-center '>
          <a className='p-4 text-white xs:p-2 2xl:flex xl:flex lg:flex md:hidden sm:hidden xs:hidden' href="https://x.com/McWaves3010" target='_blank' rel='noopener noreferrer'>
            <svg  xmlns="http://www.w3.org/2000/svg" width="1.4em" height="1.4em" viewBox="0 0 24 24">
              <path fill="currentColor" d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.2 4.2 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.52 8.52 0 0 1-5.33 1.84q-.51 0-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23" />
            </svg>
          </a>
          <a className='p-4 text-white xs:p-2 2xl:flex xl:flex lg:flex md:hidden sm:hidden xs:hidden' href="https://www.linkedin.com/in/samuel-amoh-9a5224335/" target='_blank' rel='noopener noreferrer'>
            <svg xmlns="http://www.w3.org/2000/svg" width="1.4em" height="1.4em" viewBox="0 0 24 24">
              <path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z" />
            </svg>
          </a>
          <a className='p-4 text-white xs:p-2 2xl:flex xl:flex lg:flex md:hidden sm:hidden xs:hidden' href="https://web.facebook.com/?_rdc=1&_rdr#" target='_blank' rel='noopener noreferrer'>
          <svg xmlns="http://www.w3.org/2000/svg" width="1.4em" height="1.4em" viewBox="0 0 24 24">
            <path fill="currentColor" d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95" />
          </svg>
          </a>
          <a href='#home' className='p-4 text-white xs:p-2 2xl:hidden xl:hidden lg:hidden md:flex sm:flex xs:flex' onClick={handleState}>
            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 16 16">
              <path fill="currentColor" fillRule="evenodd" d="M15 3.25a.75.75 0 0 0-.75-.75H1.75a.75.75 0 0 0 0 1.5h12.5a.75.75 0 0 0 .75-.75M15 8a.75.75 0 0 0-.75-.75h-8.5a.75.75 0 0 0 0 1.5h8.5A.75.75 0 0 0 15 8m-.75 4a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1 0-1.5z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
       <div className='w-[30%] h-[80%] 2xl:flex xl:flex lg:hidden md:hidden sm:hidden xs:hidden justify-center items-center'>
        {
          loaded ?
            <img src={pic} onError={handleError} alt="" className='w-full rounded-full h-[85%] xs:w-[30%] object-cover bg-black'/>
            : <div className='bg-black w-full h-full'></div>
        }
           
        </div>
    </section>

          
    {
          display ? 
          <div className='w-[100%] h-90vh bg-black 2xl:hidden xl:hidden lg:hidden md:flex sm:flex xs:flex z-40'>
          <ul className='w-full flex justify-center items-end h-full flex-col p-6 gap-4'>
            <li><a className='p-6 text-white opacity-80 active:text-orange-400' href='/'>Home</a></li>
            <li><a className='p-6 text-white opacity-80 active:text-orange-400' href="/courses">Courses</a></li>
            <li><a className='p-6 text-white opacity-80 active:text-orange-400' href="/user/login">Log in</a></li>
            <li><a className='p-6 text-white opacity-80 active:text-orange-400' href="/user/register">Register</a></li>
          </ul>
        </div>
        : null}
    </section>
    )
}


export default Header;