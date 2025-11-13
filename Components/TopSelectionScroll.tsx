"use client";

import { useEffect, useRef, useState } from "react";

/**
 * NavScroller (Client Component) - fixed
 */
export default function TopSelectionScroll() {
  const navItems = [
    "Trending",
    "Breaking",
    "New",
    "Politics",
    "Sports",
    "Finance",
    "Crypto",
    "Geopolitics",
    "Earnings",
    "Tech",
    "Culture",
    "World",
    "Economy",
    "Elections",
    "Mentions",
    "More",
    "Trump",
    "Gov Shutdown",
    "NYC Mayor",
    "Dutch Election",
    "MegaETH",
    "World Series",
    "China",
    "Venezuela",
    "Gaza",
    "Global Elections",
    "Ukraine",
    "Epstein",
    "Israel",
    "Fed",
    "France",
    "Taylor Swift",
    "TikTok",
    "Trade War",
    "AI",
    "Parlays",
    "Fed Rates",
    "H-1B",
    "Earn 4%",
    "US Election",
    "Crypto Prices",
    "Bitcoin",
    "Weather",
    "Movies",
  ];

  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [scrollingDirection, setScrollingDirection] = useState<"left" | "right" | null>(null);
  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const scrollStartX = useRef(0);
  const scrollingTimer = useRef<number | null>(null);

  const updateScrollArrows = () => {
    const el = scrollerRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 2);
    setCanScrollRight(el.scrollWidth - el.clientWidth - el.scrollLeft > 2);
  };

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const onWheel = (e: WheelEvent) => {
      // hijack vertical wheel to horizontal scroll unless Shift is pressed
      if (!e.shiftKey) {
        e.preventDefault();
        const delta = e.deltaY || e.deltaX;
        el.scrollLeft += delta;
        setScrollingDirection(delta > 0 ? "right" : "left");
        updateScrollArrows();

        if (scrollingTimer.current) window.clearTimeout(scrollingTimer.current);
        scrollingTimer.current = window.setTimeout(() => setScrollingDirection(null), 200);
      }
    };

    const onScroll = () => updateScrollArrows();

    el.addEventListener("wheel", onWheel, { passive: false });
    el.addEventListener("scroll", onScroll, { passive: true });
    updateScrollArrows();

    return () => {
      el.removeEventListener("wheel", onWheel);
      el.removeEventListener("scroll", onScroll);
      if (scrollingTimer.current) window.clearTimeout(scrollingTimer.current);
    };
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
      // dx > 0 means pointer moved right: content moves left — choose naming that fits your UX
      setScrollingDirection(dx > 0 ? "left" : "right");
      updateScrollArrows();

      if (scrollingTimer.current) window.clearTimeout(scrollingTimer.current);
      scrollingTimer.current = window.setTimeout(() => setScrollingDirection(null), 200);
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
    <div className="relative flex items-end justify-start h-[1.2cm] w-full overflow-hidden  bg-[#004BF6]">
      {/* Left Indicator */}
      <div
        aria-hidden
        className={`absolute left-0 top-[-18px] bottom-0 w-10 flex items-center justify-center pointer-events-none transition-opacity duration-200 ${
          canScrollLeft ? "opacity-100" : "opacity-0"
        }`}
      >
        <div
          className={`bg-white px-1 py-0.5 flex items-center justify-center transform transition-transform ${
            scrollingDirection === "left" ? "-translate-x-1" : ""
          }`}
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 18l-6-6 6-6" />
          </svg>
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </div>
      </div>

      {/* Right Indicator */}
      <div
        aria-hidden
        className={`absolute right-0 top-[-18px] bottom-0 w-10 flex items-center justify-center pointer-events-none transition-opacity duration-200 ${
          canScrollRight ? "opacity-100" : "opacity-0"
        }`}
      >
        <div
          className={`bg-white px-1 py-0.5 flex items-center justify-center transform transition-transform ${
            scrollingDirection === "right" ? "translate-x-1" : ""
          }`}
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 6l6 6-6 6" />
          </svg>
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 6l6 6-6 6" />
          </svg>
        </div>
      </div>

      {/* Scrollable Nav Items */}
      <div
        ref={scrollerRef}
        className="overflow-x-auto h-full w-full scrollbar-hide"
        style={{
          cursor: "grab",
          WebkitOverflowScrolling: "touch",
          msOverflowStyle: "none",
          scrollbarWidth: "none",
          touchAction: "pan-y", // allow vertical page scroll while enabling horizontal drag
        }}
      >
        <ul className="flex h-full items-stretch whitespace-nowrap gap-2">
          {navItems.map((text, i) => (
            <li key={`${text}-${i}`} className="flex items-stretch  ">
              <button
                type="button"
                className="w-full h-full flex items-center px-2 uppercase tracking-widest text-sm  font-sans transition-all text-white duration-200 hover:bg-[#004BF6] hover:text-white"
                aria-label={text.toLowerCase()}
                style={{ letterSpacing: "0.18em" }}
              >
                <span className="">{text}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
