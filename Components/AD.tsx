"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

type Slide = {
  id: string;
  image: string;
};

const slides: Slide[] = [
  { id: "s1", image: "/banner1.jpg" },
  { id: "s2", image: "/banner2.jpg" },
  { id: "s3", image: "/banner3.jpg" },
  { id: "s4", image: "/banner4.jpg" },
  { id: "s5", image: "/banner5.jpg" },
];

export default function FullCardCarousel(): React.ReactElement {
  const [index, setIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const progressRef = useRef<HTMLDivElement | null>(null);

  // autoplay every 3s if playing
  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      goTo((index + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [index, isPlaying]);

  // animate progress bar
  useEffect(() => {
    if (!progressRef.current) return;
    progressRef.current.style.transform = "scaleX(0)";
    // Force reflow to reset animation
    void progressRef.current.offsetHeight;
    progressRef.current.style.transition = "transform 3s linear";
    progressRef.current.style.transform = "scaleX(1)";
  }, [index, isPlaying]);

  const goTo = (i: number): void => setIndex(i);

  return (
    <div className="w-full bg-white text-black flex flex-col items-center justify-center overflow-hidden rounded-2xl">
      {/* Carousel */}
      <div className="relative w-full max-w-6xl aspect-[35/16]">
        <motion.div
          className="flex gap-4 absolute"
          animate={{ x: `-${index * 100}%` }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="w-full aspect-[35/16] flex-shrink-0 overflow-hidden rounded-2xl"
            >
              <img
                className="w-full h-full object-cover object-top"
                src={slide.image}
                alt={`Slide ${slide.id}`}
                loading="lazy"
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Controls */}
      <div className="w-full flex items-center justify-center mt-6 md:mt-8">
        <div className="inline-flex items-center gap-3 md:gap-4 px-3 py-2">
          {/* Dots */}
          <div className="flex items-center gap-2 md:gap-3">
            {slides.map((s, i) => (
              <button
                key={s.id}
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`w-2 h-2 transition-colors ${
                  i === index ? "bg-[#155DFC]" : "bg-[#155DFC]/50"
                } focus:outline-none`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
