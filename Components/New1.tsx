"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper as SwiperClass } from "swiper";

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

export default function NormalSwiper(): React.ReactElement {
  const swiperRef = React.useRef<SwiperClass | null>(null);

  return (
    <div className="relative w-full">
      <div className="px-4 sm:px-8 md:px-20 py-10 sm:py-16">
        <div className="w-full relative">
          <Swiper
            modules={[Navigation]}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            spaceBetween={20}
            slidesPerView={"auto"}
            navigation={true}
            className="normal-swiper"
          >
            {Array.isArray(features) &&
              features.map((item) => (
                <SwiperSlide key={item.id} className="max-w-40 shrink-0">
                  <div className="flex justify-center items-center flex-col rounded-4xl p-5 transition-all duration-300">
                    <div className="relative flex justify-center items-center bg-[#F5F5F7] rounded-full w-32 h-32 mb-4 p-4">
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

