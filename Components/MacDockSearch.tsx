"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaMicroscope, FaSearch } from "react-icons/fa";
import { BsFillBoxFill } from "react-icons/bs";
import SearchComponent from "./Searchcomponet";



type SearchComponentProps = {
  query: string;
  setQuery: (q: string) => void;
  onClose: () => void;
};

interface DockItem {
  label: string;
  icon: any;
  bgGradient: string;
}

const MacDockSearch: React.FC = () => {
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const [query, setQuery] = useState<string>("");

  const dockItems: DockItem[] = [
  
    {
      label: "Packages",
      icon: <BsFillBoxFill className="text-lg sm:text-xl md:text-2xl text-white mb-1" />,
      bgGradient: "from-[#155DFC] to-[#155DFC]",
    },  {
      label: "Tests",
      icon: <FaMicroscope className="text-lg sm:text-xl md:text-2xl text-white mb-1" />,
      bgGradient: "from-[#FF6812] to-[#FF6812]",
    },
  ];

  return (
    <>
      {/* Render Search overlay when showSearch = true */}
      {showSearch && (
        // if your Searchcomponent isn't typed, you can cast (Searchcomponent as any)
        // but here we assume it supports these props
        <SearchComponent
    
          query={query}
         
          setQuery={setQuery}
          onClose={() => setShowSearch(false)}
        />
      )}

      <footer className="fixed bottom-2 left-1/2 -translate-x-1/2 z-50">
        <div className="flex justify-center items-center mb-2">
          {/* <CouponCardSection /> */}
        </div>

        <div className="flex items-center gap-2 sm:gap-4 md:gap-6 px-3 sm:px-2 md:px-5 py-3 sm:py-3.5 md:py-4 rounded-[30px] sm:rounded-[36px] md:rounded-[40px] bg-white backdrop-blur-2xl  shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
          {/* Mini Search Input (click/focus opens full overlay) */}
          <div className="flex gap-2 items-center w-[5cm] sm:w-56 md:w-72 h-[1.4cm] sm:h-12 md:h-[2cm] px-3 sm:px-4 rounded-3xl sm:rounded-3xl bg-white backdrop-blur-md border border-[#155DFC] shadow-xl">
            <FaSearch className="text-gray-600 text-sm md:text-base" />
            <input
              type="text"
              placeholder="Search here..."
              className="w-full bg-transparent outline-none placeholder-black/60 text-black font-medium text-sm sm:text-base md:text-xl"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onFocus={() => setShowSearch(true)}
              aria-label="Search"
            />
          </div>

          {/* Dock Items */}
          {dockItems.map((item, idx) => (
            <motion.button
              key={idx}
              className="flex flex-col items-center"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              onClick={() => {
                // set query to item label and open overlay
                setQuery(item.label);
                setShowSearch(true);
              }}
              aria-label={item.label}
              type="button"
            >
              <div
                className={`flex flex-col items-center justify-center w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-3xl sm:rounded-3xl md:rounded-3xl shadow-lg p-2 sm:p-2.5 md:p-3 bg-gradient-to-br ${item.bgGradient} shadow-xl border border-white`}
              >
                {item.icon}
                <span className="text-[0.6rem] sm:text-xs md:text-sm font-semibold text-white text-center">
                  {item.label}
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </footer>
    </>
  );
};

export default MacDockSearch;
