'use client'






import { Field, FieldError, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
// {
//     "name": "Ahmed Abd Al-Muti",
//     "email":"ahmedmuttii4012@gmail.com",
//     "password":"Ahmed@123",
//     "rePassword":"Ahmed@123",
//     "phone":"01010700701"
// }


import React from 'react'
import { Controller, useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { MdPersonAddAlt1 } from 'react-icons/md'
import Link from 'next/link'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { loginSchema } from './login.schema'
import { loginObjectType } from './loginObjectType'
import { getCurrentLoggedInUserCart, LoginAction} from './loginActions'
import { toast } from "sonner"
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'
import { CartContextType, useCart } from '@/app/_context/CartContext'
// import { registerSchema } from './register.schema.ts'
 



export default function LoginForm() {
  const {handleSubmit,control}  = useForm({
    defaultValues:{
      
        email:'',
        password:'',
      
    },

    resolver:zodResolver(loginSchema)
  })
   
   const router=useRouter()
    const {updateNumberOfCartItems}= (useCart() as CartContextType)  



 async function  mySubmit(data:loginObjectType){


  const res= await signIn('credentials',{redirect:false,...data})

     if(res?.ok){

      toast.success('logged in successfully ',{duration:3000,position:'top-right'})
       
      
     const cartNum = await getCurrentLoggedInUserCart()
      
    

     updateNumberOfCartItems(cartNum?.products.length || 0)

      
        router.push('/')  
    
    }

    else{
      
      toast.error('Invalid email or password',{duration:3000,position:'top-right'})
    }




  }

  return (
    <div >

        <form className='w-full'  onSubmit={handleSubmit(mySubmit)}>

     
             <Controller
              name="email"
              control={ control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="email" className='mt-7 text-[16px] font-medium '>
                    Email*
                  </FieldLabel>
                  <Input
                    {...field}
                    id="email"
                    aria-invalid={fieldState.invalid}
                    placeholder="Enter your email..."
                    autoComplete="off"
                    type='email'
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />


             <Controller
              name="password"
              control={ control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="password" className='mt-7 text-[16px] font-medium '>
                    password*
                  </FieldLabel>
                  <Input
                    {...field}
                    id="password"
                    aria-invalid={fieldState.invalid}
                    placeholder="Enter your password"
                    autoComplete="off"
                    type='password'
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />



          

            <div className='mt-7'>
                <Button className='w-full bg-[#16A34A] text-[16px] font-semibold flex items-center  '>
                   
                    Sign In</Button>
            </div>
        
 
        </form>

        <p className='text-[16px] font-medium text-[#364153] text-center mt-12'>New to FreshCart?? <Link  href={'/register'} className='text-[#16A34A]'>Create an account</Link></p>

    </div>
  )
}
