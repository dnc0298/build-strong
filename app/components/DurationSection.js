import Image from "next/image";

export default function DurationSection() {
  return (
    <section className="relative isolate flex min-h-[590px] items-center overflow-hidden bg-[#F3E5D9] py-24 md:py-28">
      <Image
        src="/slide2.png"
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-[#F3E5D9]/20" />

      <div className="relative z-10 mx-auto grid w-[84%] max-w-[1400px] grid-cols-1 gap-12 md:grid-cols-[1.65fr_0.8fr] md:gap-16">
        <div>
          <div className="mb-8 flex items-center gap-5">
            <span className="text-[11px] font-bold tracking-[2.5px] text-[#38312E]">
              DURATA PROGRAMULUI
            </span>

            <span className="h-px w-32 bg-[#38312E]/40" />
          </div>

          <h2 className="font-heading text-[clamp(40px,5vw,68px)] font-bold leading-[1.12] tracking-[-0.045em] text-[#201C1A]">
            Cât durează
            <br />
            <span className="text-[#D98798]">programul?</span>
          </h2>

          <div className="mt-7 max-w-[670px] space-y-5 text-[16px] leading-[1.8] text-[#38312E] md:text-[18px]">
            <p>
              Programul Build Strong are o durată de 12 săptămâni, perioadă în
              care lucrăm împreună pas cu pas pentru a construi obiceiuri
              sănătoase și a obține rezultate vizibile și sustenabile.
            </p>

            <p>
              Această durată este ideală pentru a vedea schimbări reale în
              forță, mobilitate, compoziția corporală și în modul în care te
              simți zi de zi.
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center md:border-l md:border-[#38312E]/40 md:pl-16">
          <span className="font-heading text-[clamp(100px,13vw,145px)] font-light leading-[0.9] tracking-[-0.06em] text-[#D98798]">
            12
          </span>

          <span className="mt-4 text-[clamp(17px,2vw,25px)] font-medium tracking-[0.4em] text-[#38312E]">
            SĂPTĂMÂNI
          </span>

          <p className="mt-8 max-w-[330px] text-[16px] leading-[1.8] text-[#38312E] md:text-[18px]">
            Un timp suficient pentru a-ți crea o rutină, a învăța, a progresa și
            a simți diferența în viața ta.
          </p>
        </div>
      </div>
    </section>
  );
}
