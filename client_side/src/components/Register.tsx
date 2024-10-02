import React , { useState } from 'react'
import { motion } from "framer-motion";
import black from "../assets/images/black.webp";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { Toaster , toast } from 'react-hot-toast';


const Register: React.FC = () => {

  interface User {
    fullName: string;
    email: string;
    phoneNumber: string;
    password: string;
    confirmPassword: string;
    dateOfBirth: string;
    agreed: boolean;
  }


  const navigate: Function = useNavigate();
const [ error , setError ] = useState<string>("")
const [formData, setFormData] = useState<User>({
  fullName: '',
  email: '',
  phoneNumber: '',
  password: '',
  confirmPassword: '',
  dateOfBirth: '',
  agreed: false,
});

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

  const { name, value, type, checked } = e.target;
  setFormData({
    ...formData,
    [name]: type === 'checkbox' ? checked : value, 
  });
};



const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
  try{
  const current = new Date();
  const date = formData.dateOfBirth.split("-")[0];
  const result = Number(current.getFullYear()) - Number(date);
  e.preventDefault();
  if (formData.password !== formData.confirmPassword) {
    toast.error('Passwords do not match');
    return;
  }else if(result < 18){
    toast.error("Must be 18 or above");
    return;
  }
  setError('');
  
  const response = await axios.post("http://localhost:8080/register/user", formData, { withCredentials: true})
  
  if(response.data.success){
    navigate(response.data.redirectURL);
  }
}catch(err: any){
  //console.error(err);
  toast.error(err.response.data.message || "Registrations failed");
}

  
};
const length_value = 10;
  return (
    
    <section className='w-[100%] h-100vh flex justify-center items-center bg-black'>
      <Toaster position='top-right'/>
        <motion.section
        initial={{ opacity: 0, x: -100 , scale: 0.3,rotate: 0}}
        animate={{ opacity: 1 , x: 0,scale: 1, rotate: 0}}
        transition={{ duration: 1}}
        className='2xl:w-[70%] 2xl:h-[90%] xl:w-[65%] xl:h-[90%] lg:w-[70%] lg:h-[80%] md:w-[95%] md:h-[80%] sm:w-[100%] sm:h-[80%] xs:w-[100%] xs:h-[80%]'
        >
          <section className='2xl:w-[100%] 2xl:h-[100%] flex justify-center items-center 2xl:flex-row lg:w-full lg:h-full lg:flex-row md:w-full md:h-full md:flex-col sm:flex-col xs:flex-col'>
              <div className='w-[100%] h-full lg:h-full md:h-[50%] sm:h-[50%] xs:h-[30%] flex justify-center items-center relative'>
                  <img src={black} alt='forbes'
                  className='w-[100%] h-full object-cover'
                  />
                  <div className='absolute bottom-0 left-0 w-[100%] h-[30%] p-4 flex justify-center items-center flex-col'>
                      <span className='text-white text-2xl'>Welcome to Web Dev</span>
                      <span className='opacity-60 text-white text-center'>This is a simple website development course beginner friendly giving the best web experience and documentation available</span>
                  </div>
              </div>
              <div className='w-[100%] h-full bg-white flex justify-center items-center flex-col p-4 rounded-r-md'>
                <div className='p-2'>
                  <span className='text-black text-4xl'>Create an account</span>
                </div>
                <div>
                  {
                    error && (
                    <div>
                      <span className="text-red-500">{error}</span>
                    </div>
                    )
                  }
                </div>
                <div className='w-[100%] h-full flex justify-center items-center flex-col'>
                  <form onSubmit={handleSubmit} className='2xl:w-[90%] h-full xs:w-[100%]'>
                      <div className='p-4 flex justify-between items-center'>
                        <label htmlFor=''>Full Name</label>
                        <input type="text" placeholder='Full Name' name='fullName' value={formData.fullName} required className='w-[70%] p-2 bg-gray-200 focus:border-none focus:outline-none' onChange={handleChange} />
                      </div>
                      <div  className='p-4 flex justify-between items-center'>
                        <label htmlFor=''>Email Address</label>
                        <input type="email"  placeholder='abcdegh@gmail.com' name='email' value={formData.email}  onChange={handleChange} required  className='w-[70%] p-2  bg-gray-200 focus:border-none focus:outline-none'/>
                      </div>
                      <div  className='p-4 flex justify-between items-center'>
                        <label htmlFor=''>Phone no.</label>
                        <input type="tel"  placeholder='+233' name='phoneNumber' pattern="[+]{1}[0-9]{10,14}" required value={formData.phoneNumber}  onChange={handleChange}  className='w-[70%] p-2 bg-gray-200 focus:border-none focus:outline-none'/>
                      </div>
                      <div className='p-4 flex justify-between items-center'> 
                        <label htmlFor=''>Password</label>
                        <input type="password"  placeholder='Password' pattern='^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$' name='password' required value={formData.password}  onChange={handleChange} className='w-[70%] p-2 bg-gray-200 focus:border-none focus:outline-none'/>
                      </div>
                      <div  className='p-4 flex justify-between items-center'>
                        <label htmlFor=''>Confirm Password</label>
                        <input type="password"  placeholder='Confirm Password' minLength={length_value} required  name='confirmPassword' value={formData.confirmPassword}  onChange={handleChange} className='w-[70%] p-2 bg-gray-200 focus:border-none focus:outline-none'/>
                      </div>
                      <div className='p-4 flex justify-between items-center'>
                        <label htmlFor=''>Date of Birth</label>
                        <input type="date" name='dateOfBirth' required value={formData.dateOfBirth}  onChange={handleChange} className='w-[70%] p-2 bg-gray-200 focus:border-none focus:outline-none'/>
                      </div>
                      <div className='p-4 flex justify-around items-center 2xl:w-[70%] lg:w-[90%] md:w-[90%] sm:w-[90%] xs:w-[90%] '>
                        <input type="checkbox"  name='agreed' required checked={formData.agreed}  onChange={handleChange} className='p-2 accent-black focus:border-none focus:outline-none'/>
                        <span>I agree to all terms and conditions</span>
                      </div>
                      <div className='p-2 flex justify-between items-center'>
                        <input type="submit" value="Create an account" className='w-[70%] p-4 bg-black text-white rounded-full hover:cursor-pointer'/>
                      </div>
                      <div className='p-4 flex justify-between items-center'>
                        <span>Already have account <a className='text-blue-500' href='/user/login'>Sign in </a></span>
                      </div>
                  </form>
                </div>
              </div>
          </section>
        </motion.section>
      </section>
  
  )
}

export default Register;
