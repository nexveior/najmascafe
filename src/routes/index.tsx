import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Featured } from "@/components/site/Featured";
import { Marquee } from "@/components/site/Marquee";
import { About } from "@/components/site/About";
import { WhyUs } from "@/components/site/WhyUs";
import { Gallery } from "@/components/site/Gallery";
import { Reviews } from "@/components/site/Reviews";
import { Specials } from "@/components/site/Specials";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { ScrollProgress } from "@/components/site/ScrollProgress";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Najmas Juice World — Fresh Juices, Burgers & Shawarmas in Chowwannur, Kerala" },
      {
        name: "description",
        content:
          "Najmas Juice World is a modern juice bar and cafe in Chowwannur, Kerala — fresh juices, monster shakes, cheese burgers, shawarmas, sandwiches and a cozy atmosphere.",
      },
      { name: "keywords", content: "juice shop Chowwannur, cafe Kerala, best burgers Chowwannur, shawarma sandwiches, fresh juices Thrissur" },
      { property: "og:title", content: "Najmas Juice World — Cafe in Chowwannur, Kerala" },
      { property: "og:description", content: "Fresh juices, burgers, shawarmas and a cozy modern cafe atmosphere in Chowwannur." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <Marquee />
      <Featured />
      <About />
      <WhyUs />
      <Gallery />
      <Specials />
      <Reviews />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
