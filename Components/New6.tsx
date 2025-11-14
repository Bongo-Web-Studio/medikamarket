"use client";

import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

const IMAGES = [
  "https://ik.imagekit.io/z6mqjyyzz/media/public/default_images/Dental.png?tr=q-60,f-avif",
  "https://ik.imagekit.io/z6mqjyyzz/media/public/default_images/Diagonstics.png?tr=q-60,f-avif",
  "https://ik.imagekit.io/z6mqjyyzz/media/public/default_images/Consumables.png?tr=q-60,f-avif",
  "https://ik.imagekit.io/z6mqjyyzz/media/public/default_images/Equpment.png?tr=q-60,f-avif",
  "https://ik.imagekit.io/z6mqjyyzz/media/public/default_images/opthomolgy_VYzr4Zn.png?tr=q-60,f-avif",
];

function OrbitRing({ side = "left" }: { side?: "left" | "right" }) {
  // correctly type the refs
  const ringRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<Array<HTMLDivElement | null>>([]);

  useLayoutEffect(() => {
    const ring = ringRef.current;
    if (!ring) return;

    // Rotate ring
    gsap.to(ring, {
      rotate: side === "left" ? 360 : -360,
      duration: 40,
      repeat: -1,
      ease: "none",
    });

    // Counter-rotate each item so they stay upright
    itemRefs.current.forEach((item) => {
      if (!item) return;
      gsap.to(item, {
        rotate: side === "left" ? -360 : 360,
        duration: 40,
        repeat: -1,
        ease: "none",
      });
    });
  }, [side]);

  const RADIUS = 220;

  return (
    <div
      className="absolute top-1/2 -translate-y-1/2 pointer-events-none"
      style={{
        left: side === "left" ? "-18vw" : "auto",
        right: side === "right" ? "-18vw" : "auto",
      }}
    >
      <div
        ref={ringRef}
        className="relative"
        style={{ width: RADIUS * 2, height: RADIUS * 2 }}
      >
        {/* Outer ring line */}
        <div className="absolute inset-0 rounded-full " />

        {IMAGES.map((src, i) => {
          const angle = (360 / IMAGES.length) * i;
          const rad = (angle * Math.PI) / 180;
          const x = Math.cos(rad) * RADIUS;
          const y = Math.sin(rad) * RADIUS;

          return (
            <div
              key={i}
              // ref setter must be a function that returns void (no expression-return)
              ref={(el) => {
                // ensure array length and assign
                itemRefs.current[i] = el;
              }}
              className="absolute"
              style={{
                left: `calc(50% + ${x}px - 50px)`,
                top: `calc(50% + ${y}px - 50px)`,
              }}
            >
              <div className="w-[5cm] h-[5cm] rounded-full   flex items-center justify-center overflow-hidden">
                <img
                  src={src}
                  className="w-full h-full object-contain p-2 "
                  alt="orbit"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const New6: React.FC = () => {
  // Layered background using inline `backgroundImage` to combine radial warm glow + horizontal color sweep
  const heroBackground = {
    backgroundImage: [
      // subtle horizontal sweep: left cream -> warm yellow center -> pink right
      "linear-gradient(90deg, #fff 0%, #fff7ec 8%, #fff2c9 35%, #ffe299 52%, #ffd7b8 66%, #ffeef4 86%, #fff 100%)",
      // warm radial glow near bottom-center to mimic the yellow pick glow in the screenshot
      "radial-gradient(circle at 50% 78%, rgba(255,196,71,0.22) 0%, rgba(255,196,71,0.14) 10%, rgba(255,196,71,0.06) 22%, transparent 40%)",
      // faint pink wash on the right edge for the soft pink vertical band
      "linear-gradient(90deg, transparent 70%, rgba(255,222,231,0.65) 100%)",
      // subtle vignette to tie edges together
      "radial-gradient(ellipse at 10% 50%, rgba(0,0,0,0.02) 0%, transparent 20%), radial-gradient(ellipse at 90% 50%, rgba(0,0,0,0.02) 0%, transparent 20%)",
    ].join(", "),
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  } as React.CSSProperties;

  return (
    <section className="relative overflow-hidden">
      {/* Soft gradient background (layered) */}
      <div aria-hidden className="absolute inset-0" style={heroBackground} />

      {/* Bottom warm band to mimic the bright warm base in the screenshot */}
      <div
        aria-hidden
        className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-[120%] h-48 md:h-64 lg:h-80 rounded-t-full blur-3xl"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(255,196,71,0.28), rgba(255,196,71,0.14) 30%, transparent 60%)",
          filter: "blur(36px)",
        }}
      />

      {/* subtle soft grain (optional): keep lightweight and purely decorative */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(transparent 0, rgba(255,255,255,0.02) 1px), linear-gradient(90deg, rgba(0,0,0,0.01), rgba(0,0,0,0.01))",
          backgroundSize: "100% 2px, 100% 100%",
          mixBlendMode: "overlay",
          opacity: 0.6,
        }}
      />
<div className="hidden md:block">
    
      <OrbitRing side="left" />
      <OrbitRing side="right" />
</div>

      <div className="relative  mx-auto px-6 py-24 md:py-10 text-center">
        {/* Heading */}
        <h1 className="font-extrabold text-2xl md:text-[6.25rem] lg:text-[5rem] leading-[1] tracking-tight text-[#3b1016] drop-shadow-sm">
          <span className="block">Find the Medical Equipments </span>
          <span className="block">
            in best Affordable price
            {/* wavy underline positioned to match screenshot */}
          </span>
        </h1>

        {/* Subheading */}
        <p className="mt-6 md:mt-10 text-[13px] md:text-lg max-w-2xl mx-auto text-[#0f0b0bcc]">
          Uncover the real people looking to buy, preview exactly who will see
          your ads before spending a dime, and launch your campaigns with
          confidence.
        </p>

        {/* CTA buttons */}
        <div className="mt-8 md:mt-12 flex items-center justify-center gap-4 md:gap-6">
          <button
            className="inline-flex items-center justify-center px-6 md:px-10 py-3 md:py-4 rounded-3xl text-white font-semibold shadow-inner shadow-white/40 border border-[#3B1016]"
            style={{
              background: "linear-gradient(180deg,#2f0006 0%,#4d0b17 100%)",
        
            }}
          >
            Book Custom Order
          </button>
        </div>
      </div>
    </section>
  );
};

export default New6;
