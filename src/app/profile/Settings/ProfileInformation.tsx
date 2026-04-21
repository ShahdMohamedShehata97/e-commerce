// 'use client'
// import { useSession } from 'next-auth/react';
// import React from 'react';
// import { HiUser, HiSave } from 'react-icons/hi';

// export function ProfileInformation ()  {

//      const session =useSession()
//         const userName= session.data?.user?.name
//         const isAuthenticated= session.status === 'authenticated'
        

//   return (
//     <div className=" mx-auto bg-white border border-gray-100 rounded-[2rem] shadow-sm overflow-hidden">
      
//       {/* القسم العلوي: النموذج */}
//       <div className="p-8">
//         {/* الهيدر */}
//         <div className="flex items-center gap-4 mb-8">
//           <div className="p-3 bg-green-50 rounded-xl">
//             <HiUser className="text-green-600 text-2xl" />
//           </div>
//           <div>
//             <h2 className="text-[#0f172a] font-bold text-lg leading-tight">Profile Information</h2>
//             <p className="text-slate-400 text-sm">Update your personal details</p>
//           </div>
//         </div>

//         {/* الحقول */}
//         <div className="space-y-5">
//           <div className="space-y-2">
//             <label className="text-slate-600 text-sm font-medium">Full Name</label>
//             <input 
//               type="text" 
//               placeholder={``} 
//               className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all placeholder:text-slate-700"
//             />
//           </div>

//           <div className="space-y-2">
//             <label className="text-slate-600 text-sm font-medium">Email Address</label>
//             <input 
//               type="email" 
//               placeholder="Enter your email" 
//               className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all"
//             />
//           </div>

//           <div className="space-y-2">
//             <label className="text-slate-600 text-sm font-medium">Phone Number</label>
//             <input 
//               type="text" 
//               placeholder="01xxxxxxxxx" 
//               className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all"
//             />
//           </div>
//         </div>

//         {/* زر الحفظ */}
//         <button className="mt-8 flex items-center gap-2 bg-[#10a345] hover:bg-[#0e8f3c] text-white px-6 py-2.5 rounded-xl font-medium transition-all shadow-lg shadow-green-100">
//           <HiSave className="text-lg" />
//           <span>Save Changes</span>
//         </button>
//       </div>

//       {/* القسم السفلي: معلومات الحساب */}
//       <div className="bg-slate-50/50 p-8 border-t border-gray-100">
//         <h3 className="text-[#0f172a] font-bold mb-6">Account Information</h3>
        
//         <div className="space-y-4">
//           <div className="flex justify-between items-center">
//             <span className="text-slate-500 text-sm font-medium">User ID</span>
//             <span className="text-slate-400 text-sm italic">--</span>
//           </div>
          
//           <div className="flex justify-between items-center">
//             <span className="text-slate-500 text-sm font-medium">Role</span>
//             <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-lg uppercase tracking-wider">
//               User
//             </span>
//           </div>
//         </div>
//       </div>

//     </div>
//   );
// };


'use client'

import React from 'react'
import { useSession } from 'next-auth/react'
import { HiUser, HiSave } from 'react-icons/hi'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { toast } from 'sonner'
import { ProfileType } from './profileType'
import { profileSchema } from './profileSchema'
import { updateUserData } from './settings.actions'
import { useRouter } from 'next/navigation'





export function ProfileInformation() {

   const session =useSession()
    const userName= session.data?.user?.name
    const isAuthenticated= session.status === 'authenticated'
    const id = session.data?.user?.id 

    console.log(' use id',id)
    

  const { control, handleSubmit } = useForm<ProfileType>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      name: session.data?.user?.name ||'' ,
      email: "",
      phone: ""
    }
  })

  const router = useRouter()
  const {update} = useSession()
  
async  function onSubmit(data: ProfileType) {
    // toast.success("Profile updated successfully")
    const res = await updateUserData(data)
    if(res){
        await update({name: data.name})
        
        console.log('updated user',data)
         
                toast.success('Profile updated successfully', {
                  duration: 3000,
                  position: 'top-right'
                 
                })

                router.refresh()

    }
    else{
          toast.error('Updating Profile failed', {
                  duration: 3000,
                  position: 'top-right'
                 
                })
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mx-auto bg-white border border-gray-100 rounded-[2rem] shadow-sm overflow-hidden">

      <div className="p-8">

        {/* header */}
        <div className="flex items-center gap-4 mb-8">
          <div className="p-3 bg-green-50 rounded-xl">
            <HiUser className="text-green-600 text-2xl" />
          </div>
          <div>
            <h2 className="text-[#0f172a] font-bold text-lg">Profile Information</h2>
            <p className="text-slate-400 text-sm">Update your personal details</p>
          </div>
        </div>

        {/* NAME */}
        <Controller
          name="name"
          control={control}
          render={({ field, fieldState }) => (
            <div className="space-y-2 mb-5">
              <label className="text-slate-600 text-sm">Full Name</label>
              <input
                {...field}
                className="w-full p-3 border rounded-xl"
                placeholder="Enter your name"
              />
              {fieldState.error && (
                <p className="text-red-500 text-sm">
                  {fieldState.error.message}
                </p>
              )}
            </div>
          )}
        />

        {/* EMAIL */}
        <Controller
          name="email"
          control={control}
          render={({ field, fieldState }) => (
            <div className="space-y-2 mb-5">
              <label className="text-slate-600 text-sm">Email Address</label>
              <input
                {...field}
                type="email"
                className="w-full p-3 border rounded-xl"
                placeholder="Enter your email"
              />
              {fieldState.error && (
                <p className="text-red-500 text-sm">
                  {fieldState.error.message}
                </p>
              )}
            </div>
          )}
        />

        {/* PHONE */}
        <Controller
          name="phone"
          control={control}
          render={({ field, fieldState }) => (
            <div className="space-y-2 mb-5">
              <label className="text-slate-600 text-sm">Phone Number</label>
              <input
                {...field}
                className="w-full p-3 border rounded-xl"
                placeholder="01xxxxxxxxx"
              />
              {fieldState.error && (
                <p className="text-red-500 text-sm">
                  {fieldState.error.message}
                </p>
              )}
            </div>
          )}
        />

        {/* زرار */}
        <button
          type="submit"
          className="mt-8 flex items-center gap-2 bg-[#10a345] text-white px-6 py-2.5 rounded-xl"
        >
          <HiSave />
          Save Changes
        </button>

      </div>

      {/* bottom section */}
      <div className="bg-slate-50/50 p-8 border-t border-gray-100">
        <h3 className="font-bold mb-4">Account Information</h3>

        <div className="flex justify-between">
          <span>User ID</span>
          <span>{id}</span>
        </div>

        <div className="flex justify-between mt-3">
          <span>Role</span>
          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-lg text-xs">
            User
          </span>
        </div>
      </div>

    </form>
  )
}