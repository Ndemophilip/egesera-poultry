"use client";

export default function ProductsPage() {
  return (
    <main
      className="text-gray-900 flex flex-col items-center"
      style={{
        backgroundColor: "#FFF9E1", // same light background as About page
        minHeight: "100vh",
        padding: "6rem 2rem",
      }}
    >
      <h1 className="text-4xl font-bold text-green-800 mb-8">
        Our Products
      </h1>

      <p className="max-w-3xl text-center text-lg leading-relaxed">
        Explore our range of fresh eggs, broilers, and layers — all sourced directly
        from healthy, well-nurtured chickens at our farms.
      </p>
    </main>
  );
}
