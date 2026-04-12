'use client'

import { ProductType } from '@/api/types'
import React, { createContext, ReactNode, useContext, useState } from 'react'



export interface WishListType{
    numberOfWishListItems:number,
    updateNumberOfWishListItems:(num:number)=>void

}


const wishListContext= createContext<WishListType>({ numberOfWishListItems:0,updateNumberOfWishListItems(){}})

export default function WishListContextProvider({children,userWishList}:{children:ReactNode,userWishList:ProductType[] | undefined}) {
  

    const [numberOfWishListItems, setnumberOfWishListItems] = useState(()=>{
        return userWishList=== undefined ? 0 : userWishList.length
    })
  

    function updateNumberOfWishListItems(num:number){
        setnumberOfWishListItems(num)
    }


  return (
    <wishListContext.Provider value={{numberOfWishListItems,updateNumberOfWishListItems}}>
        {children}

    </wishListContext.Provider>
  )
}





export function useWishList(){

  const res= useContext(wishListContext)

  if(!res){
    return new  Error ("can't use context out of countext")
    
  }

 return res
}
