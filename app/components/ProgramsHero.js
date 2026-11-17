import Image from "next/image";
import CustomButton from "./CustomButton";

export default function ProgramsHero() {
  return (
    <section className="relative flex min-h-[600px] items-center overflow-hidden bg-[#171514] md:min-h-[640px] lg:min-h-[680px]">
      <Image
        src="/hero-2.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-[65%_center] md:object-center"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#171514]/95 via-[#171514]/80 to-[#171514]/40 md:via-[#171514]/65 md:to-[#171514]/10" />

      <div className="absolute inset-0 bg-gradient-to-t from-[#171514]/65 via-transparent to-[#171514]/20" />

      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-[6%] pb-16 pt-32 md:px-[7%] md:pb-20 md:pt-36">
        <div className="max-w-[610px]">
          <div className="mb-5 flex items-center gap-4">
            <span className="text-[10px] font-semibold tracking-[2px] text-[#F3E5D9]/80 sm:tracking-[3px]">
              PROGRAMUL BUILD STRONG
            </span>

            <span className="h-px w-10 bg-[#EA91A5]/70 sm:w-14" />
          </div>

          <h1 className="text-balance font-heading text-[clamp(34px,6vw,68px)] font-bold leading-[1.06] tracking-[-1px] text-white sm:tracking-[-2px]">
            Alege programul
            <br className="hidden min-[420px]:block" /> potrivit{" "}
            <span className="text-[#F5B6C6]">pentru tine.</span>
          </h1>

          <p className="mt-6 max-w-[440px] text-[15px] leading-[1.7] text-white/80 md:text-white/75">
            Trei variante create pentru obiective diferite, același rezultat: o
            versiune mai puternică a ta.
          </p>

          <CustomButton className="mt-8">Începe transformarea</CustomButton>
        </div>
      </div>
    </section>
  );
}
