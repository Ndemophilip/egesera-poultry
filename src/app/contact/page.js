"use client";

export default function ContactPage() {
  return (
    <main
      className="text-gray-900 flex flex-col items-center justify-center"
      style={{
        backgroundColor: "#FFFBE7",
        minHeight: "100vh",
        padding: "6rem 2rem",
      }}
    >
      <h1 className="text-4xl font-bold text-green-700 mb-6">
        Contact EGESERA
      </h1>
      <p className="text-lg mb-8 max-w-2xl text-center">
        Have questions or want to place an order? We’d love to hear from you.
      </p>
      <div className="text-center text-black">
        <p>
          📞 <strong>+254 727691942</strong>
        </p>
        <p>
          📧 <strong>egeseera@gmail.com</strong>
        </p>
        <p>Kisii, Kenya</p>
      </div>
    </main>
  );
}
