'use client'
import React from 'react'
import { HiTrash } from 'react-icons/hi'
import { deleteAddress } from './address.actions'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

export default function DeleteAddressButton({id}:{id:string}) {

    const router = useRouter()

async  function handleDelete(){
    const res= await deleteAddress(id)
   
      if (res) {
        toast.success('Address deleted successfully', {
          duration: 3000,
          position: 'top-right'
         
        })
        router.refresh()

       
      }
    else{
         toast.error('Deleting Address failed', {
          duration: 3000,
          position: 'top-right'
         
        })
    }
  }

  return (
    <button onClick={handleDelete} className="p-2 bg-slate-50 rounded-lg text-slate-600 hover:bg-red-50 hover:text-red-500 transition-colors">
          <HiTrash size={18} />
        </button>
  )
}
