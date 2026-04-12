'use server'

import { registerObjectType } from "./registerObjectType"

export async function RegisterAction(data:registerObjectType){
      try {

     const res= await fetch('https://ecommerce.routemisr.com/api/v1/auth/signup',{
            method:'post',
            body:JSON.stringify(data),
            headers:{'content-type':'application/json'}

            

        })
        const finalRes= await res.json()
        console.log(finalRes)
        return res.ok

        

    } catch (error) {
        console.log(error)
        
    }
}