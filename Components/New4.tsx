// src/components/New4.tsx
"use client";

import React, { useEffect, useRef, useState } from "react";

type Testimonial = {
  name: string;
  title: string;
  quote: string;
  img: string;
};

export default function New4(): React.ReactElement {
  const testimonials: Testimonial[] = [
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

  const containerRef = useRef<HTMLDivElement | null>(null);
  const groupRef = useRef<HTMLDivElement | null>(null);
  const [cardWidth, setCardWidth] = useState(320);
  const [gap, setGap] = useState(20);
  const [animDuration, setAnimDuration] = useState(5); // FASTER animation speed

  function getSlidesPerView(w: number) {
    if (w >= 1600) return 4.2;
    if (w >= 1280) return 3.3;
    if (w >= 1024) return 2.6;
    if (w >= 768) return 2.0;
    if (w >= 640) return 1.6;
    if (w >= 480) return 1.3;
    return 1.05;
  }

  // responsive card width
  useEffect(() => {
    function measure() {
      const c = containerRef.current;
      if (!c) return;
      const w = c.clientWidth;
      const spv = getSlidesPerView(window.innerWidth);
      const g = 20;
      const totalGaps = g * (spv - 1);
      const cw = Math.max(200, Math.floor((w - totalGaps) / spv));
      setCardWidth(cw);
      setGap(g);
    }

    measure();
    const ro = new ResizeObserver(measure);
    if (containerRef.current) ro.observe(containerRef.current);
    window.addEventListener("resize", measure);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  // compute marquee duration based on group width
  useEffect(() => {
    const compute = () => {
      const g = groupRef.current;
      if (!g) return;
      const groupWidth = g.getBoundingClientRect().width;

      if (!groupWidth) return;

      // SUPER FAST SPEED
      const speed = 900; // px/sec (change to 1200 for even faster)
      const duration = Math.max(2, groupWidth / speed);
      setAnimDuration(duration);
    };

    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, [cardWidth, gap]);

  return (
    <section className="w-full py-12 md:py-16 lg:py-20">
      <div className="w-full mx-auto px-4 text-center mb-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black">
          The love is mutual <span role="img">😍</span>
        </h2>
        <p className="text-[#6E6E73] mt-3 text-base sm:text-lg md:text-xl max-w-2xl mx-auto">
          We’re building for the truth in our customer and make every customer happy
        </p>
      </div>

      <div ref={containerRef} className="w-full mx-auto px-4 overflow-hidden">
        <div
          className="marquee-track"
          style={{
            display: "flex",
            animation: `marquee ${animDuration}s linear infinite`,
            willChange: "transform",
          }}
        >
          <div ref={groupRef} className="flex items-stretch" style={{ gap }}>
            {testimonials.map((t, i) => (
              <Card key={`g1-${i}`} t={t} w={cardWidth} />
            ))}
          </div>

          <div className="flex items-stretch" style={{ gap }} aria-hidden>
            {testimonials.map((t, i) => (
              <Card key={`g2-${i}`} t={t} w={cardWidth} />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .marquee-track:hover { animation-play-state: paused; }
      `}</style>
    </section>
  );
}

function Card({ t, w }: { t: Testimonial; w: number }) {
  return (
    <article
      className="rounded-2xl overflow-hidden shadow-lg relative flex-shrink-0"
      style={{ width: w }}
    >
      <img
        src={t.img}
        alt={t.name}
        className="w-full h-[320px] sm:h-[380px] md:h-[420px] lg:h-[480px] object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-4 sm:p-6 lg:p-8 text-white">
        <h3 className="font-semibold text-lg sm:text-2xl md:text-3xl">{t.name}</h3>
        <p className="text-xs sm:text-sm text-gray-300 mb-2">{t.title}</p>
        <p className="text-sm sm:text-base md:text-lg">{t.quote}</p>
      </div>
    </article>
  );
}
