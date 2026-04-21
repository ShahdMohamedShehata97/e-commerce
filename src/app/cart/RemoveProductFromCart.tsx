'use client'

import React from 'react'
import { FaTrash } from 'react-icons/fa6'
import { deleteElementFromCart } from './cart.actions'
import { CartContextType, useCart } from '../_context/CartContext'
import { toast } from 'sonner'

export default function RemoveProductFromCart({id}:{id:string}) {

    const {updateNumberOfCartItems}= (useCart() as CartContextType)
  

 async function handleRemoveElement(){


   const res = await deleteElementFromCart(id)

   if(res !== null)
   {

    toast.success('Item removed Successfully',{position:'top-right',duration:3000})
    updateNumberOfCartItems(res)
    

   }

   else{

    toast.error('Remving item failed',{position:'top-right',duration:3000})

   }



    }



  return (
    <div  onClick={handleRemoveElement}  className='w-10 h-10 flex justify-center items-center bg-[#FEF2F2] border border-[#FFC9C9] rounded-[12px]'>
              <FaTrash color='#FB2C36' />
            </div>
  )
}
