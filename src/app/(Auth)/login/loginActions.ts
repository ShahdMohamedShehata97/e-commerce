'use server'

import { cookies } from "next/headers"
import { loginObjectType } from "./loginObjectType"
import { useCart } from "@/app/_context/CartContext"
import { getUserCart } from "@/api/services/route.services"

export async function LoginAction(data:loginObjectType){
      try {

     const res= await fetch('https://ecommerce.routemisr.com/api/v1/auth/signin',{
            method:'post',
            body:JSON.stringify(data),
            headers:{'content-type':'application/json'}

            

        })
        const finalRes= await res.json()
        console.log(finalRes)
        // return res.ok

        if(res.ok){
          const cookie= await cookies()

          cookie.set('tkn',finalRes.token,{
            httpOnly:true,
            maxAge:60*60*24,
            sameSite:"lax"
          })

          return true
        }

        else
        {
            return 
        }

        

    } catch (error) {
        console.log(error)
        
    }
}


export async function getCurrentLoggedInUserCart(){
    
    return getUserCart()
}