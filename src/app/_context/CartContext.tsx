
'use client'

import { CartResponse } from "@/api/types"
import { createContext, ReactNode, useContext, useState } from "react"




export interface CartContextType{
    numberOfCartItems:number,
    updateNumberOfCartItems:(num:number)=>void

}



const CartContext=createContext<CartContextType>({ numberOfCartItems:0,updateNumberOfCartItems(){}})



export default function CartContextProvider({children,userCart}:{children:ReactNode,userCart:CartResponse | undefined,}){
 

  const [numberOfCartItems, setnumberOfCartItems] = useState(()=>{

    return userCart === undefined ? 0 : (userCart as CartResponse).products.length
    
  })


  function updateNumberOfCartItems(num:number){
    setnumberOfCartItems(num)
  }



  return (
 <>

<CartContext.Provider value={{numberOfCartItems,updateNumberOfCartItems}}>
  {children}
</CartContext.Provider>
 
 
 </>
  )

}



export function useCart(){

  const res= useContext(CartContext)

  if(!res){
    return new  Error ("can't use context out of countext")
    
  }

 return res
}