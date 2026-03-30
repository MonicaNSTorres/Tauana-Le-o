import { SpecialtyPage } from "@/components/site/specialty-page";

export default function MenopausaHormôniosPage() {
  return (
    <SpecialtyPage
      eyebrow="Especialidade"
      title="Tratamento da menopausa e acompanhamento hormonal feminino"
      description="A menopausa é uma fase de transição importante, que pode trazer sintomas físicos e emocionais e impactar a qualidade de vida, o metabolismo e o bem-estar da mulher."
      intro="O acompanhamento endocrinológico pode ajudar na avaliação hormonal, na investigação de sintomas e na definição de condutas individualizadas, sempre com foco em segurança, equilíbrio e qualidade de vida."
      symptomsTitle="Quando vale investigar"
      symptoms={[
        "Ondas de calor e suores noturnos",
        "Alterações de humor e irritabilidade",
        "Insônia ou sono não reparador",
        "Ganho de peso e mudanças no metabolismo",
        "Irregularidade menstrual ou sintomas persistentes da menopausa",
      ]}
      careTitle="Como o cuidado pode ajudar"
      careItems={[
        "Avaliação dos sintomas e da história clínica",
        "Investigação hormonal individualizada",
        "Análise de exames e contexto de vida da paciente",
        "Definição de condutas seguras para cada fase",
        "Foco em bem-estar, metabolismo e saúde de longo prazo",
      ]}
      ctaTitle="Busque um acompanhamento mais claro e individualizado nessa fase"
      ctaText="Uma avaliação bem conduzida ajuda a entender melhor os sintomas e a construir um cuidado mais seguro, acolhedor e alinhado às necessidades de cada paciente."
    />
  );
}