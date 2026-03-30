import Link from "next/link";
import { Reveal } from "@/components/animations/reveal";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#A05E4B]/10 bg-white/90 backdrop-blur-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between h-20 px-6">
        <Reveal>
          <Link href="/" className="flex flex-col leading-none">
            <span className="font-serif text-2xl text-[#A05E4B]">
              Dra. Tauana Leão
            </span>

            <span className="mt-1 text-xs tracking-[0.25em] uppercase text-[#859D91]">
              Endocrinologia e Metabologia
            </span>
          </Link>
        </Reveal>

        <Reveal delay={0.1}>
          <nav className="hidden md:flex gap-8 text-sm font-medium text-[#6E554D]">
            <a href="#sobre" className="transition hover:text-[#A05E4B]">
              Sobre
            </a>
            <a href="#atuacao" className="transition hover:text-[#A05E4B]">
              Áreas de atuação
            </a>
            <a href="#faq" className="transition hover:text-[#A05E4B]">
              FAQ
            </a>
          </nav>
        </Reveal>

        <Reveal delay={0.2}>
          <a
            href="https://wa.me/5512999999999"
            className="rounded-full bg-[#A05E4B] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#8B503F]"
          >
            Agendar consulta
          </a>
        </Reveal>
      </div>
    </header>
  );
}