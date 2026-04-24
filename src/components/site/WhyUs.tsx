import { Wrench, Zap, DollarSign } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

const cards = [
  {
    icon: Wrench,
    title: "Radically Honest",
    body: "They tell you what actually needs fixing — not what lines their pockets. Customers have driven here from across the region just because they trust us.",
  },
  {
    icon: Zap,
    title: "Fast When It Matters",
    body: "Emergency brake job? Flat tire at the end of the day? We squeeze you in. Because being stranded isn't convenient.",
  },
  {
    icon: DollarSign,
    title: "Fair, Transparent Pricing",
    body: "Jason and the team give you real numbers, upfront. No inflated estimates, no surprise charges.",
  },
];

export function WhyUs() {
  const ref = useReveal();
  return (
    <section ref={ref} id="why" className="py-28 lg:py-40 relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl mb-16 lg:mb-24">
          <p className="reveal text-xs uppercase tracking-[0.3em] text-gold mb-5">
            Why Willistown
          </p>
          <h2 className="reveal font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
            Three things every customer
            <br />
            <span className="text-muted-foreground">says about us.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((c, i) => {
            const Icon = c.icon;
            return (
              <div
                key={i}
                className="reveal group relative p-8 lg:p-10 rounded-sm border border-border bg-surface hover-gold-glow"
              >
                <div className="h-12 w-12 rounded-sm border border-gold/30 bg-gold/5 flex items-center justify-center mb-8 group-hover:bg-gold/10 transition-colors">
                  <Icon className="h-5 w-5 text-gold" strokeWidth={1.5} />
                </div>
                <h3 className="font-display font-semibold text-2xl mb-4 tracking-tight">
                  {c.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{c.body}</p>
                <div className="mt-10 text-xs text-gold/60 font-mono">0{i + 1}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
