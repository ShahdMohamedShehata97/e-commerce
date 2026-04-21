import React from 'react';
import { Home, Bookmark, MapPin, Phone, Building2, Plus, Info } from 'lucide-react';
import { IoMdHome } from "react-icons/io";
import { MdLocationOn, MdOutlineLock } from 'react-icons/md';
import { FaCartShopping, FaCity, FaTruck } from 'react-icons/fa6';
import {  getLogedInUserAddres, getUserCart } from '@/api/services/route.services';
import PaymentWay from '../_components/PayMentWay/PaymentWay';
import { FaShieldAlt, FaShoppingBag } from 'react-icons/fa';
import { FiRefreshCcw } from 'react-icons/fi';
import Link from 'next/link';
import AddressSelector from './UserAddress';

export default async function CompleteOrder ()  {






 
    const userAddress= await getLogedInUserAddres()

    const orderSumery= await getUserCart()  

    // console.log('user Address',userAddress)

  return (
  <div className='w-full px-4 xl:w-[80%] lg:w-[90%] mx-auto py-10'>

    <div className='flex gap-2 '>
      <Link href='/' className='text-[14px] font-medium text-[#6A7282] '>Home</Link>
      <span className='text-[14px] font-medium text-[#6A7282] '>/</span>
      <span className='text-[14px] font-medium  '>Shopping Cart</span>
    </div>
    <div className='flex gap-3 items-center mt-2'>
      <div className='w-12 h-12 bg-linear-to-br from-[#16A34A] to-[#15803D] rounded-[12px] flex justify-center items-center  '>
        <FaCartShopping color='white' size={30} />
      </div>
        <h1 className='text-2xl font-bold' >Shopping Cart</h1>
    </div>

    <p className='text-[16px] font-medium text-[#6A7282] mt-2 mb-8 '>You have <span className='text-[#16A34A]'>{orderSumery?.products.length} items </span>in your cart</p>
  
  <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 items-start'>
    
 
    <div className="lg:col-span-8 space-y-6">
      
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
       
        <div className="bg-[#21a44a] p-6 text-white">
          <div className="flex items-center gap-2 mb-1">
            <IoMdHome size={22} fill="white" />
            <h1 className="text-[18px] font-bold">Shipping Address</h1>
          </div>
          <p className="text-sm text-[#DCFCE7] font-medium">Where should we deliver your order?</p>
        </div>

        <div className="p-6 space-y-6">
          
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-[#21a44a] font-bold">
              <Bookmark size={20} fill="currentColor" />
              <span className="text-gray-800">Saved Addresses</span>
            </div>
            

            <AddressSelector addresses={userAddress ?? []}/>

            {/* {userAddress?.map((address)=>
               <div className="relative border border-gray-200 rounded-xl p-4 flex items-start gap-4 bg-white hover:border-gray-300 transition-all cursor-pointer">
              <div className="w-10 h-10 bg-[#F3F4F6] shrink-0 flex items-center justify-center rounded-[8px]">
                <MdLocationOn color='#6A7282' size={24} />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-800 leading-none mb-1">{address.name}</h3>
                <p className="text-gray-500 text-sm">{address.details}</p>
                <div className="flex items-center gap-6 mt-4 text-xs text-gray-400">
                  <div className="flex items-center gap-1.5">
                    <Phone size={14} />
                    <span>{address.phone}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Building2 size={14} />
                    <span>{address.city}</span>
                  </div>
                </div>
              </div>
            </div>
            )} */}
           
           

           
            <button className="w-full border-2 border-dashed border-[#2ecc71] rounded-xl p-4 flex items-center gap-4 bg-[#f1fcf5] hover:bg-[#e8f9ee] transition-colors group">
              <div className="bg-[#2ecc71] p-2 rounded-lg text-white group-hover:scale-105 transition-transform">
                <Plus size={24} strokeWidth={3} />
              </div>
              <div className="text-left">
                <h3 className="font-bold text-[#21a44a]">Use a different address</h3>
                <p className="text-gray-400 text-xs">Enter a new shipping address manually</p>
              </div>
            </button>
          </div>

         
          <div className="bg-[#F0FDF4] border border-[#DCFCE7] rounded-2xl p-4 flex items-center gap-3">
             <div className="bg-[#21a44a] text-white p-1 rounded-full">
              <Info size={14} />
            </div>
            <div>
              <h4 className="text-gray-800 text-sm font-bold leading-none mb-1">Delivery Information</h4>
              <p className="text-gray-500 text-xs font-medium">Please ensure your address is accurate for smooth delivery</p>
            </div>
          </div>

         
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="space-y-2 md:col-span-1">
              <label className="text-sm font-bold text-gray-700">City <span className="text-red-500">*</span></label>
              <div className="relative">
                <div className="absolute top-1/2 -translate-y-1/2 left-3 w-8 h-8 bg-[#F3F4F6] flex items-center justify-center rounded-[8px]">
                  <FaCity size={16} className="text-gray-400" />
                </div>
                <input type="text" placeholder="Cairo" className="w-full pl-14 pr-4 py-3.5 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#21a44a]/20 outline-none transition-all placeholder:text-gray-300" />
              </div>
            </div>

            <div className="space-y-2 md:col-span-2">
              <label className="text-sm font-bold text-gray-700">Street Address <span className="text-red-500">*</span></label>
              <div className="relative">
                <div className="absolute top-3 left-3 w-8 h-8 bg-[#F3F4F6] flex items-center justify-center rounded-[8px]">
                  <MdLocationOn size={18} className="text-gray-400" />
                </div>
                <textarea  placeholder="Street name, building number..." className="w-full pl-14 pr-4 py-3.5 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#21a44a]/20 outline-none transition-all placeholder:text-gray-300 resize-none"></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>

      
      <div className="mt-6">
        {/* <PaymentWay /> */}

        <PaymentWay/>
      </div>
    </div>

   
    <div className="lg:col-span-4 sticky top-6">
      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="bg-[#1f9d4f] p-6 text-white">
          <div className="flex items-center gap-3">
            <FaShoppingBag size={20} className="opacity-90" />
            <h2 className="text-lg font-semibold tracking-tight">Order Summary</h2>
          </div>
          <p className="text-xs opacity-80 mt-1 ml-8">{orderSumery?.products.length} items</p>
        </div>

        <div className="p-5">
         
          <div className="space-y-4 mb-6 max-h-100 overflow-y-auto pr-1">
            {orderSumery?.products?.map((item) => (
              <div key={item._id} className="bg-gray-50 rounded-xl p-3 flex items-center gap-3 border border-transparent hover:border-gray-100 transition-all">
                <div className="w-14 h-16 bg-white rounded-lg border border-gray-100 shrink-0 overflow-hidden">
                  <img src={item.product.imageCover} alt={item.product.title} className="object-cover w-full h-full p-1" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-gray-800 text-sm truncate">{item.product.title}</h3>
                  <p className="text-xs text-gray-500">{item.count} × {item.product.price} EGP</p>
                </div>
                <div className="text-sm font-bold text-gray-900">{item.price}</div>
              </div>
            ))}
          </div>

         
          <div className="space-y-3 border-t border-gray-100 pt-4">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Subtotal</span>
              <span className="font-semibold">{orderSumery?.totalCartPrice} EGP</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Shipping</span>
              <span className="font-bold text-[#1f9d4f]">FREE</span>
            </div>
            <div className="flex justify-between items-end pt-2">
              <span className="text-lg font-bold">Total</span>
              <div className="text-right">
                <p className="text-2xl font-black text-[#1f9d4f] leading-none">{orderSumery?.totalCartPrice} <span className="text-xs font-bold text-gray-400">EGP</span></p>
              </div>
            </div>
          </div>

          <button className="w-full mt-6 bg-[#1f9d4f] text-white py-4 rounded-xl font-bold text-md flex items-center justify-center gap-2 shadow-lg shadow-green-100 hover:bg-[#188040] transition-all active:scale-95">
            <MdOutlineLock size={18} />
            Place Order
          </button>
          
          {/* Trust Badges */}
          <div className="flex items-center justify-between mt-6 px-1">
             <div className="flex flex-col items-center gap-1">
                <FaShieldAlt size={14} className="text-[#32b768]" />
                <span className="text-[10px] text-gray-400 font-bold">Secure</span>
             </div>
             <div className="flex flex-col items-center gap-1">
                <FaTruck size={14} className="text-[#3b82f6]" />
                <span className="text-[10px] text-gray-400 font-bold">Fast</span>
             </div>
             <div className="flex flex-col items-center gap-1">
                <FiRefreshCcw size={14} className="text-[#f97316]" />
                <span className="text-[10px] text-gray-400 font-bold">Returns</span>
             </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  );
};

// function getLogetInUserAddres() {
//   throw new Error('Function not implemented.');
// }

