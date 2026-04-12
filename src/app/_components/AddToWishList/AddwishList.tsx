'use client'

import { useWishList, WishListType } from '@/app/_context/WishListContext'
import { addTowishList } from '@/app/wishList/wishList.actions'
import { useState } from 'react'
import { FaRegHeart, FaHeart } from 'react-icons/fa'
import { toast } from 'sonner'

export default function AddwishList({id}:{id:string}) {
  const [loved, setLoved] = useState(false)
  const {updateNumberOfWishListItems}= (useWishList() as WishListType)
  async function handleAddedToWishList() {
    // setLoved(!loved) 

    const newItemsCount= await addTowishList(id)

   


 if (newItemsCount !== undefined && newItemsCount !== false) {
      setLoved(true) 
     updateNumberOfWishListItems(newItemsCount)
      
  toast.success('product added Successfully to wish List', {
    position: 'top-right',
    duration: 3000,
  })
} else {
      setLoved(false) 
  toast.error('Adding product failed', {
    position: 'top-right',
    duration: 3000,
  })
}
  }

  return (
    <div
      onClick={handleAddedToWishList}
      className="w-8 h-8 shadow rounded-full bg-white flex justify-center items-center absolute top-3.5 right-2 cursor-pointer">
      {loved ? <FaHeart className="text-red-500" /> : <FaRegHeart className="text-gray-500" /> }
    </div>
  )
}