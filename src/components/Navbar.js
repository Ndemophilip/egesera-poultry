"use client";

import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
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
            {/* Logo (linked to home) */}
            <Link href="/" className="cursor-pointer">
              <Image
                src="/logo.png"
                alt="EGESERA Logo"
                width={240}
                height={120}
                className="object-contain"
                priority
              />
            </Link>

            {/* Tagline (now visible + below logo) */}
            <p
              className="italic font-bold text-black"
              style={{
                marginTop: "-6px", // very close to logo
                fontFamily: "'Brush Script MT', cursive",
                fontSize: "1.3rem",
                letterSpacing: "0.04em",
                whiteSpace: "nowrap",
              }}
            >
              Authentic From Nest To The Table
            </p>
          </div>

          {/* --- Right Section: Navigation Links --- */}
          <div className="pr-16 md:pr-24 lg:pr-32 pt-3">
            <ul className="flex items-center list-none m-0 p-0 whitespace-nowrap space-x-12">
              {["Home", "About", "Products", "Contact"].map((item) => (
                <li key={item} className="flex items-center">
                  <span
                    className="text-black text-xl font-bold mr-3"
                    aria-hidden
                  >
                    &emsp;•
                  </span>
                  <Link
                    href={`/${
                      item.toLowerCase() === "home" ? "" : item.toLowerCase()
                    }`}
                    className="no-underline text-black hover:text-white transition px-3"
                  >
                    {item}&emsp;&emsp;
                  </Link>
                </li>
              ))}
            </ul>
          </div>
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
