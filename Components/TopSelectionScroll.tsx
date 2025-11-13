"use client";

import { useEffect, useRef, useState } from "react";

/**
 * 🍏 Apple-like Horizontal Scroll Navbar
 * - Smooth scroll & drag
 * - Subtle glassmorphism design
 * - Refined macOS-inspired typography
 */
export default function TopSelectionScroll() {
  const navItems = [
    "Dental",
    "Diagnostics",
    "Free",
    "Consumables",
    "10 off",
    "Equipment",
    "Ophthalmology",
    "Nephrology",
    "30 off",
    "Physiotherapy",
    "Refurbished",
    "50 Off",
    "Vaccines",
    "IVF/Gynae",
    "70 Off",
    "Pharma",
  ];

  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const [scrollingDirection, setScrollingDirection] = useState<
    "left" | "right" | null
  >(null);
  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const scrollStartX = useRef(0);
  const scrollingTimer = useRef<number | null>(null);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const onWheel = (e: WheelEvent) => {
      if (!e.shiftKey) {
        e.preventDefault();
        const delta = e.deltaY || e.deltaX;
        el.scrollLeft += delta;
        setScrollingDirection(delta > 0 ? "right" : "left");
        if (scrollingTimer.current) window.clearTimeout(scrollingTimer.current);
        scrollingTimer.current = window.setTimeout(
          () => setScrollingDirection(null),
          200
        );
      }
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  // Drag behavior
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const onPointerDown = (e: PointerEvent) => {
      isDragging.current = true;
      try {
        el.setPointerCapture(e.pointerId);
      } catch {}
      dragStartX.current = e.clientX;
      scrollStartX.current = el.scrollLeft;
      el.classList.add("cursor-grabbing");
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!isDragging.current) return;
      const dx = e.clientX - dragStartX.current;
      el.scrollLeft = scrollStartX.current - dx;
      setScrollingDirection(dx > 0 ? "left" : "right");
      if (scrollingTimer.current) window.clearTimeout(scrollingTimer.current);
      scrollingTimer.current = window.setTimeout(
        () => setScrollingDirection(null),
        200
      );
    };

    const onPointerUp = (e: PointerEvent) => {
      if (!isDragging.current) return;
      isDragging.current = false;
      try {
        el.releasePointerCapture(e.pointerId);
      } catch {}
      el.classList.remove("cursor-grabbing");
    };

    el.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);

    return () => {
      el.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
    };
  }, []);

  return (
    <div
      className="
        relative w-full h-[1.2cm] 
        flex items-center justify-center 
        backdrop-blur-xl bg-[#F5F5F7] 
      
        shadow-[inset_0_-0.5px_0_rgba(255,255,255,0.1)]
        sticky top-0 z-50
      "
    >
      {/* Scrollable Nav */}
      <div
        ref={scrollerRef}
        className="overflow-x-auto w-full h-full flex items-center scrollbar-hide select-none"
        style={{
          cursor: "grab",
          WebkitOverflowScrolling: "touch",
          msOverflowStyle: "none",
          scrollbarWidth: "none",
          touchAction: "pan-y",
        }}
      >
        <ul className="flex h-full items-center gap-3 px-3 whitespace-nowrap">
          {navItems.map((text, i) => (
            <li key={`${text}-${i}`}>
              <button
                type="button"
                className=" hover:bg-neutral-800 hover:text-white
                  px-4 py-1.5 
                  text-[13px] font-medium 
                  text-neutral-800 
                  rounded-full 
                  bg-white
                  backdrop-blur-md 
                  border border-neutral-800
                  shadow-[0_1px_2px_rgba(0,0,0,0.08)] 
                  
                  hover:scale-[1.05] active:scale-[0.98] 
                  transition-all duration-300
                "
              >
                {text}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
