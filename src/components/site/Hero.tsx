import { ArrowRight, MessageCircle, MapPin, Star } from "lucide-react";
import hero from "@/assets/hero-cafe.jpg";

export function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] overflow-hidden">
      <img
        src={hero}
        alt="Najmas Juice World cafe storefront in Parempadam, Kerala"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background" />
      <div className="absolute inset-0 bg-hero-glow" />

      {/* Floating glow orbs */}
      <div className="absolute -left-20 top-32 h-72 w-72 rounded-full bg-primary/30 blur-3xl animate-float-slow" />
      <div className="absolute right-0 bottom-20 h-80 w-80 rounded-full bg-lime/20 blur-3xl animate-float-slow [animation-delay:-3s]" />

      <div className="relative mx-auto max-w-7xl px-4 pt-40 sm:pt-48 pb-24">
        <div className="max-w-3xl animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs sm:text-sm">
            <MapPin className="h-3.5 w-3.5 text-primary" />
            <span className="text-muted-foreground">Parempadam, Kerala</span>
            <span className="h-1 w-1 rounded-full bg-muted-foreground/50" />
            <span className="flex items-center gap-1 text-foreground">
              <Star className="h-3.5 w-3.5 fill-lime text-lime" /> 4.2 Rated
            </span>
          </div>

          <h1 className="mt-6 font-display font-bold text-5xl sm:text-7xl lg:text-8xl leading-[0.95] tracking-tight">
            Fresh Juices,
            <br />
            <span className="text-gradient-primary">Burgers</span> &{" "}
            <span className="text-gradient-lime">Shawarmas</span>
          </h1>

          <p className="mt-6 max-w-xl text-base sm:text-lg text-muted-foreground">
            A modern cafe experience in Chowwannur with delicious food,
            refreshing drinks and a cozy atmosphere — crafted fresh, served fast.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#menu"
              className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3.5 font-semibold btn-glow"
            >
              View Menu <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="https://wa.me/919447395530"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full glass-strong px-6 py-3.5 font-semibold hover:bg-lime hover:text-lime-foreground transition-colors"
            >
              <MessageCircle className="h-4 w-4" /> Order on WhatsApp
            </a>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-4 max-w-md">
            {[
              { k: "10K+", v: "Happy Customers" },
              { k: "50+", v: "Menu Items" },
              { k: "4.2★", v: "Google Rating" },
            ].map((s) => (
              <div key={s.v} className="glass rounded-2xl p-4">
                <div className="text-2xl sm:text-3xl font-display font-bold text-gradient-primary">
                  {s.k}
                </div>
                <div className="text-xs text-muted-foreground mt-1">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs text-muted-foreground hidden sm:flex flex-col items-center gap-2">
        <span>Scroll to explore</span>
        <span className="h-10 w-px bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>
  );
}
