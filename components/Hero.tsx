"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";

const slides = [
//   {
//     src: "/ca.jpeg",
//     tag: "Professional Care",
//     title: "Compassionate Support\nFor Every Need",
//     desc: "Delivering dignified, person-centred care across professional environments.",
//   },
//   {
//     src: "/care.jpeg",
//     tag: "Private Households",
//     title: "Home Is Where\nCare Begins",
//     desc: "Trusted in-home support tailored to your family's unique lifestyle.",
//   },
//   {
//     src: "/errands.jpeg",
//     tag: "Our Values",
//     title: "Excellence In Every\nInteraction",
//     desc: "Integrity, respect, and professionalism at the heart of all we do.",
//   },
//   {
//     src: "/homecleaning.jpeg",
//     tag: "Our Team",
//     title: "Skilled & Dedicated\nCare Professionals",
//     desc: "Fully trained staff committed to going above and beyond for every client.",
//   },
//   {
//     src: "/office.jpeg",
//     tag: "Get In Touch",
//     title: "Ready To Start\nYour Care Journey?",
//     desc: "Speak with our team today to find the right support for you.",
//   },

 {
    src: "/homecleaning.jpeg",
    tag: "",
    title: "",
    desc: "",
  },
  {
    src: "/domicilary.jpeg",
    tag: "",
    title: "",
    desc: "",
  },
  {
    src: "/office.jpeg",
    tag: "",
    title: "",
    desc: "",
  },
];

const AUTO_DELAY = 3000;

export default function HeroCarousel() {
  const [cur, setCur] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  const goTo = useCallback((next: number) => {
    const n = (next + slides.length) % slides.length;
    setPrev(cur);
    setCur(n);
  }, [cur]);

  const resetProgress = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    if (progressRef.current) {
      progressRef.current.style.transition = "none";
      progressRef.current.style.width = "0%";
      requestAnimationFrame(() => requestAnimationFrame(() => {
        if (progressRef.current) {
          progressRef.current.style.transition = `width ${AUTO_DELAY}ms linear`;
          progressRef.current.style.width = "100%";
        }
      }));
    }
    timerRef.current = setTimeout(() => goTo(cur + 1), AUTO_DELAY);
  }, [cur, goTo]);

  useEffect(() => {
    const t = setTimeout(() => setPrev(null), 750);
    return () => clearTimeout(t);
  }, [cur]);

  useEffect(() => {
    resetProgress();
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [cur]);

  const getSlideClass = (i: number) => {
    if (i === cur) return "active";
    if (i === prev) return "prev";
    return "next";
  };

  return (
    <div
      className="relative w-full h-105 lg:h-150 overflow-hidden rounded-xl bg-[#0a1628]"
      onMouseEnter={() => { if (timerRef.current) clearTimeout(timerRef.current); }}
      onMouseLeave={resetProgress}
    >
      {/* Progress bar */}
      <div
        ref={progressRef}
        className="absolute bottom-0 left-0 h-0.75 z-10"
        style={{ background: "linear-linear(90deg, #c8920a, #f5d97a)" }}
      />

      {/* Counter */}
      <span className="absolute top-5 right-5 z-10 text-xs font-bold tracking-widest text-white/50 font-mont">
        {String(cur + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
      </span>

      {/* Slides */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 flex items-end p-8 lg:p-14 transition-all duration-700 ease-[cubic-bezier(0.77,0,0.175,1)]
            ${getSlideClass(i) === "active"
              ? "translate-x-0 z-3 opacity-100 brightness-100"
              : getSlideClass(i) === "prev"
              ? "-translate-x-60% z-2 opacity-50 brightness-50"
              : "translate-x-full z-1 opacity-100"
            }`}
        >
          <Image
            src={slide.src}
            alt={slide.tag}
            fill
            className="object-cover"
            priority={i === 0}
          />
          {/* linear overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/10 to-transparent" />

          {/* Text content */}
          <div className="relative z-10 text-white">
            <p className="text-[11px] font-bold tracking-[3px] uppercase text-[#f5d97a] mb-2 font-mont">
              {slide.tag}
            </p>
            <h2 className="text-2xl lg:text-4xl font-extrabold leading-tight mb-2 font-mont whitespace-pre-line">
              {slide.title}
            </h2>
            <p className="text-sm opacity-80 leading-relaxed max-w-sm font-mont">
              {slide.desc}
            </p>
          </div>
        </div>
      ))}

      {/* Controls */}
      <div className="absolute bottom-6 right-6 z-10 flex items-center gap-2">
        <button
          onClick={() => goTo(cur - 1)}
          aria-label="Previous slide"
          className="w-9 h-9 rounded-full flex items-center justify-center text-white bg-white/15 border border-white/30 hover:bg-[#c8920a]/70 hover:border-[#f5d97a] transition-colors"
        >
          ‹
        </button>

        {/* Dots */}
        <div className="flex gap-1.5 items-center">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === cur ? "w-5 bg-[#f5d97a]" : "w-1.5 bg-white/35"
              }`}
            />
          ))}
        </div>

        <button
          onClick={() => goTo(cur + 1)}
          aria-label="Next slide"
          className="w-9 h-9 rounded-full flex items-center justify-center text-white bg-white/15 border border-white/30 hover:bg-[#c8920a]/70 hover:border-[#f5d97a] transition-colors"
        >
          ›
        </button>
      </div>
    </div>
  );
}