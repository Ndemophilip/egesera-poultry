"use client";

export default function Order() {
  return (
    <main className="min-h-screen bg-white text-gray-800 px-6 py-12">
      <h1 className="text-4xl font-bold text-green-900 mb-6">Place Your Order</h1>
      <p className="mb-8">
        Fill out the form below and we will get back to you within 24 hours.
      </p>

      <form className="max-w-lg mx-auto space-y-4">
        <input type="text" placeholder="Your Name" className="w-full border border-gray-300 p-3 rounded"/>
        <input type="email" placeholder="Your Email" className="w-full border border-gray-300 p-3 rounded"/>
        <input type="tel" placeholder="Phone Number" className="w-full border border-gray-300 p-3 rounded"/>
        <textarea placeholder="What would you like to order?" rows="4" className="w-full border border-gray-300 p-3 rounded"/>
        <button type="submit" className="bg-green-900 text-white px-6 py-3 rounded hover:bg-green-800 transition">
          Submit Order
        </button>
      </form>
    </main>
  );
}
