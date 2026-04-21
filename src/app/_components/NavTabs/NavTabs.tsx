import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { FaCheck, FaStar, FaTruck } from "react-icons/fa6"
import { MdInventory } from "react-icons/md"
import ReviewSummary from "../RatingPath/RatingPath"
import { FaShippingFast, FaUndo, FaShieldAlt } from 'react-icons/fa';

import { HiCheck } from 'react-icons/hi'; // أيقونة الصح الخضراء

export function TabsDemo() {
  return (
    <Tabs defaultValue="overview" className="w-full">
     
        <TabsList >
        <TabsTrigger value="overview" className="text-[16px] font-medium text-[#4A5565]! flex items-center justify-center "><MdInventory /> Product Details</TabsTrigger>
        <TabsTrigger value="Reviews" className="text-[16px] font-medium text-[#4A5565]! flex items-center justify-center "><FaStar /> Reviews (18)</TabsTrigger>
        <TabsTrigger value="Shipping & Returns" className="text-[16px] font-medium text-[#4A5565]!  flex items-center justify-center   "><FaTruck /> Shipping & Returns</TabsTrigger>
       
      </TabsList>
      
      <TabsContent value="overview">
        <Card>
          <CardHeader>
            <CardTitle></CardTitle>
            <CardDescription>
                   <div className="p-6 bg-white font-sans text-[#4a5568]">
      {/* العنوان العلوي */}
      <h2 className="text-lg font-bold mb-2">About this Product</h2>
      <p className="text-sm mb-6">
        Material <span className="font-medium">Polyester Blend</span> Colour Name <span className="font-medium">Multicolour</span> Department <span className="font-medium">Women</span>
      </p>

      {/* الحاويات السفلية */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        {/* صندوق معلومات المنتج - Product Information */}
        <div className="bg-[#F9FAFB] p-5 rounded-lg ">
          <h3 className="text-md font-bold mb-4">Product Information</h3>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-500">Category</span>
              <span className="font-medium text-right">Women's Fashion</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Subcategory</span>
              <span className="font-medium text-right">Women's Clothing</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Brand</span>
              <span className="font-medium text-right">DeFacto</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Items Sold</span>
              <span className="font-medium text-right">4.565875507206704e+305+ sold</span>
            </div>
          </div>
        </div>

        {/* صندوق المميزات - Key Features */}
        <div className="bg-[#F9FAFB] p-5 rounded-lg ">
          <h3 className="text-md font-bold mb-4">Key Features</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <FaCheck className="text-green-500 text-lg" />
              <span>Premium Quality Product</span>
            </li>
            <li className="flex items-center gap-2">
              <FaCheck className="text-green-500 text-lg" />
              <span>100% Authentic Guarantee</span>
            </li>
            <li className="flex items-center gap-2">
              <FaCheck className="text-green-500 text-lg" />
              <span>Fast & Secure Packaging</span>
            </li>
            <li className="flex items-center gap-2">
              <FaCheck className="text-green-500 text-lg" />
              <span>Quality Tested</span>
            </li>
          </ul>
        </div>

      </div>
    </div>
            </CardDescription>
          </CardHeader>




          <CardContent className="text-sm text-muted-foreground">
            You have 12 active projects and 3 pending tasks.
          </CardContent>
        </Card>
      </TabsContent>




      <TabsContent value="Reviews">
        <Card>
          <CardHeader>
            <CardTitle></CardTitle>
            <CardDescription>
             
            </CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
         <ReviewSummary/>
          </CardContent>
        </Card>
      </TabsContent>


      <TabsContent value="Shipping & Returns">
        <Card>
          <CardHeader>
            <CardTitle></CardTitle>
            <CardDescription>
              
            </CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
              <div className="bg-white p-2 font-sans">
      <div className="max-w-6xl mx-auto space-y-6">
        
       
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
        
          <div className="bg-[#f0fdf4] border border-green-100 rounded-xl p-6 shadow-sm">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-[#16a34a] p-3 rounded-full text-white">
                <FaShippingFast size={24} />
              </div>
              <h2 className="text-xl font-bold text-gray-800">Shipping Information</h2>
            </div>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-700">
                <HiCheck className="text-green-600" /> Free shipping on orders over $50
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <HiCheck className="text-green-600" /> Standard delivery: 3-5 business days
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <HiCheck className="text-green-600" /> Express delivery available (1-2 business days)
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <HiCheck className="text-green-600" /> Track your order in real-time
              </li>
            </ul>
          </div>

         
          <div className="bg-[#f0fdf4] border border-green-100 rounded-xl p-6 shadow-sm">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-[#16a34a] p-3 rounded-full text-white">
                <FaUndo size={24} />
              </div>
              <h2 className="text-xl font-bold text-gray-800">Returns & Refunds</h2>
            </div>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-700">
                <HiCheck className="text-green-600" /> 30-day hassle-free returns
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <HiCheck className="text-green-600" /> Full refund or exchange available
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <HiCheck className="text-green-600" /> Free return shipping on defective items
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <HiCheck className="text-green-600" /> Easy online return process
              </li>
            </ul>
          </div>
        </div>

        
        <div className="bg-[#F9FAFB] border border-gray-100 rounded-xl p-6 shadow-sm flex flex-col md:flex-row items-center gap-6">
          <div className="bg-gray-100 p-4 rounded-full text-gray-600">
            <FaShieldAlt size={32} />
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-1">Buyer Protection Guarantee</h2>
            <p className="text-gray-600 leading-relaxed">
              Get a full refund if your order doesn't arrive or isn't as described. 
              We ensure your shopping experience is safe and secure.
            </p>
          </div>
        </div>

      </div>
    </div>
          </CardContent>
        </Card>
      </TabsContent>

    </Tabs>
  )
}
