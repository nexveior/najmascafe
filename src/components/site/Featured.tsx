import shake from "@/assets/monster-shake.jpg";
import burger from "@/assets/cheese-burger.jpg";
import shawarma from "@/assets/shawarma.jpg";
import sandwich from "@/assets/sandwich.jpg";
import juice from "@/assets/fresh-juice.jpg";
import { Flame } from "lucide-react";

const items = [
  { img: shake, name: "Monster Shake", desc: "Loaded shakes topped with sweet treats", tag: "Signature" },
  { img: burger, name: "Cheese Burger", desc: "Juicy patty with melted cheddar", tag: "Bestseller" },
  { img: shawarma, name: "Chicken Shawarma", desc: "Slow-cooked, garlic sauce, fresh wrap", tag: "Hot" },
  { img: sandwich, name: "Club Sandwich", desc: "Triple-stacked with grilled chicken", tag: "New" },
  { img: juice, name: "Fresh Juices", desc: "Cold-pressed seasonal fruits daily", tag: "Healthy" },
];

export function Featured() {
  return (
    <section id="menu" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs">
              <Flame className="h-3.5 w-3.5 text-primary" /> Featured Menu
            </div>
            <h2 className="mt-4 font-display font-bold text-4xl sm:text-6xl tracking-tight">
              Crafted with <span className="text-gradient-primary">flavor</span>
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            Our most-loved picks — bold flavors, premium ingredients, and that
            signature Najmas freshness in every bite and sip.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <article
              key={it.name}
              className={`group relative glass rounded-3xl overflow-hidden hover-lift ${
                i === 0 ? "lg:row-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className={`relative overflow-hidden ${i === 0 ? "aspect-[4/5]" : "aspect-[4/3]"}`}>
                <img
                  src={it.img}
                  alt={it.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                <span className="absolute top-4 left-4 rounded-full bg-primary/90 backdrop-blur px-3 py-1 text-xs font-semibold text-primary-foreground">
                  {it.tag}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-display font-bold text-xl">{it.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{it.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
