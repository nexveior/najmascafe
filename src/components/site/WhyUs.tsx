import { Leaf, Timer, Coffee, Wallet, GlassWater, Users } from "lucide-react";

const features = [
  { icon: Leaf, title: "Fresh Ingredients", desc: "Sourced daily from local farms and markets." },
  { icon: Timer, title: "Fast Service", desc: "Quick orders without compromising on taste." },
  { icon: Coffee, title: "Cozy Atmosphere", desc: "Warm lights, comfy seats, perfect vibe." },
  { icon: Wallet, title: "Affordable Prices", desc: "Premium quality at neighbourhood rates." },
  { icon: GlassWater, title: "Delicious Drinks", desc: "Cold-pressed juices, shakes & mocktails." },
  { icon: Users, title: "Family Friendly", desc: "A welcoming space for every age group." },
];

export function WhyUs() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs">
            Why choose us
          </div>
          <h2 className="mt-4 font-display font-bold text-4xl sm:text-5xl">
            Made with care, <span className="text-gradient-primary">served with love</span>
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f) => (
            <div
              key={f.title}
              className="group relative glass rounded-3xl p-6 hover-lift overflow-hidden"
            >
              <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-primary/10 blur-2xl group-hover:bg-primary/25 transition-colors" />
              <div className="relative grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-primary to-lime text-primary-foreground shadow-glow">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="relative mt-5 font-display font-bold text-xl">{f.title}</h3>
              <p className="relative mt-2 text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
