// import { Input } from '@/components/ui/input'
// import Link from 'next/link'
// import React from 'react'
// import Filteration from './Filteration'
// import PriceRange from './SearchSideBar'
// import { filterProducts, getAllBrands, getAllCategories, getAllProducts } from '@/api/services/route.services'
// import ProductCard from '../_components/ProductCard/ProductCard'
// import { ProductType } from '@/api/types'

import { filterProducts, getAllBrands, getAllCategories } from "@/api/services/route.services"
import Filteration from "./Filteration"
import PriceRange from "./SearchSideBar"
import { ProductType } from "@/api/types"
import ProductCard from "../_components/ProductCard/ProductCard"
import { Input } from "@/components/ui/input"


// export default async function Search() {

//   const allCategories = await getAllCategories()
//   const allBrands = await getAllBrands()

//   // const allProducts = await filterProducts()

//   const allProducts = await getAllProducts()

//   return (
//    <>

//    <div className='bg-[#F9FAFB80]'>

//     <div className='w-full px-4 xl:w-[75%] lg:w-[90%] mx-auto py-10'>
//        <div>
//             <div className='flex gap-2 '>
//       <Link href='/' className='text-[14px] font-medium text-[#6A7282] '>Home</Link>
//       <span className='text-[14px] font-medium text-[#6A7282] '>/</span>
//       <span className='text-[14px] font-medium  '>Search Results</span>
//     </div>

//     <Input className='w-1/2 mt-2' placeholder='Search for products'
//     />
//        </div>

//     <div className='grid grid-cols-4 mt-8 gap-8'>

//   <div className='col-span-1 p-6 bg-white   rounded-[16px]'>
//     <div>
//       <h3 className='text-[16px] font-bold'>Categories</h3>
//     </div>


//     <div className='mt-4'>
//         {/* <Filteration/> */}

//            {/* {allCategories?.map((category)=><div className='flex items-center gap-2 mt-2'>
//            <Filteration name={category.name} id={category._id}/>
//            </div>)} */}

//            {allCategories?.map((category) => (
//   <div key={category._id} className='flex items-center gap-2 mt-2'>
//     <Filteration
//       name={category.name}
//       id={category._id}
//       type='category'
//     />
//   </div>
// ))}
//     </div>


   

//     <div>
        
//     <PriceRange/>

//     </div>


//       <div>
//       <h3 className='text-[16px] font-bold'>Brands</h3>
//     </div>


//     <div className='mt-4'>
//         {/* <Filteration/> */}

//            {/* {allBrands?.map((brand)=><div className='flex items-center gap-2 mt-2'>
//            <Filteration name={brand.name} id={brand._id}/>
//            </div>)} */}

//            {allBrands?.map((brand) => (
//   <div key={brand._id} className='flex items-center gap-2 mt-2'>
//     <Filteration
//       name={brand.name}
//       id={brand._id}
//       type='brand'
      
//     />
//   </div>
// ))}
//     </div>
//   </div>

//   <div className='col-span-3 h-screen'>

//     <div className='grid grid-cols-4 gap-4'>
//         {allProducts?.map((product: ProductType)=><ProductCard  product={product}/>)}
//         </div>
//   </div>

// </div>





//     </div>

//    </div>
   
//    </>
//   )
// }




export default async function Search({
  searchParams,
}: {
  searchParams?: {
    category?: string
    brand?: string
    query?: string
    page?: string
  }
}) {

  const category = searchParams?.category || ''
  const brand = searchParams?.brand || ''
  const query = searchParams?.query || ''
  const page = Number(searchParams?.page) || 1

  const allCategories = await getAllCategories()
  const allBrands = await getAllBrands()

  const allProducts = await filterProducts({
    category,
    brand,
    query,
    page,
  })

  return (
    <>
      <div className='bg-[#F9FAFB80]'>
        <div className='w-full px-4 xl:w-[75%] lg:w-[90%] mx-auto py-10'>

          {/* 🔍 Search */}
          <Input
            className='w-1/2 mt-2'
            placeholder='Search for products'
          />

          <div className='grid grid-cols-4 mt-8 gap-8'>

            {/* 🔹 Sidebar */}
            <div className='col-span-1 p-6 bg-white rounded-[16px]'>

              {/* Categories */}
              <h3 className='text-[16px] font-bold'>Categories</h3>

              <div className='mt-4'>
                {allCategories?.map((category) => (
                  <div key={category._id} className='flex items-center gap-2 mt-2'>
                    <Filteration
                      name={category.name}
                      id={category._id}
                      type='category'
                    />
                  </div>
                ))}
              </div>

              <PriceRange />

              {/* Brands */}
              <h3 className='text-[16px] font-bold mt-6'>Brands</h3>

              <div className='mt-4'>
                {allBrands?.map((brand) => (
                  <div key={brand._id} className='flex items-center gap-2 mt-2'>
                    <Filteration
                      name={brand.name}
                      id={brand._id}
                      type='brand'
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* 🔹 Products */}
            <div className='col-span-3'>
              <div className='grid grid-cols-4 gap-4'>
                {allProducts?.map((product: ProductType) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}
