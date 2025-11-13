"use client";

import React, { useState } from "react";
import { FaSearch, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import dynamic from "next/dynamic";
import TopSelectionScroll from "./TopSelectionScroll";
import { useCartStore } from "@/store/cartStore/cartStore"; // Zustand store

const CardSection = dynamic(() => import("./Cardsection"), { ssr: false });

export default function NavbarAppleStyle(): React.ReactElement {
  const [query, setQuery] = useState("");
  const [showCart, setShowCart] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const cartCount = useCartStore((state) => state.cartCount);

  return (
    <header
      className="
        w-full font-sans sticky top-0 z-50 
        backdrop-blur-2xl bg-[#F5F5F7] 
        border-b border-white/20 
        shadow-[inset_0_-1px_0_rgba(255,255,255,0.2)]
        transition-all duration-500
      "
    >
      {/* Top Navbar */}
      <div className="w-full text-black dark:text-white">
        <div className="mx-auto flex items-center justify-between px-4 sm:px-6 md:px-8 h-[60px] relative">

      {/* Left Section */}
          <div className="flex items-center gap-4 text-neutral-800 md:hidden">
            {/* Hamburger for Mobile */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-xl focus:outline-none"
              aria-label="Toggle Menu"
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
              
              
              
            </button>

         
          </div>
                    <img className="w-[5cm]" src="https://ik.imagekit.io/z6mqjyyzz/media/public/default_images/Mb_logo.png?tr=w-400,q-100,f-avif" alt="" />

    



          {/* Search Bar (Desktop) */}
          <div className="hidden md:flex flex-1 max-w-[800px] px-4 mr-[5cm]">
            <div
              className="
            
                flex items-center w-full 
                bg-white
                rounded-full overflow-hidden 
                shadow-[0_1px_2px_rgba(0,0,0,0.05)]
                hover:shadow-[0_2px_8px_rgba(0,0,0,0.1)]
                transition-all duration-300
              "
            >
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search..."
                aria-label="Search"
                className="
                  flex-1 px-5 py-2.5 
                  text-sm text-neutral-800
                  bg-transparent outline-none placeholder-neutral-800
                "
              />
              <button
                aria-label="Search"
                className="
                  px-5 py-3 bg-[#0077ED] 
                   transition-all text-white 
                  flex items-center justify-center
                "
              >
                <FaSearch className="text-base" />
              </button>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-3 sm:gap-5 min-w-fit justify-end text-sm text-neutral-800">
            {/* Search Icon (Mobile) */}
            <button
              onClick={() => setShowSearch(!showSearch)}
              className="md:hidden text-lg"
              aria-label="Toggle Search"
            >
              <FaSearch />
            </button>

        

            {/* Cart */}
            <button
              onClick={() => setShowCart(true)}
              className="
                relative flex items-center gap-2 px-5 py-2 bg-[#0077ED] 
                rounded-full
               
                backdrop-blur-md transition-all
              "
              aria-label="Cart"
            >
              <FaShoppingCart className="text-lg text-white" />
              <span className="hidden md:inline font-medium text-white">Cart</span>
              {cartCount > 0 && (
                <span
                  className="
                    absolute -top-1 -right-2 
                    bg-blue-500 text-[11px] text-white 
                    px-1.5 py-[1px] rounded-full font-semibold
                  "
                >
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        {showSearch && (
          <div className="md:hidden w-full  backdrop-blur-xl p-2">
            <div className="flex items-center rounded-full overflow-hidden shadow-md bg-white">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search..."
                className="
                  flex-1 px-4 py-2 text-sm text-gray-800 
                  bg-transparent outline-none
                "
              />
              <button className="px-4 py-2 bg-blue-500  rounded-r-full">
                <FaSearch />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div
          className="
            md:hidden text-neutral-800 text-sm 
            p-4 flex flex-col gap-3 border-t border-white/10 
            backdrop-blur-2xl
            animate-fadeIn
          "
        >
          <div className="cursor-pointer hover:opacity-80">Sign In</div>
          <div className="cursor-pointer hover:opacity-80">Account</div>
          <div className="cursor-pointer hover:opacity-80">Orders</div>
          <div className="cursor-pointer hover:opacity-80">Customer Service</div>
        </div>
      )}

      {/* Categories Row */}
      <div className="w-full">
        <TopSelectionScroll />
      </div>

      {/* Cart Panel */}
      {showCart && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
          <div className="w-full max-w-md bg-white dark:bg-neutral-900 rounded-2xl shadow-2xl p-4 animate-fadeIn">
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
