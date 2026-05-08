import shake from "@/assets/monsternaj.jpeg";
import burger from "@/assets/burgernaj.jpg";
import shawarma from "@/assets/shawarma.jpg";
import sandwich from "@/assets/sandwich.jpg";
import juice from "@/assets/fresh-juice.jpg";
import interior from "@/assets/interiornaj.jpg";
import dessert from "@/assets/dessert.jpg";
import fries from "@/assets/fries.jpg";
import customers from "@/assets/customers.jpg";

const imgs = [
  { src: burger, alt: "Cheese burger", span: "row-span-2" },
  { src: juice, alt: "Fresh juices" },
  { src: interior, alt: "Cafe interior" },
  { src: shake, alt: "Monster shake", span: "row-span-2" },
  { src: shawarma, alt: "Chicken shawarma" },
  { src: dessert, alt: "Brownie dessert" },
  { src: fries, alt: "Crispy fries" },
  { src: customers, alt: "Happy customers" },
  { src: sandwich, alt: "Club sandwich" },
];

export function Gallery() {
  return (
    <section id="gallery" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs">
              Gallery
            </div>
            <h2 className="mt-4 font-display font-bold text-4xl sm:text-5xl">
              Moments at <span className="text-gradient-lime">Najmas</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm">
            A peek inside our cafe — the food, the drinks, and the people who
            make it home.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] sm:auto-rows-[220px] gap-4">
          {imgs.map((it, i) => (
            <figure
              key={i}
              className={`group relative overflow-hidden rounded-2xl glass ${it.span ?? ""}`}
            >
              <img
                src={it.src}
                alt={it.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <figcaption className="absolute bottom-3 left-3 right-3 text-sm font-medium translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all">
                {it.alt}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
