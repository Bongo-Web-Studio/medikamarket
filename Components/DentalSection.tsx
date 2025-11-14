"use client";
import React from "react";
import { FiShoppingCart, FiTag, FiHeart } from "react-icons/fi";
import { motion } from "framer-motion";
import { useCartStore } from "@/store/cartStore/cartStore";
import { FaShoppingCart } from "react-icons/fa";

type Category = {
  image?: string;
  bg?: string;
  title?: string;
  price?: number;
  originalPrice?: number;
  discount?: string;
  rating?: number; // 0-5
  reviews?: number;
  reportsIn?: string;
};

const categories: Category[] = [
  {
    image:
      "https://ik.imagekit.io/z6mqjyyzz/media/public/800de06d23a945579_image.png?tr=w-150,q-60,f-avif",
    bg: "bg-[#B2EBF2]",
    title: "Samsung Galaxy S24 Ultra",
    price: 999,
    originalPrice: 1299,
    discount: "23%",
    rating: 4.6,
    reviews: 1290,
  },
  {
    image:
      "https://ik.imagekit.io/z6mqjyyzz/media/public/24c32e9742a843d2b_uni2.png?tr=w-126,q-60,f-avif",
    bg: "bg-[#FFF59D]",
    title: "Nike Jordan Brooklyn Fleece Hoodie",
    price: 450,
    originalPrice: 650,
    discount: "31%",
    rating: 4.4,
    reviews: 689,
  },
  {
    image:
      "https://ik.imagekit.io/z6mqjyyzz/media/public/da95f5c4e0e4480e9_csm_c-000.32.430-heine-binocularloupes-hrp3.5x-additional_7358d4dbb4.webp?tr=w-150,q-60,f-avif",
    bg: "bg-[#FFCCBC]",
    title: "Beanless Bag Inflatable Lounge Chair",
    price: 320,
    originalPrice: 480,
    discount: "33%",
    rating: 4.1,
    reviews: 402,
  },
  {
    image:
      "https://ik.imagekit.io/z6mqjyyzz/media/public/070b83cc77bf4eaaa_image.png?tr=w-126,q-60,f-avif",
    bg: "bg-[#BBDEFB]",
    title: "Diamond Stud Earrings",
    price: 299,
    originalPrice: 399,
    discount: "25%",
    rating: 4.8,
    reviews: 211,
  },
  {
    image:
      "https://ik.imagekit.io/z6mqjyyzz/media/public/default_images/Small_Equipment.png?tr=q-60,f-avif",
    bg: "bg-[#FFE082]",
    title: "Nike Invincible 3 Premium",
    price: 190,
    originalPrice: 250,
    discount: "24%",
    rating: 4.3,
    reviews: 157,
  },
];

const slugify = (s = "") =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");

function Stars({ value = 0 }: { value: number }) {
  const full = Math.floor(value);
  const half = value - full >= 0.5;
  const total = 5;
  return (
    <div className="flex items-center gap-1" aria-hidden>
      {Array.from({ length: total }).map((_, i) => {
        const idx = i + 1;
        const fill = idx <= full ? 1 : idx === full + 1 && half ? 0.5 : 0;
        return (
          <svg
            key={i}
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="inline-block"
          >
            <defs>
              <linearGradient id={`g-${i}`}>
                <stop offset={`${fill * 100}%`} stopColor="#F59E0B" />
                <stop offset={`${fill * 100}%`} stopColor="#E5E7EB" />
              </linearGradient>
            </defs>
            <path
              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
              fill={`url(#g-${i})`}
            />
          </svg>
        );
      })}
    </div>
  );
}

export default function DentalSectionGrid(): React.ReactElement {
  const addItem = useCartStore((state) => state.addItem);

  return (
    <section className="relative mx-auto py-6 select-none w-full">
      <div className="px-4 lg:px-12">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg lg:text-2xl font-semibold text-gray-900">
            Today's Best Deals For You!
          </h2>
          <button className="text-sm lg:text-base text-blue-600 font-medium hover:underline">
            View All
          </button>
        </div>

        {/* Product strip */}
        <div className="w-full bg-white ">
          <div className="flex  flex-wrap lg:flex-row gap-2">
            {categories.map((cat, idx) => (
              <article
                key={idx}
                className=" w-[195px] md:w-[220px] lg:w-[250px] xl:w-[272px]  transition-all duration-200 overflow-hidden relative "
                aria-labelledby={slugify(cat.title || `item-${idx}`)}
              >
                {/* image & heart */}
                <div className="relative h-[120px] sm:h-[140px] flex items-center justify-center bg-transparent p-4">
                  <div className="absolute top-3 right-3 bg-white rounded-full p-1 shadow flex items-center justify-center">
                    <button
                      aria-label="Add to wishlist"
                      className="text-gray-400 hover:text-red-500"
                    >
                      <FiHeart />
                    </button>
                  </div>

                  <div className="rounded-xl w-full h-full flex items-center justify-center ">
                    <img
                      src={cat.image}
                      alt={cat.title}
                      className="max-h-[100px] sm:max-h-[120px] object-contain"
                    />
                  </div>
                </div>

                {/* content */}
                <div className="p-3 sm:p-4 flex flex-col gap-2">
                  <h3
                    id={slugify(cat.title)}
                    className="text-sm sm:text-base font-medium text-gray-900 line-clamp-2 min-h-[44px]"
                  >
                    {cat.title}
                  </h3>

                  <div className="lg:flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Stars value={cat.rating ?? 0} />
                      <span className="text-xs text-gray-500">
                        ({cat.reviews})
                      </span>
                    </div>
                    {cat.discount && (
                      <div className="w-[4rem] text-[10px]  lg:text-[12px] bg-green-600 text-white px-2 py-1 rounded-md font-semibold">
                        {cat.discount} OFF
                      </div>
                    )}
                  </div>

                  <div className="flex items-center justify-between mt-1">
                    <div>
                      {cat.originalPrice && (
                        <div className="text-xs text-gray-400 line-through">
                          INR {cat.originalPrice}
                        </div>
                      )}
                      <div className="text-base sm:text-lg font-semibold text-gray-900">
                        INR {cat.price}
                      </div>
                    </div>
                    <div className="text-xs text-gray-400">{cat.reportsIn}</div>
                  </div>

                  {/* only Add button as requested */}
                  <motion.button
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      const slug = slugify(cat.title || `item-${idx}`);
                      const id = `${idx}-${slug}`;
                      addItem({
                        id,
                        name: cat.title || `Item ${idx}`,
                        price: cat.price ?? 0,
                        qty: 1,
                        image: cat.image,
                      });
                    }}
                    className="mt-3 w-22  justify-center  text-sm font-medium hover:opacity-95 transition cursor-pointer relative flex items-center gap-2 px-3 py-2 bg-[#0077ED] 
                border border-blue-600 rounded-2xl text-white 
                shadow-inner shadow-white/40"
                    aria-label={`Add ${cat.title} to cart`}
                  >
                    <FaShoppingCart /> Add
                  </motion.button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
