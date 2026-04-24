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
      { property: "og:type", content: "website" },
      { property: "og:image", content: heroImg },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: heroImg },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "canonical", href: "https://willistownauto.com/" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AutoRepair",
          name: "Willistown Auto Repair",
          image: "https://willistownauto.com/og-image.jpg",
          telephone: "+1-610-647-1234",
          priceRange: "$$",
          address: {
            "@type": "PostalAddress",
            streetAddress: "123 West Chester Pike",
            addressLocality: "Willistown",
            addressRegion: "PA",
            postalCode: "19355",
            addressCountry: "US",
          },
          geo: { "@type": "GeoCoordinates", latitude: 40.0193, longitude: -75.5202 },
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              opens: "07:30",
              closes: "17:30",
            },
          ],
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "54",
          },
        }),
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
