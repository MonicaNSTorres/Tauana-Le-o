import Image from "next/image";
import { Reveal } from "@/components/animations/reveal";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#FAF0E6] py-16 sm:py-20 lg:py-24">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-20 top-10 h-56 w-56 rounded-full bg-[#FBB39C]/20 blur-3xl" />
        <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-[#859D91]/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-52 w-52 rounded-full bg-[#D88B7B]/10 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-[0.28em] text-[#D88B7B]">
              Cuidado endocrinológico
            </span>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="mt-5 max-w-2xl text-5xl leading-[0.95] text-[#A05E4B] sm:text-6xl lg:text-7xl">
              Equilíbrio hormonal e saúde metabólica com olhar individual
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-7 max-w-xl text-lg leading-8 text-[#A05E4B]/85 sm:text-xl">
              Atendimento em endocrinologia focado em saúde, bem-estar,
              metabolismo e acompanhamento humanizado para diferentes fases da
              vida.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="https://www.doctoralia.com.br/tauana-brogio-leao/endocrinologista/sao-jose-dos-campos#profile-pricing"
                className="inline-flex items-center justify-center rounded-full bg-[#A05E4B] px-8 py-4 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#8C523F] hover:shadow-[0_16px_35px_rgba(160,94,75,0.25)]"
              >
                Agendar consulta
              </a>

              <a
                href="#sobre"
                className="inline-flex items-center justify-center rounded-full border border-[#A05E4B]/15 bg-white/70 px-8 py-4 text-sm font-semibold text-[#A05E4B] backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_12px_30px_rgba(160,94,75,0.12)]"
              >
                Conhecer a médica
              </a>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-3 items-stretch">
            <Reveal delay={0.3} className="h-full">
              <div className="flex h-full flex-col rounded-[22px] border border-white/40 bg-white/75 p-5 backdrop-blur-sm shadow-[0_10px_30px_rgba(160,94,75,0.08)]">
                <p className="text-xs uppercase tracking-[0.22em] text-[#859D91]">
                  abordagem
                </p>
                <p className="mt-3 font-semibold leading-6 text-[#A05E4B]">
                  Atendimento acolhedor e individualizado
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.38} className="h-full">
              <div className="flex h-full flex-col rounded-[22px] border border-white/40 bg-white/75 p-5 backdrop-blur-sm shadow-[0_10px_30px_rgba(160,94,75,0.08)]">
                <p className="text-xs uppercase tracking-[0.22em] text-[#859D91]">
                  foco
                </p>
                <p className="mt-3 font-semibold leading-6 text-[#A05E4B]">
                  Hormônios, metabolismo e qualidade de vida
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.46} className="h-full">
              <div className="flex h-full flex-col rounded-[22px] border border-white/40 bg-white/75 p-5 backdrop-blur-sm shadow-[0_10px_30px_rgba(160,94,75,0.08)]">
                <p className="text-xs uppercase tracking-[0.22em] text-[#859D91]">
                  cuidado
                </p>
                <p className="mt-3 font-semibold leading-6 text-[#A05E4B]">
                  Clareza clínica e visão de longo prazo
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal delay={0.18}>
          <div className="relative">
            <div className="absolute -left-6 top-12 h-32 w-32 rounded-full bg-[#FBB39C]/30 blur-3xl" />
            <div className="absolute -right-8 bottom-10 h-40 w-40 rounded-full bg-[#859D91]/20 blur-3xl" />

            <div className="relative overflow-hidden rounded-[36px] bg-white/70 p-4 shadow-[0_35px_80px_rgba(160,94,75,0.14)] backdrop-blur-sm">
              <div className="relative h-[520px] overflow-hidden rounded-[30px] sm:h-[620px]">
                <Image
                  src="/tauana.jpeg"
                  alt="Dra. Tauana Leão"
                  fill
                  priority
                  className="object-cover object-top"
                />
              </div>

              <div className="absolute bottom-10 left-10 max-w-[260px] rounded-[24px] border border-white/30 bg-white/85 p-6 backdrop-blur-md shadow-[0_18px_45px_rgba(0,0,0,0.10)]">
                <p className="text-xs uppercase tracking-[0.26em] text-[#859D91]">
                  medicina com equilíbrio
                </p>
                <p className="mt-3 text-base leading-7 text-[#A05E4B]">
                  Um cuidado que vai além do tratamento, com foco em saúde,
                  escuta e transformação sustentável.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}