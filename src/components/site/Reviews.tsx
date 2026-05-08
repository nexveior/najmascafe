import { Star, Quote } from "lucide-react";

const reviews = [
  { name: "Arjun N.", text: "The monster shake is unreal. Cozy place, friendly staff, will be back!", rating: 5 },
  { name: "Fathima K.", text: "Loved the chicken shawarma — fresh, juicy and flavorful.", rating: 5 },
  { name: "Rahul P.", text: "Best juice spot in Chowwannur. Quick service even when busy.", rating: 5 },
  { name: "Anjali S.", text: "Burgers are top notch. Great vibe and very affordable.", rating: 4 },
  { name: "Mohammed A.", text: "Family loved it. Clean, welcoming and the food is consistent.", rating: 5 },
  { name: "Sneha R.", text: "Hidden gem! The fresh fruit juices are really refreshing.", rating: 5 },
  { name: "Pooja Nandakumar.", text: "Nice burger with good quantity in decent price. Tried cheese chicken burger and mint lime mojito.", rating: 5 },
];

export function Reviews() {
  const loop = [...reviews, ...reviews];
  return (
    <section id="reviews" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs">
            Customer love
          </div>
          <h2 className="mt-4 font-display font-bold text-4xl sm:text-5xl">
            What our <span className="text-gradient-primary">guests</span> say
          </h2>
        </div>
      </div>

      <div className="relative">
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        <div className="flex gap-5 animate-marquee w-max">
          {loop.map((r, i) => (
            <article
              key={i}
              className="w-[320px] sm:w-[380px] shrink-0 glass-strong rounded-3xl p-6 hover-lift"
            >
              <Quote className="h-6 w-6 text-primary" />
              <p className="mt-3 text-sm text-foreground/90 leading-relaxed">"{r.text}"</p>
              <div className="mt-5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-primary to-lime font-bold text-primary-foreground">
                    {r.name[0]}
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{r.name}</div>
                    <div className="text-xs text-muted-foreground">Google review</div>
                  </div>
                </div>
                <div className="flex items-center gap-0.5 text-lime">
                  {Array.from({ length: r.rating }).map((_, j) => (
                    <Star key={j} className="h-3.5 w-3.5 fill-lime" />
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
