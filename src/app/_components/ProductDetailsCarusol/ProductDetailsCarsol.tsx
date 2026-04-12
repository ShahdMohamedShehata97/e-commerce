'use client'

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { AiOutlineHeart, AiFillHeart, AiOutlineEye } from 'react-icons/ai';
import { HiOutlineRefresh } from 'react-icons/hi';
import { FaStar, FaStarHalfAlt, FaPlus } from 'react-icons/fa';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

// تأكد من استيراد ملفات الـ CSS الخاصة بـ Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import { ProductType } from '@/api/types';
import ProductCard from '../ProductCard/ProductCard';

const ProductCarousel = ({ProductCategory}:{ProductCategory:ProductType[]}) => {
  const products = [
    { id: 1, name: "Woman Shawl", category: "Women's Fashion", price: "191 EGP", rating: 4.8, reviews: 18, image: "https://via.placeholder.com/200", liked: false },
    { id: 2, name: "Woman Shawl", category: "Women's Fashion", price: "149 EGP", rating: 4.8, reviews: 18, image: "https://via.placeholder.com/200", liked: false },
    { id: 3, name: "Woman Shawl", category: "Women's Fashion", price: "149 EGP", rating: 4.8, reviews: 18, image: "https://via.placeholder.com/200", liked: true },
    { id: 4, name: "Woman Shawl", category: "Women's Fashion", price: "349 EGP", rating: 4.2, reviews: 10, image: "https://via.placeholder.com/200", liked: false },
    { id: 5, name: "Woman Shawl", category: "Women's Fashion", price: "200 EGP", rating: 4.5, reviews: 5, image: "https://via.placeholder.com/200", liked: false },
  ];

  return (
    <div className="max-w-7xl mx-auto p-6 bg-white">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-6 bg-[#008e4d] rounded-full"></div>
          <h2 className="text-xl font-bold text-gray-800">
            You May Also <span className="text-[#008e4d]">Like</span>
          </h2>
        </div>
        
        {/* Custom Navigation Buttons */}
        <div className="flex gap-2">
          <button className="prev-btn p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition text-gray-600">
            <IoIosArrowBack size={20} />
          </button>
          <button className="next-btn p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition text-gray-600">
            <IoIosArrowForward size={20} />
          </button>
        </div>
      </div>

      {/* Carousel */}
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        navigation={{
          prevEl: '.prev-btn',
          nextEl: '.next-btn',
        }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
        className="pb-4"
      >
        {ProductCategory.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="group relative border border-gray-100 rounded-xl p-4 transition-all hover:shadow-lg">
              
               <ProductCard product={product}/>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductCarousel;