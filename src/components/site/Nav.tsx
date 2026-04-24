import { useEffect, useState } from "react";
import { Phone } from "lucide-react";

const links = [
  { href: "#why", label: "Why Us" },
  { href: "#services", label: "Services" },
  { href: "#reviews", label: "Reviews" },
  { href: "#fleet", label: "Fleet" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        solid
          ? "bg-background/85 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-20 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5 group">
          <span className="h-8 w-8 rounded-sm bg-gold flex items-center justify-center text-primary-foreground font-display font-black text-sm">
            W
          </span>
          <span className="font-display font-semibold tracking-tight text-foreground">
            Willistown <span className="text-muted-foreground font-normal">Auto</span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-9">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground hover:text-gold transition-colors duration-300"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="tel:+16106471234"
            className="hidden sm:inline-flex items-center gap-2 text-sm text-foreground hover:text-gold transition-colors"
          >
            <Phone className="h-4 w-4 text-gold" />
            (610) 647-1234
          </a>
          <a
            href="#contact"
            className="inline-flex items-center px-4 py-2.5 text-sm font-medium bg-gold text-primary-foreground hover:bg-gold-bright transition-all duration-300 hover:gold-glow rounded-sm"
          >
            Schedule
          </a>
          <button
            aria-label="Menu"
            onClick={() => setOpen((o) => !o)}
            className="lg:hidden h-10 w-10 inline-flex flex-col items-center justify-center gap-1.5"
          >
            <span className={`h-px w-5 bg-foreground transition-transform ${open ? "rotate-45 translate-y-[3px]" : ""}`} />
            <span className={`h-px w-5 bg-foreground transition-transform ${open ? "-rotate-45 -translate-y-[3px]" : ""}`} />
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          <nav className="px-6 py-6 flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-foreground/90 hover:text-gold transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
