const programFeatures = [
  {
    number: "01",
    title: "Plan alimentar",
    highlight: "personalizat",
    tags: "ECHILIBRU  ·  FLEXIBILITATE  ·  REȚETE SIMPLE",
    paragraphs: [
      "Adaptat preferințelor tale alimentare, stilului de viață și obiectivelor tale. Ținem cont de eventualele intoleranțe, alergii sau probleme medicale, astfel încât planul să fie sigur, echilibrat și ușor de urmat.",
      "Vei primi recomandări alimentare variate, rețete simple și gustoase, pe care le poți integra ușor în rutina ta, fără restricții extreme.",
    ],
  },
  {
    number: "02",
    title: "Plan de antrenament",
    highlight: "adaptat nivelului tău",
    tags: "RUTINĂ CLARĂ  ·  EXERCIȚII EXPLICATE  ·  REZULTATE VIZIBILE",
    paragraphs: [
      "Ai acces la antrenamente structurate, adaptate nivelului tău – de la începător la avansat. Fiecare exercițiu are explicații clare, astfel încât să știi exact cum să îl execuți corect și în siguranță.",
      "Programul include sesiuni pentru acasă sau sală, cu durate flexibile, pe care le poți urma în ritmul tău.",
    ],
  },
  {
    number: "03",
    title: "Monitorizare",
    highlight: "și adaptarea planului",
    tags: "PROGRES  ·  AJUSTĂRI  ·  SUSȚINERE CONTINUĂ",
    paragraphs: [
      "Îți urmărim progresul prin monitorizare săptămânală (foto, măsurători, feedback), astfel încât să vedem ce funcționează și unde putem face ajustări.",
      "Planul este adaptat în funcție de evoluția ta, de cum te simți și de schimbările din viața ta, pentru ca tu să rămâi motivată și să obții rezultate pe termen lung.",
    ],
  },
];

export default function ProgramFeaturesSection() {
  return (
    <section className="bg-[#1B1918] py-24 text-[#F3E5D9] md:py-28">
      <div className="mx-auto w-[86%] max-w-[1400px]">
        <div className="grid grid-cols-1 gap-8 border-b border-[#F3E5D9]/20 pb-14 md:grid-cols-[1.1fr_1fr] md:items-center">
          <div>
            <div className="mb-8 flex items-center gap-5">
              <span className="text-[11px] font-bold tracking-[2.5px] text-[#D7BEB1]">
                PROGRAMUL BUILD STRONG
              </span>
              <span className="h-px w-24 bg-[#D7BEB1]/40" />
            </div>

            <h2 className="font-heading text-[clamp(40px,5vw,66px)] font-bold leading-[1.12] tracking-[-0.045em] text-white">
              Ce include
              <br />
              <span className="text-[#F0A8B8]">programul?</span>
            </h2>
          </div>

          <div className="md:border-l md:border-[#F3E5D9]/25 md:pl-10">
            <p className="max-w-[480px] text-[15px] leading-[1.9] text-[#D8D0CA] md:text-[17px]">
              Tot ce ai nevoie pentru a face progrese reale, într-un singur
              program, bine structurat și ușor de urmat.
            </p>
          </div>
        </div>

        <div>
          {programFeatures.map((feature) => (
            <article
              key={feature.number}
              className="grid grid-cols-1 gap-7 border-b border-[#F3E5D9]/20 py-12 md:grid-cols-[100px_1fr_1.2fr] md:gap-8 md:py-14"
            >
              <div className="font-heading text-[64px] font-light leading-none tracking-[-0.06em] text-[#887E79] md:text-[78px]">
                {feature.number}
              </div>

              <div>
                <h3 className="font-heading text-[25px] font-bold leading-[1.15] tracking-[-0.04em] text-white md:text-[29px]">
                  {feature.title}
                  <br />
                  <span className="text-[#F0A8B8]">{feature.highlight}</span>
                </h3>

                <p className="mt-5 text-[9px] font-bold tracking-[1.5px] text-[#C6B8B1] md:text-[10px]">
                  {feature.tags}
                </p>
              </div>

              <div className="space-y-5 text-[14px] leading-[1.85] text-[#D1C8C2] md:border-l md:border-[#F3E5D9]/25 md:pl-8 md:text-[15px]">
                {feature.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
