

import { getAllBrands } from '@/api/services/route.services';
import React from 'react';
import { FaTags } from 'react-icons/fa6';

export default async function BrandHeader  ()  {

  const brands=await getAllBrands()


  return (
   <div className='bg-[#F9FAFB80]'>
     <div className="w-full bg-linear-to-r from-[#7F22FE] via-[#8E51FF] to-[#C27AFF] py-12 px-6 md:px-16 min-h-[200px] flex flex-col justify-center">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Breadcrumbs */}
        <nav className="text-white/80 text-sm mb-4 flex items-center gap-2">
          <span className="hover:underline cursor-pointer">Home</span>
          <span>/</span>
          <span className="font-medium text-white">Brands</span>
        </nav>

        {/* Content Section */}
        <div className="flex items-center gap-5">
          {/* Icon Box */}
          <div className="bg-white/20 p-4 rounded-2xl shadow-lg backdrop-blur-sm border border-white/10">
            <FaTags className="text-white text-4xl" />
          </div>

          {/* Text */}
          <div className="text-white">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
              Top Brands
            </h1>
            <p className="text-white/90 mt-1 text-sm md:text-base">
              Shop from your favorite brands
            </p>
          </div>
        </div>
        
      </div>
      
    </div>


     <div className='w-full px-4 lg:w-[73%] lg:px-0 mx-auto '>

         <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6 mt-8  ">
          {brands?.map((brand)=><div key={brand._id} className='shadow px-5 pt-5 pb-7 border border=[#F9FAFB] rounded-[12px]'>

            <div className='bg-[#F9FAFB] px-4 py-6 rounded-[12px] '>
              <img src={brand.image} alt={brand.name}/>
            </div>

            {/* <h3 className='text-[14px] font-semibold'>{brand.name}</h3> */}
            <h3 className='text-[14px] font-semibold text-center mt-2'>{brand.name} </h3>


          </div>)}
                  
                  </div>
       </div>
   </div>
  );
};

