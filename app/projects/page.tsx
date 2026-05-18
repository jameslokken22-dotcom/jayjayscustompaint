"use client";

import Link from "next/link";
import Image from "next/image";

export default function Projects() {
  return (
    <main style={{ minHeight: "100vh", background: "#000", color: "white" }}>
      {/* CONTENT */}
      <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "3rem 1.5rem" }}>
        <h1 style={{
          fontSize: "2.5rem",
          fontWeight: 900,
          color: "#84cc16",
          textTransform: "uppercase",
          letterSpacing: "0.1em",
          marginBottom: "2rem",
          textAlign: "center",
        }}>
          Projects
        </h1>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "1.5rem",
        }}>
          {/* Project cards - add more as needed */}
          <div style={{
            background: "#111",
            border: "1px solid #84cc16",
            borderRadius: "1rem",
            overflow: "hidden",
            boxShadow: "0 0 15px rgba(132,204,22,0.1)",
          }}>
            <div style={{ position: "relative", width: "100%", height: "250px" }}>
              <Image
                src="/images/moto.jpg"
                alt="Custom Helmet"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div style={{ padding: "1.5rem" }}>
              <h2 style={{ color: "#84cc16", fontWeight: 800, fontSize: "1.2rem", marginBottom: "0.5rem" }}>
                Custom Helmet
              </h2>
              <p style={{ color: "#9ca3af", lineHeight: 1.6 }}>
                A custom motorcycle helmet featuring bold airbrushed design with vibrant colors and intricate patterns.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* FOOTER */}
      <footer style={{
        background: "#000",
        borderTop: "2px solid #84cc16",
        padding: "2rem",
        textAlign: "center",
        color: "#6b7280",
        marginTop: "4rem",
      }}>
        <p style={{ color: "#84cc16", fontWeight: 700, marginBottom: "0.5rem" }}>
          JayJay&apos;s Custom Paint
        </p>
        <p>Dream It. Paint It. Ride It. Live It.</p>
      </footer>

    </main>
  );
}
