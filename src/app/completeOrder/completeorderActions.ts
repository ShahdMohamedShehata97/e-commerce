'use server'

import { AddressType } from "@/api/types"
import { decodeAuthenticatedUserToken } from "../utils"


export async function getSpecificAddress(id: string):Promise<AddressType | null > {

  const userToken = await decodeAuthenticatedUserToken()

  if (!userToken) return null

  try {
    const res = await fetch(
      `https://ecommerce.routemisr.com/api/v1/addresses/${id}`,
      {
        headers: {
          token: userToken // أو Authorization حسب الـ API
        }
      }
    )

    if (!res.ok) {
      return null
    }

    const finalRes = await res.json()

    console.log('specific address:', finalRes)

    return finalRes.data

  } catch (error) {
    console.error("API error:", error)
    return null
  }
}

export async function completeOrder(id:string,address:AddressType){

    const objectBody = {
    "shippingAddress":{
        "details": address?.details,
        "phone": address?.phone,
        "city": address?.city,
        "postalCode": address?.postalCode
        }

  }

  const userToken= await decodeAuthenticatedUserToken()

  if(userToken){
    try{

      const res = await fetch(`https://ecommerce.routemisr.com/api/v2/orders/${id}`,{
        method:'post',
        headers:{token:userToken,'content-type':'application/json'},
        body:JSON.stringify(objectBody)
      })

      if(res.ok){
        const finalRes = await res.json()

        console.log('final order',finalRes)

        return finalRes.data
      }

    }
    catch(error){
      console.log(error)
    }
  }
}


// export async function completeVisaOrder(id:string,address:AddressType){

//     const objectBody = {
//     "shippingAddress":{
//         "details": address?.details,
//         "phone": address?.phone,
//         "city": address?.city,
       
//         }

//   }

//   const userToken= await decodeAuthenticatedUserToken()

//   if(userToken){
//     try{

//       const res = await fetch(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${id}?url=http://localhost:3000`,{
//         method:'post',
//         headers:{token:userToken,'content-type':'application/json'},
//         body:JSON.stringify(objectBody)
//       })

//       if(res.ok){
//         const finalRes = await res.json()

//         console.log('final order',finalRes)

//         return finalRes.data
//       }

//     }
//     catch(error){
//       console.log(error)
//     }
//   }
// }

export async function completeVisaOrder(id: string, address: AddressType) {

  const objectBody = {
    shippingAddress: {
      details: address?.details,
      phone: address?.phone,
      city: address?.city,
    }
  }

  const userToken = await decodeAuthenticatedUserToken()

  if (!userToken) {
    console.log('no token')
    return null
  }

  try {
    const res = await fetch(
      `https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${id}?url=http://localhost:3000`,
      {
        method: 'post',
        headers: {
          token: userToken,
          'content-type': 'application/json'
        },
        body: JSON.stringify(objectBody)
      }
    )

    const finalRes = await res.json()
    console.log('API response:', finalRes)

    if (!res.ok) {
      console.log('error from API')
      return null
    }

    return finalRes

  } catch (error) {
    console.log('fetch error:', error)
    return null
  }
}