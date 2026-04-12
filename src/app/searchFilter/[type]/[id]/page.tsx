import { filterProducts,getAllProductsOfSpacificCategoryyyy, getAllBrands, getAllCategories } from '@/api/services/route.services'
import { ProductType } from '@/api/types'
import ProductCard from '@/app/_components/ProductCard/ProductCard'
import Filteration from '@/app/search/Filteration'
import PriceRange from '@/app/search/SearchSideBar'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import React from 'react'

export default async function page({params}:{params:Promise<{id:string,type:string}>}) {
    
const id=(await params).id
const type=(await params).type

const allProducts= await getAllProductsOfSpacificCategoryyyy(id,type)
  const allCategories = await getAllCategories()
  const allBrands = await getAllBrands()


//   console.log()

console.log('filterrred pt=roduct',allProducts)

    
  return (
    <>

   <div className='bg-[#F9FAFB80]'>

    <div className='w-full px-4 xl:w-[75%] lg:w-[90%] mx-auto py-10'>
       <div>
            <div className='flex gap-2 '>
      <Link href='/' className='text-[14px] font-medium text-[#6A7282] '>Home</Link>
      <span className='text-[14px] font-medium text-[#6A7282] '>/</span>
      <span className='text-[14px] font-medium  '>Search Results</span>
    </div>

    <Input className='w-1/2 mt-2' placeholder='Search for products'
    />
       </div>

    <div className='grid grid-cols-4 mt-8 gap-8'>

  <div className='col-span-1 p-6 bg-white   rounded-[16px]'>
    <div>
      <h3 className='text-[16px] font-bold'>Categories</h3>
    </div>


    <div className='mt-4'>
        {/* <Filteration/> */}

           {/* {allCategories?.map((category)=><div className='flex items-center gap-2 mt-2'>
           <Filteration name={category.name} id={category._id}/>
           </div>)} */}

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


   

    <div>
        
    <PriceRange/>

    </div>


      <div>
      <h3 className='text-[16px] font-bold'>Brands</h3>
    </div>


    <div className='mt-4'>
        {/* <Filteration/> */}

           {/* {allBrands?.map((brand)=><div className='flex items-center gap-2 mt-2'>
           <Filteration name={brand.name} id={brand._id}/>
           </div>)} */}

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

  <div className='col-span-3 h-screen'>

    {allProducts?.length >0 ?    <div className='grid grid-cols-4 gap-4'>
        {allProducts?.map((product: ProductType)=><ProductCard  product={product}/>)}
        </div>:    <div className='flex justify-center items-center'>
          <p className='font-bold text-2xl'> No Products</p>
        
        </div>}


  </div>

</div>





    </div>

   </div>
   
   </>
  )
}
