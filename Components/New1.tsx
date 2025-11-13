"use client";
import React, { useRef } from "react";
import { Download } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules"; // correct for Swiper 9+
import "swiper/css";
import "swiper/css/navigation";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
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

/* ---------- Replace this sample data with your real `features` ---------- */
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
    id: "f6",
    img: "https://ik.imagekit.io/z6mqjyyzz/media/public/default_images/Physiotherapy.png?tr=q-60,f-avif",
    title: "Physiotherapy",
    customClass: "w-50 h-50",
    button: { label: "Download" },
  },
  {
    id: "f6",
    img: "https://ik.imagekit.io/z6mqjyyzz/media/public/default_images/Refurbished_category_icon_2.png?tr=q-60,f-avif",
    title: "Refurbished",
    customClass: "w-50 h-50",
    button: { label: "Download" },
  },
  {
    id: "f6",
    img: "https://ik.imagekit.io/z6mqjyyzz/media/public/default_images/vaccine_BE3mEcy.png?tr=q-60,f-avif",
    title: "Vaccines",
    customClass: "w-50 h-50",
    button: { label: "Download" },
  },
  {
    id: "f6",
    img: "https://ik.imagekit.io/z6mqjyyzz/media/public/default_images/IVF3.png?tr=q-60,f-avif",
    title: "IVF/Gynae",
    customClass: "w-50 h-50",
    button: { label: "Download" },
  },
  {
    id: "f6",
    img: "https://ik.imagekit.io/z6mqjyyzz/media/public/default_images/Pharma.png?tr=q-60,f-avif",
    title: "Pharma",
    customClass: "w-50 h-50",
    button: { label: "Download" },
  },
];
/* ---------------------------------------------------------------------- */

export default function New1(): React.ReactElement {
  const swiperRef = useRef<SwiperClass | null>(null);

  return (
    <div className="relative  w-full overflow-hidden border-t  border-gray-200 ">
   
      <div className=" px-4 sm:px-8 md:px-20  xl:px- py-10 sm:py-16 lg:py-">
        {/* Swiper Carousel */}
        <div className="w-full  relative ">
        

          <Swiper
            modules={[Navigation]}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            spaceBetween={20}
            slidesPerView={"auto"}
            navigation={false} // manual buttons are fine
            className=""
          >
            {/* runtime guard: ensure features is an array before mapping */}
            {Array.isArray(features) &&
              features.map((item) => (
                <SwiperSlide
                  key={item.id}
                  className="max-w-[11rem] sm:max-w-[12rem] flex-shrink-0"
                >
                  <div className="flex justify-center items-center flex-col">
                    <div className="relative flex justify-center items-center">
                      <img
                        src={item.img}
                        alt={String(item.title)} // ensure alt is a string
                        className={`${item.customClass ?? ""} object-contain`}
                      />
                    </div>
                    <h1 className=" mt-3 sm:mt-4 text-2xl  hover:text-[#155DFC]">
                      {item.title}
                    </h1>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
