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
      <section style={{ position: "relative", width: "100%", aspectRatio: "1983/793" }}>
        <Image
          src="/images/hero.jpg"
          alt="JayJays Custom Paint"
          fill
          style={{objectFit: "cover", objectPosition: "relative" }}
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
          paddingBottom: "*20rem",
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
        background: "#000000",
      }}>
        <h2 style={{
          textAlign: "center",
          fontSize: "5rem",
          fontWeight: 450,
          color: "#84cc16",
          textTransform: "uppercase",
          marginBottom: "5rem",
          letterSpacing: "0.01rem",
        }}>
          What I Do
        </h2>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(750px, 2fr))",
          gap: "4.2rem",
          maxWidth: "2200px",
          margin: "3rem auto",
        }}>
         {[
  { img: "/images/moto.jpg", title: "Motorcycles", desc: "Full custom paint jobs, flames, murals, and more" },
  { img: "/images/car.jpg", title: "Cars & Trim", desc: "Car trim, accents, and working toward full resprays" },
  { img: "/images/wood.jpg", title: "Wood & Furniture", desc: "Dressers, signs, and anything wood you can think of" },
  { img: "/images/custom.jpg", title: "Anything Custom", desc: "If you can dream it, JayJay can paint it" },
].map((service) => (
  <div key={service.title} style={{
    background: "#111",
    border: "5px solid #96ec16",
    borderRadius: "1.5rem",
    overflow: "hidden",
    boxShadow: "0 0 45px rgb(106, 0, 228)",
  }}>
    <div style={{ position: "relative", width: "100%", height: "1000px" }}>
      <Image
        src={service.img}
        alt={service.title}
        fill
        style={{ objectFit: "cover" }}
      />
      <div style={{
        position: "absolute",
        inset: 0,
        background: "linear-gradient(to bottom, transparent 80%, rgba(146, 255, 21, 0.8) 100%)",
      }} />
    </div>
    <div style={{ padding: "1.8rem", textAlign: "center" }}>
      <h3 style={{ color: "#8bff2d", fontWeight: 800, marginBottom: "0.05rem", fontSize: "2rem" }}>
        {service.title}
      </h3>
      <p style={{ color: "#c3fa95", lineHeight: 1.6 }}>{service.desc}</p>
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
          fontSize: "6.5rem",
          fontWeight: 1300,
          color: "#00f7ff",
          textTransform: "uppercase",
          marginBottom: "2rem",
          letterSpacing: "0.001em",
        }}>
          More About Me
        </h2>
        <p style={{
          fontSize: "1.5rem",
          color: "#d1d5db",
          maxWidth: "3000px",
          margin: "0 auto 2rem",
          lineHeight: 1.8,
        }}>
          I was told finding a job that worked around my child’s schedule was “just how it is.” I didn’t accept that. One night, trying to shut my brain off, I picked up a paintbrush—and decided to build something on my own terms.
With a push from the people who believed in me, I took the leap and started my business. Not to play it safe— but to take control of my time, my craft, and my life. Now it’s just me and my paint booth. No crew to hide behind. No excuses to lean on. No shortcuts. Just passion, precision, and paint.
Every project has my name on it, and I treat it that way. I don’t rush work, I don’t cut corners, and I don’t walk away until it’s right. Your excitement isn’t optional—it’s the standard. If it doesn’t meet my expectations, it doesn’t leave the booth.
This isn’t a side hustle. It isn’t a fallback. It’s a skill sharpened by purpose and fueled by determination. Bringing your ideas to life isn’t just what I do—it’s how I prove that betting on yourself is worth it, every single day.
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