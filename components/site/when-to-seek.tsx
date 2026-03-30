import { Reveal } from "@/components/animations/reveal";

const signs = [
    "Dificuldade para emagrecer mesmo com esforço",
    "Cansaço excessivo e indisposição frequente",
    "Alterações nos exames de glicemia ou colesterol",
    "Oscilações hormonais e sintomas persistentes",
    "Queda de cabelo, alterações de pele ou unhas",
    "Irregularidade menstrual ou sintomas da menopausa",
    "Suspeita de alterações na tireoide",
    "Sinais de resistência à insulina",
];

export function WhenToSeek() {
    return (
        <section className="py-24 bg-[#FAF0E6]">
            <div className="max-w-6xl mx-auto grid items-start gap-12 px-6 md:grid-cols-[1fr_1.1fr]">
                <div>
                    <Reveal>
                        <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#D88B7B]">
                            Quando procurar
                        </span>
                    </Reveal>

                    <Reveal delay={0.1}>
                        <h2 className="mt-4 text-5xl leading-tight text-[#A05E4B]">
                            Alguns sinais podem indicar a necessidade de avaliação endocrinológica
                        </h2>
                    </Reveal>

                    <Reveal delay={0.2}>
                        <p className="mt-6 text-lg leading-8 text-[#6E554D]">
                            A endocrinologia atua no cuidado das alterações hormonais e
                            metabólicas, contribuindo para diagnóstico, acompanhamento e
                            condutas mais individualizadas ao longo do tempo.
                        </p>
                    </Reveal>

                    <Reveal delay={0.3}>
                        <div className="mt-10 rounded-[28px] bg-white p-6 shadow-[0_20px_60px_rgba(160,94,75,0.08)]">
                            <p className="text-sm uppercase tracking-[0.2em] text-[#859D91]">
                                Importante
                            </p>
                            <p className="mt-3 leading-8 text-[#6E554D]">
                                Nem sempre os sintomas são isolados. Muitas vezes, pequenas
                                alterações no corpo e na rotina merecem uma investigação mais
                                cuidadosa para que o tratamento seja feito com clareza e segurança.
                            </p>
                        </div>
                    </Reveal>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                    {signs.map((item, index) => (
                        <Reveal key={item} delay={index * 0.08}>
                            <div className="rounded-[24px] border border-white bg-white p-5 shadow-[0_12px_40px_rgba(160,94,75,0.06)] transition hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(160,94,75,0.10)]">
                                <div className="flex items-start gap-3">
                                    <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#FBB39C]/35 text-[#A05E4B]">
                                        ✓
                                    </div>
                                    <p className="leading-7 text-[#6E554D]">{item}</p>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}