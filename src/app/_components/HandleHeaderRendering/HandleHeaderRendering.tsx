'use client'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'
import { FiUser } from 'react-icons/fi'
import HandleLogout from '../HandleLogout/HandleLogout'
import { MdPersonAddAlt1 } from 'react-icons/md'

export default function HandleHeaderRendering() {

    const session =useSession()
    const userName= session.data?.user?.name
    const isAuthenticated= session.status === 'authenticated'
    
  return (
    <>

       {isAuthenticated ? <div className="flex gap-4">
      <Link href="/profile/MyAddress" className="flex items-center gap-1 text-[13px] sm:text-[14px] font-medium text-[#6A7282] hover:text-[#16A34A]">
        <FiUser  size={16} />
     {userName}
      </Link>

      <Link href="/login" className="flex items-center gap-1 text-[13px] sm:text-[14px] font-medium text-[#6A7282] hover:text-[#16A34A]">
     <HandleLogout/>
      </Link>
    </div>
: 
<div className="flex gap-4">
      <Link href="/login" className="flex items-center gap-1 text-[13px] sm:text-[14px] font-medium text-[#6A7282] hover:text-[#16A34A]">
        <FiUser  size={16} />
        Sign In
      </Link>

      <Link href="/register" className="flex items-center gap-1 text-[13px] sm:text-[14px] font-medium text-[#6A7282] hover:text-[#16A34A]">
        <MdPersonAddAlt1  size={18} />
        Sign Up
      </Link>
    </div>
}
    </>
  )
}
