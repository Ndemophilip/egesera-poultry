"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const heroImages = [
  "/images/poultry1.png",
  "/images/poultry2.png",
  "/images/poultry3.png",
  "/images/poultry4.png",
  "/images/poultry5.png",
];

export default function HomePage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main
      className="text-gray-900"
      style={{
        backgroundColor: "#FAD02C", // brand yellow
        overflowX: "hidden",
        margin: 0,
        padding: 0,
      }}
    >
      {/* 🌄 Hero Section */}
      <section
        className="relative w-full h-[90vh] overflow-hidden"
        style={{
          marginTop: "0px",
          paddingTop: "0px",
          width: "100vw", // ensures full edge-to-edge width
        }}
      >
        {heroImages.map((src, index) => (
          <motion.div
            key={index}
            initial={{ x: "100%", opacity: 0 }}
            animate={{
              x: index === currentIndex ? "0%" : "-100%",
              opacity: index === currentIndex ? 1 : 0,
            }}
            transition={{ duration: 1 }}
            className="absolute inset-0 h-full"
            style={{
              width: "100vw", // fixes right gap
            }}
          >
            <Image
              src={src}
              alt={`Poultry ${index + 1}`}
              fill
              sizes="100vw"
              style={{
                objectFit: "cover",
              }}
              priority={index === 0}
            />
          </motion.div>
        ))}

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 z-[5]" />

        {/* Hero Text */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 text-center px-6 z-10">
          <div
            className="inline-block bg-black/40 backdrop-blur-sm p-8 rounded-2xl shadow-xl max-w-3xl mx-auto"
            style={{ color: "white" }}
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 drop-shadow-lg">
              Welcome to EGESERA Poultry
            </h1>
            <p className="text-base sm:text-lg text-gray-100 leading-relaxed drop-shadow-lg">
              EGESERA Poultry is Kenya’s trusted source for premium, farm-fresh poultry
              products. We combine modern farming practices with local care to deliver
              healthy, sustainable, and high-quality poultry — from the nest to your table. Our
              commitment to freshness, hygiene, and ethical production ensures that every
              egg and chicken you enjoy is raised with integrity and delivered with pride.
            </p>
          </div>
        </div>
      </section>

      {/* 💛 About Section */}
      <section className="text-center py-10">
        <h2 className="text-3xl font-semibold text-green-700 mb-4">
          Why Choose EGESERA?
        </h2>
        <p className="max-w-3xl mx-auto leading-relaxed text-black">
          We are dedicated to quality, freshness, and sustainability. Our poultry is raised
          naturally and delivered directly to your kitchen.
        </p>
      </section>
    </main>
  );
}
