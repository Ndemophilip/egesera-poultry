"use client";

export default function Gallery() {
  return (
    <main className="min-h-screen bg-amber-50 text-gray-800 px-6 py-12">
      <h1 className="text-4xl font-bold text-green-900 mb-6">Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <img src="/images/farm1.jpg" alt="Farm view" className="rounded-lg shadow"/>
        <img src="/images/farm2.jpg" alt="Chicks" className="rounded-lg shadow"/>
        <img src="/images/farm3.jpg" alt="Eggs pack" className="rounded-lg shadow"/>
      </div>
    </main>
  );
}
