import { Reveal } from "@/components/animations/reveal";

export function LocalSEO() {
  return (
    <section className="py-24 bg-[#FAF0E6]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid items-center gap-12 md:grid-cols-[1.05fr_0.95fr]">
          <div>
            <Reveal>
              <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#D88B7B]">
                Atendimento especializado
              </span>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="mt-4 text-5xl leading-tight text-[#A05E4B]">
                Endocrinologista em São José dos Campos com atendimento humanizado
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-6 text-lg leading-8 text-[#6E554D]">
                A Dra. Tauana Leão oferece atendimento em endocrinologia e
                metabologia em São José dos Campos, com foco em equilíbrio
                hormonal, saúde metabólica e acompanhamento individualizado para
                diferentes fases da vida.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <p className="mt-5 text-lg leading-8 text-[#6E554D]">
                O cuidado é conduzido com escuta, clareza e atenção ao contexto
                de cada paciente, auxiliando em quadros como obesidade,
                diabetes, alterações da tireoide, resistência à insulina,
                menopausa e outras condições hormonais e metabólicas.
              </p>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="https://wa.me/5512999999999"
                  className="inline-flex items-center justify-center rounded-full bg-[#A05E4B] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#8B503F]"
                >
                  Agendar consulta
                </a>

                <a
                  href="#faq"
                  className="inline-flex items-center justify-center rounded-full border border-[#A05E4B]/20 px-7 py-4 text-sm font-semibold text-[#A05E4B] transition hover:bg-white"
                >
                  Tirar dúvidas
                </a>
              </div>
            </Reveal>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <Reveal delay={0.15}>
              <div className="rounded-[24px] bg-white p-6 shadow-[0_12px_40px_rgba(160,94,75,0.08)]">
                <p className="text-sm uppercase tracking-[0.2em] text-[#859D91]">
                  cidade
                </p>
                <h3 className="mt-3 text-2xl text-[#A05E4B]">
                  São José dos Campos
                </h3>
                <p className="mt-3 leading-7 text-[#6E554D]">
                  Atendimento com foco em endocrinologia e saúde metabólica.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.25}>
              <div className="rounded-[24px] bg-white p-6 shadow-[0_12px_40px_rgba(160,94,75,0.08)]">
                <p className="text-sm uppercase tracking-[0.2em] text-[#859D91]">
                  abordagem
                </p>
                <h3 className="mt-3 text-2xl text-[#A05E4B]">
                  Consulta individualizada
                </h3>
                <p className="mt-3 leading-7 text-[#6E554D]">
                  Avaliação cuidadosa de sintomas, exames, rotina e objetivos.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.35}>
              <div className="rounded-[24px] bg-white p-6 shadow-[0_12px_40px_rgba(160,94,75,0.08)]">
                <p className="text-sm uppercase tracking-[0.2em] text-[#859D91]">
                  principais focos
                </p>
                <h3 className="mt-3 text-2xl text-[#A05E4B]">
                  Hormônios e metabolismo
                </h3>
                <p className="mt-3 leading-7 text-[#6E554D]">
                  Obesidade, diabetes, tireoide, menopausa e resistência à insulina.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.45}>
              <div className="rounded-[24px] bg-white p-6 shadow-[0_12px_40px_rgba(160,94,75,0.08)]">
                <p className="text-sm uppercase tracking-[0.2em] text-[#859D91]">
                  experiência
                </p>
                <h3 className="mt-3 text-2xl text-[#A05E4B]">
                  Cuidado com clareza
                </h3>
                <p className="mt-3 leading-7 text-[#6E554D]">
                  Atendimento acolhedor, explicações objetivas e visão de longo prazo.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}