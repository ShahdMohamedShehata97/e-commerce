
'use client'
import { AddressType } from '@/api/types'
import { createContext, ReactNode, useContext, useState } from 'react'


export type AddressContextType = {
  address: AddressType | null
  updateAddress: (add: AddressType) => void
}


export const AddressData = createContext<AddressContextType | null>(null)

export default function AddressContextProvider({ children }: { children: ReactNode }) {

  const [address, setAddress] = useState<AddressType | null>(null)

  function updateAddress(add: AddressType) {
    setAddress(add)
  }

  return (
    <AddressData.Provider value={{ address, updateAddress }}>
      {children}
    </AddressData.Provider>
  )
}


export function useAddress(){
     const context = useContext(AddressData)

  if (!context) {
    throw new Error("useAddress لازم يتستخدم جوه AddressProvider")
  }

  return context
}