import Link from "next/link";
import { Reveal } from "@/components/animations/reveal";

type SpecialtyPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  intro: string;
  symptomsTitle: string;
  symptoms: string[];
  careTitle: string;
  careItems: string[];
  ctaTitle: string;
  ctaText: string;
};

export function SpecialtyPage({
  eyebrow,
  title,
  description,
  intro,
  symptomsTitle,
  symptoms,
  careTitle,
  careItems,
  ctaTitle,
  ctaText,
}: SpecialtyPageProps) {
  return (
    <main className="bg-white text-[#4A342F]">
      <section className="bg-[#FAF0E6] py-24">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#859D91] transition hover:text-[#A05E4B]"
            >
              ← Voltar para a home
            </Link>
          </Reveal>

          <div className="mt-10 max-w-4xl">
            <Reveal delay={0.05}>
              <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#D88B7B]">
                {eyebrow}
              </span>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="mt-4 text-5xl md:text-6xl leading-tight text-[#A05E4B]">
                {title}
              </h1>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="mt-6 text-xl leading-9 text-[#6E554D]">
                {description}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto grid gap-12 px-6 md:grid-cols-[1.05fr_0.95fr]">
          <div>
            <Reveal>
              <h2 className="text-4xl leading-tight text-[#A05E4B]">
                Entenda melhor o acompanhamento
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-6 text-lg leading-8 text-[#6E554D]">{intro}</p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-10 rounded-[28px] bg-[#FAF0E6] p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#859D91]">
                  {careTitle}
                </p>

                <ul className="mt-5 space-y-4">
                  {careItems.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-[#6E554D] leading-7"
                    >
                      <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-[#A05E4B]">
                        ✓
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          <div>
            <Reveal delay={0.15}>
              <div className="rounded-[32px] border border-[#A05E4B]/10 bg-white p-8 shadow-[0_20px_60px_rgba(160,94,75,0.08)]">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#859D91]">
                  {symptomsTitle}
                </p>

                <div className="mt-6 grid gap-4">
                  {symptoms.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl bg-[#FAF0E6] p-5 leading-7 text-[#6E554D]"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#FAF0E6]">
        <div className="max-w-5xl mx-auto px-6">
          <Reveal>
            <div className="rounded-[36px] bg-[linear-gradient(135deg,#A05E4B_0%,#D88B7B_100%)] px-8 py-14 md:px-16 md:py-20 text-center text-white">
              <span className="text-sm font-semibold uppercase tracking-[0.25em] text-white/75">
                Agendamento
              </span>

              <h2 className="mx-auto mt-4 max-w-3xl text-4xl md:text-5xl leading-tight">
                {ctaTitle}
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/85">
                {ctaText}
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/5512991845963?text=Olá%2C%20gostaria%20de%20agendar%20uma%20consulta%20com%20a%20Dra.%20Tauana%20Leão."
                  className="rounded-full bg-white px-8 py-4 font-semibold text-[#A05E4B] transition hover:bg-[#FAF0E6]"
                >
                  Agendar via WhatsApp
                </a>

                <Link
                  href="/"
                  className="rounded-full border border-white/40 px-8 py-4 font-semibold text-white transition hover:bg-white/10"
                >
                  Voltar para o site
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}