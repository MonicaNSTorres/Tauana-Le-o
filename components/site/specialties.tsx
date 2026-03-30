import Link from "next/link";
import { Reveal } from "@/components/animations/reveal";

const specialties = [
  {
    title: "Obesidade e emagrecimento saudável",
    description:
      "Acompanhamento individualizado para controle do peso, metabolismo e construção de hábitos sustentáveis com foco em saúde de longo prazo.",
    href: "/obesidade",
  },
  {
    title: "Diabetes e resistência à insulina",
    description:
      "Avaliação cuidadosa para diagnóstico, controle glicêmico e prevenção de complicações, com atenção ao contexto de cada paciente.",
    href: "/diabetes",
  },
  {
    title: "Doenças da tireoide",
    description:
      "Investigação e tratamento de alterações da tireoide, buscando equilíbrio hormonal, bem-estar e melhora da qualidade de vida.",
    href: "/tireoide",
  },
  {
    title: "Reposição hormonal e menopausa",
    description:
      "Condutas personalizadas para fases de transição hormonal, com escuta, segurança e decisões clínicas individualizadas.",
    href: "#",
  },
  {
    title: "Síndrome metabólica",
    description:
      "Cuidado integrado para alterações metabólicas relacionadas a peso, glicemia, colesterol e risco cardiovascular.",
    href: "#",
  },
  {
    title: "Alterações hormonais femininas",
    description:
      "Acompanhamento clínico de oscilações hormonais, sintomas associados e impacto na rotina, saúde e bem-estar.",
    href: "#",
  },
];

export function Specialties() {
  return (
    <section id="atuacao" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#D88B7B]">
            Áreas de atuação
          </span>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="mt-4 max-w-3xl text-5xl leading-tight text-[#A05E4B]">
            A endocrinologia pode contribuir em diferentes fases da sua jornada
            de saúde
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#6E554D]">
            Um acompanhamento pensado para investigar alterações hormonais e
            metabólicas com clareza, acolhimento e condutas personalizadas.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {specialties.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08}>
              <article className="group flex h-full flex-col rounded-[30px] border border-[#A05E4B]/10 bg-[#FAF0E6] p-8 transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(160,94,75,0.12)]">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[#A05E4B] shadow-sm">
                  <span className="text-xl">+</span>
                </div>

                <h3 className="mt-6 text-2xl leading-snug text-[#A05E4B]">
                  {item.title}
                </h3>

                <p className="mt-4 flex-1 leading-8 text-[#6E554D]">
                  {item.description}
                </p>

                {item.href === "#" ? (
                  <a
                    href="https://www.doctoralia.com.br/tauana-brogio-leao/endocrinologista/sao-jose-dos-campos#profile-pricing"
                    className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#859D91] transition group-hover:text-[#A05E4B]"
                  >
                    Agendar avaliação
                    <span className="transition group-hover:translate-x-1">→</span>
                  </a>
                ) : (
                  <Link
                    href={item.href}
                    className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#859D91] transition group-hover:text-[#A05E4B]"
                  >
                    Saiba mais
                    <span className="transition group-hover:translate-x-1">→</span>
                  </Link>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}