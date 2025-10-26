"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = ["Home", "About", "Products", "Contact"];

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 shadow-md"
      style={{
        background:
          "linear-gradient(to bottom, #FAD02C 0%, #FAD02C 80%, rgba(250,208,44,0.65) 92%, rgba(250,208,44,0) 100%)",
      }}
    >
      <div className="max-w-screen-2xl mx-auto flex justify-between items-center px-6 md:px-10 lg:px-16 py-6 relative">
        {/* --- Left Section: Logo + Tagline --- */}
        <div className="flex flex-col items-start -ml-2 md:-ml-6">
          <Link href="/" className="cursor-pointer">
            <Image
              src="/logo.png"
              alt="EGESERA Logo"
              width={200}
              height={100}
              className="object-contain"
              priority
            />
          </Link>

          <p
            className="italic font-bold text-black"
            style={{
              marginTop: "-6px",
              fontFamily: "'Brush Script MT', cursive",
              fontSize: "1.1rem",
              letterSpacing: "0.04em",
              whiteSpace: "nowrap",
            }}
          >
            Authentic From Nest To The Table
          </p>
        </div>

        {/* --- Desktop Navigation Links --- */}
        <div className="hidden md:block pr-10 lg:pr-20 pt-3">
          <ul className="flex items-center list-none m-0 p-0 space-x-10">
            {navLinks.map((item) => (
              <li key={item}>
                <Link
                  href={`/${
                    item.toLowerCase() === "home" ? "" : item.toLowerCase()
                  }`}
                  className="text-black font-semibold text-lg hover:text-white transition"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* --- Mobile Menu Button --- */}
        <button
          className="md:hidden text-black focus:outline-none border border-gray-300 p-1 rounded-md"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* --- Mobile Menu (Slide Down) --- */}
      <div
        className={`md:hidden bg-[#FAD02C] transition-all duration-300 ease-in-out overflow-hidden ${
          menuOpen ? "max-h-64 opacity-100 py-4" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center space-y-3 font-semibold">
          {navLinks.map((item) => (
            <li key={item}>
              <Link
                href={`/${
                  item.toLowerCase() === "home" ? "" : item.toLowerCase()
                }`}
                onClick={() => setMenuOpen(false)}
                className="text-black hover:text-white transition text-lg"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* --- Gradient Fade into Hero --- */}
      <div
        className="absolute bottom-0 left-0 w-full pointer-events-none"
        style={{
          height: "100px",
          background:
            "linear-gradient(to bottom, rgba(250,208,44,0.7) 0%, rgba(250,208,44,0.3) 40%, rgba(250,208,44,0) 100%)",
        }}
      />
    </nav>
  );
}
