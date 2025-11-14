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
    <div className="flex items-center gap-3">
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
            // small local feedback
            setTimeout(() => setAdding(false), 200);
          }
        }}
        className="flex-1 justify-center  text-sm font-medium  hover:opacity-95 focus:outline-none          relative flex items-center gap-2 px-3 py-2 bg-[#0077ED] 
                border border-blue-600 rounded-2xl text-white ml-2
                shadow-inner shadow-white/40"
        aria-label={`Add ${name} to cart`}
      >
        <FaShoppingCart />
        <span>{adding ? "Adding..." : "Add"}</span>
      </motion.button>

      <button
        onClick={() => setWish((v) => !v)}
        aria-label={wish ? "Remove from wishlist" : "Add to wishlist"}
        className={`p-2 rounded-full border ${
          wish ? "bg-red-50 text-red-500 border-red-200" : "bg-white text-gray-400 border-gray-200"
        } shadow-sm`}
      >
        <FiHeart />
      </button>
    </div>
  );
}

// tiny placeholder used in the server component top-right space to keep layout consistent
AddControls.WishlistPlaceholder = function WishlistPlaceholder() {
  return <div className="w-6 h-6" aria-hidden />;
};

export default AddControls;
