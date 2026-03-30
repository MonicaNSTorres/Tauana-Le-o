import { Reveal } from "@/components/animations/reveal";

const faqs = [
  {
    question: "Quando devo procurar um endocrinologista?",
    answer:
      "A consulta com endocrinologista é indicada quando existem alterações hormonais, dificuldade para emagrecer, sintomas relacionados à tireoide, alterações de glicemia ou suspeita de desequilíbrios metabólicos.",
  },
  {
    question: "Endocrinologista ajuda no processo de emagrecimento?",
    answer:
      "Sim. O endocrinologista avalia fatores hormonais, metabólicos e clínicos que podem influenciar o peso corporal, ajudando a construir estratégias seguras e individualizadas.",
  },
  {
    question: "Quais doenças o endocrinologista trata?",
    answer:
      "Entre as principais estão obesidade, diabetes, doenças da tireoide, síndrome metabólica, resistência à insulina, alterações hormonais femininas e menopausa.",
  },
  {
    question: "É necessário levar exames na primeira consulta?",
    answer:
      "Caso possua exames recentes, é interessante levá-los. Porém, se não houver exames disponíveis, a médica poderá solicitar as avaliações necessárias após a consulta.",
  },
  {
    question: "A consulta endocrinológica é individualizada?",
    answer:
      "Sim. Cada paciente possui características únicas, e o acompanhamento considera histórico clínico, rotina, sintomas, exames e objetivos pessoais.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <Reveal>
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#D88B7B]">
            Dúvidas frequentes
          </span>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="mt-4 text-5xl text-[#A05E4B] leading-tight">
            Perguntas comuns sobre endocrinologia
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-6 text-lg leading-8 text-[#6E554D]">
            Algumas dúvidas aparecem com frequência durante o cuidado com a
            saúde hormonal e metabólica. Veja abaixo respostas para perguntas
            comuns de pacientes.
          </p>
        </Reveal>

        <div className="mt-14 space-y-4">
          {faqs.map((faq, index) => (
            <Reveal key={faq.question} delay={index * 0.08}>
              <details className="group rounded-[24px] border border-[#A05E4B]/10 bg-[#FAF0E6] p-6 transition hover:shadow-[0_10px_40px_rgba(160,94,75,0.08)]">
                <summary className="flex cursor-pointer items-center justify-between text-lg font-semibold text-[#A05E4B]">
                  {faq.question}

                  <span className="ml-4 text-xl transition group-open:rotate-45">
                    +
                  </span>
                </summary>

                <p className="mt-4 leading-8 text-[#6E554D]">
                  {faq.answer}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}