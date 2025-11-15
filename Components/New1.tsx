"use client";

import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper as SwiperClass } from "swiper";
import gsap from "gsap";

interface Feature {
  id: string;
  img: string;
  title: string;
  customClass?: string;
  button?: {
    icon?: React.ReactNode;
    label: string;
  };
}

const features: Feature[] = [
  {
    id: "f1",
    img: "https://ik.imagekit.io/z6mqjyyzz/media/public/default_images/Dental.png?tr=q-60,f-avif",
    title: "Dental",
    customClass: "w-50 h-50",
    button: { label: "Download" },
  },
  {
    id: "f2",
    img: "https://ik.imagekit.io/z6mqjyyzz/media/public/default_images/Diagonstics.png?tr=q-60,f-avif",
    title: "Diagnostics",
    customClass: "w-50 h-50",
    button: { label: "Download" },
  },
  {
    id: "f3",
    img: "https://ik.imagekit.io/z6mqjyyzz/media/public/default_images/Consumables.png?tr=q-60,f-avif",
    title: "Consumables",
    customClass: "w-50 h-50",
    button: { label: "Download" },
  },
  {
    id: "f4",
    img: "https://ik.imagekit.io/z6mqjyyzz/media/public/default_images/Equpment.png?tr=q-60,f-avif",
    title: "Equipment",
    customClass: "w-50 h-50",
    button: { label: "Download" },
  },
  {
    id: "f5",
    img: "https://ik.imagekit.io/z6mqjyyzz/media/public/default_images/opthomolgy_VYzr4Zn.png?tr=q-60,f-avif",
    title: "Ophthalmology",
    customClass: "w-50 h-50",
    button: { label: "Download" },
  },
  {
    id: "f6",
    img: "https://ik.imagekit.io/z6mqjyyzz/media/public/default_images/Nephro.png?tr=q-60,f-avif",
    title: "Nephrology",
    customClass: "w-50 h-50",
    button: { label: "Download" },
  },
  {
    id: "f7",
    img: "https://ik.imagekit.io/z6mqjyyzz/media/public/default_images/Physiotherapy.png?tr=q-60,f-avif",
    title: "Physiotherapy",
    customClass: "w-50 h-50",
    button: { label: "Download" },
  },
  {
    id: "f8",
    img: "https://ik.imagekit.io/z6mqjyyzz/media/public/default_images/Refurbished_category_icon_2.png?tr=q-60,f-avif",
    title: "Refurbished",
    customClass: "w-50 h-50",
    button: { label: "Download" },
  },
  {
    id: "f9",
    img: "https://ik.imagekit.io/z6mqjyyzz/media/public/default_images/vaccine_BE3mEcy.png?tr=q-60,f-avif",
    title: "Vaccines",
    customClass: "w-50 h-50",
    button: { label: "Download" },
  },
  {
    id: "f10",
    img: "https://ik.imagekit.io/z6mqjyyzz/media/public/default_images/IVF3.png?tr=q-60,f-avif",
    title: "IVF/Gynae",
    customClass: "w-50 h-50",
    button: { label: "Download" },
  },
  {
    id: "f11",
    img: "https://ik.imagekit.io/z6mqjyyzz/media/public/default_images/Pharma.png?tr=q-60,f-avif",
    title: "Pharma",
    customClass: "w-50 h-50",
    button: { label: "Download" },
  },
];

export default function SmoothSwiperWithGSAP(): React.ReactElement {
  const swiperRef = useRef<SwiperClass | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const slidesRef = useRef<HTMLDivElement[] | null>([]);

  useEffect(() => {
    // when the swiper is ready, grab the real .swiper-wrapper element so we can
    // animate it with GSAP instead of letting Swiper touch it.
    if (!swiperRef.current) return;

    const el = swiperRef.current.el as HTMLElement | undefined;
    const wrapper = el?.querySelector(".swiper-wrapper") as HTMLDivElement | null;
    wrapperRef.current = wrapper;

    // performance hint
    wrapper?.querySelectorAll(".swiper-slide").forEach((slide) => {
      (slide as HTMLElement).style.willChange = "transform, opacity";
    });

    // small parallax on images based on slide progress for extra smooth feel
    const onProgress = () => {
      if (!swiperRef.current) return;
      if (!swiperRef.current.slides) return;

      swiperRef.current.slides.forEach((s: any) => {
        // Swiper sometimes returns slides without `.el`, especially on SSR hydration.
        if (!s || !s.el) return;

        const slideEl = s.el as HTMLElement;
        if (!slideEl) return;

        const prog = s.progress ?? 0;

        // img safety-check
        const img = slideEl.querySelector("img");
        if (img) {
          gsap.to(img, { y: prog * -8, duration: 0.6, ease: "power3.out" });
        }

        // inner tile scale safety-check
        const inner = slideEl.querySelector(".tile-inner") as HTMLElement | null;
        if (inner) {
          const scale = 1 - Math.min(Math.abs(prog) * 0.06, 0.06);
          gsap.to(inner, { scale, duration: 0.6, ease: "power3.out" });
        }
      });
    };

    // attach swiper event listeners in a safe way
    swiperRef.current.on("progress", onProgress);
    onProgress();

    return () => {
      if (!swiperRef.current) return;
      swiperRef.current.off("progress", onProgress);
    };
  }, [swiperRef.current]);

  return (
    <div className="relative w-full">
      <div className="px-4 sm:px-8 md:px-20 py-10 sm:py-16 cursor-grab">
        <div className="w-full relative">
          <Swiper
            modules={[Navigation]}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            spaceBetween={20}
            slidesPerView={"auto"}
            navigation={false}
            // virtualTranslate prevents Swiper from writing inline transform to the DOM.
            // we read `swiper.translate` and animate the wrapper with GSAP, giving us
            // smooth, interruptible, GPU-accelerated motion.
            virtualTranslate={true}
            watchSlidesProgress={true}
            // this callback is fired when Swiper calculates a new translate value.
            // we animate to that value using GSAP (interruptible, easing controlled).
            onSetTranslate={(swiper: any) => {
              if (!wrapperRef.current) return;
              // swiper.translate is the value that Swiper *would* apply.
              // animate wrapper.x to that value.
              gsap.to(wrapperRef.current, {
                x: swiper.translate,
                duration: 0.65,
                ease: "power3.out",
                overwrite: true,
              });
            }}
            // ensure a nice snap if user releases; Swiper will still manage progress/indices
            onTouchStart={() => {
              // stop any running tweens when user grabs
              gsap.killTweensOf(wrapperRef.current);
            }}
            onTouchEnd={(swiper: any) => {
              // when touch ends, Swiper may calculate momentum. animate to final position
              if (!wrapperRef.current) return;
              gsap.to(wrapperRef.current, {
                x: swiper.translate,
                duration: 0.9,
                ease: "power4.out",
                overwrite: true,
              });
            }}
            className="smooth-swiper"
          >
            {Array.isArray(features) &&
              features.map((item, idx) => (
                <SwiperSlide key={item.id} className="max-w-40 shrink-0">
                  <div className="flex justify-center items-center flex-col rounded-4xl p-5 transition-all duration-300">
                    <div className="relative flex justify-center items-center bg-[#F5F5F7] rounded-full w-32 h-32 mb-4 p-4 tile-inner">
                      <img
                        src={item.img}
                        alt={String(item.title)}
                        className={`${item.customClass ?? ""} object-contain`}
                      />
                    </div>
                    <h1 className="text-lg hover:text-[#3B1016]">{item.title}</h1>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

/*
Notes / usage:
- Install dependencies: `npm install gsap swiper` or `yarn add gsap swiper`
- Keep your existing Swiper CSS imports (already included at the top).
- Tweak the gsap durations/eases in `onSetTranslate` and progress handlers to taste.
- `virtualTranslate` makes Swiper calculate motion but not touch the DOM transform;
  we then animate the wrapper with GSAP which gives us buttery, interruptible easing.
- If you need navigation buttons you can still wire them using Swiper API (swiperRef.current.slideNext(), etc.).
*/
