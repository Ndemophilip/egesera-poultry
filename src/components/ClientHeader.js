"use client";

import Navbar from "./Navbar";

export default function ClientHeader() {
  return (
    <header className="fixed top-0 left-0 w-full bg-yellow-50 py-6 px-8 shadow-sm z-50 flex flex-col md:flex-row md:items-center md:justify-between">
      <div>
        <h1 className="text-5xl font-extrabold text-green-900">EGESERA</h1>
        <p className="text-gray-700 text-base">Authentic from nest to the table</p>
      </div>
      <nav className="mt-4 md:mt-0">
        <Navbar />
      </nav>
    </header>
  );
}