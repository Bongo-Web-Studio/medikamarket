// components/DentalSectionGrid.client.tsx
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaShoppingCart } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { useCartStore } from "@/store/cartStore/cartStore";

type Props = {
  id: string;
  name: string;
  price: number;
  image?: string;
};

function AddControls({ id, name, price, image }: Props) {
  const addItem = useCartStore((s) => s.addItem);
  const [adding, setAdding] = useState(false);
  const [wish, setWish] = useState(false);

  return (
    // ⭐ GRID REPLACEMENT — responsive layout
    // - 1 column on mobile
    // - 2 side-by-side on sm+
    <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-3 items-center">
      {/* ADD TO CART BUTTON */}
      <motion.button
        whileTap={{ scale: 0.98 }}
        onClick={() => {
          setAdding(true);
          try {
            addItem({
              id,
              name,
              price,
              qty: 1,
              image,
            });
          } finally {
            setTimeout(() => setAdding(false), 200);
          }
        }}
        className="w-full flex items-center justify-center gap-2 px-3 py-2 text-sm font-medium bg-[#0077ED] border border-blue-600 rounded-2xl text-white shadow-inner shadow-white/40 hover:opacity-95 focus:outline-none"
        aria-label={`Add ${name} to cart`}
      >
        <FaShoppingCart />
        <span>{adding ? "Adding..." : "Add"}</span>
      </motion.button>

      {/* WISHLIST BUTTON */}
      <button
        onClick={() => setWish((v) => !v)}
        aria-label={wish ? "Remove from wishlist" : "Add to wishlist"}
        className={`w-10 h-10 p-2 rounded-full border shadow-sm ${
          wish
            ? "bg-red-50 text-red-500 border-red-200"
            : "bg-white text-gray-400 border-gray-200"
        }`}
      >
        <FiHeart />
      </button>
    </div>
  );
}

// Placeholder (top-right alignment helper in server components)
AddControls.WishlistPlaceholder = function WishlistPlaceholder() {
  return <div className="w-10 h-10" aria-hidden />;
};

export default AddControls;
