import { Instagram, Facebook, MessageCircle, Leaf } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative pt-20 pb-10 border-t border-border/60 mt-10">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <span className="grid place-items-center h-9 w-9 rounded-xl bg-gradient-to-br from-primary to-lime">
                <Leaf className="h-4 w-4 text-primary-foreground" />
              </span>
              <span className="font-display font-bold text-lg">
                Najmas <span className="text-gradient-primary">Juice World</span>
              </span>
            </div>
            <p className="mt-4 max-w-md text-sm text-muted-foreground">
              A modern juice bar and cafe in Parempadam, Kerala — serving fresh
              juices, burgers, shawarmas, sandwiches and shakes in a cozy,
              welcoming atmosphere.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-widest text-muted-foreground">
              Quick links
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              {["Menu", "About", "Gallery", "Reviews", "Contact"].map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase()}`} className="hover:text-primary transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-widest text-muted-foreground">
              Visit
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>Parempadam, Thrissur, Kerala</li>
              <li>Open daily · 10:30 AM — 10 PM</li>
              <li>
                <a href="tel:+919447395530" className="hover:text-primary">+91 94473 95530</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Najmas Juice World. All rights reserved.</div>
          <div>
            Designed by{" "}
            <a
              href="https://nexve.in"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-foreground hover:text-primary transition-colors"
            >
              Nexve
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
