import Link from "next/link";

const plans = [
  {
    name: "START",
    description: "Baza de care ai nevoie pentru a începe corect.",
    price: "249",
    features: [
      "Plan de nutriție personalizat",
      "Plan de antrenament adaptat",
      "Monitorizare săptămânală",
    ],
    featured: false,
  },
  {
    name: "PROGRES",
    description: "Susținere constantă și ajustări pentru rezultate vizibile.",
    price: "399",
    features: [
      "Plan de nutriție personalizat",
      "Plan de antrenament adaptat",
      "Ajustări ale planului",
      "Suport direct",
    ],
    featured: true,
  },
  {
    name: "PREMIUM",
    description: "Cel mai complet program, cu ghidare și suport avansat.",
    price: "599",
    features: [
      "Tot ce include Progres",
      "Monitorizare prioritară",
      "Suport direct (WhatsApp / e-mail)",
    ],
    featured: false,
  },
];

function CheckIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      className="mt-[2px] h-[17px] w-[17px] shrink-0 text-[#F5B6C6]"
    >
      <path
        d="M4 10.5L8 14L16 6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function PricingSection() {
  return (
    <section
      id="programe"
      className="relative scroll-mt-20 bg-[#171514] px-[6%] py-14 md:px-[7%] md:py-20"
    >
      <div className="mx-auto grid max-w-[520px] grid-cols-1 items-stretch gap-6 lg:max-w-[1120px] lg:grid-cols-3 lg:gap-5 xl:gap-6">
        {plans.map((plan) => (
          <article
            key={plan.name}
            className={`relative flex min-w-0 flex-col rounded-[22px] border bg-soft-black/55 p-6 shadow-[0_8px_35px_rgba(0,0,0,0.18)] transition-all duration-300 motion-reduce:transition-none sm:p-7 lg:p-6 xl:p-7 [@media(hover:hover)]:hover:-translate-y-1 [@media(hover:hover)]:hover:bg-soft-black/75 md:backdrop-blur-md ${
              plan.featured
                ? "border-[#EA91A5] shadow-[0_0_25px_rgba(234,145,165,0.10)]"
                : "border-white/30"
            }`}
          >
            {plan.featured && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-[#EA91A5]/60 bg-[#171514] px-4 py-1 text-[9px] font-semibold tracking-[1.5px] text-[#F5B6C6]">
                CEL MAI ALES
              </span>
            )}

            <h2 className="font-heading text-[25px] font-bold text-white">
              {plan.name}
            </h2>

            <p className="mt-2 text-[14px] leading-[1.6] text-white/70 lg:min-h-[67px] lg:text-[13px]">
              {plan.description}
            </p>

            <div className="mt-4">
              <span className="font-heading text-[clamp(34px,9vw,39px)] font-bold leading-none text-[#F5B6C6]">
                {plan.price} lei
              </span>

              <p className="mt-2 text-[13px] text-white/70">/ 12 săptămâni</p>
            </div>

            <div className="my-5 h-px w-full bg-white/25" />

            <ul className="flex flex-1 flex-col gap-3">
              {plan.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-3 text-[13px] leading-[1.5] text-white/85"
                >
                  <CheckIcon />
                  <span className="min-w-0 break-words">{feature}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/contact"
              className={`mt-8 flex h-12 w-full items-center justify-center rounded-full border text-[13px] font-semibold outline-none transition-all duration-300 focus-visible:ring-2 focus-visible:ring-[#F5B6C6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#171514] motion-reduce:transition-none lg:h-[43px] lg:text-[12px] ${
                plan.featured
                  ? "border-[#EA91A5] bg-[#EA91A5] text-[#171514] hover:bg-[#F5B6C6]"
                  : "border-white/60 bg-white/[0.03] text-white hover:border-[#EA91A5] hover:bg-[#EA91A5]/15 hover:text-[#F5B6C6]"
              }`}
            >
              Alege {plan.name}
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
