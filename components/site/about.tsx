import { Reveal } from "@/components/animations/reveal";

export function About() {
  return (
    <section id="sobre" className="py-24 bg-[#FAF0E6]">
      <div className="max-w-6xl mx-auto grid items-center gap-12 px-6 md:grid-cols-2">
        <Reveal>
          <div className="rounded-[32px] bg-white p-5 shadow-xl">
            <div className="flex h-[500px] items-end rounded-[24px] bg-[linear-gradient(180deg,#FFFDFB_0%,#F6E7DF_100%)] p-8">
              <div className="rounded-[24px] bg-white/80 p-6 backdrop-blur">
                <p className="text-sm uppercase tracking-[0.25em] text-[#859D91]">
                  cuidado humano
                </p>
                <p className="mt-3 text-base leading-7 text-[#6E554D]">
                  Um atendimento que valoriza equilíbrio, acolhimento e
                  individualidade em cada etapa do cuidado.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#D88B7B]">
              Sobre a médica
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="mt-4 text-5xl leading-tight text-[#A05E4B]">
              Um acompanhamento pensado para tratar além do sintoma
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-6 text-lg leading-8 text-[#6E554D]">
              A proposta da Dra. Tauana Leão é oferecer um atendimento elegante,
              próximo e individualizado, considerando não apenas exames e
              diagnósticos, mas também o contexto, a rotina e os objetivos de
              cada paciente.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <p className="mt-5 text-lg leading-8 text-[#6E554D]">
              A endocrinologia e a metabologia são conduzidas com foco em
              equilíbrio, saúde de longo prazo e decisões clínicas claras, para
              que o paciente se sinta seguro e acolhido durante todo o processo.
            </p>
          </Reveal>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <Reveal delay={0.35}>
              <div className="rounded-2xl bg-white p-5">
                <span className="text-sm uppercase tracking-[0.2em] text-[#859D91]">
                  especialidade
                </span>
                <p className="mt-2 font-medium text-[#6E554D]">
                  Endocrinologia e Metabologia
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.45}>
              <div className="rounded-2xl bg-white p-5">
                <span className="text-sm uppercase tracking-[0.2em] text-[#859D91]">
                  abordagem
                </span>
                <p className="mt-2 font-medium text-[#6E554D]">
                  Saúde com foco em equilíbrio e individualidade
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}