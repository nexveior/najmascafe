import { r as reactExports, V as jsxRuntimeExports } from "./server-CloC_x25.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const mergeClasses = (...classes) => classes.filter((className, index, array) => {
  return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();
const toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const toCamelCase = (string) => string.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (match, p1, p2) => p2 ? p2.toUpperCase() : p1.toLowerCase()
);
const toPascalCase = (string) => {
  const camelCase = toCamelCase(string);
  return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
const hasA11yProp = (props) => {
  for (const prop in props) {
    if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
      return true;
    }
  }
  return false;
};
const Icon = reactExports.forwardRef(
  ({
    color = "currentColor",
    size = 24,
    strokeWidth = 2,
    absoluteStrokeWidth,
    className = "",
    children,
    iconNode,
    ...rest
  }, ref) => reactExports.createElement(
    "svg",
    {
      ref,
      ...defaultAttributes,
      width: size,
      height: size,
      stroke: color,
      strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
      className: mergeClasses("lucide", className),
      ...!children && !hasA11yProp(rest) && { "aria-hidden": "true" },
      ...rest
    },
    [
      ...iconNode.map(([tag, attrs]) => reactExports.createElement(tag, attrs)),
      ...Array.isArray(children) ? children : [children]
    ]
  )
);
const createLucideIcon = (iconName, iconNode) => {
  const Component = reactExports.forwardRef(
    ({ className, ...props }, ref) => reactExports.createElement(Icon, {
      ref,
      iconNode,
      className: mergeClasses(
        `lucide-${toKebabCase(toPascalCase(iconName))}`,
        `lucide-${iconName}`,
        className
      ),
      ...props
    })
  );
  Component.displayName = toPascalCase(iconName);
  return Component;
};
const __iconNode$h = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
];
const ArrowRight = createLucideIcon("arrow-right", __iconNode$h);
const __iconNode$g = [
  ["path", { d: "M7 7h10v10", key: "1tivn9" }],
  ["path", { d: "M7 17 17 7", key: "1vkiza" }]
];
const ArrowUpRight = createLucideIcon("arrow-up-right", __iconNode$g);
const __iconNode$f = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 6v6l4 2", key: "mmk7yg" }]
];
const Clock = createLucideIcon("clock", __iconNode$f);
const __iconNode$e = [
  ["path", { d: "M10 2v2", key: "7u0qdc" }],
  ["path", { d: "M14 2v2", key: "6buw04" }],
  [
    "path",
    {
      d: "M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1",
      key: "pwadti"
    }
  ],
  ["path", { d: "M6 2v2", key: "colzsn" }]
];
const Coffee = createLucideIcon("coffee", __iconNode$e);
const __iconNode$d = [
  [
    "path",
    {
      d: "M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4",
      key: "1slcih"
    }
  ]
];
const Flame = createLucideIcon("flame", __iconNode$d);
const __iconNode$c = [
  [
    "path",
    {
      d: "M5.116 4.104A1 1 0 0 1 6.11 3h11.78a1 1 0 0 1 .994 1.105L17.19 20.21A2 2 0 0 1 15.2 22H8.8a2 2 0 0 1-2-1.79z",
      key: "p55z4y"
    }
  ],
  ["path", { d: "M6 12a5 5 0 0 1 6 0 5 5 0 0 0 6 0", key: "mjntcy" }]
];
const GlassWater = createLucideIcon("glass-water", __iconNode$c);
const __iconNode$b = [
  [
    "path",
    {
      d: "M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",
      key: "nnexq3"
    }
  ],
  ["path", { d: "M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12", key: "mt58a7" }]
];
const Leaf = createLucideIcon("leaf", __iconNode$b);
const __iconNode$a = [
  [
    "path",
    {
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
      key: "1r0f0z"
    }
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]
];
const MapPin = createLucideIcon("map-pin", __iconNode$a);
const __iconNode$9 = [
  ["path", { d: "M4 5h16", key: "1tepv9" }],
  ["path", { d: "M4 12h16", key: "1lakjw" }],
  ["path", { d: "M4 19h16", key: "1djgab" }]
];
const Menu = createLucideIcon("menu", __iconNode$9);
const __iconNode$8 = [
  [
    "path",
    {
      d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",
      key: "1sd12s"
    }
  ]
];
const MessageCircle = createLucideIcon("message-circle", __iconNode$8);
const __iconNode$7 = [
  ["polygon", { points: "3 11 22 2 13 21 11 13 3 11", key: "1ltx0t" }]
];
const Navigation = createLucideIcon("navigation", __iconNode$7);
const __iconNode$6 = [
  [
    "path",
    {
      d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
      key: "9njp5v"
    }
  ]
];
const Phone = createLucideIcon("phone", __iconNode$6);
const __iconNode$5 = [
  [
    "path",
    {
      d: "M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
      key: "rib7q0"
    }
  ],
  [
    "path",
    {
      d: "M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
      key: "1ymkrd"
    }
  ]
];
const Quote = createLucideIcon("quote", __iconNode$5);
const __iconNode$4 = [
  [
    "path",
    {
      d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
      key: "r04s7s"
    }
  ]
];
const Star = createLucideIcon("star", __iconNode$4);
const __iconNode$3 = [
  ["line", { x1: "10", x2: "14", y1: "2", y2: "2", key: "14vaq8" }],
  ["line", { x1: "12", x2: "15", y1: "14", y2: "11", key: "17fdiu" }],
  ["circle", { cx: "12", cy: "14", r: "8", key: "1e1u0o" }]
];
const Timer = createLucideIcon("timer", __iconNode$3);
const __iconNode$2 = [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["path", { d: "M16 3.128a4 4 0 0 1 0 7.744", key: "16gr8j" }],
  ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }]
];
const Users = createLucideIcon("users", __iconNode$2);
const __iconNode$1 = [
  [
    "path",
    {
      d: "M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",
      key: "18etb6"
    }
  ],
  ["path", { d: "M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4", key: "xoc0q4" }]
];
const Wallet = createLucideIcon("wallet", __iconNode$1);
const __iconNode = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
const X = createLucideIcon("x", __iconNode);
const links = [
  { href: "#home", label: "Home" },
  { href: "#menu", label: "Menu" },
  { href: "#about", label: "About" },
  { href: "#gallery", label: "Gallery" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" }
];
function Navbar() {
  const [scrolled, setScrolled] = reactExports.useState(false);
  const [open, setOpen] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "header",
    {
      className: `fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "py-2" : "py-4"}`,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: `flex items-center justify-between rounded-2xl px-4 sm:px-6 py-3 transition-all ${scrolled ? "glass-strong shadow-card" : "glass"}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#home", className: "flex items-center gap-2 group", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid place-items-center h-9 w-9 rounded-xl bg-gradient-to-br from-primary to-lime shadow-glow", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Leaf, { className: "h-4 w-4 text-primary-foreground" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display font-bold text-lg tracking-tight", children: [
                  "Najmas ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-primary", children: "Juice World" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden md:flex items-center gap-1", children: links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "a",
                {
                  href: l.href,
                  className: "relative px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors",
                  children: [
                    l.label,
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute left-3 right-3 -bottom-0.5 h-px bg-gradient-to-r from-primary to-lime scale-x-0 hover:scale-x-100 transition-transform origin-left" })
                  ]
                },
                l.href
              )) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href: "#contact",
                  className: "hidden md:inline-flex items-center rounded-full bg-primary text-primary-foreground px-5 py-2 text-sm font-semibold btn-glow",
                  children: "Order Now"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => setOpen((v) => !v),
                  className: "md:hidden grid place-items-center h-10 w-10 rounded-xl glass",
                  "aria-label": "Toggle menu",
                  children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-5 w-5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "h-5 w-5" })
                }
              )
            ]
          }
        ),
        open && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:hidden mt-2 rounded-2xl glass-strong p-4 animate-fade-up", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col", children: [
          links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: l.href,
              onClick: () => setOpen(false),
              className: "px-3 py-3 rounded-xl hover:bg-white/5 text-foreground font-medium",
              children: l.label
            },
            l.href
          )),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "#contact",
              onClick: () => setOpen(false),
              className: "mt-2 inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground px-5 py-3 font-semibold",
              children: "Order Now"
            }
          )
        ] }) })
      ] })
    }
  );
}
const hero = "/najmascafe/assets/hero-cafe-D8bEaMav.jpg";
function Hero() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "home", className: "relative min-h-[100svh] overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "img",
      {
        src: hero,
        alt: "Najmas Juice World cafe storefront in Parempadam, Kerala",
        width: 1920,
        height: 1080,
        className: "absolute inset-0 h-full w-full object-cover"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-hero-glow" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -left-20 top-32 h-72 w-72 rounded-full bg-primary/30 blur-3xl animate-float-slow" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute right-0 bottom-20 h-80 w-80 rounded-full bg-lime/20 blur-3xl animate-float-slow [animation-delay:-3s]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mx-auto max-w-7xl px-4 pt-40 sm:pt-48 pb-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl animate-fade-up", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs sm:text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-3.5 w-3.5 text-primary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Parempadam, Kerala" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1 w-1 rounded-full bg-muted-foreground/50" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1 text-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-3.5 w-3.5 fill-lime text-lime" }),
          " 4.2 Rated"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-6 font-display font-bold text-5xl sm:text-7xl lg:text-8xl leading-[0.95] tracking-tight", children: [
        "Fresh Juices,",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-primary", children: "Burgers" }),
        " &",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-lime", children: "Shawarmas" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-xl text-base sm:text-lg text-muted-foreground", children: "A modern cafe experience in Chowwannur with delicious food, refreshing drinks and a cozy atmosphere — crafted fresh, served fast." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: "#menu",
            className: "inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3.5 font-semibold btn-glow",
            children: [
              "View Menu ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: "https://wa.me/919447395530",
            target: "_blank",
            rel: "noreferrer",
            className: "inline-flex items-center gap-2 rounded-full glass-strong px-6 py-3.5 font-semibold hover:bg-lime hover:text-lime-foreground transition-colors",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-4 w-4" }),
              " Order on WhatsApp"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid grid-cols-3 gap-4 max-w-md", children: [
        { k: "10K+", v: "Happy Customers" },
        { k: "50+", v: "Menu Items" },
        { k: "4.2★", v: "Google Rating" }
      ].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-2xl p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl sm:text-3xl font-display font-bold text-gradient-primary", children: s.k }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mt-1", children: s.v })
      ] }, s.v)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-6 left-1/2 -translate-x-1/2 text-xs text-muted-foreground hidden sm:flex flex-col items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Scroll to explore" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-10 w-px bg-gradient-to-b from-primary to-transparent" })
    ] })
  ] });
}
const shake$1 = "/najmascafe/assets/monster-shake-Bi5aorMO.jpg";
const burger$1 = "/najmascafe/assets/cheese-burger-KIXavFjG.jpg";
const shawarma = "/najmascafe/assets/shawarma-BH6C8T1u.jpg";
const sandwich = "/najmascafe/assets/sandwich-DoOs3g0O.jpg";
const juice = "/najmascafe/assets/fresh-juice-DpOTyB40.jpg";
const items$2 = [
  { img: shake$1, name: "Monster Shake", desc: "Loaded shakes topped with sweet treats", tag: "Signature" },
  { img: burger$1, name: "Cheese Burger", desc: "Juicy patty with melted cheddar", tag: "Bestseller" },
  { img: shawarma, name: "Chicken Shawarma", desc: "Slow-cooked, garlic sauce, fresh wrap", tag: "Hot" },
  { img: sandwich, name: "Club Sandwich", desc: "Triple-stacked with grilled chicken", tag: "New" },
  { img: juice, name: "Fresh Juices", desc: "Cold-pressed seasonal fruits daily", tag: "Healthy" }
];
function Featured() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "menu", className: "relative py-24 sm:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between flex-wrap gap-6 mb-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { className: "h-3.5 w-3.5 text-primary" }),
          " Featured Menu"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 font-display font-bold text-4xl sm:text-6xl tracking-tight", children: [
          "Crafted with ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-primary", children: "flavor" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "max-w-md text-muted-foreground", children: "Our most-loved picks — bold flavors, premium ingredients, and that signature Najmas freshness in every bite and sip." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6", children: items$2.map((it, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "article",
      {
        className: `group relative glass rounded-3xl overflow-hidden hover-lift ${i === 0 ? "lg:row-span-2 lg:col-span-1" : ""}`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `relative overflow-hidden ${i === 0 ? "aspect-[4/5]" : "aspect-[4/3]"}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: it.img,
                alt: it.name,
                loading: "lazy",
                className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute top-4 left-4 rounded-full bg-primary/90 backdrop-blur px-3 py-1 text-xs font-semibold text-primary-foreground", children: it.tag })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-xl", children: it.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: it.desc })
          ] })
        ]
      },
      it.name
    )) })
  ] }) });
}
const items$1 = ["Fresh Juices", "Monster Shakes", "Cheese Burgers", "Shawarmas", "Club Sandwiches", "Cold Coffees", "Mocktails", "Desserts"];
function Marquee() {
  const loop = [...items$1, ...items$1, ...items$1];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative py-6 border-y border-border/60 overflow-hidden bg-card/30", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-10 animate-marquee w-max whitespace-nowrap", children: loop.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-10 font-display font-bold text-2xl sm:text-4xl tracking-tight", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground/80 hover:text-gradient-primary transition-colors", children: t }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "✦" })
  ] }, i)) }) });
}
const interior$1 = "/najmascafe/assets/interior-Dl7FycxC.jpg";
function Counter({ end, suffix = "" }) {
  const [val, setVal] = reactExports.useState(0);
  const ref = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        const start = performance.now();
        const dur = 1600;
        const tick = (t) => {
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { ref, children: [
    val.toLocaleString(),
    suffix
  ] });
}
function About() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "about", className: "relative py-24 sm:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-3xl overflow-hidden aspect-[4/5] shadow-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: interior$1,
            alt: "Cozy modern interior of Najmas Juice World cafe",
            loading: "lazy",
            className: "h-full w-full object-cover"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute -bottom-6 -right-4 sm:-right-8 glass-strong rounded-2xl p-5 shadow-glow w-56", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-1 text-lime", children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-4 w-4 fill-lime" }, i)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-2xl font-display font-bold", children: "4.2 / 5.0" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Based on 1.2K+ Google reviews" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute -top-6 -left-4 glass-strong rounded-2xl px-4 py-3 shadow-card hidden sm:block", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Open today" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold", children: "10:30 AM — 10:00 PM" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-lime animate-pulse" }),
        " About the cafe"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 font-display font-bold text-4xl sm:text-5xl", children: [
        "A cozy corner in ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-primary", children: "Chowwannur" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-muted-foreground leading-relaxed", children: "Najmas Juice World is where neighbours, families and friends gather for handcrafted juices, sizzling burgers and Middle-Eastern style shawarmas. Every dish is built around fresh local ingredients and served with warm hospitality — fast, friendly and flavorful." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 grid grid-cols-3 gap-4", children: [
        { n: 1e4, s: "+", l: "Happy Customers" },
        { n: 50, s: "+", l: "Food Items" },
        { n: 300, s: "+", l: "Daily Visitors" }
      ].map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-2xl p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl font-display font-bold text-gradient-lime", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Counter, { end: c.n, suffix: c.s }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-xs text-muted-foreground", children: c.l })
      ] }, c.l)) })
    ] })
  ] }) });
}
const features = [
  { icon: Leaf, title: "Fresh Ingredients", desc: "Sourced daily from local farms and markets." },
  { icon: Timer, title: "Fast Service", desc: "Quick orders without compromising on taste." },
  { icon: Coffee, title: "Cozy Atmosphere", desc: "Warm lights, comfy seats, perfect vibe." },
  { icon: Wallet, title: "Affordable Prices", desc: "Premium quality at neighbourhood rates." },
  { icon: GlassWater, title: "Delicious Drinks", desc: "Cold-pressed juices, shakes & mocktails." },
  { icon: Users, title: "Family Friendly", desc: "A welcoming space for every age group." }
];
function WhyUs() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-24 sm:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-2xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs", children: "Why choose us" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 font-display font-bold text-4xl sm:text-5xl", children: [
        "Made with care, ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-primary", children: "served with love" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5", children: features.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "group relative glass rounded-3xl p-6 hover-lift overflow-hidden",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-12 -right-12 h-40 w-40 rounded-full bg-primary/10 blur-2xl group-hover:bg-primary/25 transition-colors" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-primary to-lime text-primary-foreground shadow-glow", children: /* @__PURE__ */ jsxRuntimeExports.jsx(f.icon, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "relative mt-5 font-display font-bold text-xl", children: f.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "relative mt-2 text-sm text-muted-foreground", children: f.desc })
        ]
      },
      f.title
    )) })
  ] }) });
}
const shake = "/najmascafe/assets/monsternaj-Bq-5-UNB.jpeg";
const burger = "/najmascafe/assets/burgernaj-CE9zYu7b.jpg";
const interior = "/najmascafe/assets/interiornaj-sLVbbP27.jpg";
const dessert = "/najmascafe/assets/dessert-Drlnog2Q.jpg";
const fries = "/najmascafe/assets/fries-VxOadcF1.jpg";
const customers = "/najmascafe/assets/customers-mK8jXMcX.jpg";
const imgs = [
  { src: burger, alt: "Cheese burger", span: "row-span-2" },
  { src: juice, alt: "Fresh juices" },
  { src: interior, alt: "Cafe interior" },
  { src: shake, alt: "Monster shake", span: "row-span-2" },
  { src: shawarma, alt: "Chicken shawarma" },
  { src: dessert, alt: "Brownie dessert" },
  { src: fries, alt: "Crispy fries" },
  { src: customers, alt: "Happy customers" },
  { src: sandwich, alt: "Club sandwich" }
];
function Gallery() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "gallery", className: "relative py-24 sm:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between flex-wrap gap-4 mb-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs", children: "Gallery" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 font-display font-bold text-4xl sm:text-5xl", children: [
          "Moments at ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-lime", children: "Najmas" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground max-w-sm", children: "A peek inside our cafe — the food, the drinks, and the people who make it home." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] sm:auto-rows-[220px] gap-4", children: imgs.map((it, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "figure",
      {
        className: `group relative overflow-hidden rounded-2xl glass ${it.span ?? ""}`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: it.src,
              alt: it.alt,
              loading: "lazy",
              className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("figcaption", { className: "absolute bottom-3 left-3 right-3 text-sm font-medium translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all", children: it.alt })
        ]
      },
      i
    )) })
  ] }) });
}
const reviews = [
  { name: "Arjun N.", text: "The monster shake is unreal. Cozy place, friendly staff, will be back!", rating: 5 },
  { name: "Fathima K.", text: "Loved the chicken shawarma — fresh, juicy and flavorful.", rating: 5 },
  { name: "Rahul P.", text: "Best juice spot in Chowwannur. Quick service even when busy.", rating: 5 },
  { name: "Anjali S.", text: "Burgers are top notch. Great vibe and very affordable.", rating: 4 },
  { name: "Mohammed A.", text: "Family loved it. Clean, welcoming and the food is consistent.", rating: 5 },
  { name: "Sneha R.", text: "Hidden gem! The fresh fruit juices are really refreshing.", rating: 5 },
  { name: "Pooja Nandakumar.", text: "Nice burger with good quantity in decent price. Tried cheese chicken burger and mint lime mojito.", rating: 5 }
];
function Reviews() {
  const loop = [...reviews, ...reviews];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "reviews", className: "relative py-24 sm:py-32 overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-2xl mx-auto mb-14", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs", children: "Customer love" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 font-display font-bold text-4xl sm:text-5xl", children: [
        "What our ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-primary", children: "guests" }),
        " say"
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-5 animate-marquee w-max", children: loop.map((r, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "article",
        {
          className: "w-[320px] sm:w-[380px] shrink-0 glass-strong rounded-3xl p-6 hover-lift",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Quote, { className: "h-6 w-6 text-primary" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-3 text-sm text-foreground/90 leading-relaxed", children: [
              '"',
              r.text,
              '"'
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-primary to-lime font-bold text-primary-foreground", children: r.name[0] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold", children: r.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Google review" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-0.5 text-lime", children: Array.from({ length: r.rating }).map((_, j) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-3.5 w-3.5 fill-lime" }, j)) })
            ] })
          ]
        },
        i
      )) })
    ] })
  ] });
}
const items = [
  { img: shake$1, name: "Monster Shake", price: "₹150", note: "Loaded · Signature" },
  { img: burger$1, name: "Cheese Burger", price: "₹120", note: "Grilled · Bestseller" },
  { img: shawarma, name: "Chicken Shawarma", price: "₹80", note: "Wrap · Spicy" },
  { img: juice, name: "Fresh Juices", price: "₹60", note: "Seasonal · Cold-pressed" }
];
function Specials() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-24 sm:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between flex-wrap gap-4 mb-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs", children: "House specials" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 font-display font-bold text-4xl sm:text-5xl", children: [
          "Tonight's ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-lime", children: "highlights" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "a",
        {
          href: "#contact",
          className: "inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all",
          children: [
            "Order full menu ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-4 w-4" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5", children: items.map((it) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "article",
      {
        className: "group relative rounded-3xl overflow-hidden glass-strong hover-lift",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[3/4] overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: it.img,
              alt: it.name,
              loading: "lazy",
              className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-0 inset-x-0 p-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: it.note }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 flex items-end justify-between gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-xl", children: it.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-bold text-2xl text-gradient-primary", children: it.price })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-4 right-4 grid place-items-center h-10 w-10 rounded-full glass-strong opacity-0 group-hover:opacity-100 transition-opacity", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-4 w-4" }) })
        ] })
      },
      it.name
    )) })
  ] }) });
}
function Contact() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "contact", className: "relative py-24 sm:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-2xl mx-auto mb-14", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs", children: "Visit us" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 font-display font-bold text-4xl sm:text-5xl", children: [
        "Find your way to ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-primary", children: "Najmas" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground", children: "Walk in for a fresh juice or call ahead for takeaway." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-5 gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-3 relative rounded-3xl overflow-hidden glass-strong min-h-[420px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "iframe",
        {
          title: "Najmas Juice World location",
          src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3920.8321203583005!2d76.07499167413759!3d10.670135661147132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7bfdb5a2f6e1f%3A0xb56cd618131d80c6!2sNajmas%20juice%20world!5e0!3m2!1sen!2sin!4v1778157743842!5m2!1sen!2sin",
          className: "h-full w-full min-h-[420px] border-0 grayscale-[0.4] contrast-110",
          loading: "lazy",
          referrerPolicy: "no-referrer-when-downgrade"
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2 grid gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "glass-strong rounded-3xl p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-11 w-11 place-items-center rounded-xl bg-primary/15 text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Address" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold", children: "Parempadam, Thrissur, Kerala" })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "glass-strong rounded-3xl p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-11 w-11 place-items-center rounded-xl bg-lime/20 text-lime", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Opening hours" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold", children: "Mon — Sun · 10:30 AM — 10:00 PM" })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: "tel:+919876543210",
              className: "inline-flex items-center justify-center gap-2 rounded-2xl bg-primary text-primary-foreground px-5 py-4 font-semibold btn-glow",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-4 w-4" }),
                " Call Now"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: "https://www.google.com/maps/dir/?api=1&destination=Chowwannur+Kerala",
              target: "_blank",
              rel: "noreferrer",
              className: "inline-flex items-center justify-center gap-2 rounded-2xl glass-strong px-5 py-4 font-semibold hover:bg-white/5",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Navigation, { className: "h-4 w-4" }),
                " Directions"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: "https://wa.me/919876543210",
              target: "_blank",
              rel: "noreferrer",
              className: "sm:col-span-2 inline-flex items-center justify-center gap-2 rounded-2xl bg-lime text-lime-foreground px-5 py-4 font-semibold hover:shadow-lime-glow transition-shadow",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-4 w-4" }),
                " Order on WhatsApp"
              ]
            }
          )
        ] })
      ] })
    ] })
  ] }) });
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "relative pt-20 pb-10 border-t border-border/60 mt-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-4 gap-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid place-items-center h-9 w-9 rounded-xl bg-gradient-to-br from-primary to-lime", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Leaf, { className: "h-4 w-4 text-primary-foreground" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display font-bold text-lg", children: [
              "Najmas ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-primary", children: "Juice World" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 max-w-md text-sm text-muted-foreground", children: "A modern juice bar and cafe in Parempadam, Kerala — serving fresh juices, burgers, shawarmas, sandwiches and shakes in a cozy, welcoming atmosphere." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display font-semibold text-sm uppercase tracking-widest text-muted-foreground", children: "Quick links" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-4 space-y-2 text-sm", children: ["Menu", "About", "Gallery", "Reviews", "Contact"].map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `#${l.toLowerCase()}`, className: "hover:text-primary transition-colors", children: l }) }, l)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display font-semibold text-sm uppercase tracking-widest text-muted-foreground", children: "Visit" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-4 space-y-2 text-sm text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Parempadam, Thrissur, Kerala" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Open daily · 10:30 AM — 10 PM" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "tel:+919447395530", className: "hover:text-primary", children: "+91 94473 95530" }) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 pt-6 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          "© ",
          (/* @__PURE__ */ new Date()).getFullYear(),
          " Najmas Juice World. All rights reserved."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          "Designed by",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "https://nexve.in",
              target: "_blank",
              rel: "noreferrer",
              className: "font-semibold text-foreground hover:text-primary transition-colors",
              children: "Nexve"
            }
          )
        ] })
      ] })
    ] })
  ] });
}
function FloatingWhatsApp() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "a",
    {
      href: "https://wa.me/919447395530",
      target: "_blank",
      rel: "noreferrer",
      "aria-label": "Chat on WhatsApp",
      className: "fixed bottom-5 right-5 z-50 grid place-items-center h-14 w-14 rounded-full bg-lime text-lime-foreground shadow-lime-glow animate-pulse-glow hover:scale-110 transition-transform",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-6 w-6" })
    }
  );
}
function ScrollProgress() {
  const [p, setP] = reactExports.useState(0);
  reactExports.useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setP(max > 0 ? h.scrollTop / max * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed top-0 inset-x-0 z-[60] h-0.5 bg-transparent", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "h-full bg-gradient-to-r from-primary via-primary to-lime transition-[width] duration-150",
      style: { width: `${p}%` }
    }
  ) });
}
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "relative min-h-screen", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollProgress, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Marquee, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Featured, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(About, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(WhyUs, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Gallery, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Specials, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reviews, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Contact, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FloatingWhatsApp, {})
  ] });
}
export {
  Index as component
};
