"use client";

import React, { useState } from "react";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import dynamic from "next/dynamic";
import TopSelectionScroll from "./TopSelectionScroll";
import { useCartStore } from "@/store/cartStore/cartStore";
 // ✅ import Zustand store

const CardSection = dynamic(() => import("./Cardsection"), { ssr: false });

export default function NavbarAmazonClone(): React.ReactElement {
  const [query, setQuery] = useState("");
  const [showCart, setShowCart] = useState(false);

  // ✅ Get cart count from Zustand store
  const cartCount = useCartStore((state) => state.cartCount);

  return (
    <header className="w-full font-sans">
      {/* Top Bar */}
      <div className="w-full bg-[#004BF6] text-white text-xs">
        <div className=" mx-auto flex items-center justify-between px-4 md:px-6 h-[55px]">
          {/* Left Section */}
          <div className="flex items-center gap-3">
            {/* Amazon Logo */}
            <div className="flex items-center">
              <svg
                viewBox="0 0 100 30"
                className="w-24 h-7"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Amazon"
              >
                <text
                  x="0"
                  y="18"
                  fontFamily="Arial, Helvetica, sans-serif"
                  fontWeight="700"
                  fontSize="18"
                  fill="#FFFFFF"
                >
                  amazon
                </text>
                <path
                  d="M28 21c6 4 18 6 30 0"
                  stroke="#FF9900"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            {/* Delivery Info */}
            <div className="leading-tight text-gray-300">
              <div className="text-[12px] font-medium text-gray-200">
                Delivering to Pune 411006
              </div>
              <button className="text-[11px] text-[#59b0ff] hover:underline">
                Update location
              </button>
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-[720px] px-4">
            <div className="flex items-center bg-white rounded-md overflow-hidden shadow-md hover:shadow-lg transition">
             
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search"
                aria-label="Search "
                className="flex-1 px-4 py-2.5 text-sm text-gray-800 placeholder-gray-500 outline-none"
              />
              <button
                aria-label="Search"
                className="px-5 py-3 bg-orange-500 transition text-white flex items-center justify-center"
              >
                <FaSearch className="text-lg" />
              </button>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-5 min-w-[260px] justify-end text-sm">
            {/* Flag + Language */}
            <div className="hidden md:flex items-center gap-1 cursor-pointer">
              <div className="w-6 h-4 rounded-sm border border-gray-400 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-r from-orange-500 via-white to-green-600" />
              </div>
              <span className="text-gray-200 text-xs">EN</span>
            </div>

            {/* Account */}
            <div className="hidden sm:flex flex-col text-right leading-tight cursor-pointer hover:underline">
              <span className="text-gray-200 text-[12px]">Hello, sign in</span>
              <span className="font-semibold text-white text-[13px]">
                Account & Lists
              </span>
            </div>

            {/* Orders */}
            <div className="hidden md:flex flex-col text-right leading-tight cursor-pointer hover:underline">
              <span className="text-gray-200 text-[12px]">Returns</span>
              <span className="font-semibold text-white text-[13px]">
                & Orders
              </span>
            </div>

            {/* Cart */}
            <button
              onClick={() => setShowCart(true)}
              className="relative flex items-center gap-1 px-2 py-1 rounded-md hover:bg-white/5 transition"
              aria-label="Cart"
            >
              <FaShoppingCart className="text-white text-xl" />
              <span className="hidden md:inline font-semibold">Cart</span>

              {/* ✅ Zustand badge count */}
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-2 bg-[#F08804] text-[11px] px-1.5 py-[1px] rounded text-black font-bold">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Categories Row */}
      <div className="w-full">
        <TopSelectionScroll />
      </div>

      {/* Cart Panel */}
      {showCart && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
          <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-4 animate-fadeIn">
            <CardSection
              onClose={() => setShowCart(false)}
              onProceed={() => setShowCart(false)}
            />
          </div>
        </div>
      )}
    </header>
  );
}
