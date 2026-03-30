import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { WhatsAppFloat } from "@/components/site/whatsapp-float";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["500", "600", "700"],
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.drtauanaleao.com.br"),
  title: "Dra. Tauana Brógio Leão | Endocrinologia e Metabologia",
  description:
    "Atendimento em endocrinologia e metabologia com olhar humano, foco em equilíbrio, saúde e qualidade de vida. Agende sua consulta com a Dra. Tauana Brógio Leão.",
  keywords: [
    "endocrinologista",
    "endocrinologia e metabologia",
    "Dra Tauana Leão",
    "médica endocrinologista",
    "tratamento hormonal",
    "obesidade",
    "diabetes",
    "tireoide",
    "reposição hormonal",
    "endocrinologista São José dos Campos",
  ],
  openGraph: {
    title: "Dra. Tauana Brógio Leão | Endocrinologia e Metabologia",
    description:
      "Saúde, equilíbrio e cuidado individualizado em endocrinologia e metabologia.",
    url: "https://www.drtauanaleao.com.br",
    siteName: "Dra. Tauana Brógio Leão",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dra. Tauana Brógio Leão | Endocrinologia e Metabologia",
    description:
      "Atendimento humanizado em endocrinologia e metabologia.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${playfair.variable} ${poppins.variable}`}>
      <body>
        <Header />

        {children}

        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}