"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaShoppingCart } from "react-icons/fa";

export default function CTASection() {
  const heroBackground = {
    backgroundImage: [
      "linear-gradient(90deg, #fff 0%, #fff7ec 8%, #fff2c9 35%, #ffe299 52%, #ffd7b8 66%, #ffeef4 86%, #fff 100%)",
      "radial-gradient(circle at 50% 78%, rgba(255,196,71,0.22) 0%, rgba(255,196,71,0.14) 10%, rgba(255,196,71,0.06) 22%, transparent 40%)",
      "linear-gradient(90deg, transparent 70%, rgba(255,222,231,0.65) 100%)",
      "radial-gradient(ellipse at 10% 50%, rgba(0,0,0,0.02) 0%, transparent 20%), radial-gradient(ellipse at 90% 50%, rgba(0,0,0,0.02) 0%, transparent 20%)",
    ].join(", "),
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  } as React.CSSProperties;

  return (
    <section
      style={heroBackground}
      className=" relative w-[99vw] lg:w-[80vw] h-[50vh] lg:h-[55vh] border border-gray-200 rounded-[70px] overflow-hidden flex flex-col items-center justify-center text-center "
    >
      {/* Illustration */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-6"
      >
        <img
          src="./dadi.png"
          alt="angry-man-illustration"
          className="w-[7cm] lg:w-[10cm] h-[7cm] lg:h-[10cm] object-contain  absolute top-[150px] left-[80px] lg:top-[50px] lg:left-[450px]  z-10  "
        />
      </motion.div>

      {/* Main Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-2xl lg:text-8xl absolute top-[368px] lg:top-[322px]  font-bold text-[#3B1016] z-20 "
      >
        You scrolled all the way here.
      </motion.h1>

      <div
        className="absolute top-[10px]  lg:right-[120px] w-[90vw] h-[26vh] 
    lg:w-[26vw] lg:h-[25vh] rounded-[40px] 
    bg-white backdrop-blur-2xl 
    
    border border-gray-300
    overflow-hidden "
      >
        {/* Content */}
        <div className="  h-full pt-5 p-3">
          <h1 className="text-lg font-semibold text-[#3B1016] w-full flex  ">
            <div className="w-[20%] ">
              <span className=" text-2xl lg:text-4xl "> 😤 </span>
            </div>

            <div className="w-[80%]  text-start ">
              I know you want Medical Equipments in best Affordable price
            </div>
          </h1>

          <h1 className="font-semibold text-[#3B1016] leading-snug  lg:text-2xl text-lg   ">
            buy from here if you don't<span className=" text-3xl lg:text-5xl"> 😡 </span>
          </h1>

      <div className="w-full flex justify-end lg:justify-center mt-2 pr-5">
            <button
            className="
                          relative flex items-center gap-2 px-2 w-auto lg:w-[90%] justify-center  py-1 bg-[#0077ED] 
                          border border-blue-600 rounded-2xl text-white  
                          shadow-inner shadow-white/40
                        "
          >
            <span className=" text-lg lg:text-2xl">buy now </span>
          </button>
      </div>
        </div>
      </div>
    </section>
  );
}
