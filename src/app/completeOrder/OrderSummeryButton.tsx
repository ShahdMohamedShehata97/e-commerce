// 'use client'

// import { MdOutlineLock } from 'react-icons/md'
// import { AddressContextType, useAddress } from './addressContext'
// import { completeOrder } from './completeorderActions'
// import { useRouter } from 'next/navigation'
// import { useSession } from 'next-auth/react'

// import { toast } from 'sonner'

// export default function OrderSummaryButton({cartId}:{cartId:string}){


//   const {address} = (useAddress() as AddressContextType)


//   console.log('summerrrr addres',address)
//   const session = useSession()
  
//   const router = useRouter()
//   const userId= session.data?.user?.id


//  async function handleOrder(){

//     if(address){
//       const res = await completeOrder(cartId,address)


//       if(res){

//         router.replace(`/myOrders/${userId}`)

//       console.log('completttttted')

//       toast.success('order completed Successfully',{position:'top-right',duration:3000})
//       }
//     }

//     else{
//       console.log('bbbaazzztt')
//     }
  



//   }


//   return (

//        <button onClick={handleOrder} className="w-full mt-6 bg-[#1f9d4f] text-white py-4 rounded-xl font-bold text-md flex items-center justify-center gap-2 shadow-lg shadow-green-100 hover:bg-[#188040] transition-all active:scale-95">
//                 <MdOutlineLock size={18} />
//                 Place Order
//        </button>
    
    
//   )
// }


'use client'

import { MdOutlineLock } from 'react-icons/md'
import { AddressContextType, useAddress } from './addressContext'
import { completeOrder, completeVisaOrder } from './completeorderActions'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'

import { toast } from 'sonner'
import { useState } from 'react'

export default function OrderSummaryButton({cartId}:{cartId:string}){


  const {address} = (useAddress() as AddressContextType)


  console.log('summerrrr addres',address)
 
 const [selected, setSelected] = useState('cash')
  
  const router = useRouter()
  


//  async function handleOrder(){

//     if(address){
//       const res = await completeVisaOrder(cartId,address)


//       if(res){

//         // router.replace(`/myOrders/${userId}`)

//       console.log('completttttted', res)

//       toast.success('order completed Successfully',{position:'top-right',duration:3000})
//       }
//       window.open(res.session.url)
//     }

//     else{
//       console.log('bbbaazzztt')
//     }
  



//   }

async function handleOrder() {

  if (!address) {
    console.log('no address')
    return
  }

  if (selected === 'cash') {

    const res = await completeOrder(cartId, address)

    if (res) {
      toast.success('Order placed successfully')
      router.replace('/allorders')
    }


    return
  }

  if (selected === 'visa') {

    const res = await completeVisaOrder(cartId, address)

    if (res) {

       window.open(res.session.url)
        toast.success('order completed Successfully',{position:'top-right',duration:3000})
    }

    return
  }

  // console.log('please select payment method')
}


  return (

      <>
       <div className="space-y-4">

      {/* CASH */}
      <div
        onClick={() =>{setSelected('cash')}}
        className={`p-4 border rounded-xl cursor-pointer
          ${selected === 'cash' ? 'border-green-500 bg-green-50' : 'border-gray-200'}
        `}
      >
        Cash on Delivery
      </div>

      {/* ONLINE */}
      <div
        onClick={() => {setSelected('visa')}}
        className={`p-4 border rounded-xl cursor-pointer
          ${selected === 'visa' ? 'border-green-500 bg-green-50' : 'border-gray-200'}
        `}
      >
        Online Payment
      </div>

       <button onClick={handleOrder} className="w-full mt-6 bg-[#1f9d4f] text-white py-4 rounded-xl font-bold text-md flex items-center justify-center gap-2 shadow-lg shadow-green-100 hover:bg-[#188040] transition-all active:scale-95">
                <MdOutlineLock size={18} />
                {selected === 'cash' ? 'Place Order' : 'Proceed to Payment'}
       </button>

    </div>
      
      </>
    
    
  )
}