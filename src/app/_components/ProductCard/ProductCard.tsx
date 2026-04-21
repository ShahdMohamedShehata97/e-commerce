import React from "react";
import { ProductCardProps } from "./ProductCard.types";
import Link from "next/link";
import StarRating from "../StartRating/StartRating";
import { CiHeart } from "react-icons/ci";
import { FaRegEye, FaRegHeart } from "react-icons/fa6";
import { TfiReload } from "react-icons/tfi";

import AddToCartButton from "../AddToCarButton/AddToCartButton";
import AddwishList from "../AddToWishList/AddwishList";

export default function ProductCard({ product }: ProductCardProps) {
  const discountPersantage =
    100 - (100 * product.priceAfterDiscount) / product.price;


   


  const persentage = Math.round(discountPersantage);

  // console.log('dis',discountPersantage)

  return (
    <div className="border px-4 rounded-lg shadow-sm relative pb-3 hover:shadow-2xl hover:-translate-y-1 transition-all">
      <img
        src={product.imageCover}
        alt={product.title}
        className="w-full h-48 object-cover rounded-md"
      />

      {product.priceAfterDiscount && (
        <div className="bg-[#FB2C36] px-1 rounded-[5px] w-fit absolute top-3.25 left-3 text-[12px] text-white font-medium ">
          {" "}
          {Number(persentage)} %{" "}
        </div>
      )}

      {/* <div className="w-8 h-8 shadow rounded-full hover:text-[#16A34A] bg-white text-[#4A5565] flex justify-center items-center absolute  top-3.25 right-2  ">
        <FaRegHeart />
      </div> */}

      < AddwishList id={product.id} name='' className='' icon={<></>}/>

      <div className="w-8 h-8 shadow rounded-full hover:text-[#16A34A] bg-white font-bold  text-[#4A5565] flex justify-center items-center absolute  top-14 right-2 ">
        <TfiReload className="stroke-0.8" size={18} />
      </div>

      <Link href={`/productDetails/${product.id}`}  className="w-8 h-8 shadow rounded-full hover:text-[#16A34A] bg-white text-[#4A5565] flex justify-center items-center absolute  top-25 right-2">
        <FaRegEye />
      </Link>
      <div>
        <div className="text-[12px] font-medium text-[#6A7282] mt-4">
          {product.category.name}
        </div>

        <Link href={"#"} className="text-[16px] text-[#364153] font-medium">
          {product.title.split(" ", 6).join(" ")}
        </Link>

        <div className="flex gap-2 items-center mt-4">
          <StarRating rating={product.ratingsAverage} />
          <p className="text-[12px] font-medium text-[#6A7282]">
            {`${product.ratingsAverage} (${product.ratingsQuantity})`}{" "}
          </p>
        </div>

        {product.priceAfterDiscount ? (
          <div>
            <div className="flex justify-between mt-3 items-center">
              <div className="">
                <p className="text-[18px] font-bold text-[#16A34A] ">
                  {product.priceAfterDiscount} EGP{" "}
                </p>
                <p className="text-[15px] font-medium text-[#6A7282] line-through ">
                  {product.price} EGP{" "}
                </p>
              </div>

              <AddToCartButton icon={<></>} id={product.id} className='' name=""/>
            </div>
          </div>
        ) : (
          <div className="flex justify-between mt-3 items-center">
            <p className="text-[18px] font-bold ">{product.price} EGP </p>

          <AddToCartButton id={product.id}  icon={<></>}   className='' name=''/>
          </div>
        )}
      </div>
    </div>
  );
}
