'use client'

import React from 'react'
import { updateProductCount } from './cart.actions'
import { toast } from 'sonner'

export default function UpdateProductCountButton({isIncrement=false,id,newCount,className }:{className:string,isIncrement?:boolean,id:string,newCount:number}) {
    

   async function handleUpdateCount(){

     const updatedCount= await updateProductCount(id,newCount)

     if(updatedCount){
        toast.success(`Prouduct count ${isIncrement ? 'Incremented' : 'Decremented'} successfully`,{position:'top-right',duration:3000})
     }

     else{

        toast.error(`Prouduct count ${isIncrement ? 'Incremented' : 'Decremented'} failed`,{position:'top-right',duration:3000})

     }

    }

  return (
    <button onClick={handleUpdateCount} disabled={newCount<=0} className ={`${isIncrement ? 'bg-[#16A34A]' :'bg-white' } px-2 font-bold rounded-[5px]`}>

        {isIncrement ? '+': '-'}
    </button>
  )
}


