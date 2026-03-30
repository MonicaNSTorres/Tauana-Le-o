import { SpecialtyPage } from "@/components/site/specialty-page";

export default function ObesidadePage() {
  return (
    <SpecialtyPage
      eyebrow="Especialidade"
      title="Tratamento da obesidade com acompanhamento endocrinológico"
      description="A obesidade é uma condição complexa, multifatorial e que exige avaliação individualizada, considerando metabolismo, hormônios, histórico clínico e hábitos de vida."
      intro="O acompanhamento endocrinológico pode ajudar na investigação de fatores que influenciam o ganho de peso e a dificuldade para emagrecer, sempre com foco em saúde, segurança e resultados sustentáveis ao longo do tempo."
      symptomsTitle="Quando vale investigar"
      symptoms={[
        "Dificuldade para emagrecer mesmo com dieta e exercício",
        "Ganho de peso frequente ou progressivo",
        "Compulsão alimentar ou fome excessiva",
        "Cansaço constante e baixa disposição",
        "Alterações metabólicas associadas ao peso",
      ]}
      careTitle="Como o cuidado pode ajudar"
      careItems={[
        "Avaliação clínica individualizada e história de saúde",
        "Investigação de fatores hormonais e metabólicos",
        "Análise de exames e contexto de vida do paciente",
        "Estratégias seguras para controle do peso",
        "Foco em saúde metabólica e bem-estar de longo prazo",
      ]}
      ctaTitle="Busque um acompanhamento com mais clareza e individualização"
      ctaText="Um plano bem conduzido considera não apenas o peso, mas a saúde como um todo, com escuta, estratégia e acompanhamento adequado."
    />
  );
}