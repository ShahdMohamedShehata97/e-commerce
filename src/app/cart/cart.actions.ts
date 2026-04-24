'use server'

import { revalidatePath } from "next/cache"
import { decodeAuthenticatedUserToken } from "../utils"

// import { fi } from "zod/v4/locales"
// import { decodeAuthenticatedUserToken } from "../utils"

// export async function addProductToCar(id:string){


//     const bodyObj={productId:id}
//     const userToken= await decodeAuthenticatedUserToken()

//     if(userToken){

//           try {

//     const res = await fetch('https://ecommerce.routemisr.com/api/v2/cart',{
//             method:"post",
//             headers:{token:userToken,'content-type':'application/json'},
//             body:JSON.stringify(bodyObj)
//         })

//        if(res)
//        {
//          const finalRes= await res.json()

//         console.log('addToCarttttt',finalRes)

//         return finalRes.numOfCartItems
//        }

//        else{

//         return false

//        }
        
//     } catch (error) {

//         console.log(error)
        
//     }

//     }


//     else{
//         return new Error('Session ended')
//     }

  

// }



// export async function addProductToCart(id:string){

//     const bodyObj={productId:id}

//     const userToken= await decodeAuthenticatedUserToken()

//    if(userToken){
//      try{


//     const res=  await fetch(`https://ecommerce.routemisr.com/api/v2/cart`,{
//             method:'post',
//             headers:{token:userToken,'content-type':'application/json'},
//             body:JSON.stringify(bodyObj)

//         })


//       if(res.ok){
//           const finalRes=await res.json()

//         console.log('addd to cart',finalRes)

//         return finalRes.numOfCartItems
//       }

//       else{
//         return false
//       }


//     }

//     catch(error){

//         console.log('error',error)

//     }
//    }

//    else{
//     return new Error('Session endded')
//    }
   


    
// }


export async function addProductToCart(id: string) {
  const bodyObj = { productId: id }

  const userToken = await decodeAuthenticatedUserToken()

  if (!userToken) {
    return { error: true, message: 'Session ended' }
  }

  try {
    const res = await fetch(`https://ecommerce.routemisr.com/api/v2/cart`, {
      method: 'POST',
      headers: {
        token: userToken,
        'content-type': 'application/json'
      },
      body: JSON.stringify(bodyObj)
    })

    const data = await res.json()

    if (res.ok) {
      return data.numOfCartItems
      
    } else {
      return  data.message || 'Failed'
    }

  } catch (error) {
    console.log('error', error)

    return {
      error: true,
      message: 'Something went wrong'
    }
  }
}


export async function deleteElementFromCart(producId:string){

    const userToken=await decodeAuthenticatedUserToken()
   if(userToken){
     try{


        const res= await fetch(`https://ecommerce.routemisr.com/api/v2/cart/${producId}`,{
            method:'delete',
            headers:{token:userToken}
        })

        if(res.ok){

            const finalRes= await res.json()

            console.log('remove from cart',finalRes)
            
            revalidatePath('/cart')

            return finalRes.numOfCartItems

        }

        else {
            return null
        }

    }
    catch(error)
    {
 
        console.log(error)
    }
   }

   else{
    return new Error('Session Ended')
   }

}











export async function updateProductCount(producId:string,newCount:number){

    const userToken=await decodeAuthenticatedUserToken()
   if(userToken){
     try{


        const res= await fetch(`https://ecommerce.routemisr.com/api/v2/cart/${producId}`,{
            method:'put',
            headers:{token:userToken,'content-type':'application/json'},
            body:JSON.stringify({count:newCount})
        })

        if(res.ok){

            const finalRes= await res.json()

            console.log('remove from cart',finalRes)
            
            revalidatePath('/cart')

            return finalRes.numOfCartItems

        }

        else {
            return null
        }

    }
    catch(error)
    {
 
        console.log(error)
    }
   }

   else{
    return new Error('Session Ended')
   }

}