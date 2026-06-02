

import {  getAllProducts, getAllProductsOfSpacificCategoryyyy, getSpecificBrand, getSpecificCategory } from '@/api/services/route.services';
import ProductCard from '@/app/_components/ProductCard/ProductCard';
import Link from 'next/link';
import React from 'react';
import { FaBoxOpen, FaTags } from 'react-icons/fa6';
import { HiOutlineArrowRight } from 'react-icons/hi';
import { IoLayers } from 'react-icons/io5';
import { LuPackageOpen } from 'react-icons/lu';
// import ProductCard from '../../../_components/ProductCard/ProductCard';

export default async function SpacificProducts  ({params}:{params:Promise<{id:string,type:string}>})  {
const id=(await params).id
const type=(await params).type

let spacific = null

if(type==='brand')
{
 spacific = await getSpecificBrand(id)
}
else if(type==='category'){
   spacific = await getSpecificCategory(id)

}



const allProducts= await getAllProductsOfSpacificCategoryyyy(id,type)

 


  return (
   <div className='bg-[#F9FAFB80]'>
     <div className="w-full bg-linear-to-r from-[#16A34A] via-[#22C55E] to-[#4ADE80] py-12 px-6 md:px-16 min-h-50 flex flex-col justify-center">
      <div className="max-w-7xl mx-auto w-full">
        
     
        <nav className="text-white/80 text-sm mb-4 flex items-center gap-2">
          <span className="hover:underline cursor-pointer">Home</span>
          <span>/</span>
          <span className="font-medium text-white">Products</span>
        </nav>

       
        <div className="flex items-center gap-5">
         
        <div className="bg-white/20 w-20 h-20 p-4 rounded-2xl shadow-lg backdrop-blur-sm border border-white/10">
  <img
    src={spacific?.image}
    alt={spacific?.name}
    className="w-full h-full object-contain "
  />
</div>
          
          <div className="text-white">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
             {spacific?.name}
            </h1>
            <p className="text-white/90 mt-1 text-sm md:text-base">
             Browse products in {spacific?.name}
            </p>
          </div>
        </div>
        
      </div>
      
    </div>


     <div className='w-full px-4 lg:w-[73%] lg:px-0 mx-auto '>

      {allProducts && allProducts.length > 0 ? (
  <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-8">
    {allProducts.map((product) => (
      <ProductCard key={product.id} product={product} />
    ))}
  </div>
) : (
<div className="flex flex-col mt-4 items-center justify-center min-h-[60vh] px-4 text-center font-sans">
      
     
     <div className='w-50 h-50 rounded-full flex items-center justify-center bg-[#F3F4F6] mb-4'>
       <LuPackageOpen size={60}  />

     </div>

     
      <h2 className="text-2xl font-bold text-slate-900 mb-2">
        No Products Found
      </h2>
      <p className="text-slate-500 text-sm md:text-base max-w-xs md:max-w-md leading-relaxed mb-8">
       No products match your current filters.
      </p>

      
      <Link href='/' className="flex items-center gap-2 bg-[#16A34A] hover:bg-[#15803D] text-white px-8 py-3 rounded-xl font-bold transition-all shadow-lg shadow-emerald-100 mb-12">
        View All Products
        <HiOutlineArrowRight size={20} />
      </Link>

     
      
    </div>
)}
       </div>
   </div>
  );
};

