"use client"

import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { FaCartShopping, FaIdCard, FaRegUser } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import freshCart from '@/assets/images/freshcart-logo.svg'
import Image from "next/image";
import { BsHeadset } from "react-icons/bs"; 
import { IoIosSearch } from "react-icons/io";
import Sidebar from "../Sidebar/Sidebar"
import { useSession } from "next-auth/react"
// import { CartContextType,  useCart, userCart } from "@/app/_context/CartContext"
import {  CartContextType, useCart } from "@/app/_context/CartContext"
import { useWishList, WishListType } from "@/app/_context/WishListContext"



// const components: { title: string; href: string; description: string }[] = [
//   {
//     title: "Alert Dialog",
//     href: "/docs/primitives/alert-dialog",
//     description:
//       "A modal dialog that interrupts the user with important content and expects a response.",
//   },
//   {
//     title: "Hover Card",
//     href: "/docs/primitives/hover-card",
//     description:
//       "For sighted users to preview content available behind a link.",
//   },
//   {
//     title: "Progress",
//     href: "/docs/primitives/progress",
//     description:
//       "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
//   },
//   {
//     title: "Scroll-area",
//     href: "/docs/primitives/scroll-area",
//     description: "Visually or semantically separates content.",
//   },
//   {
//     title: "Tabs",
//     href: "/docs/primitives/tabs",
//     description:
//       "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
//   },
//   {
//     title: "Tooltip",
//     href: "/docs/primitives/tooltip",
//     description:
//       "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
//   },
// ]















export default function NavigationMenuDemo() {


const session =useSession()
// const userName= session.data?.user?.name
const isUserAuthenticated= session.status === 'authenticated'

const {numberOfCartItems}=(useCart() as CartContextType)

const {numberOfWishListItems}= (useWishList() as WishListType)


  return (
    <NavigationMenu className=" w- full max-w-none justify-between bg-white! z-50  py-2 sticky top-0 flex  gap-4  boreder border-t-2 lg:mt-2">

      
     <div className="flex justify-between w-full xl:w-[73%] mx-auto px-4 xl:px-0 ">
      
       <div className="flex gap-4 ">
        <Image src={freshCart} alt="Fresh Cart"/>
<div className="relative hidden lg:flex w-full max-w-md">

  <input
    type="text"
    placeholder="Search for products, brands and more..."
    className="w-full px-4 pr-10 rounded-full border py-2"
  />

  <div className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-green-700 rounded-full flex justify-center items-center cursor-pointer">
    <IoIosSearch className="text-white" />
  </div>

</div>
      </div>

      <NavigationMenuList>
       

        <NavigationMenuList className="hidden lg:flex">



            <NavigationMenuItem >
          <NavigationMenuLink asChild className="hover:bg-transparent focus:bg-transparent text-[16px] font-medium text-[#364153] hover:text-[#16A34A] ">
            <Link href="/" className="font-medium">Home</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>


         <NavigationMenuItem className="hidden md:flex">
          <NavigationMenuLink asChild className="hover:bg-transparent focus:bg-transparent text-[16px] font-medium text-[#364153] hover:text-[#16A34A] ">
            <Link href="/products" className="font-medium">Shop</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>


      


      <DropdownMenu >
  <DropdownMenuTrigger asChild>
    <div>
      <NavigationMenuItem className="flex">
        <NavigationMenuTrigger
          className="
            bg-transparent 
            border-0 
            shadow-none
            hover:bg-transparent
            focus:bg-transparent
            focus:outline-none
            focus:ring-0
            hover:text-[#16A34A]
            font-medium
          "
        >
          Category
        </NavigationMenuTrigger>
      </NavigationMenuItem>
    </div>
  </DropdownMenuTrigger>
  <DropdownMenuContent className="w-fit px-4">
    <DropdownMenuGroup>
      {/* <DropdownMenuLabel>All Categories</DropdownMenuLabel> */}
      <DropdownMenuItem className="hover:text-[#16A34A]! hover:bg-[#F0FDF4]! text-[16px] font-medium"><Link href='/category'>All Caregories</Link></DropdownMenuItem>
      <DropdownMenuItem className="hover:text-[#16A34A]! hover:bg-[#F0FDF4]! text-[16px] font-medium">Electronics</DropdownMenuItem>
      <DropdownMenuItem className="hover:text-[#16A34A]! hover:bg-[#F0FDF4]! text-[16px] font-medium">Women's Fashion</DropdownMenuItem>
      <DropdownMenuItem className="hover:text-[#16A34A]! hover:bg-[#F0FDF4]! text-[16px] font-medium">Men's Fashion</DropdownMenuItem>
      <DropdownMenuItem className="hover:text-[#16A34A]! hover:bg-[#F0FDF4]! text-[16px] font-medium">Beauty & Health</DropdownMenuItem>
    </DropdownMenuGroup>
 
  </DropdownMenuContent>
</DropdownMenu>
            
        <NavigationMenuItem className="hidden md:flex">
          <NavigationMenuLink asChild className="hover:bg-transparent focus:bg-transparent text-[16px] font-medium text-[#364153] hover:text-[#16A34A]">
            <Link href="/brands" className="font-medium">Brands</Link>
          </NavigationMenuLink>



        </NavigationMenuItem>

        <NavigationMenuItem className="hidden lg:block">
          <a href="#" className="flex gap-2 pe-2.5 border-e-2">
            <div className="w-10 h-10 bg-[#F0FDF4] rounded-full flex justify-center items-center">
              <BsHeadset size={20} color="#16A34A" />
            </div>
            <div>
              <p className="text-[12px] font-medium text-[#99A1AF]">Support</p>
              <p className="text-[12px] font-semibold text-black">24/7 Help</p>
            </div>
          </a>
        </NavigationMenuItem>

     


        </NavigationMenuList>


        <NavigationMenuList className="flex gap-4 ms-4">


        {/* <NavigationMenuItem className="hover:bg-[#F3F4F6] text-[#6A7282] p-3 rounded-full hover:text-[#16A34A]">
           <Link href='/wishList' > <FaRegHeart color=""  size={22}/></Link>
        </NavigationMenuItem> */}

        {/* <NavigationMenuItem className="hover:bg-[#F3F4F6] relative p-3 rounded-full text-[#6A7282] hover:text-[#16A34A]">
           <Link href='/wishList' > <FaRegHeart color=""  size={22}/></Link>
           {isUserAuthenticated && !!numberOfWishListItems &&  <span className='w-4.5 h-4.5 absolute rounded-full flex items-center justify-center bottom-5 left-7 bg-[#16A34A] text-[10px] font-bold text-white'>{numberOfCartItems}</span>}
        </NavigationMenuItem> */}

        <NavigationMenuItem className="hover:bg-[#F3F4F6] relative p-3 rounded-full text-[#6A7282] hover:text-[#16A34A]">
  <Link href='/wishList'>
    <FaRegHeart size={22} />
  </Link>

  {isUserAuthenticated && !!numberOfWishListItems && (
    <span className='w-4.5 h-4.5 absolute rounded-full flex items-center justify-center bottom-5 left-7 bg-[#16A34A] text-[10px] font-bold text-white'>
      {numberOfWishListItems}
    </span>
  )}
</NavigationMenuItem>

        <NavigationMenuItem className="hover:bg-[#F3F4F6] relative p-3 rounded-full text-[#6A7282] hover:text-[#16A34A]">
            <Link href={'/cart'}><FaCartShopping color="" size={22}/></Link>
           {isUserAuthenticated && !!numberOfCartItems &&  <span className='w-4.5 h-4.5 absolute rounded-full flex items-center justify-center bottom-5 left-7 bg-[#16A34A] text-[10px] font-bold text-white'>{numberOfCartItems}</span>}
        </NavigationMenuItem>

            
        <NavigationMenuItem className="hidden lg:block">
          <NavigationMenuLink asChild  >
           {isUserAuthenticated ?  <Link href="/login">
            <FaIdCard  color="#6A7282" size={30}/></Link> :
            
            <Link href="/login">
            <FaRegUser />
            SignIn</Link>}
          </NavigationMenuLink>



        </NavigationMenuItem>
        
       <div className=" block lg:hidden ">
        <Sidebar/>
        </div>
     


        </NavigationMenuList>


      </NavigationMenuList></div>
    </NavigationMenu>
  )
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="flex flex-col gap-1 text-sm">
            <div className="leading-none font-medium">{title}</div>
            <div className="line-clamp-2 text-muted-foreground">{children}</div>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}
