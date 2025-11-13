"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function New5() {
  const faqs = [
    {
      q: "What is Hospital Store?",
      a:
        "Hospital Store is a trusted B2B and B2C online marketplace in India for medical equipment, surgical instruments, and hospital supplies serving hospitals, doctors, clinics, pharmacies and patients.",
    },
    {
      q: "Who can shop on Hospital Store?",
      a:
        "Hospitals, clinics, pharmacies, healthcare professionals, and individual customers can shop on Hospital Store. We cater to both bulk (B2B) and single-item (B2C) orders.",
    },
    {
      q: "Are products genuine and branded?",
      a:
        "Yes. We partner with top medical manufacturers and importers to supply 100% genuine and branded medical devices and instruments.",
    },
    {
      q: "What types of products do you sell?",
      a:
        "We offer a wide range including OT equipment, ICU/critical care devices, diagnostics and imaging tools, hospital furniture, home care products, lab equipment and consumables.",
    },
    {
      q: "Do you offer competitive pricing and discounts?",
      a:
        "Yes — Hospital Store provides competitive pricing, promotional discounts, and wholesale rates for bulk purchasers.",
    },
    {
      q: "Which payment methods do you accept?",
      a:
        "We accept credit/debit cards, UPI, popular e-wallets and prepayment options. Bulk orders can be handled via invoice/NEFT on request.",
    },
    {
      q: "Do you ship internationally?",
      a:
        "Yes — we provide international shipping in addition to pan-India delivery. Shipping charges and lead times depend on destination and product type.",
    },
    {
      q: "How can I track my order?",
      a:
        "You can track orders via your account dashboard. After shipping, you will receive tracking details and shipment updates by email/SMS.",
    },
    {
      q: "Do you offer expert product support?",
      a:
        "Yes. Our experienced medical team is available to help you choose the right equipment and answer technical questions.",
    },
    {
      q: "Can I request a bulk or institutional quote?",
      a:
        "Absolutely. For bulk orders or institutional procurement, contact our sales team for customised quotations, delivery timelines and special pricing.",
    },
    {
      q: "What is your return / warranty policy?",
      a:
        "Return and warranty policies vary by manufacturer and product. Each product page clearly shows warranty details — our support team will assist with warranty claims and returns.",
    },
    {
      q: "How do I contact Hospital Store?",
      a:
        "Visit Hospitalstore.com or use the contact details on the site to reach our sales and support teams. We also offer a dedicated assistance line for institutional buyers.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="w-full px-4 sm:px-6 md:px-8 lg:px-12 py-10 flex justify-center items-center flex-col bg-white">
      {/* Header */}
      <header className="mb-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-[#004BF6]"
        >
          FAQ
        </motion.h2>
      </header>

      {/* FAQ List */}
      <div className="w-full max-w-5xl divide-y divide-gray-200 rounded-xl border border-gray-200 overflow-hidden shadow-sm">
        {faqs.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="px-4 sm:px-6 md:px-8 py-4 hover:bg-gray-50 transition-colors duration-300"
          >
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex items-center justify-between text-left"
            >
              <h3 className="text-base sm:text-lg md:text-xl font-medium text-gray-800 flex items-center gap-2">
                {f.q}
                {openIndex === i && (
                  <motion.span
                    initial={{ rotate: -10 }}
                    animate={{ rotate: 10 }}
                    transition={{
                      repeat: Infinity,
                      repeatType: "reverse",
                      duration: 0.4,
                    }}
                  >
                    💡
                  </motion.span>
                )}
              </h3>

              <motion.svg
                animate={{ rotate: openIndex === i ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="h-5 w-5 text-gray-500 flex-shrink-0"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 8l4 4 4-4"
                  stroke="currentColor"
                  strokeWidth={1.6}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </motion.svg>
            </button>

            <AnimatePresence>
              {openIndex === i && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-3 text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed pl-1 sm:pl-2"
                >
                  {f.a}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
