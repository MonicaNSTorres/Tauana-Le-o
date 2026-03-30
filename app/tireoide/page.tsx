import { SpecialtyPage } from "@/components/site/specialty-page";

export default function TireoidePage() {
  return (
    <SpecialtyPage
      eyebrow="Especialidade"
      title="Avaliação e tratamento de alterações da tireoide"
      description="As doenças da tireoide podem impactar energia, peso, humor, metabolismo e bem-estar geral, exigindo investigação adequada e conduta individualizada."
      intro="O acompanhamento endocrinológico ajuda a identificar alterações tireoidianas, interpretar exames com clareza e orientar o tratamento conforme as necessidades de cada paciente."
      symptomsTitle="Sinais comuns"
      symptoms={[
        "Cansaço excessivo e sonolência",
        "Ganho ou perda de peso sem explicação",
        "Queda de cabelo e pele ressecada",
        "Alterações de humor ou ansiedade",
        "Mudanças no funcionamento intestinal ou no metabolismo",
      ]}
      careTitle="Como acontece a avaliação"
      careItems={[
        "Investigação clínica e hormonal",
        "Leitura criteriosa de exames laboratoriais",
        "Acompanhamento de sintomas e evolução",
        "Conduta individualizada conforme o quadro",
        "Foco em equilíbrio e melhora da qualidade de vida",
      ]}
      ctaTitle="Entenda melhor os sinais do seu corpo com avaliação especializada"
      ctaText="Com um acompanhamento adequado, é possível diagnosticar alterações da tireoide e conduzir o tratamento com mais precisão e segurança."
    />
  );
}