// 'use client'

// import { CartContextType, userCart } from "@/app/_context/CartContext";
// import { addProductToCart } from "@/app/cart/cart.actions";
// import { MouseEvent } from "react";
// import { toast } from "sonner";


// interface AddToCartBuutinProps{
//     className:string
//     id:string
// }

// export default function AddToCartButton({id,className}:AddToCartBuutinProps) {
 

//   // const {upadateNumberOfCart}=(userCart() as CartContextType)



//    async function handleAddToCartButtom(e:MouseEvent){
//       e.preventDefault();
      
//   const newItemsCount= await addProductToCart(id)
//     if(newItemsCount){

//       toast.success('product added Successfully',{position:'top-right',duration:3000})

//       // upadateNumberOfCart(newItemsCount)

      

//     }

//     else{
//        toast.error('Adding product failed',{position:'top-right',duration:3000})

//     }


//      }
//   return (
//     <button onClick={handleAddToCartButtom} className="bg-[#16A34A] w-10 rounded-full h-10 text-white text-2xl font-semibold">
//                 +
//  </button>
//   )
// }



'use client'

import { CartContextType, useCart } from "@/app/_context/CartContext";
import { addProductToCart } from "@/app/cart/cart.actions";
// import { revalidateTag } from "next/cache";
import { MouseEvent, useTransition } from "react";
import { toast } from "sonner";

interface AddToCartBuutinProps{
    className:string
    id:string
}

export default function AddToCartButton({id,className}:AddToCartBuutinProps) {

  const [isPending, startTransition] = useTransition()

  const {updateNumberOfCartItems}=(useCart() as CartContextType )

  function handleAddToCartButtom(e:MouseEvent){
    e.preventDefault();

    startTransition(async () => {
      const newItemsCount = await addProductToCart(id)

      if(newItemsCount){

        toast.success('product added Successfully',{position:'top-right',duration:3000})
        updateNumberOfCartItems(newItemsCount)

       
          


      } else {
        toast.error('Adding product failed')
      }
    })
  }

  return (
    <button
      onClick={handleAddToCartButtom}
      disabled={isPending}
      className="bg-[#16A34A] w-10 h-10 rounded-full text-white text-2xl font-semibold flex items-center justify-center disabled:opacity-50"
    >
      {isPending ? (
        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
      ) : (
        "+"
      )}
    </button>
  )
}
