import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ClientTransition from "../components/ClientTransition";

export const metadata = {
  title: "EGESERA | Authentic From Nest To The Table",
  description:
    "EGESERA - Supplying fresh, authentic poultry products from nest to the table.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="m-0 bg-yellow-50 text-gray-900 overflow-x-hidden">
        <Navbar />
        <ClientTransition>{children}</ClientTransition>
        <Footer />
      </body>
    </html>
  );
}
