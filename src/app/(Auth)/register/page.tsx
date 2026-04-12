import { BadgeCheck, ShieldCheck, Star, Truck } from 'lucide-react'
import React from 'react'
import RegisterForm from './RegisterForm'
import { FaShieldHalved, FaStar, FaTruckFast } from 'react-icons/fa6'

export default function page() {
  return (
    <>

    <div className='flex gap-12 w-[70%] mx-auto mt-10 '> 
           <div className="flex-1 p-8 bg-white font-sans text-[#4B5563]">
      {/* Header Section */}
      <header className="mb-10">
        <h1 className="text-[40px] font-bold text-[#2D3E50] leading-tight mb-4">
          Welcome to <span className="text-[#2ECC71]">FreshCart</span>
        </h1>
        <p className="text-[18px] text-[#4B5563] leading-relaxed">
          Join thousands of happy customers who enjoy fresh groceries delivered right to their doorstep.
        </p>
      </header>

      {/* Features List */}
      <div className="space-y-8 mb-12">
        {/* Feature 1 */}
        <div className="flex items-start gap-4">
          <div className="shrink-0 w-12 h-12 bg-[#BBF7D0] rounded-full flex items-center justify-center">
            <FaStar className="text-[#16A34A] w-6 h-6" />
          </div>
          <div>
            <h3 className="text-[20px] font-bold text-[#2D3E50]">Premium Quality</h3>
            <p className="text-[16px]">Premium quality products sourced from trusted suppliers.</p>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="flex items-start gap-4">
          <div className="shrink-0 w-12 h-12 bg-[#BBF7D0] rounded-full flex items-center justify-center">
            <FaTruckFast className="text-[#16A34A] w-6 h-6" />
          </div>
          <div>
            <h3 className="text-[20px] font-bold text-[#2D3E50]">Fast Delivery</h3>
            <p className="text-[16px]">Same-day delivery available in most areas</p>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="flex items-start gap-4">
          <div className="shrink-0 w-12 h-12 bg-[#BBF7D0] rounded-full flex items-center justify-center">
            <FaShieldHalved className="text-[#16A34A] w-6 h-6" />
          </div>
          <div>
            <h3 className="text-[20px] font-bold text-[#2D3E50]">Secure Shopping</h3>
            <p className="text-[16px]">Your data and payments are completely secure</p>
          </div>
        </div>
      </div>

      {/* Testimonial Card */}
      <div className="border border-gray-100 rounded-[20px] p-6 shadow-sm">
        <div className="flex items-center gap-4 mb-4">
          {/* Avatar Placeholder */}
          <div className="w-14 h-14 bg-[#D1FAE5] rounded-full flex items-center justify-center overflow-hidden border-2 border-white shadow-sm">
             <img 
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah" 
              alt="Sarah" 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h4 className="font-bold text-[#2D3E50] text-[17px]">Sarah Johnson</h4>
            <div className="flex gap-0.5">
              {[...Array(5)].map((i) => 
                <Star key={i} size={16} className="fill-[#FACC15] text-[#FACC15]" />
              )}
            </div>
          </div>
        </div>
        <p className="italic text-[16px] leading-relaxed text-[#4B5563]">
          "FreshCart has transformed my shopping experience. The quality of the products is outstanding, and the delivery is always on time. Highly recommend!"
        </p>
      </div>
    </div>

    <div className='flex-1 py-10 rounded-[16px] h-fit shadow px-6'>
      <RegisterForm/>
    </div>
    
    </div>

 
    
    </>
  )
}
