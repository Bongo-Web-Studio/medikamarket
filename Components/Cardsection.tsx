"use client";

import React, { useState } from "react";
import { FaTrash, FaPlus, FaShoppingCart, FaArrowLeft } from "react-icons/fa";
import { motion, Variants } from "framer-motion";

/**
 * CardSection.tsx
 * Apple/macOS-style Checkout Card panel with entrance animation
 *
 * ✅ Converted to TypeScript
 * ✅ Strongly typed props and item structure
 * ✅ Framer-motion + Tailwind preserved
 */

interface Item {
  id: number;
  title: string;
  price: number;
}

interface ProceedPayload {
  total: number;
  count: number;
  items: Item[];
}

interface CardSectionProps {
  initialItems?: Item[];
  onProceed?: (payload: ProceedPayload) => void;
  onClose?: () => void;
}

const CardSection: React.FC<CardSectionProps> = ({ initialItems, onProceed, onClose }) => {
  // fallback demo data if no props
  const demo: Item[] = [
    { id: 101, title: "Full Body Checkup - Advanced", price: 2699 },
    { id: 102, title: "Full Body Checkup - Essential", price: 1599 },
    { id: 103, title: "Full Body Checkup - Comprehensive", price: 3699 },
  ];

  const [items, setItems] = useState<Item[]>(initialItems?.length ? initialItems : demo);

  /** Removes an item by ID */
  function removeItem(id: number) {
    setItems((prev) => prev.filter((it) => it.id !== id));
  }

  /** Adds a new mock test item (placeholder for real picker) */
  function addMockItem() {
    const next: Item = {
      id: Date.now(),
      title: "Custom Test - Quick",
      price: 799,
    };
    setItems((prev) => [...prev, next]);
  }

  const total = items.reduce((acc, it) => acc + (it.price || 0), 0);
  const count = items.length;

  function handleProceed() {
    onProceed?.({ total, count, items });
  }

  /** Framer Motion entrance variants */
  const panelVariants: Variants = {
    hidden: { opacity: 0, x: 80, scale: 0 },
    enter: { opacity: 1, x: 0, scale: 1 },
    exit: { opacity: 0, x: 60, scale: 0.95 },
  };

  return (
    <div className="fixed inset-0 z-40 flex items-start justify-end p-2">
      {/* Backdrop */}
      <motion.div
        className="absolute inset-0 bg-black/30 backdrop-blur-sm"
        onClick={() => onClose?.()}
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.18 }}
      />

      {/* Sliding panel */}
      <motion.div
        className="relative z-50 w-[800px] h-[75vh] flex flex-col rounded-2xl overflow-hidden bg-gradient-to-b from-white/95 to-white/90 border border-white/40 shadow-2xl"
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={panelVariants}
        transition={{ type: "spring", stiffness: 280, damping: 28 }}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="flex items-center gap-4 px-6 py-5 border-b border-gray-100">
          <button
            onClick={() => onClose?.()}
            aria-label="Back to home"
            className="p-2 rounded-md hover:bg-gray-100 transition"
          >
            <FaArrowLeft className="w-4 h-4 text-gray-700" />
          </button>
          <h3 className="text-lg font-semibold text-gray-800">Back to home</h3>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-auto p-6 bg-[linear-gradient(180deg,#fbfdf8,white)]">
          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
            {items.length === 0 ? (
              <div className="py-12 text-center text-sm text-gray-500">No tests added yet</div>
            ) : (
              <ul className="divide-y divide-gray-100">
                {items.map((it, idx) => (
                  <motion.li
                    key={it.id}
                    className="flex items-center justify-between py-4"
                    initial={{ opacity: 0, x: 12, scale: 0.98 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ delay: 0.04 * idx, duration: 0.22 }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-lg flex items-center justify-center shadow-inner bg-emerald-50">
                        <div className="w-8 h-8 md:w-9 md:h-9 rounded-md bg-white flex items-center justify-center shadow-sm">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                            <path
                              d="M12 2.5C10.62 2.5 9.5 3.62 9.5 5C9.5 6.38 10.62 7.5 12 7.5C13.38 7.5 14.5 6.38 14.5 5C14.5 3.62 13.38 2.5 12 2.5Z"
                              fill="#16AB59"
                            />
                            <rect x="6" y="9" width="12" height="10" rx="2" fill="#FFDDA8" />
                          </svg>
                        </div>
                      </div>

                      <div className="min-w-0">
                        <div className="text-sm md:text-base font-medium text-gray-800 truncate">
                          {it.title}
                        </div>
                        <div className="text-xs text-gray-500 mt-1">₹{it.price}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => removeItem(it.id)}
                        aria-label={`Remove ${it.title}`}
                        className="p-2 rounded-md hover:bg-gray-100 transition"
                      >
                        <FaTrash className="w-4 h-4 text-gray-500" />
                      </button>
                    </div>
                  </motion.li>
                ))}
              </ul>
            )}
          </div>

          {/* Add Button */}
          <div className="mt-5">
            <button
              onClick={addMockItem}
              className="w-full flex items-center gap-3 justify-center rounded-lg border border-dashed border-gray-200 py-3 text-sm text-emerald-700 hover:bg-emerald-50 transition"
            >
              <span className="p-2 bg-white rounded-full shadow-sm">
                <FaPlus className="w-3.5 h-3.5 text-emerald-700" />
              </span>
              Add test/checkup
            </button>
          </div>

          <div className="mt-5 text-sm text-gray-400">
            Tests added here are for{" "}
            <span className="font-medium text-gray-700">1 member</span>. You can add or remove
            members in the next step.
          </div>
        </div>

        {/* Footer */}
        <div className="mt-auto">
          {/* Discount banner */}
          <div className="flex items-center gap-3 px-6 py-3 bg-emerald-600 text-white">
            <svg
              className="w-5 h-5 flex-shrink-0"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="12" cy="12" r="10" fill="#fff" opacity="0.12" />
              <path d="M7 12h10" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" />
              <path d="M12 7v10" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" />
            </svg>

            <div className="flex-1 text-sm">
              <div className="font-medium">
                Get 15% OFF* on 1st order above ₹500 Use :{" "}
                <span className="font-semibold uppercase bg-white text-emerald-700 px-2 py-0.5 rounded">
                  ORANGE15
                </span>
              </div>
            </div>
          </div>

          {/* Checkout bar */}
          <div className="flex items-center justify-between gap-4 px-6 py-4 bg-white border-t border-gray-100">
            <div className="flex items-center gap-4">
              <div className="p-2 rounded-md bg-gray-50 shadow-sm">
                <FaShoppingCart className="w-5 h-5 text-gray-700" />
              </div>
              <div>
                <div className="text-lg font-semibold text-emerald-700">₹{total}</div>
                <div className="text-xs text-gray-500">{count} Checkups</div>
              </div>
            </div>

            <button
              onClick={handleProceed}
              className="px-6 py-2 rounded-lg bg-gradient-to-r from-orange-400 to-orange-300 text-white font-semibold shadow-md hover:brightness-105 transition"
            >
              Proceed
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CardSection;
