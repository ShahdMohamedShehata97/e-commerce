'use client'

import { MdOutlineLock } from 'react-icons/md'
import { AddressContextType, useAddress } from './addressContext'
import { completeOrder } from './completeorderActions'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'

export default function OrderSummaryButton({cartId}:{cartId:string}){


  const {address} = (useAddress() as AddressContextType)

  console.log('summerrrr addres',address)
  const session = useSession()
  
  const router = useRouter()
  const userId= session.data?.user?.id


 async function handleOrder(){

    if(address){
      const res = await completeOrder(cartId,address)


      if(res){

        router.replace(`/myOrders/${userId}`)

      console.log('completttttted')
      }
    }

    else{
      console.log('bbbaazzztt')
    }
    // if(res){

    //   router.

    // }




  }


  return (

       <button onClick={handleOrder} className="w-full mt-6 bg-[#1f9d4f] text-white py-4 rounded-xl font-bold text-md flex items-center justify-center gap-2 shadow-lg shadow-green-100 hover:bg-[#188040] transition-all active:scale-95">
                <MdOutlineLock size={18} />
                Place Order
       </button>
    
    
  )
}