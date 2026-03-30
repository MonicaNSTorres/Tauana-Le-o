import { Header } from "@/components/site/header";
import { Hero } from "@/components/site/hero";
import { Authority } from "@/components/site/authority";
import { Specialties } from "@/components/site/specialties";
import { WhenToSeek } from "@/components/site/when-to-seek";
import { About } from "@/components/site/about";
import { Testimonials } from "@/components/site/testimonials";
import { FAQ } from "@/components/site/faq";
import { CTA } from "@/components/site/cta";
import { Footer } from "@/components/site/footer";
import { WhatsAppFloat } from "@/components/site/whatsapp-float";
import { FAQSchema } from "@/components/seo/faq-schema";
import { LocalSEO } from "@/components/site/local-seo";
import { Differentials } from "@/components/site/differentials";

export default function HomePage() {
  return (
    <main id="top">
      <FAQSchema />
      <Hero />
      <Authority />
      <Specialties />
      <WhenToSeek />
      <About />
      <Differentials />
      <Testimonials />
      <LocalSEO />
      <FAQ />
      <CTA />
    </main>
  );
}