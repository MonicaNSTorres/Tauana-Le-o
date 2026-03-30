import { Reveal } from "@/components/animations/reveal";
import { HeartPulse, FlaskConical, HandHeart } from "lucide-react";

const differentials = [
    {
        title: "Cuidado individualizado",
        text: "Cada paciente é avaliado de forma única, considerando sintomas, exames, rotina e objetivos de saúde.",
        icon: HandHeart,
    },
    {
        title: "Visão metabólica completa",
        text: "O acompanhamento vai além do sintoma isolado, com atenção ao metabolismo, hormônios e saúde de longo prazo.",
        icon: FlaskConical,
    },
    {
        title: "Atendimento humano e claro",
        text: "Escuta acolhedora, explicações objetivas e uma condução clínica que transmite segurança em cada etapa.",
        icon: HeartPulse,
    },
];

export function Differentials() {
    return (
        <section className="bg-[#FAF0E6] py-24">
            <div className="mx-auto max-w-6xl px-6">
                <Reveal>
                    <div className="mx-auto max-w-3xl text-center">
                        <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#D88B7B]">
                            Diferenciais
                        </span>

                        <h2 className="mt-4 text-5xl leading-tight text-[#A05E4B]">
                            O que torna o cuidado da Dra. Tauana especial
                        </h2>

                        <p className="mt-6 text-lg leading-8 text-[#6E554D]">
                            Uma abordagem que une ciência, acolhimento e clareza para promover
                            mais equilíbrio e segurança na jornada de saúde de cada paciente.
                        </p>
                    </div>
                </Reveal>

                <div className="mt-14 grid gap-6 md:grid-cols-3">
                    {differentials.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <Reveal key={item.title} delay={index * 0.08}>
                                <article className="group h-full rounded-[30px] border border-[#A05E4B]/10 bg-white p-8 shadow-[0_18px_50px_rgba(160,94,75,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(160,94,75,0.12)]">
                                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FAF0E6] text-[#A05E4B] transition duration-300 group-hover:bg-[#A05E4B] group-hover:text-white">
                                        <Icon className="h-6 w-6" />
                                    </div>

                                    <h3 className="mt-6 text-2xl leading-snug text-[#A05E4B]">
                                        {item.title}
                                    </h3>

                                    <p className="mt-4 leading-8 text-[#6E554D]">{item.text}</p>
                                </article>
                            </Reveal>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}