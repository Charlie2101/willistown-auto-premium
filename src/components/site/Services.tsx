import {
  Droplet,
  Disc,
  ShieldCheck,
  Circle,
  Truck,
  Cpu,
  Settings,
  CalendarCheck,
} from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

const services = [
  { icon: Droplet, name: "Oil Changes" },
  { icon: Disc, name: "Brake Service" },
  { icon: ShieldCheck, name: "PA State Inspections" },
  { icon: Circle, name: "Tire Service" },
  { icon: Truck, name: "Fleet & Commercial" },
  { icon: Cpu, name: "Engine Diagnostics" },
  { icon: Settings, name: "Suspension & Steering" },
  { icon: CalendarCheck, name: "Preventative Maintenance" },
];

export function Services() {
  const ref = useReveal();
  return (
    <section
      ref={ref}
      id="services"
      className="py-28 lg:py-40 bg-surface border-y border-border relative"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16 lg:mb-20">
          <div className="max-w-2xl">
            <p className="reveal text-xs uppercase tracking-[0.3em] text-gold mb-5">
              What We Do
            </p>
            <h2 className="reveal font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
              Every service your vehicle needs.
              <span className="text-muted-foreground"> Done right.</span>
            </h2>
          </div>
          <p className="reveal text-muted-foreground max-w-sm">
            From a quick oil change to fleet maintenance contracts — we handle it
            all under one roof.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 border-t border-l border-border">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={i}
                className="reveal group relative aspect-square border-r border-b border-border p-6 lg:p-8 flex flex-col justify-between bg-background hover:bg-surface-elevated transition-colors duration-500 cursor-pointer"
              >
                <Icon
                  className="h-7 w-7 text-foreground/60 group-hover:text-gold transition-colors duration-500"
                  strokeWidth={1.25}
                />
                <div>
                  <div className="text-[10px] font-mono text-muted-foreground/60 mb-2">
                    /0{i + 1}
                  </div>
                  <h3 className="font-display font-medium text-base lg:text-lg leading-tight tracking-tight group-hover:text-gold transition-colors duration-500">
                    {s.name}
                  </h3>
                </div>
                <div className="absolute bottom-0 left-0 h-px w-0 bg-gold transition-all duration-500 group-hover:w-full" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
