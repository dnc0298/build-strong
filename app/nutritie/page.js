import Image from "next/image";
import CustomButton from "../components/CustomButton";
import RecipesCatalog from "../components/RecipesCatalog";

export default function RecipesPage() {
  return (
    <main className="w-full overflow-x-clip bg-[#171514] text-[#F3E5D9]">
      {/* HERO SECTION */}

      <section className="relative isolate flex min-h-[390px] items-center overflow-hidden bg-[#171514] md:min-h-[420px] lg:min-h-[430px]">
        <Image
          src="/HERO-RECEIPE.png"
          alt="Bol cu ovăz, banane și fructe de pădure"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[38%_center] md:object-center"
        />

        {/* OVERLAY DESKTOP */}
        <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-r from-transparent via-[#171514]/45 to-[#171514]/95 max-md:hidden" />

        <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-[#171514]/40 to-transparent max-md:hidden" />

        {/* OVERLAY MOBILE - ACOPERĂ TOATĂ IMAGINEA */}
        <div className="pointer-events-none absolute inset-0 z-[1] hidden max-md:block bg-[linear-gradient(180deg,rgba(23,21,20,0.25)_0%,rgba(23,21,20,0.30)_1%,rgba(23,21,20,0.75)_100%)]" />

        {/* CONTENT */}
        <div className="relative z-10 mx-auto flex w-full max-w-[1440px] justify-end px-[6%] py-28 md:px-[7%] lg:py-32">
          <div className="w-full max-w-[520px]">
            <div className="mb-5 flex items-center gap-4">
              <span className="text-[10px] font-semibold tracking-[3px] text-white/85">
                REȚETE SĂNĂTOASE
              </span>

              <span className="h-px w-14 bg-white/50" />
            </div>

            <h1 className="font-heading text-[clamp(34px,5vw,58px)] font-bold leading-[1.08] tracking-[-1.5px] text-[#F3E5D9]">
              Rețete sănătoase
              <br />
              și <span className="text-[#F5B6C6]">echilibrate.</span>
            </h1>

            <p className="mt-5 max-w-[420px] text-[14px] leading-[1.7] text-white/80 md:text-[15px]">
              Idei simple, gustoase și nutritive, potrivite pentru obiectivele
              tale: energie, performanță și o formă fizică mai bună.
            </p>
          </div>
        </div>
      </section>

      {/* INTERACTIVE RECIPES CATALOG */}
      <RecipesCatalog />

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-[#171514] px-[6%] py-16 md:px-[7%] md:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 -top-32 h-[450px] w-[450px] rounded-full bg-[#EA91A5]/[0.07] blur-[100px]"
        />

        <div className="relative z-10 mx-auto flex max-w-[1440px] flex-col items-start gap-8">
          <div className="max-w-[650px]">
            <div className="mb-5 flex items-center gap-4">
              <span className="text-[10px] font-semibold tracking-[2.5px] text-white/65">
                PLANIFICARE ALIMENTARĂ
              </span>

              <span className="h-px w-12 bg-white/35" />
            </div>

            <h2 className="font-heading text-[clamp(30px,4.5vw,48px)] font-bold leading-[1.12] tracking-[-1px] text-[#F3E5D9]">
              Vrei un plan alimentar{" "}
              <span className="text-[#F5B6C6]">complet?</span>
            </h2>

            <p className="mt-5 max-w-[520px] text-[14px] leading-[1.75] text-white/70">
              Descoperă programele Build Strong, care includ planuri alimentare
              personalizate, adaptate obiectivelor, preferințelor și stilului
              tău de viață.
            </p>
          </div>

          <div className="shrink-0">
            <CustomButton href="/programe">Vezi programele</CustomButton>
          </div>
        </div>
      </section>
    </main>
  );
}
