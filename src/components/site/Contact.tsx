import { useState } from "react";
import { MapPin, Phone, Clock, Mail, ArrowRight, CheckCircle2 } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

// TODO(before publish): Replace with the real Willistown Auto Repair phone, address, hours, and email.
// TODO(before publish): Set VITE_FORMSPREE_ENDPOINT in project settings to a real Formspree (or Web3Forms)
//   endpoint so submissions actually email Jason. Without it, the form falls back to a demo success state.
const FORM_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT as string | undefined;

export function Contact() {
  const ref = useReveal();
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  return (
    <section
      ref={ref}
      id="contact"
      className="py-28 lg:py-40 bg-surface border-t border-border"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl mb-16 lg:mb-20">
          <p className="reveal text-xs uppercase tracking-[0.3em] text-gold mb-5">
            Book Service
          </p>
          <h2 className="reveal font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
            Ready to stop settling
            <br />
            <span className="text-gold italic font-medium">
              for mechanics you don't trust?
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
          {/* Form */}
          <div className="lg:col-span-3 reveal">
            {submitted ? (
              <div className="p-10 border border-gold/40 bg-gold/5 rounded-sm flex flex-col items-start gap-4">
                <CheckCircle2 className="h-10 w-10 text-gold" strokeWidth={1.5} />
                <h3 className="font-display text-2xl font-semibold">
                  Message received.
                </h3>
                <p className="text-muted-foreground">
                  Jason or someone on the team will reach out shortly. For
                  urgent issues, call{" "}
                  <a href="tel:+16106471234" className="text-gold">
                    (610) 647-1234
                  </a>
                  .
                </p>
              </div>
            ) : (
              <form
                onSubmit={async (e) => {
                  e.preventDefault();
                  setError(null);
                  const form = e.currentTarget;
                  if (!FORM_ENDPOINT) {
                    // Demo mode — no backend wired yet
                    setSubmitted(true);
                    return;
                  }
                  setSubmitting(true);
                  try {
                    const data = new FormData(form);
                    const res = await fetch(FORM_ENDPOINT, {
                      method: "POST",
                      body: data,
                      headers: { Accept: "application/json" },
                    });
                    if (!res.ok) throw new Error("Network error");
                    setSubmitted(true);
                    form.reset();
                  } catch {
                    setError(
                      "Something went wrong. Please call (610) 647-1234 instead."
                    );
                  } finally {
                    setSubmitting(false);
                  }
                }}
                className="space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Name" name="name" required />
                  <Field label="Phone" name="phone" type="tel" required />
                </div>
                <Field label="Vehicle (Year / Make / Model)" name="vehicle" />
                <Field
                  label="What's going on?"
                  name="message"
                  textarea
                  required
                />
                {error && (
                  <p className="text-sm text-destructive">{error}</p>
                )}
                <button
                  type="submit"
                  disabled={submitting}
                  className="group inline-flex items-center gap-2 px-8 py-4 bg-gold text-primary-foreground font-medium rounded-sm hover:bg-gold-bright transition-all duration-300 hover:gold-glow disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {submitting ? "Sending..." : "Send Message"}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </form>
            )}
          </div>

          {/* Info */}
          <div className="lg:col-span-2 space-y-1">
            <InfoRow
              icon={Phone}
              label="Call"
              value="(610) 647-1234"
              href="tel:+16106471234"
            />
            <InfoRow
              icon={MapPin}
              label="Visit"
              value={
                <>
                  123 West Chester Pike
                  <br />
                  Willistown, PA 19355
                </>
              }
            />
            <InfoRow
              icon={Clock}
              label="Hours"
              value={
                <>
                  Mon–Fri · 7:30am – 5:30pm
                  <br />
                  Sat · By appointment
                  <br />
                  Sun · Closed
                </>
              }
            />
            <InfoRow
              icon={Mail}
              label="Email"
              value="service@willistownauto.com"
              href="mailto:service@willistownauto.com"
            />

            <div className="reveal mt-8 aspect-[4/3] rounded-sm overflow-hidden border border-border bg-background relative">
              <iframe
                title="Map to Willistown Auto Repair"
                src="https://www.google.com/maps?q=Willistown+PA&output=embed"
                className="h-full w-full grayscale contrast-125 opacity-90"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  textarea,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  textarea?: boolean;
}) {
  const base =
    "w-full bg-background border border-border focus:border-gold focus:ring-0 outline-none px-4 py-3.5 text-foreground placeholder:text-muted-foreground/60 rounded-sm transition-colors";
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block">
        {label} {required && <span className="text-gold">*</span>}
      </span>
      {textarea ? (
        <textarea name={name} required={required} rows={5} className={base} />
      ) : (
        <input type={type} name={name} required={required} className={base} />
      )}
    </label>
  );
}

function InfoRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  label: string;
  value: React.ReactNode;
  href?: string;
}) {
  const Wrap: React.ElementType = href ? "a" : "div";
  return (
    <Wrap
      {...(href ? { href } : {})}
      className="reveal flex gap-4 py-5 border-b border-border group"
    >
      <Icon
        className="h-5 w-5 text-gold mt-1 shrink-0"
        strokeWidth={1.5}
      />
      <div>
        <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-1.5">
          {label}
        </div>
        <div className="text-foreground group-hover:text-gold transition-colors leading-relaxed">
          {value}
        </div>
      </div>
    </Wrap>
  );
}
