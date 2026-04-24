// // // 'use client'

// // // import { useState } from 'react'
// // // import { MdLocationOn } from 'react-icons/md'
// // // import { Phone, Building2 } from 'lucide-react'
// // // import { addAddress } from '@/app/profile/MyAddress/address.actions';
// // // import { AddressType } from '@/api/types';

// // // export default function AddressSelector({ addresses }: {addresses:AddressType[]}) {

// // //   const [selectedAddressId, setSelectedAddressId] = useState<string | null>(null)

// // //   return (
// // //     <div className="space-y-4">

// // //       {addresses?.map((address: any) => {
// // //         const isSelected = selectedAddressId === address._id

// // //         return (
// // //           <label
// // //             key={address._id}
// // //             className={`relative border rounded-xl p-4 flex items-start gap-4 cursor-pointer transition-all
// // //               ${isSelected
// // //                 ? "border-[#21a44a] bg-green-50"
// // //                 : "border-gray-200 hover:border-gray-300"}
// // //             `}
// // //           >
// // //             {/* radio hidden */}
// // //             <input
// // //               type="radio"
// // //               name="address"
// // //               value={address._id}
// // //               checked={isSelected}
// // //               onChange={() => setSelectedAddressId(address._id)}
// // //               className="absolute opacity-0"
// // //             />

// // //             {/* circle */}
// // //             <div className={`w-5 h-5 rounded-full border flex items-center justify-center mt-1
// // //               ${isSelected ? "border-green-600" : "border-gray-300"}
// // //             `}>
// // //               {isSelected && (
// // //                 <div className="w-2.5 h-2.5 bg-green-600 rounded-full" />
// // //               )}
// // //             </div>

// // //             {/* icon */}
// // //             <div className="w-10 h-10 bg-[#F3F4F6] flex items-center justify-center rounded-[8px]">
// // //               <MdLocationOn className="text-gray-500" size={24} />
// // //             </div>

// // //             {/* content */}
// // //             <div className="flex-1">
// // //               <h3 className="font-bold text-gray-800">{address.name}</h3>
// // //               <p className="text-gray-500 text-sm">{address.details}</p>

// // //               <div className="flex gap-6 mt-3 text-xs text-gray-400">
// // //                 <div className="flex items-center gap-1">
// // //                   <Phone size={14} />
// // //                   {address.phone}
// // //                 </div>

// // //                 <div className="flex items-center gap-1">
// // //                   <Building2 size={14} />
// // //                   {address.city}
// // //                 </div>
// // //               </div>
// // //             </div>

// // //           </label>
// // //         )
// // //       })}

// // //     </div>
// // //   )
// // // }


// // 'use client'

// // import { useState } from 'react'
// // import { MdLocationOn } from 'react-icons/md'
// // import { Phone, Building2 } from 'lucide-react'
// // import { AddressType } from '@/api/types'

// // export default function AddressSelector({ addresses }: { addresses: AddressType[] }) {

// //   const [selectedAddressId, setSelectedAddressId] = useState<string | null>(null)

// //   return (
// //     <div className="space-y-4">

// //       {addresses?.map((address) => {
// //         const isSelected = selectedAddressId === address._id

// //         return (
// //           <div
// //             key={address._id}
// //             onClick={() => setSelectedAddressId(address._id)}
// //             className={`border rounded-xl p-4 flex items-start gap-4 cursor-pointer transition-all
// //               ${isSelected
// //                 ? "border-[#21a44a]"
// //                 : "border-gray-200 hover:border-gray-300"}
// //             `}
// //           >

// //             {/* icon */}
// //             <div className={`w-10 h-10 flex items-center justify-center rounded-[8px]
// //               ${isSelected ? "bg-[#21a44a]" : "bg-[#F3F4F6]"}
// //             `}>
// //               <MdLocationOn
// //                 size={24}
// //                 className={isSelected ? "text-white" : "text-gray-500"}
// //               />
// //             </div>

// //             {/* content */}
// //             <div className="flex-1">
// //               <h3 className="font-bold text-gray-800">{address.name}</h3>
// //               <p className="text-gray-500 text-sm">{address.details}</p>

// //               <div className="flex gap-6 mt-3 text-xs text-gray-400">
// //                 <div className="flex items-center gap-1">
// //                   <Phone size={14} />
// //                   {address.phone}
// //                 </div>

// //                 <div className="flex items-center gap-1">
// //                   <Building2 size={14} />
// //                   {address.city}
// //                 </div>
// //               </div>
// //             </div>

// //           </div>
// //         )
// //       })}

// //     </div>
// //   )
// // }

// 'use client'

// import { useState } from 'react'
// import { MdLocationOn } from 'react-icons/md'
// import { Phone, Building2 } from 'lucide-react'
// import { AddressType } from '@/api/types'
// import { getSpecificAddress } from './completeorderActions'
// import AddressData from './AddressData'
// // import { getSpecificAddress } from '@/api/services/route.services'

// export default function getLogedInUserAddres({ addresses }: { addresses: AddressType[] }) {

//   const [selectedAddressId, setSelectedAddressId] = useState<string | null>(null)

//   let x = null
//  async function  handleSelectAddress(id: string){
//     setSelectedAddressId(id)
//     x = await getSpecificAddress(id)
//   }

//   return (
//     <div className="space-y-4">

//       {addresses?.map((address) => {
//         const isSelected = selectedAddressId === address._id

//         return (
//           <div
//             key={address._id}
//             onClick={() => handleSelectAddress(address._id)}
//             className={`border rounded-xl p-4 flex items-start gap-4 cursor-pointer transition-all
//               ${isSelected
//                 ? "border-[#21a44a] bg-green-50"
//                 : "border-gray-200 hover:border-gray-300"}
//             `}
//           >

//             {/* icon */}
//             <div className={`w-10 h-10 flex items-center justify-center rounded-[8px]
//               ${isSelected ? "bg-[#21a44a]" : "bg-[#F3F4F6]"}
//             `}>
//               <MdLocationOn
//                 size={24}
//                 className={isSelected ? "text-white" : "text-gray-500"}
//               />
//             </div>

//             {/* content */}
//             <div className="flex-1">
//               <h3 className="font-bold text-gray-800">{address.name}</h3>
//               <p className="text-gray-500 text-sm">{address.details}</p>

//               <div className="flex gap-6 mt-3 text-xs text-gray-400">
//                 <div className="flex items-center gap-1">
//                   <Phone size={14} />
//                   {address.phone}
//                 </div>

//                 <div className="flex items-center gap-1">
//                   <Building2 size={14} />
//                   {address.city}
//                 </div>
//               </div>
//             </div>

//           </div>
//         )
//       })}


//       <AddressData addressData={x || null} />

//     </div>
//   )
// }