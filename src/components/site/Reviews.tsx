import { Star, Quote } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

const reviews = [
  {
    quote:
      "I wouldn't trust my vehicles with any other shop… knowing that my family is in my car, I wouldn't trust their safety to any shop but Willistown Auto.",
    name: "Carlos N.",
    tag: "Long-time customer",
  },
  {
    quote:
      "He has fit me in at a moment's notice when needed. Fair, kind…",
    name: "Ethan S.",
    tag: "5-truck fleet owner",
  },
  {
    quote:
      "2 or 3 other mechanics couldn't figure it out. Willistown got it right.",
    name: "Jim K.",
    tag: "Diagnostics customer",
  },
  {
    quote:
      "Fast and honest shop… fixed and out the door for less than my mechanic of 13 years back home.",
    name: "Sean H.",
    tag: "New customer",
  },
  {
    quote: "Close to 30 years — Jason and Jake are outstanding.",
    name: "Maureen F.",
    tag: "30-year customer",
  },
  {
    quote: "They understand how cars work, not just how to read the codes.",
    name: "Rebecca J.",
    tag: "Engine repair",
  },
];

export function Reviews() {
  const ref = useReveal();
  return (
    <section ref={ref} id="reviews" className="py-28 lg:py-40 relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-4xl mb-16 lg:mb-24">
          <p className="reveal text-xs uppercase tracking-[0.3em] text-gold mb-5">
            Real Reviews · Real Customers
          </p>
          <h2 className="reveal font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
            54 reviews. 4.9 stars.
            <br />
            <span className="text-muted-foreground">
              One consistent theme:
            </span>{" "}
            <span className="text-gold italic font-medium">
              you can trust these guys.
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {reviews.map((r, i) => (
            <figure
              key={i}
              className="reveal relative p-8 rounded-sm border border-border bg-surface hover-gold-glow flex flex-col"
            >
              <Quote
                className="absolute top-6 right-6 h-8 w-8 text-gold/15"
                strokeWidth={1}
              />
              <div className="flex items-center gap-0.5 mb-5">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="h-3.5 w-3.5 fill-gold text-gold" />
                ))}
              </div>
              <blockquote className="text-foreground/90 leading-relaxed flex-1">
                "{r.quote}"
              </blockquote>
              <figcaption className="mt-6 pt-6 border-t border-border">
                <div className="font-medium text-foreground text-sm">{r.name}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{r.tag}</div>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="reveal mt-14 text-center">
          <a
            href="https://www.google.com/search?q=Willistown+Auto+Repair+reviews"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-gold transition-colors"
          >
            Read all 54 reviews on Google
            <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
