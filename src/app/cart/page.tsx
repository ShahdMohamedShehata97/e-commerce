import { getUserCart } from '@/api/services/route.services'
import { CartResponse } from '@/api/types'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'
import { IoShieldHalfOutline } from "react-icons/io5";
import { FaBagShopping, FaCartShopping, FaLock, FaTag, FaTrash, FaTruck } from 'react-icons/fa6'
import { IoIosCheckmark } from 'react-icons/io'
import RemoveProductFromCart from './RemoveProductFromCart'
import UpdateProductCountButton from './UpdateProductCountButton'
import { LuPackageOpen } from 'react-icons/lu';
import { HiOutlineArrowRight } from 'react-icons/hi'


export default async function cart() {

   const userCart= await getUserCart()

   if(!userCart){
    return 
   }

const categories = ['Electronics', 'Fashion', 'Home', 'Beauty'];
   
   const{totalCartPrice,products} = (userCart as CartResponse)
   
  //  console.log('priccccccccc',products[0].price)
    
  return (
    
    <>
   {userCart.products.length === 0 ?
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center font-sans">
      
     
     <div className='w-50 h-50 rounded-full bg-gray-400'>
       <LuPackageOpen size={60}  />

     </div>

     
      <h2 className="text-2xl font-bold text-slate-900 mb-2">
        Your cart is empty
      </h2>
      <p className="text-slate-500 text-sm md:text-base max-w-xs md:max-w-md leading-relaxed mb-8">
        Looks like you haven't added anything to your cart yet. Start exploring our products!
      </p>

      
      <Link href='/' className="flex items-center gap-2 bg-[#16A34A] hover:bg-[#15803D] text-white px-8 py-3 rounded-xl font-bold transition-all shadow-lg shadow-emerald-100 mb-12">
        Start Shopping
        <HiOutlineArrowRight size={20} />
      </Link>

     
      <div className="w-full max-w-md">
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-px bg-slate-100 flex-1"></div>
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest">
            Popular Categories
          </span>
          <div className="h-px bg-slate-100 flex-1"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <Link href='/category'
              key={cat}
              className="px-5 mb-3 py-2 bg-slate-50 hover:bg-slate-100 text-slate-600 text-sm font-medium rounded-full border border-slate-100 transition-colors"
            >
              {cat}
            </Link>
          ))}
        </div>
      </div>
    </div>: <div className='bg-[#F9FAFB] min-h-screen pt-8'>
    
     <div className='w-full px-4 lg:w-[73%] lg:px-0 mx-auto '>

      <div>
        <div  className='flex gap-2'>
          <Link href="/" className='text-[14px] font-medium text-[#6A7282] '>Home</Link>

          <span className='text-[14px] font-medium text-[#6A7282] '>/</span>
          <span className='text-[14px] font-medium text-[#101828] '> Shopping Cart</span>
        </div>

        <div className='mt-4 flex gap-3'>

          <div className='w-12 h-12 bg-linear-to-r from-[#16A34A]  to-[#15803D] flex items-center justify-center rounded-[12px]'>

            <FaCartShopping color='white' size={30}/>

          </div>
          <p className='text-[30px] font-bold'>FaCartShopping</p>
        </div>

        <p className='text-[16px] font-semibold text-[#6A7282] '>You have <span className='text-[#16A34A] mt-3'>{products.length} </span>in your cart</p>
      </div>



      <div className='md:grid grid-cols-12 gap-8'>




        <div className='col-span-8  '>

          <div className=''>
          {products?.map((item)=> 
          <div key={item.product.id} className=' bg-white mt-8 p-5  rounded-[16px] flex justify-between'>
          <div className='flex gap-6'>


               <div className="flex flex-col w-fit">
  
  <img
    src={item.product.imageCover}
    alt={item.product.title}
    className="h-32 w-32 rounded-[12px]"
  />

  <Link
    href={"./productDetails"}
    className="flex items-center text-white mt-2 bg-[#00C950] text-[10px] font-semibold px-2 py-1 rounded-2xl self-end"
  >
    <IoIosCheckmark />
    In Stock
  </Link>

            </div>

              <div>
                <p className='text-[18px] font-semibold'>{item.product.title}</p>
                <div className='flex gap-2 mt-2 items-center'>
                  <span className='bg-linear-to-r from-[#F0FDF4] to-[#F3F4F6] text-[#15803D] flex items-center px-2 rounded-2xl font-medium text-[12px] '>{item.product.category.name}</span>
                  <span className='text-[12px] font-medium text-[#99A1AF] '>.</span>
                  <span className='text-[12px] font-medium text-[#99A1AF]'>SKU: 5CA0AD</span>
                </div>

                <div className='flex gap-2 mt-3 '>
                  <p className='text-[#16A34A] text-[18px] font-bold '>{item.price} EGP</p>
                  <span className='text-[12px] font-medium text-[#99A1AF] '>per unit</span>
                  
                </div >

                <div className='mt-4 flex gap-1.5 bg-[#E5E7EB] p-1.5  rounded-[12px] w-30.5 justify-around'>
                  <UpdateProductCountButton id={item.product.id} newCount={item.count - 1} className=''/>
                  <p className='text-[16px] font-bold '>{item.count}</p>
                  {/* <button  className ='bg-[#16A34A] text-white px-2 font-bold rounded-[5px]'>+</button> */}
                  <UpdateProductCountButton isIncrement id={item.product.id} newCount={item.count + 1}  className=''/>
                </div>
              </div>

          </div>


          <div className='flex gap-2 items-end'>

            <div >
              <p className='text-[#99A1AF] text-[12px] font-medium '>Total</p>
              <p className='text-[20px] font-bold '>{item.price * item.count} <span className='text-[#99A1AF] text-[12px] font-medium '>EGP</span></p>

              
            </div>

            <RemoveProductFromCart id={item.product.id}/>


          </div>
              
              
            </div>)}
          </div>
        </div>


        <div className='col-span-4 mt-8'>
          
          <div className=''>
            <div className='bg-linear-to-r from-[#16A34A] px-6 py-4 to-[#15803D] rounded-t-[16px] '>
              <div className='flex gap-2 items-center'>
                <FaBagShopping color='white' />
               <p className='text-[18px] font-bold  text-white '>Order Summary</p>
              </div>
              <p className='text-[14px]  box-border font-medium text-white mt-2'>{products.length} items in your cart</p>
            </div>

            <div className='bg-white p-6 rounded-b-[16px]'>

              <div className='flex items-center gap-1 p-4 rounded-[12px] bg-linear-to-r from-[#F0FDF4] to-[#F3F4F6] '>

                <div className='w-10 h-10 rounded-full flex items-center justify-center bg-[#DCFCE7]'>
                  <FaTruck  color='#00A63E'/>
                </div>

                <div>
                <p className='text-[16px] font-semibold text-[#008236] '>Free Shipping!</p>
                <p className='text-[14px] font-medium text-[#008236] '>You qualify for free delivery</p>
                <p></p>

                </div>
              </div>


              <div className='mt-5'>

              <div className='flex justify-between'>
                <p className='text-[16px] text-[#4A5565] font-medium '>Subtotal</p>


                <p className='text-[16px] text-[#101828] font-medium '>{totalCartPrice} EGP</p>
              </div>

              
              <div className='flex justify-between mt-3'>
                <p className='text-[16px] text-[#4A5565] font-medium '>Shipping</p>


                <p className='text-[16px] text-[#00A63E] font-medium '>FREE</p>
              </div>

              <div className='flex justify-between mt-3 pt-3 border-t border-dashed'>
                <p className='text-[16px] text-[#101828] font-semibold '>Total</p>


                <p className='text-[16px] text-[#101828] font-bold '>{totalCartPrice} <span className='text-[14px] font-medium text-[#6A7282] '>EGP</span></p>
              </div>



            </div>

            <div className='mt-5 '>
              <Button className='text-[16px] text-[#4A5565] font-medium  cursor-pointer py-2! bg-transparent w-full border border-gray-500 border-dashed'>
                <FaTag />Apply Promo Code</Button>
              <Link href={`/completeOrder/${userCart._id}`} className='text-[16px] flex items-center gap-2 justify-center text-white font-medium  cursor-pointer mt-5  bg-linear-to-r from-[#16A34A] to-[#15803D] py-2 rounded-[12px] w-full '>
                <FaLock />Secure Checkout</Link>
            </div>

            <div className='mt-5 flex mx-auto gap-2 justify-center'>
              <div  className='flex gap-2'>
               <IoShieldHalfOutline color='#00C950' />
                <p className='text-[12px] font-medium text-[#6A7282] '>Secure Payment</p>
              </div>
              <div className='w-px h-4 bg-gray-500'></div>

              < FaTruck color='#2B7FFF' />
                <p className='text-[12px] font-medium text-[#6A7282] '>Fast Delivery</p>
              </div>

              <Link href={'/'} className='mt-7 flex justify-center  text-[14px] font-medium text-[#16A34A] '>← Continue Shopping</Link>
              
            </div>





            </div>




            
          </div>


        </div>


      </div>
    </div>}
    </>
  )
}
