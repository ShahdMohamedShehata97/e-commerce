'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { HiLocationMarker } from 'react-icons/hi'
import { IoSettingsSharp } from 'react-icons/io5'
import { MdChevronRight } from 'react-icons/md'

export default function ProfileButtons() {
    const [Choosen, setChoosen] = useState('My Account')
  return (
    <div className="">
      {/* Container الأساسي */}
      <div className="w-full bg-white rounded-3xl border border-gray-100 shadow-sm p-6">
        
        {/* العنوان */}
        <h2 className="text-[#1a2b3c] text-lg font-bold mb-5 px-1">
          My Account
        </h2>

        <div className="space-y-3">
          
          {/* الاختيار الأول: My Addresses */}
          <Link onClick={()=>{setChoosen('My Account')}}  href='MyAddress' className={`${Choosen =='My Account' ? 'bg-[#F0FDF4]' : 'bg-transparent' } flex justify-between items-center p-3 rounded-3xl`}>
            <div className="flex items-center gap-4">
              <div className={`${Choosen == 'My Account' ?'bg-[#22c55e]' :'bg-[#f3f4f6]'} p-2.5 rounded-xl shadow-sm`}>
                <HiLocationMarker className={`${Choosen == 'My Account' ? 'text-white' : 'text-[#64748b]'} text-2xl`}/>
              </div>
              <span className={`${Choosen == 'My Account' ? 'text-[#15803D]' : 'text-[#64748b]'} text-[16px] font-medium`}>
                My Addresses
              </span>
            </div>
            <MdChevronRight className={`${Choosen == 'My Account' ? 'text-[#22c55e]' : 'text-[#64748b]'} text-2xl`}/>
          </Link>

          {/* الاختيار الثاني: Settings */}
          <Link onClick={()=>{setChoosen('Settings')}} href='Settings' className={`${Choosen =='Settings' ? 'bg-[#F0FDF4]' : 'bg-transparent' } flex justify-between items-center p-3 rounded-3xl`}>
            <div className="flex items-center gap-4">
              <div className={`${Choosen == 'Settings' ?'bg-[#22c55e]' :'bg-[#f3f4f6]'} p-2.5 rounded-xl shadow-sm`}>
                <IoSettingsSharp className={`${Choosen == 'Settings' ? 'text-white' : 'text-[#64748b]'} text-2xl`} />
              </div>
              <span className={`${Choosen == 'Settings' ? 'text-[#15803D]' : 'text-[#64748b]'} text-[16px] font-medium`}>
                Settings
              </span>
            </div>
            <MdChevronRight className={`${Choosen == 'Settings' ? 'text-[#22c55e]' : 'text-[#64748b]'} text-2xl`}/>
          </Link>

        </div>
      </div>
    </div>
  )
}
