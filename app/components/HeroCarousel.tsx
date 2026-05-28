"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { LOWER_ARTIST_NAME } from "../constants";
import { HERO_CAROUSEL_IMAGES } from "../images";


export function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Slow fade transition - changes every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev + 1 >= HERO_CAROUSEL_IMAGES.length ? 0 : prev + 1);
    }, 10_000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {HERO_CAROUSEL_IMAGES.map((src, idx) => (
        <Image
          key={src}
          src={src}
          alt=""
          fill
          className={`object-cover object-[50%_10%] transition-opacity duration-1000 ease-in-out grayscale ${
            idx === currentIndex ? "opacity-100" : "opacity-0"
          }`}
          priority={idx === currentIndex}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/60 via-neutral-950/40 to-neutral-950" />
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <h1
          className={`flex items-center justify-center text-6xl md:text-8xl font-bold mb-6 tracking-tight bg-linear-to-r from-pink-500 via-red-500 to-yellow-500 bg-[length:200%_auto] animate-shine`}
          style={{
            backgroundSize: '200% auto',
            animation: 'shine 8s ease-in-out infinite',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            WebkitTextStroke: '0px',
          }}
        >
          {LOWER_ARTIST_NAME}
        </h1>
        <p className="text-xl md:text-2xl text-neutral-400 mb-10 font-thin tracking-tight mx-20 rounded-lg p-2 backdrop-blur-sm">
          live looping singer-songwriter based in <span className="text-neutral-200 font-semibold">bar harbor, maine</span>
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/music"
            className="backdrop-blur-sm px-8 py-4 border border-neutral-700 text-neutral-100 opacity-70 hover:opacity-100 transition-opacity"
          >
            music
          </Link>
          <Link
            href="/upcoming-shows"
            className="backdrop-blur-sm px-8 py-4 border border-neutral-700 text-neutral-100 opacity-70 hover:opacity-100 transition-opacity"
          >
            shows
          </Link>
        </div>
      </div>
    </section>
  );
}
