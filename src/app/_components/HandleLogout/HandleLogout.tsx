'use client'
import { signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React from 'react'
import { MdLogout } from 'react-icons/md'

export default function HandleLogout() {
    const route =useRouter()

   async function handleLohout(){
        await signOut({redirect:false})
        route.push('/login')
        
    }

   
  return (
     <span onClick={handleLohout} className='flex  items-center gap-1'>
         <MdLogout  size={18} />
        Sign Out
       </span>
  )
}
