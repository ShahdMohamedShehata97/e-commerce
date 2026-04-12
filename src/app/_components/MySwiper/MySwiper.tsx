"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import swiperImage from "@/assets/images/swiper.png";
import Image from "next/image";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import Link from "next/link";

export default function MySwiper() {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      loop
      navigation
      pagination={{
        clickable: true,
        renderBullet(index, className) {
          return `<span class="${className} w-3! h-3! bg-white!"> </span>`;
        },
        bulletActiveClass: "w-5! h-1! opacity-100! rounded-xl!",
      }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide className="w-full relative">
        <Image
          src={swiperImage}
          alt="Swiper Image"
          className="w-full h-100 object-cover"
        />

        <div className="absolute top-0 left-0 w-full h-full bg-linear-to-r from-[#00C950E5] to-[#05DF7280]">
          {/* <div className="flex flex-col justify-center w-[73%] mx-auto h-100">
            <h2 className="text-3xl font-bold text-white">
              Fresh Products Delivered <br />
              to your Door
            </h2>
            <p className="text-[16px] font-medium text-white mt-4">
              Get 20% off your first order
            </p>

           <div className="flex gap-2">
             <Link href='/products' className="w-35.5 h-11 rounded-[8px] px-6 py-2 border bg-white text-[16px] text-[#00C950] font-semibold flex items-center justify-center mt-4">Shop Now</Link>
            <Link href='/products' className="w-35.5 h-11 rounded-[8px] px-6 py-2 bg-transparent text-[16px] text-white font-semibold flex items-center justify-center mt-4 border">View Details</Link>

           </div>

          </div> */}

          <div className="flex flex-col justify-center w-[73%] mx-auto h-100">
  
  <h2 className="text-3xl font-bold text-white opacity-0 translate-y-10 animate-fadeUp">
    Fresh Products Delivered <br />
    to your Door
  </h2>

  <p className="text-[16px] font-medium text-white mt-4 opacity-0 translate-y-10 animate-fadeUp delay-200">
    Get 20% off your first order
  </p>

  <div className="flex gap-2 opacity-0 translate-y-10 animate-fadeUp delay-400">
    <Link href='/products' className="w-35.5 h-11 rounded-[8px] px-6 py-2 border bg-white text-[16px] text-[#00C950] font-semibold flex items-center justify-center mt-4">
      Shop Now
    </Link>
    <Link href='/products' className="w-35.5 h-11 rounded-[8px] px-6 py-2 bg-transparent text-[16px] text-white font-semibold flex items-center justify-center mt-4 border">
      View Details
    </Link>
  </div>

</div>
        </div>
      </SwiperSlide>

      <SwiperSlide className="w-full relative">
        <Image
          src={swiperImage}
          alt="Swiper Image"
          className="w-full h-100 object-cover"
        />

        <div className="absolute top-0 left-0 w-full h-full bg-linear-to-r from-[#00C950E5] to-[#05DF7280]">
             <div className="flex flex-col justify-center w-[73%] mx-auto h-100">
            <h2 className="text-3xl font-bold text-white">
              Premium Quality
              <br /> Guaranteed
            </h2>
            <p className="text-[16px] font-medium text-white mt-4">
             Fresh from farm to your table
            </p>

           <div className="flex gap-2">
             <Link href='/products' className="w-35.5 h-11 rounded-[8px] px-6 py-2 border bg-white text-[16px] text-[#2b7fff] font-semibold flex items-center justify-center mt-4">Shop Now</Link>
            <Link href='/products' className="w-35.5 h-11 rounded-[8px] px-6 py-2 bg-transparent text-[16px] text-white font-semibold flex items-center justify-center mt-4 border">Learn More</Link>

           </div>

          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide className="w-full relative">
        <Image
          src={swiperImage}
          alt="Swiper Image"
          className="w-full h-100 object-cover"
        />

        <div className="absolute top-0 left-0 w-full h-full bg-linear-to-r from-[#00C950E5] to-[#05DF7280]">
             <div className="flex flex-col justify-center w-[73%] mx-auto h-100">
            <h2 className="text-3xl font-bold text-white">
            Fast & Free Delivery
            </h2>
            <p className="text-[16px] font-medium text-white mt-4">
           Same day delivery available
            </p>

           <div className="flex gap-2">
             <Link href='/products' className="w-35.5 h-11 rounded-[8px] px-6 py-2 border bg-white text-[16px] text-[#ad46ff] font-semibold flex items-center justify-center mt-4">Order Now</Link>
            <Link href='/products' className="w-35.78 h-11 rounded-[8px] px-6 py-2 bg-transparent text-[16px] text-white font-semibold flex items-center justify-center mt-4 border">Delivery Info</Link>
           </div>

          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
