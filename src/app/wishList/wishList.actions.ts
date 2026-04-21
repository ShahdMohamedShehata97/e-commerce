'use server'


import { decodeAuthenticatedUserToken } from "../utils"



// export async function addTowishList(id:string){

//     const bodyObj={productId:id}

//     const userToken= await decodeAuthenticatedUserToken()

//    if(userToken){
//      try{


//     const res=  await fetch(`https://ecommerce.routemisr.com/api/v1/wishlist`,{
//             method:'post',
//             headers:{token:userToken,'content-type':'application/json'},
//             body:JSON.stringify(bodyObj)

//         })


//       if(res.ok){
//           const finalRes=await res.json()

//         console.log('addd to wishList',finalRes)

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



export async function addTowishList(id:string){

    const bodyObj={productId:id}

    const userToken= await decodeAuthenticatedUserToken()

   if(userToken){
     try{


    const res=  await fetch(`https://ecommerce.routemisr.com/api/v1/wishlist`,{
            method:'post',
            headers:{token:userToken,'content-type':'application/json'},
            body:JSON.stringify(bodyObj)

        })


      if(res.ok){
          const finalRes=await res.json()

        console.log('addd to wishList',finalRes)

        return finalRes.data.length
      }

      else{
        return false
      }


    }

    catch(error){

        console.log('error',error)

    }
   }

   else{
    return new Error('Session endded')
   }
   


    
}

 

export async function removeFromWishList(id:string){



   const userToken= await decodeAuthenticatedUserToken()
    if(userToken){
      
      try{
        
      const res = await fetch(`https://ecommerce.routemisr.com/api/v1/wishlist/${id}`,{
        method:'delete',
        headers:{token:userToken}
      }) 

      if(res.ok){
        const finalRes = await res.json()

        console.log('delete from wish list', finalRes)
        return finalRes.data.length
      }

      else{
        return null
      }

      }
      catch(error){
        console.log(error)
      }
    }



}
