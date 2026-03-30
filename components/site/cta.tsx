import { Reveal } from "@/components/animations/reveal";

export function CTA() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <div className="rounded-[36px] bg-[linear-gradient(135deg,#A05E4B_0%,#D88B7B_100%)] px-8 py-14 md:px-16 md:py-20 text-center text-white">
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-white/75">
              Agendamento
            </span>

            <h2 className="mx-auto mt-4 max-w-3xl text-4xl md:text-5xl leading-tight">
              Dê o próximo passo no cuidado da sua saúde com acompanhamento
              endocrinológico individualizado.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/85">
              Um atendimento pensado para unir ciência, escuta, clareza e
              transformação sustentável na sua rotina.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/5512991845963?text=Olá%2C%20gostaria%20de%20agendar%20uma%20consulta%20com%20a%20Dra.%20Tauana%20Leão."
                className="rounded-full bg-white px-8 py-4 font-semibold text-[#A05E4B] transition hover:bg-[#FAF0E6]"
              >
                Agendar via WhatsApp
              </a>

              <a
                href="#top"
                className="rounded-full border border-white/40 px-8 py-4 font-semibold text-white transition hover:bg-white/10"
              >
                Voltar ao topo
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}