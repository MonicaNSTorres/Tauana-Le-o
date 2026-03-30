import { SpecialtyPage } from "@/components/site/specialty-page";

export default function MetabolismoEmagrecimentoPage() {
  return (
    <SpecialtyPage
      eyebrow="Especialidade"
      title="Avaliação do metabolismo e acompanhamento para emagrecimento saudável"
      description="O emagrecimento saudável envolve mais do que o peso na balança: exige avaliação do metabolismo, dos hormônios, da composição corporal e dos fatores clínicos que influenciam a saúde."
      intro="O acompanhamento endocrinológico pode ajudar a investigar a dificuldade para emagrecer, compreender alterações metabólicas e definir estratégias mais seguras e sustentáveis ao longo do tempo."
      symptomsTitle="Quando vale investigar"
      symptoms={[
        "Dificuldade para emagrecer mesmo com esforço",
        "Ganho de peso frequente",
        "Alterações de composição corporal",
        "Cansaço, baixa disposição e metabolismo lento",
        "Suspeita de síndrome metabólica ou resistência à insulina",
      ]}
      careTitle="Como o cuidado pode ajudar"
      careItems={[
        "Avaliação clínica individualizada",
        "Investigação hormonal e metabólica",
        "Análise de exames e composição corporal",
        "Estratégias seguras com foco em saúde e sustentabilidade",
        "Acompanhamento contínuo com visão de longo prazo",
      ]}
      ctaTitle="Construa um plano de cuidado mais estratégico para sua saúde metabólica"
      ctaText="Um acompanhamento bem conduzido considera o metabolismo, os hormônios e o contexto de vida para promover resultados mais consistentes e sustentáveis."
    />
  );
}