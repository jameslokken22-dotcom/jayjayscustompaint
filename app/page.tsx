import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* NAV */}
      <nav style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0.75rem 2rem",
        borderBottom: "2px solid #84cc16",
        background: "rgba(0,0,0,0.95)",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}>
        <Image
          src="/images/logo.png"
          alt="JayJays Custom Paint"
          width={200}
          height={100}
          style={{ objectFit: "contain" }}
        />
        <div style={{ display: "flex", gap: "2rem" }}>
          {["Projects", "Merch", "Contact"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              style={{
                color: "#84cc16",
                textDecoration: "none",
                fontWeight: "bold",
                fontSize: "1rem",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
              }}
            >
              {item}
            </Link>
          ))}
        </div>
      </nav>

      {/* HERO BANNER */}
      <section style={{ position: "relative", width: "100%", height: "1300px" }}>
        <Image
          src="/images/hero.jpg"
          alt="JayJays Custom Paint"
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          priority
        />
        {/* Dark overlay */}
        <div style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.7) 100%)",
        }} />
        {/* Hero text on top of banner */}
        <div style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-end",
          paddingBottom: "3rem",
          textAlign: "center",
        }}>
          <h1 style={{
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 900,
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            marginBottom: "1rem",
            textShadow: "0 0 30px rgba(132,204,22,0.8)",
          }}>
            <span style={{ color: "#84cc16" }}>Think It.</span>{" "}
            <span style={{ color: "#a855f7" }}>Paint It.</span>{" "}
            <span style={{ color: "white" }}>Ride It.</span>
          </h1>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
            <Link href="/contact" style={{
              background: "#84cc16",
              color: "black",
              padding: "0.9rem 2rem",
              borderRadius: "0.5rem",
              fontWeight: 800,
              textDecoration: "none",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              boxShadow: "0 0 20px rgba(132,204,22,0.6)",
            }}>
              Get a Quote
            </Link>
            <Link href="/projects" style={{
              border: "2px solid #84cc16",
              color: "#84cc16",
              padding: "0.9rem 2rem",
              borderRadius: "0.5rem",
              fontWeight: 800,
              textDecoration: "none",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
            }}>
              See My Work
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section style={{
        padding: "5rem 2rem",
        background: "#0a0a0a",
      }}>
        <h2 style={{
          textAlign: "center",
          fontSize: "2.5rem",
          fontWeight: 900,
          color: "#84cc16",
          textTransform: "uppercase",
          marginBottom: "3rem",
          letterSpacing: "0.1em",
        }}>
          What I Do
        </h2>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "1rem",
          maxWidth: "1000px",
          margin: "2rem auto",
        }}>
         {[
  { img: "/images/moto.jpg", title: "Motorcycles", desc: "Full custom paint jobs, flames, murals, and more" },
  { img: "/images/car.jpg", title: "Cars & Trim", desc: "Car trim, accents, and working toward full resprays" },
  { img: "/images/wood.jpg", title: "Wood & Furniture", desc: "Dressers, signs, and anything wood you can think of" },
  { img: "/images/custom.jpg", title: "Anything Custom", desc: "If you can dream it, JayJay can paint it" },
].map((service) => (
  <div key={service.title} style={{
    background: "#111",
    border: "1px solid #84cc16",
    borderRadius: "1rem",
    overflow: "hidden",
    boxShadow: "0 0 15px rgba(132,204,22,0.2)",
  }}>
    <div style={{ position: "relative", width: "100%", height: "200px" }}>
      <Image
        src={service.img}
        alt={service.title}
        fill
        style={{ objectFit: "cover" }}
      />
      <div style={{
        position: "absolute",
        inset: 0,
        background: "linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.8) 100%)",
      }} />
    </div>
    <div style={{ padding: "1.5rem", textAlign: "center" }}>
      <h3 style={{ color: "#84cc16", fontWeight: 800, marginBottom: "0.5rem", fontSize: "1.2rem" }}>
        {service.title}
      </h3>
      <p style={{ color: "#9ca3af", lineHeight: 1.6 }}>{service.desc}</p>
    </div>
  </div>
))}
        </div>
      </section>

      {/* ABOUT */}
      <section style={{
        padding: "5rem 2rem",
        background: "linear-gradient(135deg, #0d1f00 0%, #000 50%, #1a0a2e 100%)",
        textAlign: "center",
      }}>
        <h2 style={{
          fontSize: "2.5rem",
          fontWeight: 900,
          color: "#84cc16",
          textTransform: "uppercase",
          marginBottom: "1.5rem",
          letterSpacing: "0.1em",
        }}>
          About JayJay
        </h2>
        <p style={{
          fontSize: "1.1rem",
          color: "#d1d5db",
          maxWidth: "700px",
          margin: "0 auto 2rem",
          lineHeight: 1.8,
        }}>
          I work independently — no excuses, no passing blame. Just passion, precision, and paint.
          Every project gets my full attention and I won&apos;t stop until you love it.
          Bringing your ideas to life is what drives me every single day.
        </p>
        <Link href="/contact" style={{
          border: "2px solid #a855f7",
          color: "#a855f7",
          padding: "1rem 2rem",
          borderRadius: "0.5rem",
          fontWeight: 800,
          textDecoration: "none",
          textTransform: "uppercase",
          letterSpacing: "0.1em",
        }}>
          Let&apos;s Work Together
        </Link>
      </section>

      {/* FOOTER */}
      <footer style={{
        background: "#000",
        borderTop: "2px solid #84cc16",
        padding: "2rem",
        textAlign: "center",
        color: "#6b7280",
      }}>
        <p style={{ color: "#84cc16", fontWeight: 700, marginBottom: "0.5rem" }}>
          JayJay&apos;s Custom Paint
        </p>
        <p>Dream It. Paint It. Ride It. Live It.</p>
      </footer>

    </main>
  );
}