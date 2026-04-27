


'use client'

import { useContext, useState } from 'react'
import { MdLocationOn } from 'react-icons/md'
import { Phone, Building2 } from 'lucide-react'
import { AddressType } from '@/api/types'
import { getSpecificAddress } from './completeorderActions'
import {  AddressContextType, useAddress } from './addressContext'

export default function AddressSelector({ addresses }: { addresses: AddressType[] }) {


  const [selectedAddressId, setSelectedAddressId] = useState<string | null>(null)

   const {updateAddress} = (useAddress() as AddressContextType)



 async function handleAddress(id:string){
    setSelectedAddressId(id)
    const res = await getSpecificAddress(id)

    if(res){
        updateAddress(res)
    }


  }

  


  return (
    <div className="space-y-4">

      {addresses?.map((address) => {
        const isSelected = selectedAddressId === address._id

        return (
          <div
            key={address._id}
            onClick={() => {handleAddress(address._id)}}
            className={`border rounded-xl p-4 flex items-start gap-4 cursor-pointer transition-all
              ${isSelected
                ? "border-[#21a44a]"
                : "border-gray-200 hover:border-gray-300"}
            `}
          >

            {/* icon */}
            <div className={`w-10 h-10 flex items-center justify-center rounded-[8px]
              ${isSelected ? "bg-[#21a44a]" : "bg-[#F3F4F6]"}
            `}>
              <MdLocationOn
                size={24}
                className={isSelected ? "text-white" : "text-gray-500"}
              />
            </div>

            {/* content */}
            <div className="flex-1">
              <h3 className="font-bold text-gray-800">{address.name}</h3>
              <p className="text-gray-500 text-sm">{address.details}</p>

              <div className="flex gap-6 mt-3 text-xs text-gray-400">
                <div className="flex items-center gap-1">
                  <Phone size={14} />
                  {address.phone}
                </div>

                <div className="flex items-center gap-1">
                  <Building2 size={14} />
                  {address.city}
                </div>
              </div>
            </div>

          </div>
        )
      })}

    </div>
  )
}