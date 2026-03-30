import { SpecialtyPage } from "@/components/site/specialty-page";

export default function SindromeOvariosPolicisticosPage() {
  return (
    <SpecialtyPage
      eyebrow="Especialidade"
      title="Tratamento da síndrome dos ovários policísticos com acompanhamento endocrinológico"
      description="A síndrome dos ovários policísticos pode impactar o ciclo menstrual, os hormônios, o metabolismo e a qualidade de vida, exigindo uma avaliação cuidadosa e individualizada."
      intro="O acompanhamento endocrinológico ajuda a investigar alterações hormonais e metabólicas associadas à SOP, buscando mais equilíbrio, clareza diagnóstica e estratégias adequadas para cada paciente."
      symptomsTitle="Quando vale investigar"
      symptoms={[
        "Irregularidade menstrual",
        "Aumento de pelos ou acne persistente",
        "Dificuldade para emagrecer",
        "Sinais de resistência à insulina",
        "Alterações hormonais associadas à SOP",
      ]}
      careTitle="Como o cuidado pode ajudar"
      careItems={[
        "Avaliação clínica e hormonal individualizada",
        "Investigação de alterações metabólicas associadas",
        "Análise de exames e sintomas da paciente",
        "Estratégias para equilíbrio hormonal e metabólico",
        "Foco em saúde, bem-estar e acompanhamento contínuo",
      ]}
      ctaTitle="Entenda melhor os sinais do seu corpo com avaliação especializada"
      ctaText="Um acompanhamento adequado ajuda a conduzir a síndrome dos ovários policísticos com mais segurança, clareza e atenção ao contexto de cada paciente."
    />
  );
}