import { getUserWishList } from '@/api/services/route.services'
import React from 'react'
import { FaShoppingCart, FaTrashAlt } from 'react-icons/fa'
import RemoveFromWishListButton from './RemoveFromWishListButton'
import AddToCartButton from '../_components/AddToCarButton/AddToCartButton'
import Link from 'next/link'
import { HiOutlineArrowRight } from 'react-icons/hi'
import { IoIosHeartEmpty } from 'react-icons/io'

export default async function page() {

    const wishlist= await getUserWishList()
   console.log('wisssssh',wishlist)

  //  const {updateNumberOfWishListItems} = (useWishList() as WishListType)

  return (
    <>
   {wishlist?.length === 0 ? <div className=" flex flex-col items-center justify-center min-h-[60vh] mt-10 px-4 text-center font-sans">
      
     
     <div className=' w-50 h-50 rounded-full bg-gray-400'>
       <IoIosHeartEmpty size={60}  />

     </div>

     
      <h2 className="text-2xl font-bold text-slate-900 mb-2">
        Your wishlist is empty
      </h2>
      <p className="text-slate-500 text-sm md:text-base max-w-xs md:max-w-md leading-relaxed mb-8">
        Browse products and save your favorites here.
         </p>

      
      <Link href='/' className="flex items-center gap-2 bg-[#16A34A] hover:bg-[#15803D] text-white px-8 py-3 rounded-xl font-bold transition-all shadow-lg shadow-emerald-100 mb-12">
        Browse Product
        <HiOutlineArrowRight size={20} />
      </Link>

     
      
    </div> :  <div className="w-full max-w-6xl mx-auto p-4">
      
      <div className="grid grid-cols-12 bg-gray-50 border border-gray-100 rounded-t-xl py-4 px-6 text-sm font-medium text-slate-500 mb-1">
        <div className="col-span-6">Product</div>
        <div className="col-span-2 text-center">Price</div>
        <div className="col-span-2 text-center">Status</div>
        <div className="col-span-2 text-center">Actions</div>
      </div>

     
      {wishlist?.map((item)=><div key={item.id} className="grid grid-cols-12 items-center bg-white border border-gray-100  px-6 py-4 shadow-sm">
        
       
        <div className="col-span-6 flex items-center gap-4">
          <div className="w-16 h-16 bg-gray-50 border border-gray-100 rounded-lg flex items-center justify-center p-2">
            <img 
              src={item.imageCover} 
              alt="Shoes" 
              className="object-contain"
            />
          </div>
          <div className="flex flex-col">
            <h3 className="text-[15px] font-bold text-slate-700">{item.title.split(' ',6).join(' ')}</h3>
            <span className="text-xs text-slate-400 mt-1">{item.category.name}</span>
          </div>
        </div>

        
        <div className="col-span-2 text-center">
          <span className="text-[15px] font-bold text-slate-800">{item.price} EGP</span>
        </div>

        
        <div className="col-span-2 flex justify-center">
          <div className="flex items-center gap-1.5 bg-emerald-50 text-emerald-500 px-3 py-1 rounded-full text-[11px] font-semibold border border-emerald-100">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
            In Stock
          </div>
        </div>

       
        <div className="col-span-2 flex items-center justify-center gap-2">
          {/* <button className="flex items-center gap-2 bg-[#16A34A] text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
            <FaShoppingCart className="text-xs" />
            Add to Cart
          </button> */}


           <AddToCartButton name={'Add to Cart'} icon={<FaShoppingCart />} id={item.id} className='flex items-center gap-2 bg-[#16A34A] text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors'/>


          {/* <button className="p-2.5 border border-gray-200 rounded-lg text-slate-400 hover:text-red-500 hover:bg-red-50 transition-all">
            <FaTrashAlt size={16} />
          </button> */}

          <RemoveFromWishListButton id={item.id}/>
        </div>

      </div>)}
    </div>}
    
    </>
  )
}
