"use client";

export default function AboutPage() {
  return (
    <main
      className="text-gray-900 flex flex-col items-center justify-center"
      style={{
        backgroundColor: "#FFF9E1", // soft off-white background
        minHeight: "100vh",
        padding: "6rem 2rem",
      }}
    >
      <section className="max-w-4xl text-center">
        <h1 className="text-4xl font-bold text-green-700 mb-6">
          About EGESERA Poultry
        </h1>
        <p className="text-lg leading-relaxed">
          EGESERA Poultry is a proudly Kenyan farm dedicated to delivering premium,
          farm-fresh poultry products. Our commitment to sustainability and local community
          farming ensures every egg and chicken is raised with care, integrity, and pride.
        </p>
      </section>
    </main>
  );
}
