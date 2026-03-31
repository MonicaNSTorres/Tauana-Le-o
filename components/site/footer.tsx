import Link from "next/link";
import { Reveal } from "@/components/animations/reveal";
import Image from "next/image";

const quickLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Áreas de atuação", href: "#atuacao" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "https://wa.me/5512999999999" },
];

const specialtiesLinks = [
  { label: "Obesidade", href: "/obesidade" },
  { label: "Diabetes", href: "/diabetes" },
  { label: "Tireoide", href: "/tireoide" },
];

export function Footer() {
  return (
    <footer className="bg-[#FFF9F5] border-t border-[#A05E4B]/10">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid gap-12 md:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
          <Reveal>
            {/*<div>
              <h3 className="text-3xl text-[#A05E4B]">Dra. Tauana Leão</h3>

              <p className="mt-3 text-sm uppercase tracking-[0.25em] text-[#859D91]">
                Endocrinologia e Metabologia
              </p>

              <p className="mt-6 max-w-sm leading-8 text-[#6E554D]">
                Atendimento com foco em equilíbrio hormonal, saúde metabólica e
                acompanhamento individualizado, unindo clareza, escuta e cuidado
                humano em cada etapa da jornada do paciente.
              </p>
            </div>*/}
            <div className="flex flex-col gap-4">
              <Image
                src="/logo-dra-tauana.png"
                alt="Dra. Tauana Leão - Endocrinologia e Metabologia"
                width={220}
                height={80}
                className="h-auto w-[180px]"
              />

              <p className="text-sm text-[#6E554D] leading-relaxed max-w-xs">
                Atendimento em endocrinologia com foco em equilíbrio hormonal,
                metabolismo e acompanhamento individualizado.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#859D91]">
                Navegação
              </p>

              <div className="mt-5 flex flex-col gap-3">
                {quickLinks.map((item) =>
                  item.href.startsWith("#") || item.href.startsWith("http") ? (
                    <a
                      key={item.label}
                      href={item.href}
                      className="text-[#6E554D] transition hover:text-[#A05E4B]"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="text-[#6E554D] transition hover:text-[#A05E4B]"
                    >
                      {item.label}
                    </Link>
                  )
                )}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#859D91]">
                Especialidades
              </p>

              <div className="mt-5 flex flex-col gap-3">
                {specialtiesLinks.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="text-[#6E554D] transition hover:text-[#A05E4B]"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#859D91]">
                Contato
              </p>

              <div className="mt-5 space-y-3 text-[#6E554D] leading-7">
                <p>WhatsApp: (12) 99184-5963</p>
                <p>
                  Instagram:
                  <a
                    href="https://www.instagram.com/dratauanaleao?igsh=MTUzd2oxdGR4cDVlbw%3D%3D&utm_source=qr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#A05E4B] hover:underline"
                  >
                    @dratauanaleao
                  </a>
                </p>
                <p>São José dos Campos - SP</p>
                <p>CRM-SP 233820</p>
              </div>

              <a
                href="https://www.doctoralia.com.br/tauana-brogio-leao/endocrinologista/sao-jose-dos-campos#profile-pricing"
                className="mt-6 inline-flex rounded-full bg-[#A05E4B] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#8B503F]"
              >
                Agendar consulta
              </a>
            </div>
          </Reveal>
        </div>

        <div className="mt-14 border-t border-[#A05E4B]/10 pt-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-[#6E554D]">
            © {new Date().getFullYear()} Dra. Tauana Leão — Endocrinologia e Metabologia<br />
            CRM-SP 233820
          </p>

          <p className="text-sm text-[#859D91]">
            Site desenvolvido por Mônica Torres
          </p>
        </div>
      </div>
    </footer>
  );
}