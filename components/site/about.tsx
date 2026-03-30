import Image from "next/image";
import { Reveal } from "@/components/animations/reveal";

export function About() {
  return (
    <section id="sobre" className="bg-[#859D91] py-24 overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 md:grid-cols-2">
        <Reveal>
          <div className="relative">
            <div className="absolute -left-6 -top-6 h-32 w-32 rounded-full bg-[#FBB39C]/25 blur-3xl" />
            <div className="absolute -bottom-8 -right-8 h-40 w-40 rounded-full bg-[#FAF0E6]/20 blur-3xl" />

            <div className="relative overflow-hidden rounded-[34px] bg-[#FAF0E6] p-4 shadow-[0_35px_80px_rgba(0,0,0,0.10)]">
              <div className="relative h-[540px] overflow-hidden rounded-[28px]">
                <Image
                  src="/tauana.jpeg"
                  alt="Dra. Tauana Leão"
                  fill
                  className="object-cover object-top"
                />
              </div>

              <div className="absolute bottom-10 left-10 max-w-xs rounded-[24px] border border-white/30 bg-white/85 p-6 backdrop-blur-md shadow-[0_20px_50px_rgba(0,0,0,0.10)]">
                <p className="text-xs uppercase tracking-[0.28em] text-[#859D91]">
                  cuidado humano
                </p>

                <p className="mt-3 text-base leading-7 text-[#A05E4B]">
                  Um atendimento que valoriza equilíbrio, acolhimento e
                  individualidade em cada etapa do cuidado.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#FAF0E6]">
              Sobre a médica
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="mt-4 text-4xl leading-tight text-white sm:text-5xl">
              Um acompanhamento pensado para tratar além do sintoma
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-6 text-lg leading-8 text-[#FAF0E6]">
              A proposta da Dra. Tauana Leão é oferecer um atendimento elegante,
              próximo e individualizado, considerando não apenas exames e
              diagnósticos, mas também o contexto, a rotina e os objetivos de
              cada paciente.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <p className="mt-5 text-lg leading-8 text-[#FAF0E6]">
              A endocrinologia e a metabologia são conduzidas com foco em
              equilíbrio, saúde de longo prazo e decisões clínicas claras, para
              que o paciente se sinta seguro e acolhido durante todo o processo.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 items-stretch">
            <Reveal delay={0.35}>
              <div className="flex h-full min-h-[160px] flex-col rounded-[24px] bg-white p-6 shadow-[0_14px_30px_rgba(0,0,0,0.08)]">
                <span className="text-xs uppercase tracking-[0.25em] text-[#859D91]">
                  especialidade
                </span>

                <p className="mt-3 font-semibold leading-7 text-[#A05E4B]">
                  Endocrinologia e Metabologia
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.45}>
              <div className="flex h-full min-h-[160px] flex-col rounded-[24px] bg-white p-6 shadow-[0_14px_30px_rgba(0,0,0,0.08)]">
                <span className="text-xs uppercase tracking-[0.25em] text-[#859D91]">
                  abordagem
                </span>

                <p className="mt-3 font-semibold leading-7 text-[#A05E4B]">
                  Saúde com foco em equilíbrio e individualidade
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.55}>
            <div className="mt-8 inline-flex rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-medium text-white backdrop-blur-sm">
              Atendimento com clareza, escuta e visão de longo prazo
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}