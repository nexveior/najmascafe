const items = ["Fresh Juices", "Monster Shakes", "Cheese Burgers", "Shawarmas", "Club Sandwiches", "Cold Coffees", "Mocktails", "Desserts"];

export function Marquee() {
  const loop = [...items, ...items, ...items];
  return (
    <div className="relative py-6 border-y border-border/60 overflow-hidden bg-card/30">
      <div className="flex gap-10 animate-marquee w-max whitespace-nowrap">
        {loop.map((t, i) => (
          <span key={i} className="flex items-center gap-10 font-display font-bold text-2xl sm:text-4xl tracking-tight">
            <span className="text-foreground/80 hover:text-gradient-primary transition-colors">{t}</span>
            <span className="text-primary">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
