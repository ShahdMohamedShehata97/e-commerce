import { getAllCategories } from '@/api/services/route.services'
import Link from 'next/link'
import React from 'react'
import { IoIosArrowRoundForward } from 'react-icons/io'

export default async function CategorySubCard() {


    const allCategories=await getAllCategories()
  return (
   <>
   <div className='mt-10'>
     <div className='flex justify-between py-8 '>
        <div className='flex gap-3'>
            <div className="h-8 w-1.5 bg-linear-to-b from-[#00BC7D] to-[#007A55] rounded-2xl"></div>
            <h2 className='text-3xl font-bold '>Shop By <span className='text-[#009966]'>Category</span></h2>
        </div>

        <Link href='#' className='flex items-center text-[16px] font-medium text-[#16A34A]'>View All Caregories 
        <IoIosArrowRoundForward size={20} />
        </Link>

     </div>

     <div  className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-8'>
        {allCategories?.map((category)=><div key={category._id} className='bg-white shadow rounded-[8px] p-4 flex flex-col items-center'>
            <img src={category.image} alt={category.name} className='w-20 h-20 rounded-full' />
            <h3 className='text-16px font-medium text-[#364153] mt-3'>{category.name}</h3>

        </div>)}
     </div>

   </div>
   </>
  )
}
