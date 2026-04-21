import { filterProducts, getAllBrands, getAllCategories } from "@/api/services/route.services"
import { Input } from "@/components/ui/input"
import Filteration from "./Filteration"
import PriceRange from "./SearchSideBar"
import { ProductType } from "@/api/types"
import ProductCard from "../_components/ProductCard/ProductCard"


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

  const search= await  searchParams
   console.log("dAAAAAAAAAAAAAAAAAAAAA",search)
 
  

  const category =  search?.category || ''
  const brand = search?.brand || ''
  const query = search?.query || ''
  const page = Number(search?.page) || 1

  const allCategories = await getAllCategories()
  const allBrands = await getAllBrands()

  const allProducts = await filterProducts({
    category,
    brand,
    query,
    page,
  })
  console.log("daaaaaaaaaaaaaaaaaaata",allProducts)

  return (
    <>
      <div className='bg-[#F9FAFB80]'>
        <div className='w-full px-4 xl:w-[75%] lg:w-[90%] mx-auto py-10'>
[4/18/2026 12:16 AM] Shahd: {/* 🔍 Search */}
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
