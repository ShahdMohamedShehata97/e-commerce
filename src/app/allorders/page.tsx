// import Link from 'next/link'
// import React from 'react'
// import { FaBoxOpen, FaCartShopping, FaMoneyBill } from 'react-icons/fa6'
// // import boxIcon from '@/assets/images/boxicon(1).svg'
// import { HiOutlineCalendar, HiOutlineLocationMarker, HiOutlinePhone, HiOutlineShoppingBag } from 'react-icons/hi'
// import { FiBox, FiCamera, FiChevronDown, FiChevronUp } from 'react-icons/fi'
// import { getAllOrders, getUserOrders } from '@/api/services/route.services'
// import OrderDetailsButton from './OrderDetailsButton'

// export default async  function myOrders({params}:{params:Promise<{id:string}>}) {


//   const userId= (await params).id

//   console.log('usserrrIdddd',userId)

//   const allOrders = await getUserOrders(userId)

// //     const allOrders=await getAllOrders()
// const shippingPrice = Number(allOrders?.[0]?.shippingPrice ?? 0)



//   return (
//     <div className='w-full px-4 xl:w-[75%] lg:w-[90%] mx-auto py-10'>

      
//            <div className='flex gap-2 '>
//       <Link href='/' className='text-[14px] font-medium text-[#6A7282] '>Home</Link>
//       <span className='text-[14px] font-medium text-[#6A7282] '>/</span>
//       <span className='text-[14px] font-medium  '>My Orders</span>
//     </div>
//     <div className='flex gap-3 items-center mt-2  mb-8'>
//       <div className='w-12 h-12 bg-linear-to-br from-[#16A34A] to-[#15803D] rounded-[12px] flex justify-center items-center  '>
//         <FaBoxOpen color='white' size={30} />
//         {/* <img src='boxicon(1).svg' alt='boxxxxx'/> */}
//       </div>

//       <div className=''>
//                <h1 className='text-2xl font-bold' >My Orders</h1>
//            <p className='text-[16px] font-medium text-[#6A7282] '>Track and manage your {allOrders?.length} orders</p>
    
//       </div>
//   </div>




//     <div className=" mx-auto  font-sans text-slate-700 min-h-screen">
//       {/* الكرت الرئيسي */}
    

//     {allOrders?.map((order)=>  <div className="border mb-5 border-emerald-100 rounded-2xl overflow-hidden bg-white shadow-sm">
        
//         {/* الجزء العلوي - Header */}
//         <div className="p-6 flex justify-between items-start">
//           <div className="flex gap-5">
//             {/* صورة المنتج المصغرة */}
//             <div className="w-20 h-20 border border-gray-100 rounded-xl flex items-center justify-center  shadow-sm">
//               <img 
//                src={order.cartItems?.[0].product.imageCover}
//                 alt="product" 
//                 className="object-contain h-20 " />
//             </div>
            
//             <div className="space-y-1">
//               <div className="flex items-center gap-2">
//                 <span className="bg-orange-50 text-orange-500 text-[11px] font-bold px-3 py-0.5 rounded-full flex items-center gap-1.5 border border-orange-100">
//                   <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span> Processing
//                 </span>
//               </div>
//               <h3 className="font-extrabold text-gray-800 text-xl"># {order.totalOrderPrice}</h3>
//               <div className="flex items-center gap-4 text-xs text-gray-400 font-medium">
//                 <span className="flex items-center gap-1"><HiOutlineCalendar size={14} /> <p>
//   {/* {new Date(allOrders?.[0].createdAt).toLocaleDateString("en-US", {
//     month: "short",
//     day: "numeric",
//     year: "numeric",
//   })} */}

//   {allOrders?.[0]?.createdAt &&
//   new Date(order.createdAt).toLocaleDateString("en-US", {
//     month: "short",
//     day: "numeric",
//     year: "numeric",
//   })
// }
// </p></span>
//                 <span className="flex items-center gap-1"><HiOutlineShoppingBag size={14} /> {order.cartItems.length} item</span>
//                 <span className="flex items-center gap-1"><HiOutlineLocationMarker size={14} />{order.shippingAddress.city}</span>
//               </div>
//               <div className="text-2xl font-black text-gray-800 mt-2">
//                 {order.cartItems?.[0].price} <span className="text-xs font-normal text-gray-400">EGP</span>
//               </div>
//             </div>
//           </div>

//           {/* الأزرار الجانبية */}
//           <div className="flex flex-col items-end gap-12">
//              <button className="text-gray-400 hover:text-gray-600 border border-gray-100 p-1.5 rounded-lg bg-white shadow-sm transition-all">
//                 <FaMoneyBill color='#4A5565' size={18} />
//              </button>
//              {/* <button className="bg-emerald-500 text-white px-5 py-2 rounded-xl flex items-center gap-2 text-sm font-bold hover:bg-emerald-600 transition-all shadow-md shadow-emerald-100">
//                 Hide <FiChevronUp size={18} />
//              </button> */}

//              <OrderDetailsButton products={order.cartItems ?? []}/>
//           </div>
//         </div>

//         {/* قسم محتويات الطلب - Order Items */}
        

//         {/* الجزء السفلي - العنوان والملخص */}
       
//     </div>)}


   



   



  
        
//     </div>

//     </div>
//   )
// }


import Link from 'next/link'
import React from 'react'
import { FaBoxOpen, FaMoneyBill } from 'react-icons/fa6'
import { HiOutlineCalendar, HiOutlineLocationMarker, HiOutlineShoppingBag } from 'react-icons/hi'
import { BsCheckCircleFill } from 'react-icons/bs'
import { getUserOrders } from '@/api/services/route.services'
import OrderDetailsWrapper from './OrderDetailsButton'
import { getSession } from 'next-auth/react'
import { getServerSession } from 'next-auth'
import { nextAuthConfig } from '@/Next-Auth/NextAuth.config'

// export default async function MyOrders({params}:{params:Promise<{id:string}>}) {
export default async function MyOrders() {
  // const userId = (await params).id
  // const session =await  getSession()


  const session = await getServerSession(nextAuthConfig)

  const userId = session?.user?.id
 
  
  if(!userId){
     return 
      // console.log('ordernumber', allOrders?.length)
  }

 const  allOrders = await getUserOrders(userId)



  return (
    <div className='w-full px-4 xl:w-[75%] lg:w-[90%] mx-auto py-10 font-sans text-slate-700'>
     
      <div className='flex gap-2 mb-2'>
        <Link href='/' className='text-[14px] font-medium text-[#6A7282]'>Home</Link>
        <span className='text-[14px] font-medium text-[#6A7282]'>/</span>
        <span className='text-[14px] font-medium'>My Orders</span>
      </div>

      <div className='flex gap-3 items-center mb-8'>
        <div className='w-12 h-12 bg-linear-to-br from-[#16A34A] to-[#15803D] rounded-[12px] flex justify-center items-center shadow-lg'>
          <FaBoxOpen color='white' size={28} />
        </div>
        <div>
          <h1 className='text-2xl font-bold text-slate-900'>My Orders</h1>
          <p className='text-[16px] font-medium text-[#6A7282]'>Track and manage your {allOrders?.length} orders</p>
        </div>
      </div>

      <div className="space-y-6">
        {allOrders?.map((order) => (
          <div key={order.id} className="border border-emerald-100 rounded-2xl overflow-hidden bg-white shadow-sm">
            
            <OrderDetailsWrapper >
              
              <div className="flex gap-5">
                <div className="w-20 h-20 border border-gray-100 rounded-xl flex items-center justify-center shadow-sm bg-white">
                  <img 
                    src={order.cartItems?.[0]?.product?.imageCover} 
                    alt="product" 
                    className="object-contain h-16 w-16" 
                  />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="bg-orange-50 text-orange-600 text-[11px] font-bold px-3 py-0.5 rounded-full flex items-center gap-1.5 border border-orange-100">
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span> Processing
                    </span>
                  </div>
                  <h3 className="font-extrabold text-gray-800 text-xl">#{order.id}</h3>
                  <div className="flex items-center gap-4 text-xs text-gray-400 font-medium">
                    <span className="flex items-center gap-1"><HiOutlineCalendar size={14} /> 
                      {new Date(order.createdAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                    </span>
                    <span className="flex items-center gap-1"><HiOutlineShoppingBag size={14} /> {order.cartItems.length} items</span>
                    <span className="flex items-center gap-1"><HiOutlineLocationMarker size={14} /> {order.shippingAddress.city}</span>
                  </div>
                  <div className="text-2xl font-black text-gray-800 mt-2">
                    {order.totalOrderPrice} <span className="text-xs font-normal text-gray-400">EGP</span>
                  </div>
                </div>
              </div>

              
              <button className="text-gray-400 hover:text-gray-600 border border-gray-100 p-2 rounded-lg bg-white shadow-sm transition-all">
                <FaMoneyBill size={18} />
              </button>

              
              <div className="w-full">
                <div className="flex items-center gap-2 mb-4 text-slate-800 font-semibold text-sm">
                  <BsCheckCircleFill className="text-green-500" />
                  Order Items
                </div>
                <div className="space-y-3">
                  {order.cartItems?.map((item) => (
                    <div key={item._id} className="w-full bg-white border border-gray-100 rounded-xl p-3 flex items-center justify-between shadow-sm">
                      <div className="flex items-center gap-4">
                        <img src={item.product.imageCover} className="w-12 h-14 object-cover rounded-lg bg-gray-50" />
                        <div>
                          <h4 className="text-sm font-semibold text-slate-800">{item.product.title.split(' ').slice(0, 4).join(' ')}</h4>
                          <p className="text-xs text-gray-400 mt-1">{item.count} × {item.price} EGP</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="block font-bold text-slate-900">{item.price * item.count}</span>
                        <span className="text-[10px] text-gray-400 uppercase">EGP</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </OrderDetailsWrapper>

          </div>
        ))}
      </div>
    </div>
  )
}