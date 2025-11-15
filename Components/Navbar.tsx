"use client";

import React, { useEffect, useState } from "react";
import { FaSearch, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import dynamic from "next/dynamic";
import TopSelectionScroll from "./TopSelectionScroll";
import { useCartStore } from "@/store/cartStore/cartStore";

const CardSection = dynamic(() => import("./Cardsection"), { ssr: false });

export default function NavbarAppleStyle(): React.ReactElement {
  const [query, setQuery] = useState("");
  const [showCart, setShowCart] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const cartCount = useCartStore((state) => state.cartCount);

  const dropdownItems: Record<string, string[]> = {
    Product: ["Overview", "Features", "Pricing", "FAQ"],
    About: ["Company", "Team", "Careers"],
  };

  // Lock background scroll
  useEffect(() => {
    const locked = menuOpen || showCart;
    document.body.style.overflow = locked ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen, showCart]);

  const navItems = Object.keys(dropdownItems);

  return (
    <header className="w-full sticky top-0 z-50 ">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 md:px-8 py-4">
        <div
          className="mx-auto rounded-3xl bg-white border border-gray-300 shadow-sm 
          backdrop-blur-md flex items-center justify-between gap-6 px-4 py-4"
        >
          {/* LEFT → Hamburger + Logo */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-xl p-2 rounded-md hover:bg-black/5"
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>

            <span className="font-serif text-2xl lg:text-3xl font-black tracking-tight text-black">
              vector
            </span>
          </div>

          {/* CENTER → Desktop Nav + Search */}
          <div className="hidden md:flex items-center justify-center flex-1 relative">
            <ul className="flex items-center gap-8 text-sm text-neutral-800 relative">
              {navItems.map((item) => (
                <li key={item} className="relative group cursor-pointer select-none">
                  {/* Label */}
                  <div className="flex items-center gap-2 hover:opacity-85 py-2">
                    <span>{item}</span>

                    {/* arrow */}
                    <svg width="10" height="6" viewBox="0 0 12 8" fill="none">
                      <path
                        d="M1 1.2L6 6.2L11 1.2"
                        stroke="#111827"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  {/* DROPDOWN */}
                  <div
                    className="
                      absolute left-0 mt-2 w-48 bg-white border border-gray-200 
                      rounded-xl shadow-lg opacity-0 invisible
                      group-hover:opacity-100 group-hover:visible
                      transition-all duration-200 translate-y-2 
                      group-hover:translate-y-0 z-40
                    "
                  >
                    <ul className="py-2 text-[15px]">
                      {dropdownItems[item].map((option) => (
                        <li
                          key={option}
                          className="px-4 py-2 hover:bg-gray-50 cursor-pointer"
                        >
                          {option}
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ul>

            {/* Desktop Search */}
            <div className="ml-6 hidden lg:flex items-center bg-neutral-100 rounded-full overflow-hidden shadow-sm">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search"
                className="px-4 py-2 text-sm outline-none bg-transparent"
              />
              <button className="px-3 py-2">
                <FaSearch />
              </button>
            </div>
          </div>

          {/* RIGHT → Login + Cart + Mobile Search */}
          <div className="flex items-center gap-3 sm:gap-4">
            <button className="hidden sm:inline-block px-5 py-2.5 rounded-2xl bg-[#F5F5F7] text-sm border border-gray-200 shadow-sm">
              Log in
            </button>

            {/* CART BUTTON */}
            <button
              onClick={() => setShowCart(true)}
              className="
                relative flex items-center gap-2 px-3 py-2 bg-[#0077ED] 
                border border-blue-600 rounded-2xl text-white ml-2
                shadow-inner shadow-white/40
              "
            >
              <FaShoppingCart className="text-base" />
              <span className="hidden md:inline">Cart</span>

              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-blue-600 text-[11px] text-white px-1.5 py-[1px] rounded-full font-semibold">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Search Icon */}
            <button
              onClick={() => setShowSearch((s) => !s)}
              className="md:hidden p-2 rounded-md hover:bg-black/5"
            >
              <FaSearch />
            </button>
          </div>
        </div>

        {/* MOBILE SEARCH */}
        {showSearch && (
          <div className="md:hidden mt-3">
            <div className="flex items-center rounded-full overflow-hidden shadow bg-white">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search"
                className="flex-1 px-4 py-2 text-sm outline-none"
              />
              <button className="px-4 py-2 bg-blue-600 text-white rounded-r-full">
                <FaSearch />
              </button>
            </div>
          </div>
        )}

        {/* MOBILE MENU */}
        {menuOpen && (
          <nav className="md:hidden mt-3 bg-white rounded-3xl border border-gray-200   p-4 shadow-sm  absolute w-[80vw] left-[25px] z-40">
            <ul className="flex flex-col gap-3 text-sm">
              {navItems.map((name) => (
                <li key={name} className="py-2 px-2 rounded hover:bg-neutral-50">
                  {name}
                </li>
              ))}
            
            </ul>
          </nav>
        )}
      </div>

      {/* CART PANEL */}
      {showCart && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
          <div className="w-full max-w-lg sm:max-w-2xl bg-white dark:bg-neutral-900 rounded-xl shadow-2xl p-4 animate-fadeIn overflow-auto max-h-[90vh]">
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
