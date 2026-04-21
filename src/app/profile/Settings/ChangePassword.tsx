
'use client'

import React, { useState } from 'react'
import { HiLockClosed, HiEye, HiEyeOff } from 'react-icons/hi'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'sonner'
import { ChangePasswordType } from './profileType'
import { ChanfePasswordSchema } from './profileSchema'
import { changePassword } from './settings.actions'
import { useRouter } from 'next/navigation'





export default function ChangePasswordForm() {

  const [showCurrent, setShowCurrent] = useState(false)
  const [showNew, setShowNew] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)

  const { control, handleSubmit, reset } = useForm<ChangePasswordType>({
    resolver: zodResolver(ChanfePasswordSchema),
    defaultValues: {
      currentPassword: '',
      password: '',
      rePassword: ''
    }
  })

  const router = useRouter()

  async function onSubmit(data:ChangePasswordType) {
    // console.log("DATA 🔥", data)

    // هنا تضربي API
    // const res = await changePassword(data)

    const res = await changePassword(data)

    if(res){
      toast.success("Password changed successfully",{position:'top-right',duration:3000})
      reset()
      router.refresh()
    }

    else{
       toast.error("Changing password failed",{position:'top-right',duration:3000})
    }

    
    
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-5 mx-auto bg-white border border-gray-100 rounded-[2rem] shadow-sm p-8"
    >

      {/* HEADER */}
      <div className="flex items-center gap-4 mb-8">
        <div className="p-3 bg-orange-50 rounded-xl">
          <HiLockClosed className="text-orange-500 text-2xl" />
        </div>
        <div>
          <h2 className="text-[#0f172a] font-bold text-lg">
            Change Password
          </h2>
          <p className="text-slate-400 text-sm">
            Update your account password
          </p>
        </div>
      </div>

      <div className="space-y-6">

        {/* CURRENT PASSWORD */}
        <Controller
          name="currentPassword"
          control={control}
          render={({ field, fieldState }) => (
            <div className="space-y-2">
              <label className="text-slate-600 text-sm font-medium">
                Current Password
              </label>

              <div className="relative">
                <input
                  {...field}
                  type={showCurrent ? "text" : "password"}
                  placeholder="Enter your current password"
                  className="w-full p-3 pr-12 border border-gray-200 rounded-xl"
                />

                <button
                  type="button"
                  onClick={() => setShowCurrent(!showCurrent)}
                  className="absolute right-4 top-1/2 -translate-y-1/2"
                >
                  {showCurrent ? <HiEyeOff size={20} /> : <HiEye size={20} />}
                </button>
              </div>

              {fieldState.error && (
                <p className="text-red-500 text-sm">
                  {fieldState.error.message}
                </p>
              )}
            </div>
          )}
        />

        {/* NEW PASSWORD */}
        <Controller
          name="password"
          control={control}
          render={({ field, fieldState }) => (
            <div className="space-y-2">
              <label className="text-slate-600 text-sm font-medium">
                New Password
              </label>

              <div className="relative">
                <input
                  {...field}
                  type={showNew ? "text" : "password"}
                  placeholder="Enter your new password"
                  className="w-full p-3 pr-12 border border-gray-200 rounded-xl"
                />

                <button
                  type="button"
                  onClick={() => setShowNew(!showNew)}
                  className="absolute right-4 top-1/2 -translate-y-1/2"
                >
                  {showNew ? <HiEyeOff size={20} /> : <HiEye size={20} />}
                </button>
              </div>

              {fieldState.error && (
                <p className="text-red-500 text-sm">
                  {fieldState.error.message}
                </p>
              )}
            </div>
          )}
        />

        {/* CONFIRM PASSWORD */}
        <Controller
          name="rePassword"
          control={control}
          render={({ field, fieldState }) => (
            <div className="space-y-2">
              <label className="text-slate-600 text-sm font-medium">
                Confirm New Password
              </label>

              <div className="relative">
                <input
                  {...field}
                  type={showConfirm ? "text" : "password"}
                  placeholder="Confirm your new password"
                  className="w-full p-3 pr-12 border border-gray-200 rounded-xl"
                />

                <button
                  type="button"
                  onClick={() => setShowConfirm(!showConfirm)}
                  className="absolute right-4 top-1/2 -translate-y-1/2"
                >
                  {showConfirm ? <HiEyeOff size={20} /> : <HiEye size={20} />}
                </button>
              </div>

              {fieldState.error && (
                <p className="text-red-500 text-sm">
                  {fieldState.error.message}
                </p>
              )}
            </div>
          )}
        />

      </div>

      {/* SUBMIT */}
      <button
        type="submit"
        className="mt-10 flex items-center gap-2 bg-[#ea580c] hover:bg-[#d44d0b] text-white px-6 py-2.5 rounded-xl"
      >
        <HiLockClosed className="text-lg" />
        Change Password
      </button>

    </form>
  )
}