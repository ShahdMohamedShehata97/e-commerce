import React from 'react'
import { FaTruck } from "react-icons/fa";
import { FaGift } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail, MdLogout } from "react-icons/md";
import Link from 'next/link';
import { FiUser } from "react-icons/fi";
import { MdPersonAddAlt1 } from "react-icons/md";
import { Session } from 'inspector/promises';
import { getServerSession } from 'next-auth';
import HandleLogout from '../HandleLogout/HandleLogout';
import HandleHeaderRendering from '../HandleHeaderRendering/HandleHeaderRendering';


export default async function Header() {

  // const session = await getServerSession()
  // const userName=session?.user?.name
  // const isAuthenticated= !! userName
  return (
<div className="w-full px-4 xl:px-0  xl:w-[73%] mx-auto pt-4 pb-2 lg:flex  hidden lg:flex-row justify-between gap-3">


  <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 items-start sm:items-center">
    <span className="flex items-center gap-1 text-[13px] sm:text-[14px] font-medium text-[#6A7282]">
      <FaTruck size={15} color="#16A34A" />
      Free Shipping on Orders 500 EGP
    </span>

    <span className="hidden sm:flex items-center gap-1 text-[14px] font-medium text-[#6A7282]">
      <FaGift color="#16A34A" />
      Free Gift on Orders 500 EGP
    </span>
  </div>


  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6">

   
    <div className="flex flex-col sm:flex-row gap-2 sm:gap-6">
      <a href="#" className="flex items-center gap-1 text-[13px] sm:text-[14px] font-medium text-[#6A7282] hover:text-[#16A34A]">
        <FaPhoneAlt size={13}  />
        +1 (800) 123-4567
      </a>

      <a href="#" className="flex items-center gap-1 text-[13px] sm:text-[14px] font-medium text-[#6A7282] hover:text-[#16A34A]">
        <MdEmail  />
        support@freshcart.com
      </a>
    </div>

    
    <span className="hidden lg:block w-0.5 h-4 bg-[#E5E7EB]"></span>

    <HandleHeaderRendering/>

   
 
  </div>
</div>

  )
}
