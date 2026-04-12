import Image from "next/image";
import { getAllProducts } from "@/api/services/route.services";
import ProductCard from "./_components/ProductCard/ProductCard";
import MySwiper from "./_components/MySwiper/MySwiper";
import swiperImage from "@/assets/images/swiper.png";
import { FaEnvelope, FaLeaf, FaTag, FaTruck } from "react-icons/fa6";
import { FaShieldAlt } from "react-icons/fa";
import { BsHeadset } from "react-icons/bs";
import { GrRotateLeft } from "react-icons/gr";
import { GiAnticlockwiseRotation } from "react-icons/gi";
import CategorySubCard from "./_components/CategorySubCard/CategorySubCard";
import { HiSparkles } from "react-icons/hi";
import { IoIosArrowRoundForward } from "react-icons/io";
import { lazy, Suspense } from "react";
import { ClipLoader } from "react-spinners";


export default async function Home() {
 const CategorySubPartLazyLoaded= lazy(()=> import ('./_components/CategorySubCard/CategorySubCard'))
  const allProducts = await getAllProducts();
  // console.log("allproducts", allProducts);

  return (
    <>
      <div>
        <MySwiper />
        <div className="bg-[#F9FAFB]">
          <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 py-8 w-full  px-4  md:px-8 lg:px-0 lg:w-[73%] mx-auto gap-4">
            <div className="bg-white flex items-center gap-4 p-4 rounded-[12px] ">
              <div className="w-12 h-12 rounded-full bg-[#FEF2F2] flex justify-center items-center ">
                <FaTruck color="#2B7FFF" />
              </div>
              <div>
                <h3 className="text-[14px] font-semibold text-[#1E2939] ">
                  Free Shipping
                </h3>
                <p className="text-[12px] font-medium text-[#6A7282] ">
                  On orders over 500 EGP
                </p>
              </div>
            </div>

            <div className="bg-white flex items-center gap-4 p-4 rounded-[12px] ">
              <div className="w-12 h-12 rounded-full bg-[#ECFDF5] flex justify-center items-center ">
                <FaShieldAlt color="#00BC7D" />
              </div>
              <div>
                <h3 className="text-[14px] font-semibold text-[#1E2939] ">
                  Secure Payment
                </h3>
                <p className="text-[12px] font-medium text-[#6A7282] ">
                  100% secure transactions
                </p>
              </div>
            </div>

            <div className="bg-white flex items-center gap-4 p-4 rounded-[12px] ">
              <div className="w-12 h-12 rounded-full bg-[#F3F4F6] flex justify-center items-center ">
                <GiAnticlockwiseRotation size={18} color="#FF6900" />
              </div>
              <div>
                <h3 className="text-[14px] font-semibold text-[#1E2939] ">
                  Easy Returns
                </h3>
                <p className="text-[12px] font-medium text-[#6A7282] ">
                  14-day return policy
                </p>
              </div>
            </div>

            <div className="bg-white flex items-center gap-4 p-4 rounded-[12px] ">
              <div className="w-12 h-12 rounded-full bg-[#F9FAFB] flex justify-center items-center ">
                <BsHeadset color="#AD46FF" />
              </div>
              <div>
                <h3 className="text-[14px] font-semibold text-[#1E2939] ">
                  24/7 Support
                </h3>
                <p className="text-[12px] font-medium text-[#6A7282] ">
                  Dedicated support team
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full px-4 lg:w-[73%] lg:px-0 mx-auto ">
         

          <Suspense fallback={ <ClipLoader color='green' />}>
            <CategorySubPartLazyLoaded/>
          </Suspense>

          <div className="md:flex gap-6 mt-20">
            <div className="relative w-full max-w-5xl rounded-3xl overflow-hidden bg-linear-to-br from-[#00BC7D] to-[#007A55] p-8 text-white">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full translate-x-1/3 -translate-y-1/3"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full -translate-x-1/3 translate-y-1/3"></div>

              <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-1 rounded-full text-sm font-medium mb-4">
                🔥 Deal of the Day
              </div>

              <h3 className="text-3xl md:text-4xl font-bold mb-2">
                Fresh Organic Fruits
              </h3>

              <p className="text-sm md:text-base text-white/90 mb-6">
                Get up to 40% off on selected organic fruits
              </p>

              <div className="flex items-center gap-4 mb-6">
                <span className="text-4xl md:text-5xl font-extrabold">
                  40% OFF
                </span>
                <span className="text-sm md:text-base">
                  Use code: <span className="font-semibold">ORGANIC40</span>
                </span>
              </div>

              <button className="flex items-center gap-2 bg-white text-emerald-600 font-semibold px-6 py-3 rounded-full hover:bg-emerald-50 transition">
                Shop Now
                <IoIosArrowRoundForward size={20} />
              </button>
            </div>

            <div className="relative w-full mt-5 md:mt-0 max-w-5xl rounded-3xl overflow-hidden bg-linear-to-br from-[#FF8904] to-[#FF2056] p-8 text-white">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full translate-x-1/3 -translate-y-1/3"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full -translate-x-1/3 translate-y-1/3"></div>

              <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-1 rounded-full text-sm font-medium mb-4">
                <HiSparkles color="yellow" />
                New Arrivals
              </div>

              <h3 className="text-3xl md:text-4xl font-bold mb-2">
                Exotic Vegetables
              </h3>

              <p className="text-sm md:text-base text-white/90 mb-6">
                Discover our latest collection of premium vegetables
              </p>

              <div className="flex items-center gap-4 mb-6">
                <span className="text-4xl md:text-5xl font-extrabold">
                  25% OFF
                </span>
                <span className="text-sm md:text-base">
                  Use code: <span className="font-semibold">FRESH25</span>
                </span>
              </div>

              <button className="flex items-center gap-2 bg-white text-[#FF6900] font-semibold px-6 py-3 rounded-full hover:bg-emerald-50 transition">
                Explore Now
                <IoIosArrowRoundForward size={20} />
              </button>
            </div>
          </div>

          <div className="flex mt-28 ">
            <div className="h-8 w-1.5 bg-linear-to-b from-[#00BC7D] to-[#007A55] rounded-2xl"></div>
            <h2 className="text-3xl font-bold  ps-3 ">
              Featured <span className="text-[#009966]">Products</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-8  ">
            {allProducts?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="p-14 bg-linear-to-br from-[#F3F4F6] via-white to-[#FEF2F2] rounded-[40px] mt-8  md:flex gap-12 items-center">

  {/* LEFT */}
  <div className="">

    {/* Header */}
    <div className="flex gap-3 items-center">
      <div className="w-12 h-12 rounded-xl bg-linear-to-r from-[#00BC7D] to-[#00BBA7] flex justify-center items-center">
        <FaEnvelope color="white" size={18} />
      </div>

      <div className="leading-tight">
        <h3 className="text-sm font-semibold text-[#009966]">
          Newsletter
        </h3>
        <p className="text-xs text-[#6A7282]">
          50,000+ subscribers
        </p>
      </div>
    </div>

    {/* Title */}
    <div className="mt-8 space-y-3">
      <p className="text-[34px] leading-[1.2] font-bold">
        Get the Freshest Updates{" "}
        <span className="text-[#009966]">Delivered Free</span>
      </p>

      <p className="text-[16px] text-[#6A7282]">
        Weekly recipes, seasonal offers & exclusive member perks.
      </p>
    </div>

    {/* Tags */}
    <div className="flex flex-wrap gap-3 mt-6">

      <div className="flex items-center gap-2 bg-white py-2 px-4 border border-[#D0FAE5] rounded-full">
        <div className="w-7 h-7 rounded-full bg-[#D0FAE5] flex items-center justify-center">
          <FaLeaf size={14} color="#009966" />
        </div>
        <span className="text-sm">Fresh Picks Weekly</span>
      </div>

      <div className="flex items-center gap-2 bg-white py-2 px-4 border border-[#D0FAE5] rounded-full">
        <div className="w-7 h-7 rounded-full bg-[#D0FAE5] flex items-center justify-center">
          <FaTruck size={14} color="#009966" />
        </div>
        <span className="text-sm">Free Delivery Codes</span>
      </div>

      <div className="flex items-center gap-2 bg-white py-2 px-4 border border-[#D0FAE5] rounded-full">
        <div className="w-7 h-7 rounded-full bg-[#D0FAE5] flex items-center justify-center">
          <FaTag size={14} color="#009966" />
        </div>
        <span className="text-sm">Members-Only Deals</span>
      </div>

    </div>

    {/* Input */}
    <div className="flex mt-8 gap-4">
      <input
        type="email"
        placeholder="your@example.com"
        className="flex-1 px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500"
      />

      <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-medium">
        Subscribe →
      </button>
    </div>

    <p className="text-xs text-[#99A1AF] mt-3">
      ✨ Unsubscribe anytime. No spam, ever.
    </p>

  </div>

  {/* RIGHT CARD */}
  <div className="relative w-90 h-100 rounded-3xl mt-4 md:mt-0 overflow-hidden
    bg-linear-to-br from-[#101828]  to-[#1E2939]
     shrink-0">

    <div className="absolute -top-20 -right-20 w-55 h-55 bg-green-500/30 blur-[100px] rounded-full" />

    <div className="absolute inset-0 bg-white/5 backdrop-blur-[2px]" />

    <div className="relative z-10 p-6 flex flex-col justify-between h-full text-white">

      <div className="space-y-3">
        <span className="text-xs bg-green-500/20 text-green-300 px-3 py-1 rounded-full">
          MOBILE APP
        </span>

        <h2 className="text-lg font-semibold">
          Shop Faster on Our App
        </h2>

        <p className="text-sm text-white/70">
          Get app-exclusive deals & 15% off your first order.
        </p>
      </div>

      <div className="space-y-3 mt-6">
        <button className="w-full bg-white/10 border border-white/10 px-4 py-3 rounded-xl backdrop-blur-md">
           Download on App Store
        </button>

        <button className="w-full bg-white/10 border border-white/10 px-4 py-3 rounded-xl backdrop-blur-md">
          ▶ Get it on Google Play
        </button>
      </div>

      <div className="flex items-center gap-2 text-sm mt-6">
        <span className="text-yellow-400">★★★★★</span>
        <span className="text-white/60">4.9 · 100K+ downloads</span>
      </div>

    </div>
  </div>

</div>

         
        </div>
      </div>
    </>
  );
}
