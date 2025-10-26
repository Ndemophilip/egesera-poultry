"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // <-- icons for mobile toggle

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = ["Home", "About", "Products", "Contact"];

  return (
    <>
      <style jsx global>{`
        body {
          margin: 0;
          overflow-x: hidden;
        }
      `}</style>

      {/* Navigation Bar */}
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
          <div className="hidden md:block pr-16 md:pr-24 lg:pr-32 pt-3">
            <ul className="flex items-center list-none m-0 p-0 whitespace-nowrap space-x-12">
              {navLinks.map((item) => (
                <li key={item} className="flex items-center">
                  <span
                    className="text-black text-xl font-bold mr-3"
                    aria-hidden
                  >
                    •
                  </span>
                  <Link
                    href={`/${
                      item.toLowerCase() === "home" ? "" : item.toLowerCase()
                    }`}
                    className="no-underline text-black hover:text-white transition px-3 font-semibold"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* --- Mobile Menu Button --- */}
          <button
            className="md:hidden text-black focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>

        {/* --- Mobile Menu --- */}
        <div
          className={`md:hidden bg-[#FAD02C] absolute top-full left-0 w-full transition-all duration-300 overflow-hidden ${
            menuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="flex flex-col items-center py-4 space-y-3 font-semibold">
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

        {/* Extended Fade into Hero */}
        <div
          className="absolute bottom-0 left-0 w-full pointer-events-none"
          style={{
            height: "120px",
            background:
              "linear-gradient(to bottom, rgba(250,208,44,0.7) 0%, rgba(250,208,44,0.3) 40%, rgba(250,208,44,0) 100%)",
          }}
        />
      </nav>
    </>
  );
}
