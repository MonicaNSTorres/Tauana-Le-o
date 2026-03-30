"use client";

import { useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import { Reveal } from "@/components/animations/reveal";

const testimonials = [
  {
    name: "Paciente",
    text: "Atendimento extremamente humano, cuidadoso e claro. Me senti acolhida do início ao fim da consulta.",
  },
  {
    name: "Paciente",
    text: "A Dra. Tauana tem um olhar muito atento e passa muita confiança. Explica tudo com calma e profundidade.",
  },
  {
    name: "Paciente",
    text: "Um atendimento elegante, acolhedor e objetivo. Saí da consulta entendendo exatamente o meu plano de cuidado.",
  },
  {
    name: "Paciente",
    text: "Consulta acolhedora, explicações muito claras e uma condução extremamente profissional. Experiência excelente.",
  },
];

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    containScroll: "trimSnaps",
  });

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const autoplay = setInterval(() => {
      emblaApi.scrollNext();
    }, 4500);

    return () => clearInterval(autoplay);
  }, [emblaApi]);

  return (
    <section className="overflow-hidden bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#D88B7B]">
              Depoimentos
            </span>

            <h2 className="mt-4 text-5xl leading-tight text-[#A05E4B]">
              Percepções que reforçam confiança
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#6E554D]">
              Um cuidado que une escuta, clareza e atenção individualizada em
              cada etapa da jornada do paciente.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-10 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={scrollPrev}
              aria-label="Depoimento anterior"
              className="group flex h-14 w-14 items-center justify-center rounded-full border border-[#A05E4B]/15 bg-[#FAF0E6] text-[#A05E4B] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:border-[#A05E4B]/30 hover:bg-[#A05E4B] hover:text-white hover:shadow-[0_14px_35px_rgba(160,94,75,0.20)]"
            >
              <ArrowLeft className="h-5 w-5 transition-transform duration-300 group-hover:-translate-x-0.5" />
            </button>

            <button
              type="button"
              onClick={scrollNext}
              aria-label="Próximo depoimento"
              className="group flex h-14 w-14 items-center justify-center rounded-full border border-[#A05E4B]/15 bg-[#FAF0E6] text-[#A05E4B] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:border-[#A05E4B]/30 hover:bg-[#A05E4B] hover:text-white hover:shadow-[0_14px_35px_rgba(160,94,75,0.20)]"
            >
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5" />
            </button>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="mt-14" ref={emblaRef}>
            <div className="-ml-6 flex">
              {testimonials.map((item, index) => (
                <div
                  key={`${item.name}-${index}`}
                  className="min-w-0 flex-[0_0_100%] pl-6 md:flex-[0_0_85%] lg:flex-[0_0_50%]"
                >
                  <article className="flex h-full flex-col rounded-[30px] border border-[#A05E4B]/10 bg-[#FAF0E6] p-8 shadow-[0_18px_50px_rgba(160,94,75,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(160,94,75,0.10)]">
                    <div className="flex items-center gap-1 text-[#D88B7B]">
                      {Array.from({ length: 5 }).map((_, starIndex) => (
                        <Star key={starIndex} className="h-4 w-4 fill-current" />
                      ))}
                    </div>

                    <p className="mt-6 flex-1 text-lg leading-8 text-[#6E554D]">
                      “{item.text}”
                    </p>

                    <div className="mt-8 border-t border-[#A05E4B]/10 pt-6">
                      <strong className="text-[#A05E4B]">{item.name}</strong>
                      <p className="mt-1 text-sm uppercase tracking-[0.18em] text-[#859D91]">
                        Atendimento em endocrinologia
                      </p>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}