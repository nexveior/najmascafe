import { useEffect, useRef, useState } from "react";
import interior from "@/assets/interior.jpg";
import { Star } from "lucide-react";

function Counter({ end, suffix = "" }: { end: number; suffix?: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        const start = performance.now();
        const dur = 1600;
        const tick = (t: number) => {
          const p = Math.min((t - start) / dur, 1);
          setVal(Math.floor(end * (1 - Math.pow(1 - p, 3))));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        io.disconnect();
      }
    }, { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, [end]);
  return <span ref={ref}>{val.toLocaleString()}{suffix}</span>;
}

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="relative">
          <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-card">
            <img
              src={interior}
              alt="Cozy modern interior of Najmas Juice World cafe"
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
          </div>
          <div className="absolute -bottom-6 -right-4 sm:-right-8 glass-strong rounded-2xl p-5 shadow-glow w-56">
            <div className="flex items-center gap-1 text-lime">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-lime" />
              ))}
            </div>
            <div className="mt-2 text-2xl font-display font-bold">4.2 / 5.0</div>
            <div className="text-xs text-muted-foreground">Based on 1.2K+ Google reviews</div>
          </div>
          <div className="absolute -top-6 -left-4 glass-strong rounded-2xl px-4 py-3 shadow-card hidden sm:block">
            <div className="text-xs text-muted-foreground">Open today</div>
            <div className="font-semibold">10:30 AM — 10:00 PM</div>
          </div>
        </div>

        <div>
          <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-lime animate-pulse" /> About the cafe
          </div>
          <h2 className="mt-4 font-display font-bold text-4xl sm:text-5xl">
            A cozy corner in <span className="text-gradient-primary">Chowwannur</span>
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            Najmas Juice World is where neighbours, families and friends gather
            for handcrafted juices, sizzling burgers and Middle-Eastern style
            shawarmas. Every dish is built around fresh local ingredients and
            served with warm hospitality — fast, friendly and flavorful.
          </p>

          <div className="mt-8 grid grid-cols-3 gap-4">
            {[
              { n: 10000, s: "+", l: "Happy Customers" },
              { n: 50, s: "+", l: "Food Items" },
              { n: 300, s: "+", l: "Daily Visitors" },
            ].map((c) => (
              <div key={c.l} className="glass rounded-2xl p-5">
                <div className="text-3xl font-display font-bold text-gradient-lime">
                  <Counter end={c.n} suffix={c.s} />
                </div>
                <div className="mt-1 text-xs text-muted-foreground">{c.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
