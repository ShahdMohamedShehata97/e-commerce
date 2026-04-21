

import {  getAllProducts } from '@/api/services/route.services';
import React from 'react';
import { FaBoxOpen, FaTags } from 'react-icons/fa6';
import { IoLayers } from 'react-icons/io5';
import ProductCard from '../_components/ProductCard/ProductCard';

export default async function AllProducts  ()  {

  const allProducts=await getAllProducts()


  return (
   <div className='bg-[#F9FAFB80]'>
     <div className="w-full bg-linear-to-r from-[#16A34A] via-[#22C55E] to-[#4ADE80] py-12 px-6 md:px-16 min-h-50 flex flex-col justify-center">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Breadcrumbs */}
        <nav className="text-white/80 text-sm mb-4 flex items-center gap-2">
          <span className="hover:underline cursor-pointer">Home</span>
          <span>/</span>
          <span className="font-medium text-white">Products</span>
        </nav>

        {/* Content Section */}
        <div className="flex items-center gap-5">
          {/* Icon Box */}
          <div className="bg-white/20 p-4 rounded-2xl shadow-lg backdrop-blur-sm border border-white/10">
            <FaBoxOpen className="text-white text-4xl" />
          </div>

          {/* Text */}
          <div className="text-white">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
             All Products
            </h1>
            <p className="text-white/90 mt-1 text-sm md:text-base">
             Explore our complete product collection
            </p>
          </div>
        </div>
        
      </div>
      
    </div>


     <div className='w-full px-4 lg:w-[73%] lg:px-0 mx-auto '>

         <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-8  ">
       {allProducts?.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                  
                  </div>
       </div>
   </div>
  );
};

