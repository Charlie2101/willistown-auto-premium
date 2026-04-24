import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-garage.jpg";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { TrustBar } from "@/components/site/TrustBar";
import { WhyUs } from "@/components/site/WhyUs";
import { Services } from "@/components/site/Services";
import { Reviews } from "@/components/site/Reviews";
import { FleetCTA } from "@/components/site/FleetCTA";
import { About } from "@/components/site/About";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      {
        title:
          "Willistown Auto Repair | Honest Mechanics in Willistown, PA · 4.9★",
      },
      {
        name: "description",
        content:
          "Family-owned auto repair in Willistown, PA. 40+ years of honest work, fair prices, and zero runaround. 4.9★ on Google · 54 reviews. Schedule service today.",
      },
      { property: "og:title", content: "Willistown Auto Repair · 4.9★ on Google" },
      {
        property: "og:description",
        content:
          "Trusted by the Willistown community for over 40 years. Honest work. Fair prices. Zero runaround.",
      },
    ],
  }),
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <TrustBar />
      <WhyUs />
      <Services />
      <Reviews />
      <FleetCTA />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
