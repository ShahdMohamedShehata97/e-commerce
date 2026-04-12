
// 'use client'
// import { ProductType } from '@/api/types';
// import React, { useContext, useState } from 'react'
// import { createContext } from 'react'
// import { ReactNode } from 'react';



// const ProductContext=createContext({})



// export default function ProductContextProvider({children,products}:{children:ReactNode,products:ProductType[]}) {
//     const [allProducts, setallProducts] = useState(()=>{

//         return products === undefined ? 0 : products

//     })



//     function setProdcts(newProducts:ProductType[]){
//         setallProducts(newProducts)

//     }



//   return (
//     <ProductContext.Provider value={{allProducts,setProdcts}}>
//         {children}

//     </ProductContext.Provider>
//   )
// }



// export function useProduct(){

//     const res= useContext(ProductContext)
    
//       if(!res){
//         return new  Error ("can't use context out of countext")
        
//       }
    
//      return res

// }

