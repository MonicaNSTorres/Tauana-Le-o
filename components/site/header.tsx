"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Reveal } from "@/components/animations/reveal";
import Image from "next/image";

export function Header() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#A05E4B]/10 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-28 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Reveal>
          <Link
            href="/"
            className="max-w-[220px] sm:max-w-none"
            onClick={closeMenu}
          >
            {/*<div className="flex flex-col leading-none">
              <span className="font-serif text-[1.7rem] text-[#A05E4B] sm:text-2xl">
                Dra. Tauana Leão
              </span>

              <span className="mt-1 text-[11px] uppercase tracking-[0.22em] text-[#859D91] sm:text-xs sm:tracking-[0.25em]">
                Endocrinologia e Metabologia
              </span>
            </div>*/}
            <Reveal>
              <Link
                href="/"
                className="flex items-center"
                onClick={closeMenu}
              >
                <Image
                  src="/logo-dra-tauana.png"
                  alt="Dra. Tauana Leão - Endocrinologia e Metabologia"
                  width={220}
                  height={60}
                  priority
                  className="h-auto w-[160px] sm:w-[200px]"
                />
              </Link>
            </Reveal>
          </Link>
        </Reveal>

        <div className="hidden items-center gap-8 md:flex">
          <Reveal delay={0.1}>
            <nav className="flex gap-8 text-sm font-medium text-[#6E554D]">
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
              href="https://www.doctoralia.com.br/tauana-brogio-leao/endocrinologista/sao-jose-dos-campos#profile-pricing"
              className="rounded-full bg-[#A05E4B] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#8B503F]"
            >
              Agendar consulta
            </a>
          </Reveal>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <a
            href="https://wa.me/5512991845963?text=Olá%2C%20gostaria%20de%20agendar%20uma%20consulta%20com%20a%20Dra.%20Tauana%20Leão."
            className="rounded-full bg-[#A05E4B] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#8B503F]"
          >
            Agendar
          </a>

          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#A05E4B]/15 bg-[#FAF0E6] text-[#A05E4B] transition hover:bg-[#F3E2D8]"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden border-t border-[#A05E4B]/10 bg-white transition-all duration-300 md:hidden ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <nav className="mx-auto flex max-w-6xl flex-col px-4 py-4 sm:px-6">
          <a
            href="#sobre"
            onClick={closeMenu}
            className="rounded-xl px-3 py-3 text-[#6E554D] transition hover:bg-[#FAF0E6] hover:text-[#A05E4B]"
          >
            Sobre
          </a>

          <a
            href="#atuacao"
            onClick={closeMenu}
            className="rounded-xl px-3 py-3 text-[#6E554D] transition hover:bg-[#FAF0E6] hover:text-[#A05E4B]"
          >
            Áreas de atuação
          </a>

          <a
            href="#faq"
            onClick={closeMenu}
            className="rounded-xl px-3 py-3 text-[#6E554D] transition hover:bg-[#FAF0E6] hover:text-[#A05E4B]"
          >
            FAQ
          </a>

          <a
            href="https://www.doctoralia.com.br/tauana-brogio-leao/endocrinologista/sao-jose-dos-campos#profile-pricing"
            onClick={closeMenu}
            className="mt-3 inline-flex items-center justify-center rounded-full bg-[#A05E4B] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#8B503F]"
          >
            Agendar consulta
          </a>
        </nav>
      </div>
    </header>
  );
}