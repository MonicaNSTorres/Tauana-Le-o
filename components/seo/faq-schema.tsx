export function FAQSchema() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Quando devo procurar um endocrinologista?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A consulta com endocrinologista é indicada quando existem alterações hormonais, dificuldade para emagrecer, sintomas relacionados à tireoide ou alterações metabólicas.",
        },
      },
      {
        "@type": "Question",
        name: "Endocrinologista ajuda no emagrecimento?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sim. O endocrinologista avalia fatores hormonais e metabólicos que podem influenciar o peso corporal.",
        },
      },
      {
        "@type": "Question",
        name: "Quais doenças o endocrinologista trata?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Entre as principais estão obesidade, diabetes, doenças da tireoide, síndrome metabólica e alterações hormonais.",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}