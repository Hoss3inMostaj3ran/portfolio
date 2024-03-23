import Header from "./components/Header";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div className="z-0 bg-[rgb(36,36,36)] h-screen snap-y snap-mandatory overflow-scroll">
      {/* Header */}
      <Header />

      {/* Hero */}
      <section id="hero" className="snap-center">
        <Hero />
      </section>
      {/* About */}

      {/* Experience */}

      {/* Skills */}

      {/* Projects */}

      {/* Contact Me */}
    </div>
  );
}
