// 'use client'

// import { useWishList, WishListType } from '@/app/_context/WishListContext'
// import { addTowishList } from '@/app/wishList/wishList.actions'
// import { useState } from 'react'
// import { FaRegHeart, FaHeart } from 'react-icons/fa'
// import { toast } from 'sonner'

// export default function AddwishList({id}:{id:string}) {
//   const [loved, setLoved] = useState(false)
//   const {updateNumberOfWishListItems}= (useWishList() as WishListType)
//   async function handleAddedToWishList() {
//     // setLoved(!loved) 

//     const newItemsCount= await addTowishList(id)

   


//  if (newItemsCount !== undefined && newItemsCount !== false) {
//       setLoved(true) 
//      updateNumberOfWishListItems(newItemsCount)
      
//   toast.success('product added Successfully to wish List', {
//     position: 'top-right',
//     duration: 3000,
//   })
// } else {
//       setLoved(false) 
//   toast.error('Adding product failed', {
//     position: 'top-right',
//     duration: 3000,
//   })
// }
//   }

//   return (
//     <div
//       onClick={handleAddedToWishList}
//       className="w-8 h-8 shadow rounded-full bg-white flex justify-center items-center absolute top-3.5 right-2 cursor-pointer">
//       {loved ? <FaHeart className="text-red-500" /> : <FaRegHeart className="text-gray-500" /> }
//     </div>
//   )
// }


'use client'

import { ReactNode, useEffect, useState } from 'react'
import { FaRegHeart, FaHeart } from 'react-icons/fa'
import { toast } from 'sonner'
import { useWishList } from '@/app/_context/WishListContext'
import { addTowishList, removeFromWishList } from '@/app/wishList/wishList.actions'


interface AddToWishListButtonProps{
    className:string,
    id:string,
    name:string
    icon:ReactNode
}

export default function AddwishList({ id , className,name, icon}: AddToWishListButtonProps) {

  const [loved, setLoved] = useState(false)



  const {
    wishlistItems,
    setWishlistItems,
    updateNumberOfWishListItems
  } = useWishList()


  useEffect(() => {
    const exists = wishlistItems.some(item => item.id === id)
    setLoved(exists)
  }, [wishlistItems, id])

  async function handleWishlist() {

    if (loved) {
      
      const res = await removeFromWishList(id)

      if (res !== false) {

        setWishlistItems(prev =>
          prev.filter(item => item.id !== id)
        )

        setLoved(false)
        updateNumberOfWishListItems(res)

        toast.success('Removed from wishlist',{position:'top-right' , duration:3000})
      }

    } else {
      
      const res = await addTowishList(id)

      if (res !== false && res !== undefined) {

        setWishlistItems(prev => [
          ...prev,
          { id } as any   
        ])

        setLoved(true)
        updateNumberOfWishListItems(res)

        toast.success('Added to wishlist',{position:'top-right' , duration:3000})
      }
    }
  }

  return (
    <button
    onClick={handleWishlist}
    className={
      className ||
      "w-8 h-8 shadow rounded-full bg-white flex justify-center items-center absolute top-3.5 right-2 cursor-pointer"
    }
  >
    <div className="flex items-center gap-2">
      {icon}

      {name && (
        <span className="text-sm">
          {name}
        </span>
      )}

      {!icon && !name && (
        loved
          ? <FaHeart className="text-red-500" />
          : <FaRegHeart className="text-gray-500" />
      )}
    </div>
  </button>
  )
}