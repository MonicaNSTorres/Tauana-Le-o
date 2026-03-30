import { Reveal } from "@/components/animations/reveal";
import Image from "next/image";

export function Hero() {
  return (
    <section className="bg-[#FAF0E6] py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 px-6 items-center">

        {/* TEXTO */}
        <div>
          <Reveal>
            <span className="text-sm uppercase tracking-widest text-[#D88B7B]">
              Cuidado endocrinológico
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="text-6xl text-[#A05E4B] mt-4 leading-tight">
              Equilíbrio hormonal
              <br />
              e saúde metabólica
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-lg mt-6 text-[#6E554D] leading-relaxed max-w-xl">
              Atendimento em endocrinologia focado em saúde, equilíbrio
              hormonal, metabolismo e qualidade de vida.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/5512999999999"
                className="bg-[#A05E4B] text-white px-7 py-4 rounded-full font-semibold transition hover:bg-[#8B503F]"
              >
                Agendar consulta
              </a>

              <a
                href="#sobre"
                className="border border-[#A05E4B]/20 px-7 py-4 rounded-full text-[#A05E4B] transition hover:bg-white"
              >
                Conhecer a médica
              </a>
            </div>
          </Reveal>
        </div>

        {/* FOTO DA MÉDICA */}
        <Reveal delay={0.35}>
          <div className="relative w-full h-125 rounded-3xl overflow-hidden shadow-xl">

            <Image
              src="/tauana.jpeg"
              alt="Dra Tauana Leão"
              fill
              className="object-cover"
              priority
            />

          </div>
        </Reveal>

      </div>
    </section>
  );
}