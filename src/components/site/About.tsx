import aboutImg from "@/assets/about-mechanic.jpg";
import { useReveal } from "@/hooks/use-reveal";

export function About() {
  const ref = useReveal();
  return (
    <section ref={ref} id="about" className="py-28 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <p className="reveal text-xs uppercase tracking-[0.3em] text-gold mb-5">
              Our Story
            </p>
            <h2 className="reveal font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight mb-8">
              Four decades.
              <br />
              <span className="text-muted-foreground">One promise.</span>
            </h2>
            <div className="space-y-6 text-foreground/85 leading-relaxed text-lg">
              <p className="reveal">
                Willistown Auto Repair has been a cornerstone of this community
                since the 1980s. What started with Bob has grown into a team
                that treats every car — and every customer — like family.
              </p>
              <p className="reveal">
                <span className="text-gold">Jason, Jake, Ray,</span> and the
                crew don't just fix cars. They build relationships that last
                decades.
              </p>
            </div>

            <div className="reveal mt-12 grid grid-cols-3 gap-6 pt-10 border-t border-border">
              <div>
                <div className="font-display text-3xl lg:text-4xl font-semibold text-gold">
                  40+
                </div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground mt-2">
                  Years
                </div>
              </div>
              <div>
                <div className="font-display text-3xl lg:text-4xl font-semibold text-gold">
                  4.9★
                </div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground mt-2">
                  Google
                </div>
              </div>
              <div>
                <div className="font-display text-3xl lg:text-4xl font-semibold text-gold">
                  1000s
                </div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground mt-2">
                  Repairs
                </div>
              </div>
            </div>
          </div>

          <div className="reveal relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm border border-border">
              <img
                src={aboutImg}
                alt="Mechanic working under the hood in a warmly lit garage"
                width={1024}
                height={1280}
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden md:block bg-background border border-gold/40 px-6 py-5 rounded-sm gold-glow">
              <div className="text-xs uppercase tracking-[0.25em] text-gold mb-1">
                Family Owned
              </div>
              <div className="font-display font-semibold">Since the 1980s</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
