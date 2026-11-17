"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Planurile sunt personalizate?",
    answer:
      "Da. Planul este adaptat obiectivelor, nivelului de pregătire și stilului tău de viață.",
  },
  {
    question: "Pot schimba programul pe parcurs?",
    answer:
      "Da. În funcție de evoluția ta și de obiective, planul poate fi ajustat pe parcurs.",
  },
  {
    question: "Cât durează până apar rezultatele?",
    answer:
      "Rezultatele diferă de la o persoană la alta. Consecvența, alimentația și antrenamentul au un rol important.",
  },
];

export default function FAQSection() {
  const [activeFaq, setActiveFaq] = useState(null);

  return (
    <section className="bg-[#171514] px-[6%] py-14 md:px-[7%] md:py-20">
      <div className="mx-auto grid max-w-[1120px] grid-cols-1 gap-8 xl:grid-cols-[0.85fr_1.4fr] xl:gap-12">
        <div className="border-b border-white/25 pb-7 xl:border-b-0 xl:border-r xl:pb-0 xl:pr-10">
          <div className="mb-5 flex items-center gap-4">
            <span className="text-[10px] font-semibold tracking-[2.5px] text-white/70">
              ÎNTREBĂRI FRECVENTE
            </span>

            <span className="h-px w-12 bg-white/30" />
          </div>

          <h2 className="font-heading text-[clamp(30px,4.5vw,43px)] font-bold leading-[1.12] text-white">
            Ai nelămuriri?
            <br />
            Iată <span className="text-[#F5B6C6]">răspunsurile.</span>
          </h2>
        </div>

        <div>
          {faqs.map((faq, index) => {
            const isOpen = activeFaq === index;

            return (
              <div key={faq.question} className="border-b border-white/25">
                <h3>
                  <button
                    type="button"
                    id={`faq-button-${index}`}
                    onClick={() => setActiveFaq(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${index}`}
                    className="flex min-h-[56px] w-full items-center justify-between gap-5 py-4 text-left text-[15px] font-medium text-white outline-none transition-colors duration-300 hover:text-[#F5B6C6] focus-visible:text-[#F5B6C6] focus-visible:underline"
                  >
                    <span className="min-w-0">{faq.question}</span>

                    <span
                      aria-hidden="true"
                      className="flex h-8 w-8 shrink-0 items-center justify-center text-[25px] font-light text-[#F5B6C6]"
                    >
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                </h3>

                <div
                  id={`faq-panel-${index}`}
                  role="region"
                  aria-labelledby={`faq-button-${index}`}
                  className={`grid transition-all duration-300 motion-reduce:transition-none ${
                    isOpen
                      ? "grid-rows-[1fr] pb-5 opacity-100"
                      : "grid-rows-[0fr] pb-0 opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-[600px] text-[14px] leading-[1.7] text-white/70 md:text-[13px] md:text-white/65">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
