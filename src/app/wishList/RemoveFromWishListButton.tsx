'use client'

import React from 'react'
import { FaTrashAlt } from 'react-icons/fa'
import { removeFromWishList } from './wishList.actions'
import { useWishList, WishListType } from '../_context/WishListContext'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'

export default function RemoveFromWishListButton({id}:{id:string}) {
    
    
 const router = useRouter()
  const {updateNumberOfWishListItems} = (useWishList() as WishListType)

    async function handleRemoveFromWishList(){

        const res = await removeFromWishList(id)
        
        if(res !== null)
            {

                toast.success('Item removed Successfully',{position:'top-right',duration:3000})
                updateNumberOfWishListItems(res)

                router.refresh()

            }

            
               else{
            
                toast.error('Remving item failed',{position:'top-right',duration:3000})
            
               }
            


    }
  return (
      <button onClick={handleRemoveFromWishList} className="p-2.5 border border-gray-200 rounded-lg text-slate-400 hover:text-red-500 hover:bg-red-50 transition-all">
            <FaTrashAlt size={16} />
          </button>
  )
}
