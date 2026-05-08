import shake from "@/assets/monster-shake.jpg";
import burger from "@/assets/cheese-burger.jpg";
import shawarma from "@/assets/shawarma.jpg";
import juice from "@/assets/fresh-juice.jpg";
import { ArrowUpRight } from "lucide-react";

const items = [
  { img: shake, name: "Monster Shake", price: "₹150", note: "Loaded · Signature" },
  { img: burger, name: "Cheese Burger", price: "₹120", note: "Grilled · Bestseller" },
  { img: shawarma, name: "Chicken Shawarma", price: "₹80", note: "Wrap · Spicy" },
  { img: juice, name: "Fresh Juices", price: "₹60", note: "Seasonal · Cold-pressed" },
];

export function Specials() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs">
              House specials
            </div>
            <h2 className="mt-4 font-display font-bold text-4xl sm:text-5xl">
              Tonight's <span className="text-gradient-lime">highlights</span>
            </h2>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
          >
            Order full menu <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((it) => (
            <article
              key={it.name}
              className="group relative rounded-3xl overflow-hidden glass-strong hover-lift"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={it.img}
                  alt={it.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                <div className="absolute bottom-0 inset-x-0 p-5">
                  <div className="text-xs text-muted-foreground">{it.note}</div>
                  <div className="mt-1 flex items-end justify-between gap-3">
                    <h3 className="font-display font-bold text-xl">{it.name}</h3>
                    <span className="font-display font-bold text-2xl text-gradient-primary">
                      {it.price}
                    </span>
                  </div>
                </div>
                <div className="absolute top-4 right-4 grid place-items-center h-10 w-10 rounded-full glass-strong opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
