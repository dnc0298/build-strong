import CustomButton from "./CustomButton";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-[#241D1B] px-[6%] py-16 md:px-[7%] md:py-24">
      <div className="absolute inset-0 bg-gradient-to-r from-[#171514] via-[#171514]/90 to-[#171514]/45" />

      <div className="absolute right-0 top-0 h-full w-full bg-[radial-gradient(ellipse_at_center,rgba(234,145,165,0.13),transparent_65%)] md:w-[55%]" />

      <div className="relative z-10 mx-auto max-w-[1120px]">
        <div className="max-w-[570px]">
          <h2 className="text-balance font-heading text-[clamp(32px,5.5vw,52px)] font-bold leading-[1.1] tracking-[-1px] text-white sm:tracking-[-1.5px]">
            Ești gata să <span className="text-[#F5B6C6]">începi?</span>
          </h2>

          <p className="mt-5 max-w-[420px] text-[14px] leading-[1.7] text-white/80 md:text-white/75">
            Alege programul potrivit, fă primul pas și construiește o versiune
            mai puternică a ta.
          </p>

          <CustomButton className="mt-7" href="/contact">
            Începe transformarea
          </CustomButton>
        </div>
      </div>
    </section>
  );
}
