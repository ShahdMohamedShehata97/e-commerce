
// 'use client'
// import { ItemType } from '@/api/types';
// import React, { useState } from 'react'
// import { BsCheckCircleFill } from 'react-icons/bs';
// import { IoChevronDownOutline, IoChevronUpOutline } from 'react-icons/io5';

// export default function OrderDetailsButton({products}:{products:ItemType[]}) {

//  const items = [
//     { id: 1, name: "Woman Shawl", price: 349, qty: 1, img: "https://via.placeholder.com/50" },
//     { id: 2, name: "Woman Shawl", price: 149, qty: 1, img: "https://via.placeholder.com/50" },
//     { id: 3, name: "Woman Shawl", price: 149, qty: 1, img: "https://via.placeholder.com/50" },
//     { id: 4, name: "Relaxed Fit Knitted Joggers Lilac", price: 499, qty: 1, img: "https://via.placeholder.com/50" },
//   ];

//     const [isOpen, setIsOpen] = useState(false);

//   return (
//    <>
//    <button 
//                 onClick={() => setIsOpen(!isOpen)}
//                 className="flex items-center gap-2 bg-gray-50 hover:bg-gray-100 text-slate-700 px-4 py-2 rounded-xl text-sm font-medium transition-all border border-gray-100"
//               >
//                 Details
//                 {isOpen ? <IoChevronUpOutline /> : <IoChevronDownOutline />}
//               </button>
              

//                 {isOpen && (
//      <div className= "border mb-5 border-emerald-100 rounded-2xl overflow-hidden bg-white shadow-sm">

//   {/* Header */}
//   <div className="p-6 flex justify-between items-start">
//     ...
//   </div>

//   {/* 🔥 Order Items - هيظهر بعرض الكارت كله */}
//   <div className="w-full border-t border-gray-100 bg-gray-50/30 p-5">
    
//     <div className="flex items-center gap-2 mb-4 text-slate-800 font-semibold text-sm">
//       <BsCheckCircleFill className="text-green-500" />
//       Order Items
//     </div>

//     <div className="space-y-3">
//       {products?.map((item) => (
//         <div key={item.product.id} className="w-full bg-white border border-gray-100 rounded-xl p-3 flex items-center justify-between shadow-sm">
          
//           <div className="flex items-center gap-4">
//             <img 
//               src={item.product.imageCover} 
//               className="w-12 h-14 object-cover rounded-lg bg-gray-50" 
//             />
//             <div>
//               <h4 className="text-sm font-semibold text-slate-800">
//                 {item.product.title}
//               </h4>
//               <p className="text-xs text-gray-400 mt-1">
//                 {item.count} × {item.price} EGP
//               </p>
//             </div>
//           </div>

//           <div className="text-right">
//             <span className="block font-bold text-slate-900">
//               {item.price}
//             </span>
//             <span className="text-[10px] text-gray-400 uppercase">
//               EGP
//             </span>
//           </div>

//         </div>
//       ))}
//     </div>

//   </div>

// </div>
//         )}
              
//      </>
//   )
// }

'use client'
import React, { ReactNode, useState } from 'react'
import { IoChevronDownOutline, IoChevronUpOutline } from 'react-icons/io5';

export default function OrderDetailsWrapper({ children, buttonLabel = "Details" }:{children:ReactNode[],buttonLabel?:string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col w-full">
     
      <div className="p-6 flex justify-between items-start w-full">
        
        {children[0]} 

        <div className="flex flex-col items-end gap-12">
         
          {children[1]} 
          
          
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className={`flex items-center gap-2 ${isOpen ? 'bg-[#16A34A] hover:bg-[#15803D] text-white' : 'bg-[#E5E7EB]  text-[#4A5565]'} px-5 py-2 rounded-xl text-sm font-bold transition-all `}
     >
            {isOpen ? 'Hide' : buttonLabel}
            {isOpen ? <IoChevronUpOutline size={18} /> : <IoChevronDownOutline size={18} />}
          </button>
        </div>
      </div>

      {/* الجزء الذي يظهر ويختفي (Order Items) - هنا يظهر بعرض الكارت كله */}
      {isOpen && (
        <div className="w-full border-t border-gray-100 bg-gray-50/30 p-5 animate-in fade-in slide-in-from-top-2 duration-300">
          {children[2]}
        </div>
      )}
    </div>
  )
}