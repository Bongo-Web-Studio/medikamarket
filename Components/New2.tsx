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
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

/* ---------- Types ---------- */
export type Category = {
  image?: string;
  bg?: string;
  test?: string;
  price?: number;
  originalPrice?: number;
  discount?: string;
  reportsIn?: string;
  size?: string;
  viewAll?: boolean;
  // any extra fields you might want to pass (tag, id, metadata...)
  [k: string]: any;
};

export interface CategoryCarouselProps {
  title?: string; // main heading (e.g. "Popular Physiotherapy")
  highlight?: string; // highlighted right-side heading (e.g. "• Equipment")
  highlightStyle?: React.CSSProperties;
  highlightClassName?: string;
  categories: Category[]; // required data array
  showViewAll?: boolean; // append "View All" card
  className?: string; // outer container extra classes
  // optional breakpoints override (keeps your defaults if not provided)
  breakpoints?: {
    [key: number]: { slidesPerView: number; spaceBetween: number };
  };
}

/* ---------- Component ---------- */
export default function CategoryCarousel({
  title = "Popular",
  highlight = "Equipment",
  highlightStyle,
  highlightClassName = "text-[#155DFC]",
  categories,
  showViewAll = true,
  className = "",
  breakpoints,
}: CategoryCarouselProps): React.ReactElement {
  const swiperRef = useRef<SwiperClass | null>(null);

  const items: Category[] = showViewAll ? [...categories, { viewAll: true }] : categories;

  const defaultBreakpoints = {
    0: { slidesPerView: 1.2, spaceBetween: 12 },
    640: { slidesPerView: 2, spaceBetween: 16 },
    1024: { slidesPerView: 3, spaceBetween: 20 },
    1280: { slidesPerView: 4, spaceBetween: 20 },
  };

  return (
    <div className={`relative mx-auto py-10 bg-white select-none border-t border-gray-200 ${className}`}>
      <h2 className="text-start text-2xl lg:text-4xl mb-6 px-4 lg:ml-10 text-black">
        <span>{title}</span>{" "}
        <span style={highlightStyle} className={highlightClassName}>
          {highlight}
        </span>
      </h2>

      <div className="relative">
        <Swiper
          modules={[Navigation]}
          onSwiper={(swiper) => (swiperRef.current = swiper as SwiperClass)}
          breakpoints={breakpoints ?? defaultBreakpoints}
          navigation={false}
          loop={false}
          className="w-[95vw] sm:w-[93vw] h-[63vh]"
        >
          {items.map((cat, idx) => (
            <SwiperSlide key={idx}>
              <div className="w-full max-w-[350px] h-[460px] bg-white shadow-md rounded-2xl hover:shadow-xl transition-all duration-300 flex flex-col group justify-between mx-auto overflow-hidden">
                {cat.viewAll ? (
                  <div className="flex flex-col justify-center items-center h-full text-[#155DFC] bg-gray-100 border-[2px] border-dashed border-[#155DFC] rounded-2xl">
                    <h2 className="text-lg sm:text-xl font-semibold mb-4">View All Tests</h2>
                    <button
                      className="px-6 py-3 bg-[#155DFC] text-white hover:opacity-90 transition"
                      aria-label="Explore all tests"
                    >
                      Explore
                    </button>
                  </div>
                ) : (
                  <>
                    <div
                      className={`relative w-full h-[200px] flex items-center justify-center overflow-hidden border border-gray-200 rounded-2xl`}
                    >
                      {cat.discount && (
                        <span className="absolute top-4 right-4 flex items-center gap-1 text-white bg-green-600 text-[15px] font-semibold px-3 py-1 rounded-lg">
                          <FiTag size={14} /> {cat.discount} OFF
                        </span>
                      )}

                      <p className="absolute top-2 left-2 flex items-center duration-300">
                        <div className="flex justify-center items-center">
                          <img
                            className="w-12 h-12"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR4q66dy4ndP_c7oFetKJmMDWurcVnDoFChA&s"
                            alt="vendor"
                          />
                        </div>
                      </p>

                      {cat.image && (
                        <img
                          src={cat.image}
                          alt={cat.test ?? "item image"}
                          className={`${cat.size ?? "w-[200px] h-auto"} object-contain`}
                        />
                      )}
                    </div>

                    <div className="p-4 sm:p-6 flex flex-col justify-between flex-1 rounded-2xl">
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
                            <span className="text-lg sm:text-2xl font-semibold text-gray-900">₹{cat.price}</span>
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
                          className="w-full flex items-center justify-center gap-2 bg-white text-gray-700 py-2 border border-gray-300 text-xs sm:text-sm font-medium hover:bg-gray-200 transition"
                          aria-label={`View details for ${cat.test}`}
                        >
                          <FiInfo size={16} /> View Details
                        </motion.button>

                        <motion.button
                          whileTap={{ scale: 0.95 }}
                          className="w-full flex items-center justify-center gap-2 bg-[#155DFC] text-white py-2 text-xs sm:text-sm font-medium hover:opacity-90 transition"
                          aria-label={`Add ${cat.test} to cart`}
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
          className="absolute top-1/2 -translate-y-1/2 left-2 z-20 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-white shadow-md hover:shadow-lg text-[#155DFC] transition duration-300 border border-[#155DFC]"
          aria-label="Previous slide"
        >
          <FiArrowLeft size={20} />
        </button>

        {/* Next Button */}
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="absolute top-1/2 -translate-y-1/2 right-2 z-20 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-white shadow-md hover:shadow-lg text-[#155DFC] transition duration-300 border border-[#155DFC]"
          aria-label="Next slide"
        >
          <FiArrowRight size={20} />
        </button>
      </div>
    </div>
  );
}
