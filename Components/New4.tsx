"use client";

import React from "react";

export default function New4() {
  const testimonials = [
    {
      name: "Naidu",
      title: "Aurora Bio Solutions, Hyderabad",
      quote: "నా Inventory ని Swipe లో చాలా సులువుగా మేనేజ్ చేసుకుంటున్నాను.",
      img: "https://getswipe.azureedge.net/getswipe/images/customers/53.avif",
    },
    {
      name: "Harsh Sethi",
      title: "Tron Technologies, New Delhi",
      quote: "Swipe is a must–have for all businesses.",
      img: "https://getswipe.azureedge.net/getswipe/images/customers/35.avif",
    },
    {
      name: "Vipin Kumar",
      title: "Concept Marketing, Bengaluru",
      quote: "I have recommended Swipe to more than 40 businesses.",
      img: "https://getswipe.azureedge.net/getswipe/images/customers/46.avif",
    },
    {
      name: "Dr. P. Naveen Kumar",
      title: "Physiotherapist, Hyderabad",
      quote: "I manage both my clinics easily with Swipe.",
      img: "https://getswipe.azureedge.net/getswipe/images/customers/4.avif",
    },
        {
      name: "Dr. P. Naveen Kumar",
      title: "Physiotherapist, Hyderabad",
      quote: "I manage both my clinics easily with Swipe.",
      img: "https://getswipe.azureedge.net/getswipe/images/customers/7.avif",
    },
  ];

  const looped = [...testimonials, ...testimonials]; // duplicate for smooth loop

  return (
    <section className="bg- border-t border-gray-200 py-16 md:py-20 w-full h-full overflow-hidden ">
      {/* Heading */}
      <div className="text-center mb-12 px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-black">
          The love is mutual{" "}
          <span role="img" aria-label="love">
            😍
          </span>
        </h2>
        <p className="text-[#6E6E73] mt-3 text-base sm:text-lg md:text-xl max-w-2xl mx-auto">
          We’re building for the truth in ower customer and make every customer happy
        </p>
      </div>

      {/* Marquee Container */}
      <div className="marquee">
        <div className="marquee-track">
          {looped.map((t, i) => (
            <div
              key={i}
              className="marquee-item flex-none relative rounded-2xl overflow-hidden shadow-lg"
            >
              <img
                src={t.img}
                alt={t.name}
                className="w-full h-[400px] sm:h-[450px] md:h-[500px] lg:h-[520px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-6 sm:p-8 text-white">
                <div>
                  <h3 className="font-semibold text-lg sm:text-2xl md:text-3xl">{t.name}</h3>
                  <p className="text-xs sm:text-sm text-gray-300 mb-2">{t.title}</p>
                  <p className="text-sm sm:text-base md:text-lg leading-snug">{t.quote}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
