import Link from 'next/link'
import React from 'react'
import { FaBoxOpen, FaCartShopping } from 'react-icons/fa6'
// import boxIcon from '@/assets/images/boxicon(1).svg'
import { HiOutlineCalendar, HiOutlineLocationMarker, HiOutlinePhone, HiOutlineShoppingBag } from 'react-icons/hi'
import { FiBox, FiCamera, FiChevronDown, FiChevronUp } from 'react-icons/fi'
import { getAllOrders } from '@/api/services/route.services'

export default async  function myOrders() {

    const allOrders=await getAllOrders()



  return (
    <div className='w-full px-4 xl:w-[75%] lg:w-[90%] mx-auto py-10'>
           <div className='flex gap-2 '>
      <Link href='/' className='text-[14px] font-medium text-[#6A7282] '>Home</Link>
      <span className='text-[14px] font-medium text-[#6A7282] '>/</span>
      <span className='text-[14px] font-medium  '>My Orders</span>
    </div>
    <div className='flex gap-3 items-center mt-2  mb-8'>
      <div className='w-12 h-12 bg-linear-to-br from-[#16A34A] to-[#15803D] rounded-[12px] flex justify-center items-center  '>
        {/* <FaBoxOpen color='white' size={30} /> */}
        <img src='boxicon(1).svg' alt='boxxxxx'/>
      </div>

      <div className=''>
               <h1 className='text-2xl font-bold' >My Orders</h1>
           <p className='text-[16px] font-medium text-[#6A7282] '>Track and manage your 8 orders</p>
    
      </div>
  </div>




    <div className=" mx-auto  font-sans text-slate-700 min-h-screen">
      {/* الكرت الرئيسي */}
      <div className="border border-emerald-100 rounded-2xl overflow-hidden bg-white shadow-sm">
        
        {/* الجزء العلوي - Header */}
        <div className="p-6 flex justify-between items-start">
          <div className="flex gap-5">
            {/* صورة المنتج المصغرة */}
            <div className="w-20 h-20 border border-gray-100 rounded-xl flex items-center justify-center  shadow-sm">
              <img 
               src={allOrders?.[0]?.cartItems?.[0].product.imageCover}
                alt="product" 
                className="object-contain h-20 " />
            </div>
            
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="bg-orange-50 text-orange-500 text-[11px] font-bold px-3 py-0.5 rounded-full flex items-center gap-1.5 border border-orange-100">
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span> Processing
                </span>
              </div>
              <h3 className="font-extrabold text-gray-800 text-xl"># {allOrders?.[0].totalOrderPrice}</h3>
              <div className="flex items-center gap-4 text-xs text-gray-400 font-medium">
                <span className="flex items-center gap-1"><HiOutlineCalendar size={14} /> <p>
  {new Date(allOrders?.[0].createdAt).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  })}
</p></span>
                <span className="flex items-center gap-1"><HiOutlineShoppingBag size={14} /> {allOrders?.[0].cartItems.length} item</span>
                <span className="flex items-center gap-1"><HiOutlineLocationMarker size={14} />{allOrders?.[0].shippingAddress.city}</span>
              </div>
              <div className="text-2xl font-black text-gray-800 mt-2">
                {allOrders?.[0]?.cartItems?.[0].price} <span className="text-xs font-normal text-gray-400">EGP</span>
              </div>
            </div>
          </div>

          {/* الأزرار الجانبية */}
          <div className="flex flex-col items-end gap-12">
             <button className="text-gray-400 hover:text-gray-600 border border-gray-100 p-1.5 rounded-lg bg-white shadow-sm transition-all">
                <FiCamera size={18} />
             </button>
             <button className="bg-emerald-500 text-white px-5 py-2 rounded-xl flex items-center gap-2 text-sm font-bold hover:bg-emerald-600 transition-all shadow-md shadow-emerald-100">
                Hide <FiChevronUp size={18} />
             </button>
          </div>
        </div>

        {/* قسم محتويات الطلب - Order Items */}
        <div className="px-6 py-4 border-t border-gray-50">
          <div className="flex items-center gap-2 text-emerald-500 text-sm font-bold mb-4">
            <span className="bg-emerald-50 p-1.5 rounded-lg border border-emerald-100">
                <FiBox size={16} />
            </span>
            Order Items
          </div>
          
          {allOrders?.[0].cartItems.map((item)=><div className="flex justify-between items-center bg-gray-50/80 p-4 rounded-2xl border border-gray-100">
            <div className="flex gap-4 items-center">
              <div className="w-14 h-14 bg-white border border-gray-100 rounded-xl flex items-center justify-center shadow-sm">
                <img src={item.product.imageCover} alt={item.product.title} className="rounded-lg object-contain h-14" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-800">{item.product.title}</h4>
                <p className="text-xs text-gray-400 mt-1 font-medium">{item.count} × {item.product.price} EGP</p>
              </div>
            </div>
            <div className="font-bold text-gray-800 text-lg">
              {item.price} <span className="text-[10px] text-gray-400 font-normal">EGP</span>
            </div>
          </div>)}
        </div>

        {/* الجزء السفلي - العنوان والملخص */}
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-5">
          
          {/* كرت العنوان */}
          <div className="border border-gray-100 rounded-2xl p-5 space-y-4 bg-white">
            <div className="flex items-center gap-2 text-blue-500 text-sm font-bold">
               <HiOutlineLocationMarker size={20} />
               Delivery Address
            </div>
            <div>
              <p className="font-bold text-gray-800">{allOrders?.[0].shippingAddress.city} City</p>
              <p className="text-sm text-gray-400 leading-relaxed mt-1">{allOrders?.[0].shippingAddress.details}</p>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500 font-medium pt-2">
              <div className="bg-blue-50 p-1 rounded-md text-blue-500">
                <HiOutlinePhone size={14} />
              </div> 
              {allOrders?.[0].shippingAddress.phone}
            </div>
          </div>

          {/* كرت ملخص الطلب */}
          <div className="bg-amber-50/40 border border-amber-100 rounded-2xl p-5 space-y-4">
            <div className="flex items-center gap-2 text-orange-500 text-sm font-bold">
               <span className="bg-orange-500 text-white rounded-full p-1"><HiOutlineCalendar size={12} /></span>
               Order Summary
            </div>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Subtotal</span>
                <span className="font-bold text-gray-700">{allOrders?.[0].totalOrderPrice} EGP</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Shipping</span>
               {allOrders?.[0].shippingPrice > 0 ?  <span className="text-emerald-500 font-bold uppercase text-[10px] bg-emerald-50 px-2 py-0.5 rounded">{allOrders?.[0].shippingPrice}</span> :  <span className="text-emerald-500 font-bold uppercase text-[10px] bg-emerald-50 px-2 py-0.5 rounded">Free</span>}
              </div>
              <div className="pt-3 border-t border-dashed border-amber-200 flex justify-between items-center">
                <span className="font-bold text-gray-800">Total</span>
                <span className="font-black text-xl text-gray-900">{allOrders?.[0].totalOrderPrice} EGP</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>


    {allOrders?.map((order)=><div className=''>

      {order.cartItems.length > 0  && <div className=" mt-6">
      {/* Container الكرت الرئيسي - مطابق للصورة الثانية */}
      <div className="bg-white border border-gray-100 rounded-2xl p-4 flex justify-between items-center shadow-sm hover:shadow-md transition-all">
        
        <div className="flex gap-6 items-center">
          {/* قسم الصورة مع الترقيم (+4) */}
          <div className="relative">
            <div className="w-20 h-20 border border-gray-100 rounded-2xl flex items-center justify-center bg-white shadow-sm overflow-hidden p-2">
              <img 
                src={order.cartItems?.[0]?.product.imageCover}// استبدليها برابط صورتك
                alt="product" 
                className="object-contain" 
              />
            </div>
            {/* الدائرة السوداء الصغيرة فوق الصورة */}
            <div className="absolute -top-2 -right-2 bg-[#1e293b] text-white text-[10px] font-bold w-6 h-6 rounded-full flex items-center justify-center border-2 border-white shadow-sm">
              {order.cartItems.length}
            </div>
          </div>

          {/* تفاصيل الطلب الوسطى */}
          <div className="space-y-1.5 text-right md:text-left">
            <div className="flex items-center gap-2">
              <span className="bg-amber-50 text-amber-500 text-[11px] font-bold px-2.5 py-0.5 rounded-lg flex items-center gap-1.5 border border-amber-100">
                <span className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-pulse"></span> Processing
              </span>
            </div>
            
            <h3 className="font-bold text-slate-700 text-lg flex items-center gap-1">
              <span className="text-slate-300 font-normal">#</span> {order.totalOrderPrice}
            </h3>

            {/* سطر المعلومات الرمادي */}
            <div className="flex items-center gap-4 text-[12px] text-slate-400 font-medium">
              <span className="flex items-center gap-1.5">
                <HiOutlineCalendar className="text-slate-300" size={16} /> {new Date(order.createdAt).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  })}
              </span>
              <span className="text-slate-200">•</span>
              <span className="flex items-center gap-1.5">
                <HiOutlineShoppingBag className="text-slate-300" size={16} />{order.cartItems.length} items
              </span>
              <span className="text-slate-200">•</span>
              <span className="flex items-center gap-1.5">
                <HiOutlineLocationMarker className="text-slate-300" size={16} />{order.shippingAddress?.city}
              </span>
            </div>

            {/* السعر الكبير */}
            <div className="text-2xl font-black text-slate-800 mt-1">
              {order.totalOrderPrice} <span className="text-[10px] font-bold text-slate-400 ml-1 uppercase">EGP</span>
            </div>
          </div>
        </div>

        {/* الأزرار الجانبية (يمين) */}
        <div className="flex flex-col items-end justify-between h-20 py-1">
          <button className="text-slate-400 hover:text-slate-600 border border-slate-100 p-1.5 rounded-lg bg-slate-50 transition-colors">
            <FiCamera size={18} />
          </button>
          
          <button className="bg-slate-100 text-slate-600 px-4 py-1.5 rounded-xl flex items-center gap-2 text-sm font-bold hover:bg-slate-200 transition-all border border-transparent">
            Details <FiChevronDown size={18} className="text-slate-400" />
          </button>
        </div>

      </div>
    </div>}
    </div>)}



   



  
        
    </div>
  )
}
