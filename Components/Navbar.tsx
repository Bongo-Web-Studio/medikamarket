"use client";

import React, { useState } from "react";
import { FaSearch, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import dynamic from "next/dynamic";
import TopSelectionScroll from "./TopSelectionScroll";
import { useCartStore } from "@/store/cartStore/cartStore"; // Zustand store

const CardSection = dynamic(() => import("./Cardsection"), { ssr: false });

export default function NavbarAmazonClone(): React.ReactElement {
  const [query, setQuery] = useState("");
  const [showCart, setShowCart] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const cartCount = useCartStore((state) => state.cartCount);

  return (
    <header className="w-full font-sans">
      {/* Top Bar */}
      <div className="w-full bg-[#004BF6] text-white text-xs">
        <div className="mx-auto flex items-center justify-between px-3 sm:px-4 md:px-6 h-[55px] relative">
          {/* Left Section */}
          <div className="flex items-center gap-3">
            {/* Hamburger for Mobile */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-white text-xl focus:outline-none"
              aria-label="Toggle Menu"
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>

            {/* Amazon Logo */}
            <div className="flex items-center">
              <svg
                viewBox="0 0 100 30"
                className="w-20 sm:w-24 h-6 sm:h-7"
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
            <div className="hidden sm:block leading-tight text-gray-300">
              <div className="text-[12px] font-medium text-gray-200">
                Delivering to Pune 411006
              </div>
              <button className="text-[11px] text-[#59b0ff] hover:underline">
                Update location
              </button>
            </div>
          </div>

          {/* Search Bar (Desktop) */}
          <div className="hidden md:flex flex-1 max-w-[720px] px-4">
            <div className="flex items-center bg-white rounded-md overflow-hidden shadow-md hover:shadow-lg transition w-full">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search"
                aria-label="Search"
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
          <div className="flex items-center gap-3 sm:gap-5 min-w-fit justify-end text-sm">
            {/* Search Icon (Mobile) */}
            <button
              onClick={() => setShowSearch(!showSearch)}
              className="md:hidden text-white text-lg"
              aria-label="Toggle Search"
            >
              <FaSearch />
            </button>

            {/* Language */}
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
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-2 bg-[#F08804] text-[11px] px-1.5 py-[1px] rounded text-black font-bold">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        {showSearch && (
          <div className="md:hidden w-full bg-white p-2">
            <div className="flex items-center rounded-md overflow-hidden shadow">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search products..."
                className="flex-1 px-3 py-2 text-sm text-gray-800 outline-none"
              />
              <button className="px-4 py-2 bg-orange-500 text-white">
                <FaSearch />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#004BF6] text-white text-sm p-4 flex flex-col gap-3 border-t border-white/10">
          <div className="cursor-pointer hover:underline">Hello, sign in</div>
          <div className="cursor-pointer hover:underline">Account & Lists</div>
          <div className="cursor-pointer hover:underline">Returns & Orders</div>
          <div className="cursor-pointer hover:underline">Customer Service</div>
        </div>
      )}

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
