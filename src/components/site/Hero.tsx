import heroImg from "@/assets/hero-garage.jpg";
import { Star, Phone, Calendar, ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen w-full overflow-hidden flex items-center"
    >
      <img
        src={heroImg}
        alt="Dimly lit professional auto repair garage with car on lift"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover scale-105"
      />
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-hero-overlay)" }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-background/30 to-transparent" />

      {/* Trust badge */}
      <div className="absolute top-28 right-6 lg:top-32 lg:right-10 z-10 reveal">
        <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-full border border-gold/40 bg-background/60 backdrop-blur-md">
          <div className="flex items-center gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-3.5 w-3.5 fill-gold text-gold" />
            ))}
          </div>
          <span className="text-xs font-medium text-foreground tracking-wide">
            <span className="text-gold">4.9</span> on Google · 54 Reviews
          </span>
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10 pt-32 pb-20 w-full">
        <div className="max-w-4xl">
          <p className="reveal text-xs uppercase tracking-[0.3em] text-gold mb-6 font-medium">
            Willistown, PA · Est. 1980s
          </p>
          <h1 className="reveal font-display font-bold text-5xl sm:text-6xl lg:text-8xl leading-[0.95] tracking-tight text-foreground">
            Your car deserves
            <br />
            mechanics who
            <br />
            <span className="text-gold italic font-medium">actually give a damn.</span>
          </h1>
          <p className="reveal mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed">
            Trusted by the Willistown community for over 40 years.
            Honest work. Fair prices. Zero runaround.
          </p>

          <div className="reveal mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 px-7 py-4 bg-gold text-primary-foreground font-medium rounded-sm hover:bg-gold-bright transition-all duration-300 hover:gold-glow"
            >
              <Calendar className="h-4 w-4" />
              Schedule Service
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="tel:+16106471234"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 border border-border-bright text-foreground font-medium rounded-sm hover:border-gold hover:text-gold transition-all duration-300"
            >
              <Phone className="h-4 w-4" />
              Call Us — (610) 647-1234
            </a>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2 text-muted-foreground">
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <div className="h-10 w-px bg-gradient-to-b from-gold to-transparent" />
      </div>
    </section>
  );
}
