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
import { registerSchema } from './register.schema'
import { registerObjectType } from './registerObjectType'
import { RegisterAction } from './registerActions'
import { toast } from "sonner"
import { useRouter } from 'next/navigation'
// import { registerSchema } from './register.schema.ts'
 



export default function RegisterForm() {
  const {handleSubmit,control}  = useForm({
    defaultValues:{
        name:'',
        email:'',
        password:'',
        rePassword:'',
        phone:''
    },

    resolver:zodResolver(registerSchema)
  })
   
   const router=useRouter()



 async function  mySubmit(data:registerObjectType){
    console.log('data',data)

    const isRegisteredSuccessfully= await RegisterAction(data)
    
    if(isRegisteredSuccessfully){

      toast.success('Email created successfully ',{duration:3000,position:'top-right'})
      router.push('/login')  
    }

    else{
      
      toast.error('Email already exist ',{duration:3000,position:'top-right'})
    }
  


  }

  return (
    <div >

        <form className='w-full'  onSubmit={handleSubmit(mySubmit)}>

            



 

  <Controller 
             
              name="name"
              control={ control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="name">
                    Name*
                  </FieldLabel>
                  <Input
                    {...field}
                    id="name"
                    aria-invalid={fieldState.invalid}
                    placeholder="Ali"
                    autoComplete="off"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />



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
                    placeholder="Ali@example.com"
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
                    placeholder="create a strong password"
                    autoComplete="off"
                    type='password'
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />


             <Controller
              name="rePassword"
              control={ control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="rePassword" className='mt-7 text-[16px] font-medium '>
                  Confirm Password*
                  </FieldLabel>
                  <Input
                    {...field}
                    id="rePassword"
                    aria-invalid={fieldState.invalid}
                    placeholder="confirm your password"
                    autoComplete="off"
                    type='password'
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />


             <Controller
              name="phone"
              control={ control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="phone" className='mt-7 text-[16px] font-medium '>
                    Phone*
                  </FieldLabel>
                  <Input
                    {...field}
                    id="phone"
                    aria-invalid={fieldState.invalid}
                    placeholder="+1 234 567 8900"
                    autoComplete="off"
                    type='tel'
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <div className='mt-7'>
                <input type="checkbox" name="" id="" />
            <label htmlFor="" className='ms-4'>I agree to the Terms of Service and Privacy Policy *</label>
            <div className='mt-7'>
                <Button className='w-full bg-[#16A34A] text-[16px] font-semibold flex items-center  '>
                    <MdPersonAddAlt1 size={25} />
                    Create My Account</Button>
            </div>
            </div>
 
        </form>

        <p className='text-[16px] font-medium text-[#364153] text-center mt-12'>Already have an account? <Link  href={'/login'} className='text-[#16A34A]'>Sign In</Link></p>

    </div>
  )
}
