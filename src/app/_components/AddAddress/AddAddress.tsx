// // 'use client'
// // import { Button } from "@/components/ui/button"
// // import {
// //   Dialog,
// //   DialogClose,
// //   DialogContent,
// //   DialogDescription,
// //   DialogFooter,
// //   DialogHeader,
// //   DialogTitle,
// //   DialogTrigger,
// // } from "@/components/ui/dialog"
// // import { Field, FieldGroup } from "@/components/ui/field"
// // import { Input } from "@/components/ui/input"
// // import { Label } from "@/components/ui/label"
// // import { FaPlus } from "react-icons/fa6"
// // import { Textarea } from "@/components/ui/textarea"
// // import * as zod from 'zod'
// // import { Controller, useForm } from "react-hook-form"
// // import { zodResolver } from "@hookform/resolvers/zod"
// // import { addressObjectType } from "@/app/profile/MyAddress/address.type"
// // import { addressSchema } from "@/app/profile/MyAddress/address.schema"
// // import { addAddress } from "@/app/profile/MyAddress/address.actions"
// // import { toast } from "sonner"



// // export function AddAddress() {


// //   const { control, handleSubmit } = useForm<addressObjectType>({
// //   resolver: zodResolver(addressSchema),
// //   defaultValues: {
// //     name: '',
// //     details: '',
// //     phone: '',
// //     city: ''
// //   }
// // })
  
  

// //  async function mySubmit(data:addressObjectType){

// //   const res =await addAddress(data)
  
// //   if(res.ok){
// //           toast.success('Address Added successfully ',{duration:3000,position:'top-right'})
// //   }

// //   else{
// //           toast.error('Adding Address failed ',{duration:3000,position:'top-right'})
// //   }


// //   }


// //   return (
// //     <Dialog  >
// //       <form onSubmit={handleSubmit(mySubmit)}>
// //         <DialogTrigger asChild>
// //           <Button variant="outline" className='w-fit flex justify-center items-center bg-[#16A34A] text-white py-2.5! px-5 hover:bg-[#16A34A] hover:text-white'>
// //             <FaPlus />Add Address</Button>
// //         </DialogTrigger>
// //         <DialogContent className="sm:max-w-sm">
// //           <DialogHeader>
// //             <DialogTitle className="text-[20px] font-bold ">Add Address</DialogTitle>
            
// //           </DialogHeader>
// //           <FieldGroup>


// //             <Controller
// //   name="name"
// //   control={control}
// //   render={({ field, fieldState }) => (
// //     <Field data-invalid={fieldState.invalid}>
// //       <Label>Address Name</Label>
// //       <Input {...field} placeholder="e.g. Home, Office" />
// //       {fieldState.error && <p className="text-red-500">{fieldState.error.message}</p>}
// //     </Field>
// //   )}
// // />
        



// //            <Controller
// //   name="details"
// //   control={control}
// //   render={({ field, fieldState }) => (
// //     <Field data-invalid={fieldState.invalid}>
// //       <Label>Full Address</Label>
// //       <Textarea {...field} placeholder="Enter full address" />
// //       {fieldState.error && <p className="text-red-500">{fieldState.error.message}</p>}
// //     </Field>
// //   )}
// // />
// //            <FieldGroup className="flex flex-row gap-4">
// //  <Controller
// //   name="phone"
// //   control={control}
// //   render={({ field, fieldState }) => (
// //     <Field data-invalid={fieldState.invalid}>
// //       <Label>Phone</Label>
// //       <Input {...field} placeholder="01XXXXXXXXX" />
// //       {fieldState.error && <p className="text-red-500">{fieldState.error.message}</p>}
// //     </Field>
// //   )}
// // />
// // <Controller
// //   name="city"
// //   control={control}
// //   render={({ field, fieldState }) => (
// //     <Field data-invalid={fieldState.invalid}>
// //       <Label>City</Label>
// //       <Input {...field} placeholder="Cairo" />
// //       {fieldState.error && <p className="text-red-500">{fieldState.error.message}</p>}
// //     </Field>
// //   )}
// // />
// // </FieldGroup>

        


// //           </FieldGroup>
// //           <DialogFooter>
// //             <DialogClose asChild>
// //               <Button variant="outline" className="w-1/2">Cancel</Button>
// //             </DialogClose>
// //             <Button type="submit" className="w-1/2 txet-[16px] font-semibold bg-[#16A34A] py-3 " >Add Address</Button>
// //           </DialogFooter>
// //         </DialogContent>
// //       </form>
// //     </Dialog>
// //   )
// // }



// 'use client'

// import { Button } from "@/components/ui/button"
// import {
//   Dialog,
//   DialogClose,
//   DialogContent,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog"
// import { Field, FieldGroup } from "@/components/ui/field"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { FaPlus } from "react-icons/fa6"
// import { Textarea } from "@/components/ui/textarea"
// import { Controller, useForm } from "react-hook-form"
// import { zodResolver } from "@hookform/resolvers/zod"
// import { addressObjectType } from "@/app/profile/MyAddress/address.type"
// import { addressSchema } from "@/app/profile/MyAddress/address.schema"
// import { addAddress } from "@/app/profile/MyAddress/address.actions"
// import { toast } from "sonner"
// import { useState } from "react"

// export function AddAddress() {

//   const [open, setOpen] = useState(false)

//   const { control, handleSubmit, reset } = useForm<addressObjectType>({
//     resolver: zodResolver(addressSchema),
//     defaultValues: {
//       name: '',
//       details: '',
//       phone: '',
//       city: ''
//     }
//   })

//   async function mySubmit(data: addressObjectType) {
//     console.log("SUBMIT 🔥", data)

//     const res = await addAddress(data)

//     if (res.ok) {
//       toast.success('Address Added successfully', {
//         duration: 3000,
//         position: 'top-right'
//       })

//       reset()        // يفضي الفورم
//       setOpen(false) // يقفل الـ dialog
//     } else {
//       toast.error('Adding Address failed', {
//         duration: 3000,
//         position: 'top-right'
//       })
//     }
//   }

//   return (
//     <Dialog open={open} onOpenChange={setOpen}>

//       {/* 🔹 زرار الفتح */}
//       <DialogTrigger asChild>
//          <Button variant="outline" className='w-fit flex justify-center items-center bg-[#16A34A] text-white py-2.5! px-5 hover:bg-[#16A34A] hover:text-white'>Add Address</Button>
//       </DialogTrigger>

//       {/* 🔹 الفورم جوه الـ Dialog */}
//       <DialogContent className="sm:max-w-sm">
//         <DialogHeader>
//           <DialogTitle className="text-[20px] font-bold">
//             Add Address
//           </DialogTitle>
//         </DialogHeader>

//         <form onSubmit={handleSubmit(mySubmit)}>
//           <FieldGroup>

//             {/* 🔹 Name */}
//             <Controller
//               name="name"
//               control={control}
//               render={({ field, fieldState }) => (
//                 <Field data-invalid={fieldState.invalid}>
//                   <Label>Address Name</Label>
//                   <Input {...field} placeholder="e.g. Home, Office" />
//                   {fieldState.error && (
//                     <p className="text-red-500 text-sm">
//                       {fieldState.error.message}
//                     </p>
//                   )}
//                 </Field>
//               )}
//             />

//             {/* 🔹 Details */}
//             <Controller
//               name="details"
//               control={control}
//               render={({ field, fieldState }) => (
//                 <Field data-invalid={fieldState.invalid}>
//                   <Label>Full Address</Label>
//                   <Textarea {...field} placeholder="Enter full address" />
//                   {fieldState.error && (
//                     <p className="text-red-500 text-sm">
//                       {fieldState.error.message}
//                     </p>
//                   )}
//                 </Field>
//               )}
//             />

//             {/* 🔹 Phone + City */}
//             <FieldGroup className="flex gap-4">

//               <Controller
//                 name="phone"
//                 control={control}
//                 render={({ field, fieldState }) => (
//                   <Field className="flex-1" data-invalid={fieldState.invalid}>
//                     <Label>Phone</Label>
//                     <Input {...field} placeholder="01XXXXXXXXX" />
//                     {fieldState.error && (
//                       <p className="text-red-500 text-sm">
//                         {fieldState.error.message}
//                       </p>
//                     )}
//                   </Field>
//                 )}
//               />

//               <Controller
//                 name="city"
//                 control={control}
//                 render={({ field, fieldState }) => (
//                   <Field className="flex-1" data-invalid={fieldState.invalid}>
//                     <Label>City</Label>
//                     <Input {...field} placeholder="Cairo" />
//                     {fieldState.error && (
//                       <p className="text-red-500 text-sm">
//                         {fieldState.error.message}
//                       </p>
//                     )}
//                   </Field>
//                 )}
//               />

//             </FieldGroup>

//           </FieldGroup>

//           <DialogFooter className="mt-4">
//             <DialogClose asChild>
//               <Button variant="outline" className="w-1/2">
//                 Cancel
//               </Button>
//             </DialogClose>

//            <DialogClose asChild>
//   <Button
//     type="submit"
//     className="w-1/2 bg-[#16A34A] py-3 font-semibold"
//   >
//     Add Address
//   </Button>
// </DialogClose>
//           </DialogFooter>
//         </form>
//       </DialogContent>
//     </Dialog>
//   )
// }



'use client'

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Field, FieldGroup } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Controller, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { addressObjectType } from "@/app/profile/MyAddress/address.type"
import { addressSchema } from "@/app/profile/MyAddress/address.schema"
import { addAddress } from "@/app/profile/MyAddress/address.actions"
import { toast } from "sonner"
import { useState } from "react"
// import { useRouter } from "next/router"
import { useRouter } from "next/navigation"

export function AddAddress() {

  const [open, setOpen] = useState(false)

  const { control, handleSubmit, reset } = useForm<addressObjectType>({
    resolver: zodResolver(addressSchema),
    defaultValues: {
      name: '',
      details: '',
      phone: '',
      city: ''
    }
  })
 
  const router = useRouter()
  async function mySubmit(data: addressObjectType) {
   
      const res = await addAddress(data)
    

     
      if (res?.ok || res?.success || res) {
        toast.success('Address Added successfully', {
          duration: 3000,
          position: 'top-right'
         
        })
        router.refresh()

        reset()
        setOpen(false) // ✅ يقفل بعد الرد
      } else {
        toast.error('Adding Address failed', {
          duration: 3000,
          position: 'top-right'
        })
      }

    // } catch (error) {
    //   console.error(error)
    //   toast.error('Something went wrong', {
    //     duration: 3000,
    //     position: 'top-right'
    //   })
    // }
  }

  return (
    <Dialog
      open={open}
      onOpenChange={(val) => {
        setOpen(val)
        if (!val) reset() // يفضي الفورم لما يتقفل
      }}
    >

      {/* زرار الفتح */}
      <DialogTrigger asChild>
        <Button className='bg-[#16A34A] text-white px-5 py-2.5'>
          Add Address
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-sm">
        <DialogHeader>
          <DialogTitle>Add Address</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit(mySubmit)}>
          <FieldGroup>

            {/* Name */}
            <Controller
              name="name"
              control={control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <Label>Address Name</Label>
                  <Input {...field} placeholder="Home, Office..." />
                  {fieldState.error && (
                    <p className="text-red-500 text-sm">
                      {fieldState.error.message}
                    </p>
                  )}
                </Field>
              )}
            />

            {/* Details */}
            <Controller
              name="details"
              control={control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <Label>Full Address</Label>
                  <Textarea {...field} placeholder="Full address..." />
                  {fieldState.error && (
                    <p className="text-red-500 text-sm">
                      {fieldState.error.message}
                    </p>
                  )}
                </Field>
              )}
            />

            {/* Phone + City */}
            <FieldGroup className="flex gap-4">

              <Controller
                name="phone"
                control={control}
                render={({ field, fieldState }) => (
                  <Field className="flex-1" data-invalid={fieldState.invalid}>
                    <Label>Phone</Label>
                    <Input {...field} placeholder="01XXXXXXXXX" />
                    {fieldState.error && (
                      <p className="text-red-500 text-sm">
                        {fieldState.error.message}
                      </p>
                    )}
                  </Field>
                )}
              />

              <Controller
                name="city"
                control={control}
                render={({ field, fieldState }) => (
                  <Field className="flex-1" data-invalid={fieldState.invalid}>
                    <Label>City</Label>
                    <Input {...field} placeholder="Cairo" />
                    {fieldState.error && (
                      <p className="text-red-500 text-sm">
                        {fieldState.error.message}
                      </p>
                    )}
                  </Field>
                )}
              />

            </FieldGroup>

          </FieldGroup>

          <DialogFooter className="mt-4">
            <DialogClose asChild>
              <Button variant="outline" className="w-1/2">
                Cancel
              </Button>
            </DialogClose>

            <Button
              type="submit"
              className="w-1/2 bg-[#16A34A] text-white"
            >
              Add Address
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}