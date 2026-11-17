import Image from "next/image";

export default function WelcomeSection() {
  return (
    <section className="relative isolate flex min-h-[580px] items-center overflow-hidden bg-[#E9D9CB] py-24 md:py-28">
      <Image
        src="/slide1.png"
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-[#F3E5D9]/15" />

      <div className="relative z-10 mx-auto grid w-[86%] max-w-[1400px] grid-cols-1 gap-12 md:grid-cols-[1.65fr_0.85fr] md:gap-16">
        <div>
          <div className="mb-8 flex items-center gap-5">
            <span className="text-[11px] font-bold tracking-[2.5px] text-[#38312E]">
              BUILD STRONG
            </span>

            <span className="h-px w-32 bg-[#38312E]/40" />
          </div>

          <h2 className="font-heading text-[clamp(38px,5vw,68px)] font-bold leading-[1.12] tracking-[-0.045em] text-[#201C1A]">
            Bine ai venit
            <br />
            în programul
            <br />
            <span className="text-[#D98798]">Build Strong.</span>
          </h2>

          <div className="mt-7 max-w-[700px] space-y-4 text-[15px] leading-[1.8] text-[#38312E] md:text-[17px]">
            <p>
              Un program complet, creat pentru femei care își doresc să se simtă
              mai puternice, mai sănătoase și mai încrezătoare în propria piele.
            </p>

            <p>
              Aici găsești un plan clar, structurat și realist, care te ajută să
              îți construiești obiceiuri sănătoase și să obții rezultate de
              durată.
            </p>
          </div>
        </div>

        <div className="flex items-center md:border-l md:border-[#38312E]/35 md:pl-12">
          <div className="max-w-[370px]">
            <h3 className="font-heading text-[23px] font-bold leading-snug tracking-[-0.03em] text-[#201C1A] md:text-[25px]">
              Mai mult decât
              <br />
              un program de fitness.
            </h3>

            <p className="mt-6 text-[15px] leading-[1.8] text-[#38312E] md:text-[17px]">
              Este un spațiu în care înveți să ai grijă de tine, să fii
              consecventă și să progresezi în ritmul tău, cu susținere și
              ghidare pas cu pas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
