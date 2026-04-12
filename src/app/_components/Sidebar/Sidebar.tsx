"use client";
import { useState } from "react";
import { MdMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { FaRegHeart, FaCartShopping } from "react-icons/fa6";
import freshCart from '@/assets/images/freshcart-logo.svg'
// import { Image } from 'next/image';
import Image from "next/image";
import Link from "next/link";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* زرار الفتح */}
      <button
        onClick={() => setOpen(true)}
        className="p-3 bg-green-600 rounded-full text-white"
      >
        <MdMenu />
      </button>

      {/* Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 z-40"
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-screen w-[64%] max-w-sm bg-white z-50 transform transition-transform duration-300
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <div className="flex items-center gap-2">
           <Image src={freshCart} alt="Fresh Cart" />
          </div>

          <button
            onClick={() => setOpen(false)}
            className="bg-gray-100 p-2 rounded-full"
          >
            <IoMdClose />
          </button>
        </div>

        {/* Search */}
        <div className="p-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full border rounded-full px-4 py-2 pr-10"
            />
            <div className="absolute right-1 top-1/2 -translate-y-1/2 bg-green-600 w-8 h-8 flex items-center justify-center rounded-full text-white">
              <IoIosSearch />
            </div>
          </div>
        </div>

        {/* Links */}
        <div className="px-4 space-y-4 text-gray-600 font-medium">
          <Link href={'/'} className="text-[16px] font-medium block text-[#364153] hover:text-[#16A34A] hover:bg-[#F0FDF4] py-2 ps-4 rounded-[8px]">Home</Link>
          <Link href={'/shop'} className="text-[16px] font-medium block text-[#364153] hover:text-[#16A34A] hover:bg-[#F0FDF4] py-2 ps-4 rounded-[8px]">Shop</Link> 
          <Link href="/category" className="text-[16px] font-medium block text-[#364153] hover:text-[#16A34A] hover:bg-[#F0FDF4] py-2 ps-4 rounded-[8px]">Categories</Link>
          <Link href={'/'} className="text-[16px] font-medium block text-[#364153] hover:text-[#16A34A] hover:bg-[#F0FDF4] py-2 ps-4 rounded-[8px]">Brands</Link>
        </div>

        {/* Divider */}
        <div className="my-4 border-t"></div>

        {/* Wishlist + Cart */}
        <div className="px-4 space-y-4">
          <Link href='/' className="flex items-center gap-3 hover:bg-[#F0FDF4] ps-2 py-2.5 rounded-[10px]">
            <div className="bg-red-100 p-3 rounded-full text-red-500 hover:bg-[#F0FDF4]">
              <FaRegHeart />
            </div>
            <p className="text-gray-600 font-medium">Wishlist</p>
          </Link>

          <Link href='/' className="flex items-center gap-3 hover:bg-[#F0FDF4] ps-2 py-2.5 rounded-[10px]">
            <div className="bg-green-100 p-3 rounded-full text-green-600 ">
              <FaCartShopping />
            </div>
            <p className="text-gray-600 font-medium">Cart</p>
          </Link>
        </div>

        {/* Divider */}
        <div className="my-4 border-t"></div>

        {/* Buttons */}
        <div className="px-4 flex gap-3 ">
          <button className="w-full bg-green-600 text-white py-3 rounded-xl font-semibold cursor-pointer">
            Sign In
          </button>

          <button className="w-full border border-green-600 text-green-600 py-3 rounded-xl font-semibold cursor-pointer">
            Sign Up
          </button>
        </div>
      </div>
    </>
  );
}