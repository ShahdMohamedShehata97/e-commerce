import { getLogedInUserAddres } from '@/api/services/route.services'
import { AddAddress } from '@/app/_components/AddAddress/AddAddress'
import React from 'react'
import { FaPhoneAlt } from 'react-icons/fa'
import { FaCity } from 'react-icons/fa6'
import { HiLocationMarker, HiPencil, HiPlus, HiTrash } from 'react-icons/hi'
import DeleteAddressButton from './DeleteAddressButton'

// id: '69e52ca2340d3683fce4387d',
//       name: 'Dayrout',
//       details: 'Dayrout Dayrout',
//       phone: '01277585899',
//       city: 'Assiut'
//     }

export default async  function page() {

  const existAddress= await getLogedInUserAddres()
  console.log('exist',existAddress)

  return (
    <>

      <div className='flex justify-between'>

        <div>
          <p className='text-[20px] font-bold'>My Addresses</p>
          <p className='text-[14px] font-medium text-[#6A7282] '>Manage your saved delivery addresses</p>
        </div>

        <div>
          <AddAddress/>
        </div>

       </div>
    {existAddress?.length === 0 ? <div>

      <div className="mt-5 flex flex-col items-center justify-center p-12 bg-white border border-gray-100 rounded-[2.5rem] shadow-sm w-full max-w-4xl mx-auto min-h-[350px]">
      
      {/* الدائرة الرمادية والأيقونة */}
      <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mb-6">
        <HiLocationMarker className="text-slate-400 text-3xl" />
      </div>

      {/* النصوص */}
      <div className="text-center mb-8">
        <h2 className="text-[#0f172a] text-xl font-bold mb-2">
          No Addresses Yet
        </h2>
        <p className="text-slate-500 text-base leading-relaxed max-w-sm mx-auto">
          Add your first delivery address to make checkout faster and easier.
        </p>
      </div>

      {/* زر الإضافة */}
      {/* <button className="flex items-center gap-2 bg-[#10a345] hover:bg-[#0e8f3c] text-white px-8 py-3 rounded-xl font-medium transition-all shadow-md shadow-green-100">
        <HiPlus className="text-xl" />
        <span>Add Your First Address</span>
      </button>
       */}

       <AddAddress/>
    </div>
       
     

    </div> : <div>
      
      {existAddress?.map((address)=><div key={address._id} className="flex mt-5 items-center justify-between p-4 bg-white border border-gray-100 rounded-2xl shadow-sm max-w-lg">
      <div className="flex items-start gap-4">
        {/* أيقونة الموقع الجانبية */}
        <div className="p-3 bg-green-50 rounded-xl">
          <HiLocationMarker className="text-green-600 text-xl" />
        </div>

        {/* تفاصيل العنوان */}
        <div className="space-y-1">
          <h3 className="text-[#1e293b] font-bold text-lg">{address.name}</h3>
          <p className="text-slate-500 text-sm">{address.details} </p>
          
          <div className="flex items-center gap-4 pt-2">
            <div className="flex items-center gap-2 text-slate-500 text-sm">
              <FaPhoneAlt className="text-xs" />
              <span>{address.phone} </span>
            </div>
            <div className="flex items-center gap-2 text-slate-500 text-sm">
              <FaCity className="text-xs" />
              <span>{address.city}</span>
            </div>
          </div>
        </div>
      </div>

      {/* أزرار التحكم */}
      <div className="flex gap-2">
        <button className="p-2 bg-slate-50 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors">
          <HiPencil size={18} />
        </button>
       <DeleteAddressButton id={address._id}/>
      </div>
    </div>)}
      
      </div>}
    </>
  )
}
