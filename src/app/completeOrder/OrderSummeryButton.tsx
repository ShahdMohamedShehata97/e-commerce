'use client'

import { MdOutlineLock } from 'react-icons/md'

export default function OrderSummaryButton(){

// 
  return (

       <button className="w-full mt-6 bg-[#1f9d4f] text-white py-4 rounded-xl font-bold text-md flex items-center justify-center gap-2 shadow-lg shadow-green-100 hover:bg-[#188040] transition-all active:scale-95">
                <MdOutlineLock size={18} />
                Place Order
       </button>
    
    
  )
}