"use client";

import { motion, useAnimation, Variants } from "framer-motion";
import FullCardCarousel from "./AD";

/**
 * HeroSection (Typing-style Animation + Liquid-fill CTA)
 * - Headline animates word by word with blur + scale reveal
 * - Paragraph fades upward with blur
 * - CTA has a left-to-right liquid fill animation on hover
 */
export default function Hero1() {
  // A good typed bezier easing to replace string easings
  const easeOutCubic: [number, number, number, number] = [0.22, 1, 0.36, 1];

  // Variants (typed)
  const headingVariant: Variants = {
    hidden: { opacity: 0, scale: 0.95, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: { duration: 1, ease: easeOutCubic },
    },
  };

  const wordVariant: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.08, duration: 0.4, ease: easeOutCubic },
    }),
  };

  const descriptionVariant: Variants = {
    hidden: { opacity: 0, y: 40, filter: "blur(6px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.6, ease: easeOutCubic, delay: 1.2 },
    },
  };

  const buttonVariant: Variants = {
    hidden: { opacity: 0, scale: 0.9, y: 10 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.6, ease: easeOutCubic, delay: 1.8 },
    },
  };

  const screenshotVariant: Variants = {
    hidden: { opacity: 0, scale: 0.98, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: easeOutCubic, delay: 2.0 },
    },
  };

  const headingText = "Find The Medical Equipments In Best Affordable Price";
  const words = headingText.split(" ");

  // CTA liquid fill control
  const fillControls = useAnimation();

  const onHoverStart = () => {
    fillControls.start({
      width: "100%",
      transition: { duration: 0.45, ease: easeOutCubic },
    });
  };
  const onHoverEnd = () => {
    fillControls.start({
      width: "0%",
      transition: { duration: 0.45, ease: easeOutCubic },
    });
  };

  return (
    <header className="text-black w-full   bg-[#F5F5F7]">
      <div className="flex w-full justify-center items-center">
        <div className="flex flex-col   w-full  border-[#155DFC]">
          {/* LEFT: Headline */}
          {/* <div className=" w-full  p-10 border-r border-[#155DFC] flex justify-center items-center">
            <motion.h1
              style={{ fontFamily: "InstrumentSerif" }}
              className=" text-[23px]  lg:text-7xl  lg:max-w-4xl leading-tight   text-center "
              variants={headingVariant}
              initial="hidden"
              animate="visible"
            >
              {words.map((word, i) => (
                <motion.span
                  key={i}
                  variants={wordVariant}
                  initial="hidden"
                  animate="visible"
                  custom={i}
                  className="inline-block mr-2"
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>
          </div> */}

          {/* RIGHT: Description + CTA */}
          <div className="w-full flex justify-center items-center  ">
            {/* <motion.p
              variants={descriptionVariant}
              initial="hidden"
              animate="visible"
              className="mt-6 text-black max-w-2xl text-start text-lg lg:text-2xl "
            >
              Improve patient outcomes with practical answers backed by{" "}
              <span className="">60M+ peer-reviewed</span> and up-to-date papers
              and guidelines.{" "}
              <span style={{ fontFamily: "Neuehaasgrotdisp46lightitalic" }}   className="text-[#155DFC]">
                Delivered at the speed of AI.
              </span>
            </motion.p> */}

            {/* CTA */}
            {/* <motion.div
              variants={buttonVariant}
              initial="hidden"
              animate="visible"
              className="relative  lg:w-[16vw] min-w-[220px]  mb-10"
            >
              <motion.button
                onHoverStart={onHoverStart}
                onHoverEnd={onHoverEnd}
                whileTap={{ scale: 0.97 }}
                className="relative z-20 w-full  lg:px-6 py-4 text-xl lg:text-2xl mb-2 font-medium  text-white bg-[#004BF6]   border border-[#004BF6]  overflow-hidden flex justify-center items-center cursor-pointer hover:text-white  rounded-full"
              >
                {/* Text */}
                {/* <span className="relative z-20">Contact  to Medika</span> */} 

                {/* Liquid fill background */}
                {/* <motion.div
                  initial={{ width: "0%" }}
                  animate={fillControls}
                  className="absolute left-0 top-0 h-full "
                  style={{ backgroundColor: "#004BF6", zIndex: 10 }}
                />
              </motion.button>
            </motion.div> */}
          </div>
        </div>
      </div>

      {/* SCREENSHOT / MOCK WINDOW */}
      <motion.div
        variants={screenshotVariant}
        initial="hidden"
        animate="visible"
        className=" flex justify-center"
      >
        <div className="relative w-[98vw] lg:w-[95vw]  overflow-hidden rounded-3xl  ">
          {/* <FullCardCarousel /> */}
        </div>
      </motion.div>
    </header>
  );
}
