"use client";

import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#808080", // dark gray background
        color: "white",
        padding: "3rem 2rem",
        margin: 0, // remove any spacing
        width: "100vw", // span full viewport width
        position: "relative",
        left: 0,
        right: 0,
        boxSizing: "border-box",
      }}
    >
      {/* Footer Container */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "2rem",
          textAlign: "center",
          marginBottom: "2rem",
          maxWidth: "1400px", // content width limit for readability
          marginInline: "auto",
        }}
      >
        {/* Company Info Section */}
        <div>
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: "bold",
              marginBottom: "0.5rem",
            }}
          >
            EGESERA
          </h2>
          <p style={{ fontSize: "0.95rem", lineHeight: "1.6" }}>
            Supplying fresh, authentic poultry products — <br />
            <em>“From Nest to the Table.”</em>
            <br />
            We take pride in quality, sustainability, and local trust.
          </p>
        </div>

        {/* Quick Links Section */}
        <div>
          <h3 style={{ fontWeight: "bold", marginBottom: "1rem" }}>Quick Links</h3>
          <ul
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "1.5rem",
              listStyle: "none",
              padding: 0,
              margin: 0,
              flexWrap: "wrap",
            }}
          >
            <li>
              <Link
                href="/"
                style={{ color: "white", textDecoration: "none" }}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                style={{ color: "white", textDecoration: "none" }}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                style={{ color: "white", textDecoration: "none" }}
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                style={{ color: "white", textDecoration: "none" }}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info Section */}
        <div>
          <h3 style={{ fontWeight: "bold", marginBottom: "1rem" }}>
            Contact Us
          </h3>
          <p style={{ margin: "0.3rem 0" }}>
            <FaPhone style={{ marginRight: "0.5rem" }} />
            +254 727691942
          </p>
          <p style={{ margin: "0.3rem 0" }}>
            <FaEnvelope style={{ marginRight: "0.5rem" }} />
            egeseera@gmail.com
          </p>
          <p style={{ margin: "0.3rem 0" }}>Kisii, Kenya</p>
        </div>
      </div>

      {/* Social Media Icons */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "1.5rem",
          marginBottom: "1.5rem",
        }}
      >
        <a href="#" style={{ color: "white", fontSize: "1.5rem" }}>
          <FaFacebook />
        </a>
        <a href="#" style={{ color: "white", fontSize: "1.5rem" }}>
          <FaInstagram />
        </a>
        <a href="#" style={{ color: "white", fontSize: "1.5rem" }}>
          <FaTwitter />
        </a>
        <a href="#" style={{ color: "white", fontSize: "1.5rem" }}>
          <FaLinkedin />
        </a>
      </div>

      {/* Copyright */}
      <p style={{ fontSize: "0.9rem", textAlign: "center", margin: 0 }}>
        © {new Date().getFullYear()} EGESERA. All rights reserved.
      </p>
    </footer>
  );
}
