import { Reveal } from "@/components/animations/reveal";

export function Authority() {
  return (
    <section className="py-24 bg-[#FAF0E6]">
      <div className="max-w-6xl mx-auto px-6">

        <Reveal>
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#D88B7B]">
            Formação e atuação
          </span>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="text-5xl text-[#A05E4B] mt-4 max-w-3xl leading-tight">
            Medicina baseada em ciência, equilíbrio e cuidado humano
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8 mt-14">

          <Reveal delay={0.2}>
            <div className="bg-white rounded-3xl p-8 shadow-[0_15px_45px_rgba(160,94,75,0.08)]">
              <h3 className="text-xl text-[#A05E4B] font-semibold">
                Formação médica
              </h3>

              <p className="mt-4 text-[#6E554D] leading-relaxed">
                Graduação em Medicina e especialização em Endocrinologia
                e Metabologia com foco em saúde hormonal e metabólica.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="bg-white rounded-3xl p-8 shadow-[0_15px_45px_rgba(160,94,75,0.08)]">
              <h3 className="text-xl text-[#A05E4B] font-semibold">
                Atendimento personalizado
              </h3>

              <p className="mt-4 text-[#6E554D] leading-relaxed">
                Cada paciente recebe um plano individualizado considerando
                exames, histórico clínico e estilo de vida.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="bg-white rounded-3xl p-8 shadow-[0_15px_45px_rgba(160,94,75,0.08)]">
              <h3 className="text-xl text-[#A05E4B] font-semibold">
                Atualização científica
              </h3>

              <p className="mt-4 text-[#6E554D] leading-relaxed">
                Participação constante em congressos e atualizações médicas
                para oferecer tratamentos modernos e seguros.
              </p>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}