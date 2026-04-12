"use client";

import { useState, useRef } from "react";

// استيراد Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// استيراد Swiper modules المطلوبة (التنقيط، التحكم بالكيبورد، والسحب الحر للـ Thumbnails)
import { Pagination, Keyboard, Mousewheel, FreeMode } from "swiper/modules";

// استيراد Swiper styles الأساسية
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

export default function ProductImages({ productDetails }: any) {
  // نحتفظ بـ index الصورة الكبيرة لمزامنتها مع الـ Thumbnails
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  // مرجع (ref) للسلايدر الرئيسي للتحكم به برمجياً
  const mainSwiperRef = useRef<any>(null);

  const images = [
    productDetails?.imageCover,
    ...(productDetails?.images || []),
  ].filter(Boolean);

  if (images.length === 0) return null;

  // دالة للانتقال لصورة محددة في السلايدر الرئيسي
  const handleThumbnailClick = (index: number) => {
    if (mainSwiperRef.current && mainSwiperRef.current.swiper) {
      mainSwiperRef.current.swiper.slideToLoop(index);
    }
  };

  return (
    <div className="p-3 bg-white border border-gray-100 rounded-[12px] shadow-sm font-sans relative">
      
      {/* 1. السلايدر الرئيسي (الصورة الكبيرة) */}
      <Swiper
        ref={mainSwiperRef} // ربط الـ ref للسلايدر الرئيسي
        // Modules المستخدمة (بدون Navigation)
        modules={[Pagination, Keyboard, Mousewheel]}
        // الإعدادات
        slidesPerView={1}
        spaceBetween={10}
        loop={true} // يلف ويرجع للأول
        keyboard={{ enabled: true }} // تحكم بالكيبورد
        mousewheel={{ forceToAxis: true }} // تحكم بالماوس (اختياري)
        
        // ربط السلايدر بتغيير الـ state الخاصة بنا للمزامنة مع الـ thumbnails
        onSlideChange={(swiper) => setActiveSlideIndex(swiper.realIndex)}
        
        // تخصيص التنقيط (Pagination)
        // pagination={{ 
        //   clickable: true,
        //   el: ".swiper-pagination-custom",
        //   type: "bullets",
        //   bulletClass: "swiper-pagination-bullet bg-gray-300 w-2.5 h-2.5 opacity-100",
        //   bulletActiveClass: "bg-green-500 w-6 h-2.5 rounded-full transition-all duration-300",
        // }}
        
        className="w-full mb-8 relative group"
      >
        {images.map((img, index) => (
          <SwiperSlide key={`main-${index}`} className="flex items-center justify-center ">
            <img
              src={img}
              alt={`Product Main Image ${index + 1}`}
              className="max-w-full max-h-full object-contain rounded-xl select-none"
            />
          </SwiperSlide>
        ))}

        {/* حاوية التنقيط (Pagination Container) - تبقى النقاط موجودة */}
        <div className="swiper-pagination-custom flex justify-center gap-1.5 absolute bottom-4 left-1/2 -translate-x-1/2 z-10"></div>
      </Swiper>

      {/* 2. السلايدر المصغر (Thumbnails Carousel) */}
      <div className="border-t border-gray-100 pt-5 mt-5">
        <Swiper
          modules={[FreeMode]}
          slidesPerView={"auto"} // يسمح للصور المصغرة أن تأخذ عرضها الطبيعي
          spaceBetween={12}
          freeMode={true} // يسمح بالسحب الحر دون التوقف عند كل صورة
          watchSlidesProgress={true}
          className="thumbnails-swiper"
        >
          {images.map((img, index) => (
            <SwiperSlide key={`thumb-${index}`} style={{ width: "auto" }}>
              <div
                onClick={() => handleThumbnailClick(index)} // استدعاء الدالة للانتقال عند الضغط
                className={`w-[70px] h-[70px] p-1 rounded-lg cursor-pointer border-2 transition-all duration-300 flex items-center justify-center ${
                  activeSlideIndex === index
                    ? "border-green-500 bg-white"
                    : "border-gray-100 bg-gray-50 hover:border-gray-200"
                }`}
              >
                <img
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-contain rounded-md"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* CSS مخصص لإخفاء سكرولبار السلايدر المصغر */}
      <style jsx global>{`
        .thumbnails-swiper {
          padding-bottom: 2px;
        }
        .thumbnails-swiper .swiper-wrapper {
          scrollbar-width: none; /* Firefox */
          -ms-overflow-style: none; /* IE */
        }
        .thumbnails-swiper .swiper-wrapper::-webkit-scrollbar {
          display: none; /* WebKit */
        }
      `}</style>

    </div>
  );
}