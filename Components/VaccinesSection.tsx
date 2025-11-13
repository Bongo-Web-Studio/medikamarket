"use client";

import React, { useRef } from "react";
import {
  FiShoppingCart,
  FiInfo,
  FiClock,
  FiTag,
  FiArrowLeft,
  FiArrowRight,
} from "react-icons/fi";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperClass } from "swiper";
import { Navigation } from "swiper/modules"; // If your Swiper version doesn't expose this path, try 'swiper' or 'swiper/modules'.

import "swiper/css";
import "swiper/css/navigation";

type Category = {
  image?: string;
  bg?: string;
  test?: string;
  price?: number;
  originalPrice?: number;
  discount?: string;
  reportsIn?: string;
  size?: string;
  viewAll?: boolean;
};

const categories: Category[] = [
  {
    image: "https://ik.imagekit.io/z6mqjyyzz/media/public/default_images/Restoratives_U9r3Zad.png?tr=q-60,f-avif",
    bg: "bg-[#B2EBF2]",
    test: "25-Hydroxy Vitamin D Total Test (Bone & Joint Health)",
    price: 1099,
    originalPrice: 1400,
    discount: "22%",
    reportsIn: "12 Hours",
    size: "w-[250px] h-auto ",
  },
  {
    image: "https://ik.imagekit.io/z6mqjyyzz/media/public/800de06d23a945579_image.png?tr=w-150,q-60,f-avif  ",
    bg: "bg-[#FFF59D]",
    test: "BhCG Beta HCG / Blood Pregnancy Hormone Test - Serum",
    price: 899,
    originalPrice: 1200,
    discount: "25%",
    reportsIn: "24 Hours",
    size: "w-[145px] h-auto ml-10",
  },
  {
    image: "https://ik.imagekit.io/z6mqjyyzz/media/public/da95f5c4e0e4480e9_csm_c-000.32.430-heine-binocularloupes-hrp3.5x-additional_7358d4dbb4.webp?tr=w-150,q-60,f-avif",
    bg: "bg-[#FFCCBC]",
    test: "Glucose - Random / RBS Random Blood Sugar",
    price: 1299,
    originalPrice: 1600,
    discount: "19%",
    reportsIn: "18 Hours",
    size: "w-[250px] h-auto ml-20",
  },
  {
    image: "https://ik.imagekit.io/z6mqjyyzz/media/public/24c32e9742a843d2b_uni2.png?tr=w-126,q-60,f-avif",
    bg: "bg-[#F8BBD0]",
    test: "HBA1c Glycosylated Hemoglobin with eAG - HPLC Gold Standard Method",
    price: 999,
    originalPrice: 1400,
    discount: "28%",
    reportsIn: "15 Hours",
    size: "w-[220px] h-auto mt-20",
  },
  {
    image: "https://ik.imagekit.io/z6mqjyyzz/media/public/070b83cc77bf4eaaa_image.png?tr=w-126,q-60,f-avif",
    bg: "bg-[#BBDEFB]",
    test: "Folate Serum / Folic Acid / Vitamin B9",
    price: 1599,
    originalPrice: 2000,
    discount: "20%",
    reportsIn: "20 Hours",
    size: "w-[250px] h-auto ml-30 mt-10",
  },
  {
    image: "https://ik.imagekit.io/z6mqjyyzz/media/public/default_images/Small_Equipment.png?tr=q-60,f-avif",
    bg: "bg-[#FFE082]",
    test: "Ferritin Serum",
    price: 699,
    originalPrice: 1000,
    discount: "30%",
    reportsIn: "8 Hours",
    size: "w-[250px] h-auto ml-30 mt-10",
  },
];

// Add View All card
const extendedCategories: Category[] = [...categories, { viewAll: true }];

export default function VaccinesSection(): React.ReactElement {
  const swiperRef = useRef<SwiperClass | null>(null);

  return (
    <div className="relative mx-auto py-10 bg-white select-none border-t border-[#155DFC]">
      <h2
       
        className="text-start text-2xl lg:text-4xl  mb-6 px-4 lg:ml-10    text-black"
      >
      <span className="">  Popular Vaccines</span> <span  style={{ fontFamily: "Neuehaasgrotdisp46lightitalic" }}   className="text-[#155DFC]">• Equipment</span>
      </h2>

     
           <div className="relative">
             <Swiper
               modules={[Navigation]}
               onSwiper={(swiper) => (swiperRef.current = swiper as SwiperClass)}
               breakpoints={{
                 0: { slidesPerView: 1.2, spaceBetween: 12 }, // mobile
                 640: { slidesPerView: 2, spaceBetween: 16 }, // tablets
                 1024: { slidesPerView: 3, spaceBetween: 20 }, // laptops
                 1280: { slidesPerView: 4, spaceBetween: 20 }, // desktops
               }}
               navigation={false}
               loop={false}
               className="w-[95vw] sm:w-[93vw] h-[63vh]"
             >
               {extendedCategories.map((cat, idx) => (
                 <SwiperSlide key={idx}>
                   <div className="w-full max-w-[350px] h-[460px] bg-white  shadow-md rounded-3xl hover:shadow-xl transition-all duration-300 flex flex-col group justify-between mx-auto overflow-hidden">
                     {cat.viewAll ? (
                       <div className="flex flex-col justify-center items-center h-full text-[#155DFC] bg-gray-100  border-[2px] border-dashed border-[#155DFC] rounded-3xl">
                         <h2 className="text-lg sm:text-xl font-semibold mb-4">
                           View All Tests
                         </h2>
                         <button className="px-6 py-3 bg-[#155DFC] text-white  hover:opacity-90 transition">
                           Explore
                         </button>
                       </div>
                     ) : (
                       <>
     
                         {/* Image Section */}
                         <div
                           className={` relative w-full h-[200px] flex items-center justify-center overflow-hidden border border-gray-200 rounded-3xl`}
                         >
                           {cat.discount && (
                             <span className="absolute top-4 right-4 flex items-center gap-1 text-white bg-green-600 text-[15px] font-semibold px-3 py-1  rounded-lg">
                               <FiTag size={14} /> {cat.discount} OFF
                             </span>
                           )}
                 
                             <p className="absolute top-2 left-2 flex items-center  duration-300">
                                                <div className=" flex justify-center items-center ">
                         <img className="w-12 h-12" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR4q66dy4ndP_c7oFetKJmMDWurcVnDoFChA&s" alt="" />
                       </div>
                             </p>
                         
                     
                           {cat.image && (
                             // Keep native <img/> for simplicity. If you're on Next.js consider switching to next/image for optimization.
                             <img
                               src={cat.image}
                               alt={cat.test}
                               className={`${cat.size} object-contain`}
                             />
                           )}
                         </div>
     
                         {/* Text Section */}
                         <div className={` p-4 sm:p-6 flex flex-col justify-between flex-1 rounded-3xl `}>
                           <div>
                             <h2 className="text-base sm:text-lg font-medium text-gray-900 line-clamp-2 min-h-[56px]">
                               {cat.test}
                             </h2>
                             <div className="mt-3 flex items-center justify-end gap-2">
                               {cat.originalPrice && (
                                 <span className="text-gray-400 line-through text-sm sm:text-lg">
                                   ₹{cat.originalPrice}
                                 </span>
                               )}
                               {cat.price && (
                                 <span className="text-lg sm:text-2xl font-semibold text-gray-900">
                                   ₹{cat.price}
                                 </span>
                               )}
                             </div>
                             <div className="flex items-end text-gray-600 justify-center h-[1.2cm]">
                               <div className="flex justify-center items-center gap-2 text-sm">
                                 <FiClock size={14} className="mt-1" /> Reports in:{" "}
                                 <span className="font-medium">{cat.reportsIn}</span>
                               </div>
                             </div>
                           </div>
     
                           <div className="mt-6 flex gap-3">
                             <motion.button
                               whileTap={{ scale: 0.95 }}
                               className="w-full flex items-center justify-center gap-2  bg-white text-gray-700 py-2 border border-gray-300 text-xs sm:text-sm font-medium hover:bg-gray-200 transition"
                             >
                               <FiInfo size={16} /> View Details
                             </motion.button>
                             <motion.button
                               whileTap={{ scale: 0.95 }}
                               className={`w-full flex items-center justify-center gap-2 bg-[#155DFC] text-white py-2  text-xs sm:text-sm font-medium hover:opacity-90 transition`}
                             >
                               <FiShoppingCart size={16} /> Add to Cart
                             </motion.button>
                           </div>
                         </div>
                       </>
                     )}
                   </div>
                 </SwiperSlide>
               ))}
             </Swiper>
     
             {/* Prev Button */}
             <button
               onClick={() => swiperRef.current?.slidePrev()}
               className="absolute top-1/2 -translate-y-1/2 left-2 z-20 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center  bg-white shadow-md hover:shadow-lg text-[#155DFC] transition duration-300 border border-[#155DFC]"
             >
               <FiArrowLeft size={20} />
             </button>
     
             {/* Next Button */}
             <button
               onClick={() => swiperRef.current?.slideNext()}
               className="absolute top-1/2 -translate-y-1/2 right-2 z-20 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center  bg-white shadow-md hover:shadow-lg text-[#155DFC] transition duration-300 border border-[#155DFC]"
             >
               <FiArrowRight size={20} />
             </button>
           </div>
    </div>
  );
}
