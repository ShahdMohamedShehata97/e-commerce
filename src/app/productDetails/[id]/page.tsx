

import { getAllProductsOfSpacificCategory, getProductDetails } from '@/api/services/route.services'
import AddToCartButton from '@/app/_components/AddToCarButton/AddToCartButton';
import StarRating from '@/app/_components/StartRating/StartRating';
import Link from 'next/link';
import { GoDotFill } from "react-icons/go";
import React from 'react'
import { FaMinus, FaPlus, FaTruck } from 'react-icons/fa6';
import { FaShieldAlt, FaShoppingCart, FaUndo } from 'react-icons/fa';
import { BsFillLightningChargeFill } from 'react-icons/bs';
import { CiHeart, CiShare2 } from 'react-icons/ci';
import { TabsDemo } from '@/app/_components/NavTabs/NavTabs';
import ProductCarousel from '@/app/_components/ProductDetailsCarusol/ProductDetailsCarsol';
import ProductImages from '../ImageCaresoul';

export default async function ProductDetails({params}:{params:Promise<{id:string}>}) {

  const id=(await params).id

  // console.log('id',id)

  const productDetails=await getProductDetails(id);
 
let ProductCategory = null;

if (productDetails?.category?._id) {
  const categoryId = productDetails.category._id;

  ProductCategory = await getAllProductsOfSpacificCategory(categoryId);

  console.log('ProductCategory', ProductCategory);
}


 


  return (
  <>



  <div className='w-full px-4 lg:w-[73%] lg:px-0 mx-auto mt-8'>

    <div className="grid grid-cols-4 gap-8">

    <div className='h-fit'>
        <ProductImages productDetails={productDetails}/></div>

      <div className='col-span-3 shadow rounded-[12px] p-6'>

        <div className=' flex gap-2' >

          <Link href='/' className='bg-[#F0FDF4] text-[#15803D] text-[12px] font-medium px-2 rounded-2xl py-0.5' >
          Women's Fashion</Link>
          <span className='bg-[#F3F4F6] text-[#364153] text-[12px] font-medium px-2 py-0.5  rounded-2xl'>Defacto</span>

        </div>

        <div className='mt-4' >
          <h1 className='text-[30px] font-bold'>{productDetails?.title}</h1>
          <div className='flex gap-2 items-center'>
            <StarRating rating={productDetails?.ratingsAverage}/>
            <span className='text-[14px] font-medium text-[#4A5565] '>{productDetails?.ratingsAverage} ({productDetails?.ratingsQuantity} reviews)</span>
          </div>
          <div className='mt-4'>
            <span className='text-3xl font-bold'>{productDetails?.price} </span>
            <div className='text-[14px] font-medium bg-[#F0FDF4] text-[#008236] flex items-center justify-center w-fit px-2 py-0.5 rounded-2xl mt-2 '>
              <GoDotFill /> In Stock
            </div>
            <p className='text-[16px] font-medium text-[#4A5565] mt-6 pt-3 ' >{productDetails?.description}</p>
          </div>
          

          <div className='w-fit mt-4  '>
            <span className='text-[14px] font-medium text-[#364153] ' >Quantity</span>
            <div className='flex gap-4 items-center'>
             <div className='flex border-3 border-[#E5E7EB] rounded-[8px] mt-2 '>    
             
             <button className='flex w-11 h-11 items-center justify-center '><FaMinus /></button>
              <span className='flex w-11 h-11 items-center justify-center font-extrabold '>1</span>
              <button className='flex w-11 h-11 items-center justify-center '><FaPlus /></button>
              </div>
            <span className='text-[14px] font-medium text-[#6A7282] '>{productDetails?. quantity} available</span>
            </div>




            
          </div>

          <div className='flex justify-between px-6 py-4  rounded-[8px] bg-[#F9FAFB] mt-4' >
            <p className='text-[16px] text-[#4A5565] font-medium'>Total Price:</p>
            <p className='font-bold text-[#16A34A]'>149.00 EGP</p>
          </div>
          <div className='flex w-full gap-2 mt-4'>
            <button className='bg-[#16A34A] text-[16px] font-medium text-white w-1/2 py-2 rounded-[12px] flex items-center justify-center gap-2 '> <FaShoppingCart />Add to Cart</button>
            <button className='bg-black text-[16px] font-medium text-white w-1/2 py-2 rounded-[12px] flex items-center justify-center gap-2 '> <BsFillLightningChargeFill />Buy Now</button>
          
            
          </div >
         

          <div className='flex w-full gap-2 mt-4'>

          <button className='bg-transparent border text-[16px] font-medium text-[#364153] w-[90%] py-2 rounded-[12px] flex items-center justify-center gap-2  '> <CiHeart size={30} /> Add to Wishlist</button>
          <button className='bg-transparent border  text-[16px] font-medium text-[#364153] w-[10%]  py-2 rounded-[12px] flex items-center justify-center gap-2 '> <CiShare2 size={20} /></button>
          

          </div>
        </div>

        <div>
          <div>
       
    <div className="flex items-center justify-between border-t  mt-4 py-4 px-6 bg-white text-gray-700">

      {/* Free Delivery */}
      <div className="flex items-center gap-3">
        <FaTruck className="text-green-500 w-6 h-6" />
        <div>
          <p className="font-semibold text-sm">Free Delivery</p>
          <p className="text-xs text-gray-400">Orders over $50</p>
        </div>
      </div>

    

      {/* Returns */}
      <div className="flex items-center gap-3">
        <FaUndo className="text-green-500 w-6 h-6" />
        <div>
          <p className="font-semibold text-sm">30 Days Return</p>
          <p className="text-xs text-gray-400">Money back</p>
        </div>
      </div>

     

      {/* Secure Payment */}
      <div className="flex items-center gap-3">
        <FaShieldAlt className="text-green-500 w-6 h-6" />
        <div>
          <p className="font-semibold text-sm">Secure Payment</p>
          <p className="text-xs text-gray-400">100% Protected</p>
        </div>
      </div>

    </div>
      </div>
        </div>
      </div>

    </div>

    <div className='mt-14'>

      <TabsDemo/>
    </div>


    <div >

      <div>
         

          <div>
            <ProductCarousel ProductCategory={ProductCategory || []} />
          </div>


          
      </div>

    </div>


  </div>
  
  </>
  )
}
