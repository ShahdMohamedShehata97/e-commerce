import { BadgeCheck, ShieldCheck, Star, Truck } from 'lucide-react'
import React from 'react'
import RegisterForm from './loginForm'
// import LoginImage from '@/LoginImage'
import Image from 'next/image'
import { FaClock, FaTruck } from 'react-icons/fa6'
import { FaShieldAlt } from 'react-icons/fa'
import LoginForm from './loginForm'
// import { LoginImage } from '@/';

export default function page() {
  
  return (
    <>

    <div className='flex gap-12 w-[70%] mx-auto mt-10 '> 
           <div className="flex-1 p-8 bg-white font-sans text-[#4B5563]">

            <div className='rounded-[16px]! overflow-hidden shadow-lg   h-96!'> 
              <img src='./loginImage.png' alt='Login Image ' className='rounded-[16px]! block  w-full '/>

            </div>

            <div className='mt-6'>
              <p className='text-[30px] font-bold text-center '>FreshCart - Your One-Stop Shop for Fresh
Products</p>

<p className='text-[18px] font-medium text-center mt-4 '>Join thousands of happy customers who trust FreshCart for their daily grocery need</p>
              </div>

              <div className='grid grid-cols-3 mt-4 '>

                <div className='flex gap-2 items-center' >
                  <FaTruck color='#16A34A'/>
                  <span className='text-[14px] font-500 text-[#6A7282] '>Free Delivery</span>
                </div>
                <div className='flex gap-2 items-center' >
                  <FaShieldAlt color='#16A34A'/>
                  <span className='text-[14px] font-500 text-[#6A7282] '>Secure Payment</span>
                </div>
                <div className='flex gap-2 items-center' >
                  <FaClock color='#16A34A'/>
                  <span className='text-[14px] font-500 text-[#6A7282] '>24/7 Support</span>
                </div>

              </div>
     
      
    </div>

    <div className='flex-1 py-10 rounded-[16px] h-fit shadow px-6'>
      <LoginForm/>
    </div>
    
    </div>

 
    
    </>
  )
}
