import { Truck, ArrowRight } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

export function FleetCTA() {
  const ref = useReveal();
  return (
    <section
      ref={ref}
      id="fleet"
      className="relative py-28 lg:py-36 bg-surface border-y border-border overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 30% 50%, var(--gold) 0%, transparent 60%)",
        }}
      />
      <div className="relative mx-auto max-w-6xl px-6 lg:px-10 text-center">
        <div className="reveal inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gold/30 bg-gold/5 text-xs uppercase tracking-[0.25em] text-gold mb-8">
          <Truck className="h-3.5 w-3.5" />
          Fleet & Commercial
        </div>
        <h2 className="reveal font-display font-bold text-5xl sm:text-6xl lg:text-7xl tracking-tight leading-[1.02] text-gold">
          Running a Fleet?
        </h2>
        <p className="reveal mt-8 max-w-2xl mx-auto text-lg text-foreground/80 leading-relaxed">
          From landscaping trucks to delivery vans, Jason's team services
          commercial fleets with the same care and urgency your business demands.
        </p>
        <div className="reveal mt-12">
          <a
            href="tel:+16106471234"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-gold text-primary-foreground font-medium rounded-sm hover:bg-gold-bright transition-all duration-300 hover:gold-glow"
          >
            Talk to Jason
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
