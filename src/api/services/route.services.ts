import { decodeAuthenticatedUserToken } from "@/app/utils"
import { AddressType, BrandType, CartResponse, CategoryType, OrderType, ProductType } from "../types"
// import { type } from './../../app/(Auth)/register/registerObjectType';
import { id } from "zod/v4/locales";

export   async function getAllProducts() : Promise<ProductType[] | undefined>{
   try {
       const resp= await  fetch(`https://ecommerce.routemisr.com/api/v1/products`,{
        cache:'force-cache'
       })

   const finalRes=await resp.json()

 
  return finalRes.data
    
   } catch (error) {
    console.log('error',error)
    
   }
  }


  export   async function getProductDetails(id:string) : Promise<ProductType | undefined>{
   try {
       const resp= await  fetch(`https://ecommerce.routemisr.com/api/v1/products/${id}`)

   const finalRes=await resp.json()

  
  return finalRes.data
    
   } catch (error) {
    console.log('error',error)
    
   }
  }


  export   async function getAllCategories() : Promise<CategoryType[] | undefined>{
   try {
       const resp= await  fetch(`https://ecommerce.routemisr.com/api/v1/categories`)

   const finalRes=await resp.json()

 
  return finalRes.data
    
   } catch (error) {
    console.log('error',error)
    
   }
  }


  export   async function getUserCart() : Promise<CartResponse  | undefined>{

    const userToken= await decodeAuthenticatedUserToken()

    console.log('userTokennn',userToken)

    if(userToken){
         try {
       const resp= await  fetch(`https://ecommerce.routemisr.com/api/v2/cart`,
        {headers:{token:userToken},
        // cache:'force-cache',
        // next:{tags:['getUserCart']}
    
    
    })

   const finalRes=await resp.json()


  return finalRes.data
    
   } catch (error) {
    console.log('error',error)
    
   }
    }
 
    else{
        return  undefined
    }
  
  }


  export   async function getAllBrands() : Promise<BrandType[] | undefined>{
   try {
       const resp= await  fetch(`https://ecommerce.routemisr.com/api/v1/brands`,{
        cache:'force-cache'
       })

   const finalRes=await resp.json()

   console.log('finalRes brands',finalRes)
  return finalRes.data
    
   } catch (error) {
    console.log('error',error)
    
   }
  }


  export   async function getLogedInUserAddres():Promise<AddressType[] | undefined> {

    const userToken= await decodeAuthenticatedUserToken()

    

    if(userToken){
         try {
       const resp= await  fetch(`https://ecommerce.routemisr.com/api/v1/addresses`,
        {headers:{token:userToken},cache:'no-store',next:{revalidate:0}
        // cache:'force-cache',
        // next:{tags:['getUserCart']}
    
    
    })

   const finalRes=await resp.json()

   
  return finalRes.data
    
   } catch (error) {
    console.log('error',error)
    
   }
    }
 
    else{
        // return  undefined
    }
  
  }



  export   async function getAllProductsOfSpacificCategory(id:string) : Promise<ProductType[] | undefined>{
   try {
       const resp= await  fetch(`https://ecommerce.routemisr.com/api/v1/products/?category=${id}`,{
        cache:'force-cache'
       })

   const finalRes=await resp.json()

  return finalRes.data
    
   } catch (error) {
    console.log('error',error)
    
   }
  }

   export   async function getAllProductsOfSpacificCategoryyyy(id:string,type:string) : Promise<ProductType[] | undefined>{
   try {
       const resp= await  fetch(`https://ecommerce.routemisr.com/api/v1/products/?${type}[in]=${id}`,
      {
        cache: 'no-store', // 🔥 مهم
      })

      if(resp.ok){
        const finalRes=await resp.json()

  
  return finalRes.data
      }
    
   } catch (error) {
    console.log('error',error)
    
   }
  }



   export   async function getAllOrders() : Promise<OrderType[] | undefined>{
   try {
       const resp= await  fetch(`https://ecommerce.routemisr.com/api/v1/orders/`,{
        cache:'force-cache'
       })

   const finalRes=await resp.json()

   
  return finalRes.data
    
   } catch (error) {
    console.log('error',error)
    
   }
  }


//   export async function filterProducts(params: {
//   id: string
//   type: string
// }):Promise<ProductType[] | undefined>{
 
//     try {

//       const res= await fetch (`https://ecommerce.routemisr.com/api/v1/products/?${params.type}=${params.id}`,
//         {cache:'no-store'})

//     if(res.ok){
//       const finalRes= await res.json()

//       return finalRes.data
//     }
//     else{
//       return undefined
//     }
      
//     } catch (error) {
      
//     }


//   }


export async function filterProducts({
  category,
  brand,
  query,
  page,
}:{
  category:string,
  brand:string,
  query:string,
  page:number,
}) {
  try {
    const params = new URLSearchParams();

    if (category) params.append('category', category); // 👈 أهم تعديل
    if (brand) params.append('brand', brand);
    if (query) params.append('keyword', query);
    if (page) params.append('page', page.toString());

    const url = `https://ecommerce.routemisr.com/api/v1/products?${params.toString()}`;

    console.log("FINAL URL:", url);

    const res = await fetch(url, {
      cache: 'no-store',
    });

    const data = await res.json();

    return data.data;
  } catch (error) {
    console.log(error);
    return [];
  }
}

 export   async function getUserWishList():Promise<ProductType[] | undefined>{

    const userToken= await decodeAuthenticatedUserToken()

   

    if(userToken){
         try {
       const resp= await  fetch(`https://ecommerce.routemisr.com/api/v1/wishlist`,
        {headers:{token:userToken},
        // cache:'force-cache',
        // next:{tags:['getUserCart']}
    
    
    })

   const finalRes=await resp.json()


  return finalRes.data
    
   } catch (error) {
    console.log('error',error)
    
   }
    }
 
    else{
        return undefined
    }
  
  }
 







  



