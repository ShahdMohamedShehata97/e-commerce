'use server'

import { decodeAuthenticatedUserToken } from "@/app/utils"
import { addressObjectType } from "./address.type"

export async function addAddress(data:addressObjectType){

    const userToken= await decodeAuthenticatedUserToken()
    if(userToken){
          try{
        const res =await fetch(`https://ecommerce.routemisr.com/api/v1/addresses`,{
            method:'post',
            headers:{token:userToken,'content-type':'application/json'},
            body:JSON.stringify(data)

        })


        if(res.ok){
            const finalRes=await res.json()
            console.log('add addresss',finalRes)
            return finalRes.data

        }

    }
    catch(error){

        console.log(error)

    }
    }

  
}


export async function deleteAddress(id:string){

    const userToken=await decodeAuthenticatedUserToken()

    if(userToken)
    {
        try {
            const res = await fetch(`https://ecommerce.routemisr.com/api/v1/addresses/${id}`,{
                method:'delete',
                headers:{token:userToken}
            })

             if(res.ok){
            
                        const finalRes= await res.json()
            
                        console.log('remove from cart',finalRes)
                        
                        // revalidatePath('/cart')
            
                        return finalRes.data
            
                    }
            
                    else {
                        return null
                    }

        
    } catch (error) {
        
    }
    }

}



