import React , { useState } from 'react';
import logo from "../assets/images/design.webp";
import { motion } from "framer-motion";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Login: React.FC = () => {
  const navigate = useNavigate();
  const [ error , setError ] = useState("");
  const [ formData , setFormData ] = useState({
    email:'',
    password: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
    const { value , name } = e.target;
    setFormData({
      ...formData,
    [name]: value})
  }

const handleGoogle = ()=>{
  window.location.href = "http://localhost:8080/auth/google";
}

const handleGithub = ()=>{
  window.location.href = "http://localhost:8080/auth/github";
}
  
const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
  try {
    e.preventDefault();
    //const { email , password } = formData;
    const response = await axios.post("http://localhost:8080/login/user", formData, { withCredentials: true })
    navigate(response.data.redirectURI);
  }catch (error: any){
    setError(error.response.data.message);
    setTimeout(()=>{
      setError("")
    }, 3000)
  }

}
  return (
    <section className='w-[100%] h-100vh flex justify-center items-center'>
       <motion.section
        initial={{ opacity: 0, x: -100 , scale: 0.3,rotate: 0}}
        animate={{ opacity: 1 , x: 0,scale: 1, rotate: 0}}
        transition={{ duration: 1}}
        className='2xl:w-[100%] 2xl:h-[100%] lg:w-[95%] lg:h-[90%] md:w-[95%] md:h-[90%] sm:w-[100%] sm:h-[90%] xs:w-[100%] xs:h-[90%] flex justify-center items-center'
        >
          <div className='2xl:w-[80%] 2xl:h-[80%] lg:w-[100%] lg:h-[80%] md:w-[100%] md:h-[80%] sm:w-[100%] sm:h-[90%] xs:w-[100%] xs:h-[90%] flex justify-center items-center'>
              <div className='bg-zinc-900 2xl:w-[40%] 2xl:h-[90%] lg:w-[70%] lg:h-[80%] md:w-[70%] md:h-[80%] sm:w-[100%] sm:h-[80%] xs:w-[100%] xs:h-[90%]  flex justify-start items-center flex-col gap-4 p-4 rounded-lg shadow-lg shadow-indigo-500/50 '>
                  <div className='w-full flex justify-center items-center h-10vh'>
                    <img src={logo} alt='logo' className='h-[90%] rounded-full' />
                  </div>
                  <div className='w-full flex justify-center items-center h-10vh flex-col'>
                      <span className='text-white font-Poppins text-center text-4xl'>Welcome back</span>
                      <span className='text-slate-400'>Don't have an account yet? <a href='/user/register' className='text-white'>Sign up</a></span>
                  </div>
                  { error && (
                    <div className='text-red-600'>
                      <span className='text-red-600'>{error}</span>
                    </div>
                  )}
                  <form className='w-full h-[90%] flex justify-flex-start items-center flex-col gap-4' onSubmit={handleSubmit}>
                      <div className='2xl:w-[70%] lg:w-[90%] md:w-[100%] sm:w-[100%] xs:w-full'>
                        <input type='email' placeholder='Email' name='email' value={formData.email} required onChange={handleChange} className='w-full p-4 rounded-md text-sm bg-black  text-white focus:outline-none focus:border-none ' />
                      </div>
                      <div className='2xl:w-[70%] lg:w-[90%] md:w-[100%] sm:w-[100%] xs:w-full'>
                        <input type='password' placeholder='Password' name='password' value={formData.password} required onChange={handleChange} className='w-full p-4 rounded-md text-sm bg-black text-white focus:outline-none focus:border-none' />
                      </div>
                      <div className='2xl:w-[70%] lg:w-[90%] md:w-[100%] sm:w-[100%] xs:w-full flex justify-center items-center gap-2'>
                          <button type='submit' className='w-full py-2 text-white rounded-md bg-blue-500'>Sign in</button>
                      </div>
                      <div className='w-full h-[10%] flex justify-center items-center'>
                        <div className='w-full flex justify-center items-center'>
                          <hr className='bg-white'/><span className='text-slate-300'>or</span><hr/>
                        </div>
                      </div>
                      <div className='w-[70%] h-[25%] flex justify-center items-center p-3 gap-4'>
                     <div className='w-full h-full flex justify-center items-center bg-black rounded-lg hover:cursor-pointer' onClick={handleGoogle}>
                     <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 128 128">
                        <path fill="#fff" d="M44.59 4.21a63.28 63.28 0 0 0 4.33 120.9a67.6 67.6 0 0 0 32.36.35a57.13 57.13 0 0 0 25.9-13.46a57.44 57.44 0 0 0 16-26.26a74.3 74.3 0 0 0 1.61-33.58H65.27v24.69h34.47a29.72 29.72 0 0 1-12.66 19.52a36.2 36.2 0 0 1-13.93 5.5a41.3 41.3 0 0 1-15.1 0A37.2 37.2 0 0 1 44 95.74a39.3 39.3 0 0 1-14.5-19.42a38.3 38.3 0 0 1 0-24.63a39.25 39.25 0 0 1 9.18-14.91A37.17 37.17 0 0 1 76.13 27a34.3 34.3 0 0 1 13.64 8q5.83-5.8 11.64-11.63c2-2.09 4.18-4.08 6.15-6.22A61.2 61.2 0 0 0 87.2 4.59a64 64 0 0 0-42.61-.38" />
                        <path fill="#e33629" d="M44.59 4.21a64 64 0 0 1 42.61.37a61.2 61.2 0 0 1 20.35 12.62c-2 2.14-4.11 4.14-6.15 6.22Q95.58 29.23 89.77 35a34.3 34.3 0 0 0-13.64-8a37.17 37.17 0 0 0-37.46 9.74a39.25 39.25 0 0 0-9.18 14.91L8.76 35.6A63.53 63.53 0 0 1 44.59 4.21" />
                        <path fill="#f8bd00" d="M3.26 51.5a63 63 0 0 1 5.5-15.9l20.73 16.09a38.3 38.3 0 0 0 0 24.63q-10.36 8-20.73 16.08a63.33 63.33 0 0 1-5.5-40.9" />
                        <path fill="#587dbd" d="M65.27 52.15h59.52a74.3 74.3 0 0 1-1.61 33.58a57.44 57.44 0 0 1-16 26.26c-6.69-5.22-13.41-10.4-20.1-15.62a29.72 29.72 0 0 0 12.66-19.54H65.27c-.01-8.22 0-16.45 0-24.68" />
                        <path fill="#319f43" d="M8.75 92.4q10.37-8 20.73-16.08A39.3 39.3 0 0 0 44 95.74a37.2 37.2 0 0 0 14.08 6.08a41.3 41.3 0 0 0 15.1 0a36.2 36.2 0 0 0 13.93-5.5c6.69 5.22 13.41 10.4 20.1 15.62a57.13 57.13 0 0 1-25.9 13.47a67.6 67.6 0 0 1-32.36-.35a63 63 0 0 1-23-11.59A63.7 63.7 0 0 1 8.75 92.4" />
                      </svg>
                     </div>
                     <div className='w-full h-full flex justify-center items-center  bg-black rounded-lg hover:cursor-pointer' onClick={handleGithub}>
                     <svg className='text-white' xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 1024 1024">
                      <path fill="currentColor" d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5C64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9c26.4 39.1 77.9 32.5 104 26c5.7-23.5 17.9-44.5 34.7-60.8c-140.6-25.2-199.2-111-199.2-213c0-49.5 16.3-95 48.3-131.7c-20.4-60.5 1.9-112.3 4.9-120c58.1-5.2 118.5 41.6 123.2 45.3c33-8.9 70.7-13.6 112.9-13.6c42.4 0 80.2 4.9 113.5 13.9c11.3-8.6 67.3-48.8 121.3-43.9c2.9 7.7 24.7 58.3 5.5 118c32.4 36.8 48.9 82.7 48.9 132.3c0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9c177.1-59.7 304.6-227 304.6-424.1c0-247.2-200.4-447.3-447.5-447.3" />
                    </svg>
                     </div>
                  </div>
                  </form>
                 
              </div>
          </div>
        </motion.section>
    </section>
  );
}

export default Login;
