const steps = [
  {
    number: "01",
    title: "Alegi programul potrivit",
    description: "În funcție de obiectivele tale și stilul de viață.",
  },
  {
    number: "02",
    title: "Primești planul personalizat",
    description: "Nutriție, antrenament și recomandări clare.",
  },
  {
    number: "03",
    title: "Începi și progresezi",
    description:
      "Aplici planul, monitorizăm rezultatele și facem ajustări atunci când e nevoie.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-[#F3E5D9] px-[6%] py-12 text-[#171514] md:px-[7%] md:py-16">
      <div className="mx-auto grid max-w-[1120px] grid-cols-1 gap-8 lg:grid-cols-[1.1fr_3fr] lg:gap-10">
        <div>
          <div className="mb-5 flex items-center gap-4">
            <span className="text-[10px] font-bold tracking-[2.5px] text-[#171514]/70">
              CUM FUNCȚIONEAZĂ
            </span>

            <span className="h-px w-12 bg-[#171514]/30" />
          </div>

          <h2 className="font-heading text-[clamp(28px,5vw,48px)] font-bold leading-[1.08] tracking-[-1px] sm:tracking-[-1.5px]">
            În <span className="text-[#D77D8D]">3 pași</span>{" "}
            <br className="hidden lg:block" />
            simpli.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`py-5 sm:px-5 sm:py-0 lg:px-6 sm:first:pl-0 ${
                index !== 0
                  ? "border-t border-[#171514]/20 sm:border-l sm:border-t-0"
                  : "pt-0 sm:pt-0"
              }`}
            >
              <span className="font-heading text-[39px] font-light leading-none text-[#D77D8D]">
                {step.number}
              </span>

              <h3 className="mt-3 font-heading text-[17px] font-bold leading-tight">
                {step.title}
              </h3>

              <p className="mt-3 text-[14px] leading-[1.65] text-[#171514]/75 sm:mt-4 sm:text-[13px]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
