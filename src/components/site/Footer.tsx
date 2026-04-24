import { Star } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-14">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5">
              <span className="h-8 w-8 rounded-sm bg-gold flex items-center justify-center text-primary-foreground font-display font-black text-sm">
                W
              </span>
              <span className="font-display font-semibold tracking-tight">
                Willistown Auto Repair
              </span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground max-w-sm leading-relaxed">
              Family-owned, community-trusted auto repair in Willistown, PA.
              Honest work since the 1980s.
            </p>
            <div className="mt-6 inline-flex items-center gap-2.5 px-3 py-2 rounded-full border border-gold/30 bg-gold/5">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3 w-3 fill-gold text-gold" />
                ))}
              </div>
              <span className="text-xs text-foreground">
                <span className="text-gold font-medium">4.9</span> · 54 Google Reviews
              </span>
            </div>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">
              Navigate
            </div>
            <ul className="space-y-2.5 text-sm">
              {[
                ["#why", "Why Us"],
                ["#services", "Services"],
                ["#reviews", "Reviews"],
                ["#about", "About"],
                ["#contact", "Contact"],
              ].map(([h, l]) => (
                <li key={h}>
                  <a
                    href={h}
                    className="text-foreground/80 hover:text-gold transition-colors"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">
              Visit
            </div>
            <ul className="space-y-2.5 text-sm text-foreground/80">
              <li>
                <a href="tel:+16106471234" className="hover:text-gold transition-colors">
                  (610) 647-1234
                </a>
              </li>
              <li className="leading-relaxed">
                123 West Chester Pike
                <br />
                Willistown, PA 19355
              </li>
              <li>Mon–Fri · 7:30a – 5:30p</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Willistown Auto Repair. All rights reserved.</div>
          <div>PA State Inspection Station · Family Owned & Operated</div>
        </div>
      </div>
    </footer>
  );
}
