import { SpecialtyPage } from "@/components/site/specialty-page";

export default function PosBariatricaPage() {
  return (
    <SpecialtyPage
      eyebrow="Especialidade"
      title="Acompanhamento endocrinológico no pós-operatório de cirurgia bariátrica"
      description="O pós-operatório da cirurgia bariátrica exige acompanhamento cuidadoso para avaliar metabolismo, exames, adaptação clínica e manutenção da saúde ao longo do tempo."
      intro="O acompanhamento endocrinológico pode auxiliar na interpretação de exames, na investigação de sintomas e na condução clínica após a bariátrica, sempre com foco em segurança, equilíbrio metabólico e bem-estar."
      symptomsTitle="Quando vale investigar"
      symptoms={[
        "Alterações em exames após a cirurgia",
        "Cansaço e baixa disposição no pós-operatório",
        "Dúvidas sobre metabolismo e adaptação clínica",
        "Oscilações de peso ou composição corporal",
        "Necessidade de acompanhamento metabólico contínuo",
      ]}
      careTitle="Como o cuidado pode ajudar"
      careItems={[
        "Avaliação clínica do pós-operatório",
        "Interpretação de exames e evolução metabólica",
        "Acompanhamento individualizado conforme a fase do paciente",
        "Atenção à saúde global e ao bem-estar no longo prazo",
        "Foco em segurança e continuidade do cuidado",
      ]}
      ctaTitle="Tenha um acompanhamento cuidadoso também no pós-operatório"
      ctaText="Uma avaliação bem conduzida ajuda a acompanhar a evolução clínica, compreender alterações metabólicas e promover mais segurança nessa etapa do cuidado."
    />
  );
}