import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JayJay's Custom Paint",
  description: "Custom airbrush and paint work. Think It. Paint It. Ride It.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable}`}>
      <body style={{ margin: 0, background: "#000", color: "white" }}>

        {/* GLOBAL NAV - shows on every page */}
        <nav style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0.75rem 1.5rem",
          borderBottom: "2px solid #84cc16",
          background: "rgba(0,0,0,0.95)",
          position: "sticky",
          top: 0,
          zIndex: 100,
        }}>
          {/* Logo - clicks back to home */}
          <Link href="/" style={{ display: "flex", alignItems: "center" }}>
            <Image
              src="/images/logo.png"
              alt="JayJays Custom Paint"
              width={70}
              height={70}
              style={{ objectFit: "contain" }}
            />
          </Link>

          {/* Nav links */}
          <div style={{
            display: "flex",
            gap: "1.5rem",
            alignItems: "center",
            flexWrap: "wrap",
          }}>
            {[
              { label: "Home", href: "/" },
              { label: "Projects", href: "/projects" },
              { label: "Merch", href: "/merch" },
              { label: "Contact", href: "/contact" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                style={{
                  color: "#84cc16",
                  textDecoration: "none",
                  fontWeight: "bold",
                  fontSize: "0.9rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>

        {/* Page content */}
        {children}

      </body>
    </html>
  );
}
