"use client";

import React, { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

import DiagnosticsSection from "@/Components/DiagnosticsSection";
import Footer from "@/Components/Footer";
import NavbarAmazonClone from "@/Components/Navbar";
import New1 from "@/Components/New1";
import New4 from "@/Components/New4";
import New5 from "@/Components/New5";
import New6 from "@/Components/New6";
import New8 from "@/Components/New8";
import DentalSectionGrid from "@/Components/DentalSection";
import CTASection from "@/Components/New9";

export default function Home() {
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

  const banners = [
    { src: "./banner3.jpg", alt: "Medical banner 3" },
    { src: "./banner2.jpg", alt: "Medical banner 2" },
    { src: "./banner1.jpg", alt: "Medical banner 1" },
  ];

  // ✔ Correct Lenis setup
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => 1 - Math.pow(2, -10 * t),
      smoothWheel: true,
      gestureOrientation: "vertical",
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="w-full min-h-screen relative" style={heroBackground}>
      <NavbarAmazonClone />

      <New6 />

      <main className="bg-white overflow-hidden border-t-4 border-[#FDC89B] rounded-t-[28px] md:rounded-t-[40px] lg:rounded-t-[70px] mt-6">
        <div>
          <New1 />
          <DentalSectionGrid />

          <section className="hidden w-full lg:flex flex-col lg:flex-row items-center justify-center gap-6 py-6 p-10">
            {banners.map((b, idx) => (
              <div
                key={b.src + idx}
                className="w-full lg:w-1/3 shrink-0 rounded-2xl overflow-hidden shadow-sm"
              >
                <img
                  src={b.src}
                  alt={b.alt}
                  className="w-full h-40 sm:h-56 md:h-72 lg:h-[40vh] object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </section>

          <New8 />
          <DiagnosticsSection />

          <div className="py-6">
            <New4 />
          </div>

          <div className="py-6">
            <New5 />
          </div>

          <div className="bg-white py-20 flex justify-center items-center">
            <CTASection/>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
