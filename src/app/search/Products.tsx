// 'use client'
// import { getAllProducts } from '@/api/services/route.services'
// import React, { useEffect, useState } from 'react'
// import ProductCard from '../_components/ProductCard/ProductCard'
// import { ProductType } from '@/api/types'

// export default function Products() {
//   const [products, setProducts] = useState<ProductType[]>([])

//   useEffect(() => {
//     async function fetchProducts() {
//       const data = await getAllProducts()
//       setProducts(data ||[])
//     }

//     fetchProducts()
//   }, [])

//   if (products.length === 0) return <div>Loading...</div>

//   return (
//     <div className="grid grid-cols-4 gap-4">
//       {products.map((product) => (
//         <ProductCard key={product.id} product={product} />
//       ))}
//     </div>
//   )
// }