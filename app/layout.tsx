import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { WhatsAppFloat } from "@/components/site/whatsapp-float";

const blackMango = localFont({
  src: "./fonts/black-mango-regular.ttf",
  variable: "--font-heading",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.tauanaleao.com.br"),

  title: {
    default: "Dra. Tauana Brógio Leão | Endocrinologista em São José dos Campos",
    template: "%s | Dra. Tauana Brógio Leão",
  },

  description:
    "Consulta com endocrinologista em São José dos Campos. Atendimento em obesidade, diabetes, tireoide, menopausa, reposição hormonal e metabolismo com olhar humano e individualizado.",

  keywords: [
    "endocrinologista em São José dos Campos",
    "endocrinologista São José dos Campos",
    "Dra Tauana Brógio Leão",
    "endocrinologia e metabologia",
    "tratamento da obesidade",
    "tratamento para diabetes",
    "tratamento da tireoide",
    "reposição hormonal",
    "menopausa",
    "metabolismo e emagrecimento",
  ],

  alternates: {
    canonical: "https://www.tauanaleao.com.br",
  },

  authors: [{ name: "Dra. Tauana Brógio Leão" }],
  creator: "Dra. Tauana Brógio Leão",
  publisher: "Dra. Tauana Brógio Leão",
  category: "healthcare",

  openGraph: {
    title: "Dra. Tauana Brógio Leão | Endocrinologista em São José dos Campos",
    description:
      "Atendimento em endocrinologia e metabologia com foco em saúde, equilíbrio e qualidade de vida.",
    url: "https://www.tauanaleao.com.br",
    siteName: "Dra. Tauana Brógio Leão",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dra. Tauana Brógio Leão - Endocrinologista em São José dos Campos",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Dra. Tauana Brógio Leão | Endocrinologista em São José dos Campos",
    description:
      "Atendimento humanizado em endocrinologia e metabologia em São José dos Campos.",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  verification: {
    google: "COLE_AQUI_O_CODIGO_DO_SEARCH_CONSOLE",
  },
};

const physicianJsonLd = {
  "@context": "https://schema.org",
  "@type": "Physician",
  name: "Dra. Tauana Brógio Leão",
  url: "https://www.tauanaleao.com.br",
  image: "https://www.tauanaleao.com.br/og-image.jpg",
  telephone: "+55 12 99184-5963",
  medicalSpecialty: "Endocrinology",
  areaServed: {
    "@type": "City",
    name: "São José dos Campos",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "São José dos Campos",
    addressRegion: "SP",
    addressCountry: "BR",
  },
  sameAs: ["https://www.instagram.com/dratauanaleao?igsh=MTUzd2oxdGR4cDVlbw%3D%3D&utm_source=qr"],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${blackMango.variable} ${poppins.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(physicianJsonLd),
          }}
        />

        <Header />
        {children}
        <Footer />
        <WhatsAppFloat />

        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || ""} />
      </body>
    </html>
  );
}