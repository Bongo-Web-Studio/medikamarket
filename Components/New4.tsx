// src/components/New4.tsx
"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

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
  const trackRef = useRef<HTMLDivElement | null>(null);
  const groupRef = useRef<HTMLDivElement | null>(null);

  // responsive sizes
  const [cardWidth, setCardWidth] = useState(320);
  const [gap, setGap] = useState(20); // px
  const tlRef = useRef<gsap.core.Tween | null>(null);

  // drag state
  const dragging = useRef(false);
  const pointerStartX = useRef(0);
  const trackStartX = useRef(0);
  const lastMoveTime = useRef(0);
  const lastMoveX = useRef(0);

  function getSlidesPerView(w: number) {
    if (w >= 1600) return 4.2;
    if (w >= 1280) return 3.3;
    if (w >= 1024) return 2.6;
    if (w >= 768) return 2.0;
    if (w >= 640) return 1.6;
    if (w >= 480) return 1.3;
    return 1.05;
  }

  // measure & set responsive card width
  useEffect(() => {
    function measure() {
      const container = containerRef.current;
      if (!container) return;
      const w = container.clientWidth;
      const spv = getSlidesPerView(window.innerWidth);
      const g = 20;
      const totalGaps = g * (spv - 1);
      const cw = Math.max(200, Math.floor((w - totalGaps) / spv)); // min width 200
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

  // marquee + swipe logic
  useEffect(() => {
    let mounted = true;
    let cleanup = () => {};

    (async () => {
      // dynamic import of ModifierPlugin (avoids static type module issues)
      try {
        const mod = await import("gsap/ModifierPlugin");
        gsap.registerPlugin((mod as any).ModifierPlugin);
      } catch (err) {
        // if plugin unavailable at build-time, we still try to continue (but marquee wrap won't work)
        // ensure `npm i gsap` is installed in your project.
        // eslint-disable-next-line no-console
        console.warn("Could not load gsap/ModifierPlugin dynamically:", err);
      }

      if (!mounted) return;

      const track = trackRef.current;
      const group = groupRef.current;
      const container = containerRef.current;
      if (!track || !group || !container) return;

      // compute group width: sum of card widths + gaps between them
      const n = testimonials.length;
      const groupWidth = n * cardWidth + (n - 1) * gap;
      if (!groupWidth) return;

      const speed = 120; // px per second — tweak for faster/slower
      const duration = groupWidth / speed;

      // helper to start marquee tween (kills previous)
      const startMarquee = (curTrack: HTMLDivElement, width: number) => {
        gsap.killTweensOf(curTrack);
        const tween = gsap.to(curTrack, {
          // animate to -width; modifiers.wrap will keep values between -width and 0
          x: -width,
          duration: Math.max(0.1, width / speed),
          ease: "none",
          repeat: -1,
          modifiers: {
            x: (x: string) => {
              // parse numeric value then wrap into [-width, 0)
              const val = parseFloat(x);
              const wrapped = gsap.utils.wrap(-width, 0, val);
              return wrapped + "px";
            },
          },
        });
        tlRef.current = tween;
        return tween;
      };

      // start the marquee
      startMarquee(track, groupWidth);

      // pointer drag handling (pause marquee, allow manual drag, resume)
      function onPointerDown(e: PointerEvent) {
        const curTrack = trackRef.current;
        if (!curTrack) return;
        dragging.current = true;
        pointerStartX.current = e.clientX;
        // read current transform x (gsap.getProperty returns number)
        const currentX = gsap.getProperty(curTrack, "x") as number;
        trackStartX.current = currentX;
        lastMoveTime.current = performance.now();
        lastMoveX.current = e.clientX;
        // pause marquee tween
        if (tlRef.current) tlRef.current.pause();
        (e.target as Element).setPointerCapture?.(e.pointerId);
      }

      function onPointerMove(e: PointerEvent) {
        if (!dragging.current) return;
        const curTrack = trackRef.current;
        if (!curTrack) return;
        const dx = e.clientX - pointerStartX.current;
        const newX = trackStartX.current + dx;
        // set transform using gsap.set for consistency
        gsap.set(curTrack, { x: newX });
        // store last move for velocity calculation
        lastMoveTime.current = performance.now();
        lastMoveX.current = e.clientX;
      }

      function onPointerUp(e: PointerEvent) {
        if (!dragging.current) return;
        const curTrack = trackRef.current;
        if (!curTrack) return;
        dragging.current = false;

        // compute velocity (px / sec)
        const dt = Math.max(1, performance.now() - lastMoveTime.current);
        const dx = e.clientX - lastMoveX.current;
        const velocityPxPerMs = dx / dt;
        const velocityPxPerSec = velocityPxPerMs * 1000;

        // apply small fling effect by starting a short tween, then restart marquee
        const currentX = gsap.getProperty(curTrack, "x") as number;

        // optional: small inertia distance proportional to velocity
        const inertia = velocityPxPerSec * 0.15; // tuning factor
        const targetX = currentX + inertia;

        // animate to targetX quickly and then resume marquee from there
        gsap.killTweensOf(curTrack);
        gsap.to(curTrack, {
          x: targetX,
          duration: 0.5,
          ease: "power3.out",
          onComplete() {
            // restart marquee starting from wherever track currently is
            startMarquee(curTrack, groupWidth);
          },
        });
      }

      // pointer/capture listeners
      track.addEventListener("pointerdown", onPointerDown);
      window.addEventListener("pointermove", onPointerMove);
      window.addEventListener("pointerup", onPointerUp);

      // pause on hover (desktop) and resume on leave
      function onEnter() {
        tlRef.current?.pause();
      }
      function onLeave() {
        // only resume if user not actively dragging
        if (!dragging.current) tlRef.current?.resume();
      }

      track.addEventListener("pointerenter", onEnter);
      track.addEventListener("pointerleave", onLeave);

      // on resize, recalc group width and restart marquee
      function onResize() {
        const curGroup = groupRef.current;
        const curTrack = trackRef.current;
        if (!curGroup || !curTrack) return;
        const newGroupW = testimonials.length * cardWidth + (testimonials.length - 1) * gap;
        gsap.killTweensOf(curTrack);
        startMarquee(curTrack, newGroupW);
      }
      window.addEventListener("resize", onResize);

      cleanup = () => {
        const curTrack = trackRef.current;
        if (curTrack) gsap.killTweensOf(curTrack);
        track.removeEventListener("pointerdown", onPointerDown);
        window.removeEventListener("pointermove", onPointerMove);
        window.removeEventListener("pointerup", onPointerUp);
        track.removeEventListener("pointerenter", onEnter);
        track.removeEventListener("pointerleave", onLeave);
        window.removeEventListener("resize", onResize);
        tlRef.current = null;
      };
    })();

    return () => {
      mounted = false;
      cleanup();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cardWidth, gap, testimonials.length]);

  return (
    <section className="w-full py-12 md:py-16 lg:py-20\\">
      <div className="w-full mx-auto px-4 text-center mb-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black">
          The love is mutual <span role="img" aria-label="love">😍</span>
        </h2>
        <p className="text-[#6E6E73] mt-3 text-base sm:text-lg md:text-xl max-w-2xl mx-auto">
          We’re building for the truth in our customer and make every customer happy
        </p>
      </div>

      <div ref={containerRef} className="w-full mx-auto px-4 overflow-hidden">
        <div
          ref={trackRef}
          className="flex items-stretch select-none"
          style={{
            transform: "translate3d(0,0,0)",
            willChange: "transform",
            gap: gap,
            cursor: "grab",
          }}
          aria-hidden={false}
        >
          {/* original group */}
          <div ref={groupRef} className="flex items-stretch" style={{ gap }}>
            {testimonials.map((t, i) => (
              <article
                key={"g1-" + i}
                className="rounded-2xl overflow-hidden shadow-lg relative flex-shrink-0"
                style={{ width: cardWidth }}
              >
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-full h-[320px] sm:h-[380px] md:h-[420px] lg:h-[480px] object-cover block"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-4 sm:p-6 lg:p-8 text-white">
                  <div>
                    <h3 className="font-semibold text-lg sm:text-2xl md:text-3xl">{t.name}</h3>
                    <p className="text-xs sm:text-sm text-gray-300 mb-2">{t.title}</p>
                    <p className="text-sm sm:text-base md:text-lg leading-snug">{t.quote}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* duplicate group for seamless loop */}
          <div aria-hidden className="flex items-stretch " style={{ gap }}>
            {testimonials.map((t, i) => (
              <article
                key={"g2-" + i}
                className="rounded-2xl overflow-hidden shadow-lg relative flex-shrink-0"
                style={{ width: cardWidth }}
              >
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-full h-[320px] sm:h-[380px] md:h-[420px] lg:h-[480px] object-cover block"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-4 sm:p-6 lg:p-8 text-white">
                  <div>
                    <h3 className="font-semibold text-lg sm:text-2xl md:text-3xl">{t.name}</h3>
                    <p className="text-xs sm:text-sm text-gray-300 mb-2">{t.title}</p>
                    <p className="text-sm sm:text-base md:text-lg leading-snug">{t.quote}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>


    </section>
  );
}
