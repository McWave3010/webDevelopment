import React , { useState } from 'react';
import logo from "../assets/images/design.webp";
import { motion } from "framer-motion";
import axios from "axios";


const Login: React.FC = () => {
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


  
const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email , password } = formData;
    console.log(email);
    console.log(password);

}
  return (
    <section className='w-[100%] h-100vh flex justify-center items-center'>
       <motion.section
        initial={{ opacity: 0, x: -100 , scale: 0.3,rotate: 0}}
        animate={{ opacity: 1 , x: 0,scale: 1, rotate: 0}}
        transition={{ duration: 1}}
        className='2xl:w-[100%] 2xl:h-[100%] lg:w-[95%] lg:h-[90%] md:w-[95%] md:h-[90%] sm:w-[100%] sm:h-[90%] xs:w-[100%] xs:h-[90%] flex justify-center items-center'
        >
          <div className='2xl:w-[80%] 2xl:h-[80%] lg:w-[100%] lg:h-[80%] md:w-[100%] md:h-[80%] sm:w-[100%] sm:h-[80%] xs:w-[100%] xs:h-[80%] flex justify-center items-center'>
              <div className='bg-zinc-900 2xl:w-[40%] 2xl:h-[90%] lg:w-[70%] lg:h-[80%] md:w-[70%] md:h-[80%] sm:w-[100%] sm:h-[80%] xs:w-[100%] xs:h-[90%]  flex justify-start items-center flex-col gap-4 p-4 rounded-lg shadow-lg shadow-indigo-500/50 '>
                  <div className='w-full flex justify-center items-center h-10vh'>
                    <img src={logo} alt='logo' className='h-[90%] rounded-full' />
                  </div>
                  <div className='w-full flex justify-center items-center h-10vh flex-col'>
                      <span className='text-white font-Poppins text-center text-4xl'>Welcome back</span>
                      <span className='text-slate-400'>Don't have an account yet? <a href='/user/register' className='text-white'>Sign up</a></span>
                  </div>
                  <form className='w-full h-[60%] flex justify-flex-start items-center flex-col gap-4' onSubmit={handleSubmit}>
                      <div className='2xl:w-[70%] lg:w-[90%] md:w-[100%] sm:w-[100%] xs:w-full'>
                        <input type='email' placeholder='Email' name='email' value={formData.email} required onChange={handleChange} className='w-full p-4 rounded-md text-sm bg-black  text-white focus:outline-none focus:border-none ' />
                      </div>
                      <div className='2xl:w-[70%] lg:w-[90%] md:w-[100%] sm:w-[100%] xs:w-full'>
                        <input type='password' placeholder='Password' name='password' value={formData.password} required onChange={handleChange} className='w-full p-4 rounded-md text-sm bg-black text-white focus:outline-none focus:border-none' />
                      </div>
                      <div className='2xl:w-[70%] lg:w-[90%] md:w-[100%] sm:w-[100%] xs:w-full flex justify-center items-center gap-2'>
                          <button type='submit' className='w-full py-2 text-white rounded-md bg-blue-500'>Sign in</button>
                      </div>
                  </form>
              </div>
          </div>
        </motion.section>
    </section>
  );
}

export default Login;
