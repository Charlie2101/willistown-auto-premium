import { Award, Star, MessageSquare, ShieldCheck, Truck } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

const items = [
  { icon: Award, stat: "40+", label: "Years in Business" },
  { icon: Star, stat: "4.9★", label: "Google Rating" },
  { icon: MessageSquare, stat: "54", label: "Five-Star Reviews" },
  { icon: ShieldCheck, stat: "PA", label: "State Inspection Station" },
  { icon: Truck, stat: "Fleet", label: "& Commercial Service" },
];

export function TrustBar() {
  const ref = useReveal();
  return (
    <section ref={ref} className="border-y border-border bg-surface relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-4">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="reveal flex items-center gap-3 justify-center md:justify-start"
              >
                <Icon className="h-5 w-5 text-gold shrink-0" strokeWidth={1.5} />
                <div className="leading-tight">
                  <div className="font-display font-semibold text-foreground text-sm">
                    {item.stat}
                  </div>
                  <div className="text-xs text-muted-foreground">{item.label}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
