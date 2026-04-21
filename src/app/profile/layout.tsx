import Link from 'next/link'
import React, { ReactNode } from 'react'
import { FaUser } from 'react-icons/fa6'
import { HiLocationMarker } from 'react-icons/hi'
import { IoLayers, IoSettingsSharp } from 'react-icons/io5'
import { MdChevronRight } from 'react-icons/md'
import ProfileButtons from './ProfileButtons'

export default function profile({children}:{children:ReactNode}) {
  return (
    <div className='bg-[#F9FAFB80]'>
       <div className='w-[75%] mx-auto '>
        <div className="w-full bg-linear-to-r from-[#16A34A] via-[#22C55E] to-[#4ADE80] py-12 px-6 md:px-16 min-h-[200px] flex flex-col justify-center">
            <div className="max-w-7xl mx-auto w-full">
              
              {/* Breadcrumbs */}
              <nav className="text-white/80 text-sm mb-4 flex items-center gap-2">
                <span className="hover:underline cursor-pointer">Home</span>
                <span>/</span>
                <span className="font-medium text-white">My Account</span>
              </nav>
      
              {/* Content Section */}
              <div className="flex items-center gap-5">
                {/* Icon Box */}
                <div className="bg-white/20 p-4 rounded-2xl shadow-lg backdrop-blur-sm border border-white/10">
                  <FaUser className="text-white text-4xl" />
                </div>
      
                {/* Text */}
                <div className="text-white">
                  <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
                    My Account
                  </h1>
                  <p className="text-white/90 mt-1 text-sm md:text-base">
                    Manage your addresses and account settings
                  </p>
                </div>
              </div>
              
            </div>

            
            
          </div>

          <div className='grid grid-cols-4 gap-4 mt-8'>

            <div className='col-span-1'>
              
         <ProfileButtons/>
            </div>
            <div className='col-span-3'>
              {children}
            </div>
            
          </div>

       </div>
    </div>
  )
}
