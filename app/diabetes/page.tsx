import { SpecialtyPage } from "@/components/site/specialty-page";

export default function DiabetesPage() {
  return (
    <SpecialtyPage
      eyebrow="Especialidade"
      title="Acompanhamento endocrinológico para diabetes e controle glicêmico"
      description="O diabetes exige acompanhamento contínuo e individualizado, com atenção aos exames, sintomas, rotina, alimentação e prevenção de complicações."
      intro="A endocrinologia atua no diagnóstico, monitoramento e manejo clínico do diabetes, buscando mais equilíbrio metabólico, segurança e qualidade de vida para cada paciente."
      symptomsTitle="Sinais que merecem atenção"
      symptoms={[
        "Alterações na glicemia em exames",
        "Sede excessiva e urina em maior volume",
        "Cansaço frequente e perda de energia",
        "Histórico familiar de diabetes",
        "Resistência à insulina ou síndrome metabólica",
      ]}
      careTitle="O que é avaliado no acompanhamento"
      careItems={[
        "Histórico clínico, sintomas e exames laboratoriais",
        "Controle glicêmico e metas individualizadas",
        "Prevenção de complicações metabólicas",
        "Ajustes com foco em rotina e adesão ao tratamento",
        "Acompanhamento contínuo com visão de longo prazo",
      ]}
      ctaTitle="Tenha mais segurança no cuidado com a sua saúde metabólica"
      ctaText="O acompanhamento correto ajuda a entender o quadro com mais clareza e a construir uma rotina de cuidado mais segura e sustentável."
    />
  );
}