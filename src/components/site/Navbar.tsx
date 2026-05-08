import { useEffect, useState } from "react";
import { Menu, X, Leaf } from "lucide-react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#menu", label: "Menu" },
  { href: "#about", label: "About" },
  { href: "#gallery", label: "Gallery" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4">
        <div
          className={`flex items-center justify-between rounded-2xl px-4 sm:px-6 py-3 transition-all ${
            scrolled ? "glass-strong shadow-card" : "glass"
          }`}
        >
          <a href="#home" className="flex items-center gap-2 group">
            <span className="grid place-items-center h-9 w-9 rounded-xl bg-gradient-to-br from-primary to-lime shadow-glow">
              <Leaf className="h-4 w-4 text-primary-foreground" />
            </span>
            <span className="font-display font-bold text-lg tracking-tight">
              Najmas <span className="text-gradient-primary">Juice World</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="relative px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {l.label}
                <span className="absolute left-3 right-3 -bottom-0.5 h-px bg-gradient-to-r from-primary to-lime scale-x-0 hover:scale-x-100 transition-transform origin-left" />
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden md:inline-flex items-center rounded-full bg-primary text-primary-foreground px-5 py-2 text-sm font-semibold btn-glow"
          >
            Order Now
          </a>

          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden grid place-items-center h-10 w-10 rounded-xl glass"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden mt-2 rounded-2xl glass-strong p-4 animate-fade-up">
            <div className="flex flex-col">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="px-3 py-3 rounded-xl hover:bg-white/5 text-foreground font-medium"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground px-5 py-3 font-semibold"
              >
                Order Now
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
