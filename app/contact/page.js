export default function ContactPage() {
  const contactReasons = [
    {
      title: "Informații despre programe",
      description:
        "Află care program ți se potrivește, în funcție de obiectivele tale.",
    },
    {
      title: "Suport și recomandări",
      description:
        "Primești răspunsuri clare și sfaturi adaptate nivelului tău.",
    },
    {
      title: "Adaptări personalizate",
      description:
        "Te ajutăm să faci alegerea potrivită pentru stilul tău de viață.",
    },
  ];

  return (
    <main className="w-full overflow-hidden bg-[#f3e5d9] text-[#171514]">
      {/* HERO */}
      <section
        className="relative flex min-h-[835px] items-center bg-cover bg-center bg-no-repeat max-md:min-h-[850px] max-md:items-start"
        style={{
          backgroundImage: `
            linear-gradient(
              90deg,
              rgba(23,21,20,0.78) 0%,
              rgba(23,21,20,0.48) 36%,
              rgba(23,21,20,0.08) 75%,
              rgba(23,21,20,0.05) 100%
            ),
            url('/hero-contact.png')
          `,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />

        <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-col justify-center px-[7.4%] pb-[170px] pt-24 max-md:justify-start max-md:px-6 max-md:pb-[270px] max-md:pt-24">
          {/* Label */}
          <div className="mb-7 flex items-center gap-5">
            <span className="text-[12px] font-bold tracking-[0.28em] text-[#f3e5d9]">
              CONTACT
            </span>
            <span className="h-px w-32 bg-white/35" />
          </div>

          {/* Heading */}
          <h1 className="max-w-[550px] text-[clamp(52px,6vw,82px)] font-bold leading-[0.99] tracking-[-0.055em] text-[#f3e5d9] max-md:text-[54px]">
            Intră în
            <br />
            legătură
            <br />
            <span className="text-[#ea91a5]">cu noi.</span>
          </h1>

          {/* Description */}
          <p className="mt-7 max-w-[460px] text-[17px] leading-[1.65] text-[#f3e5d9]/85 max-md:max-w-[340px] max-md:text-[15px]">
            Ai întrebări despre programe, alimentație sau antrenament? Suntem
            aici să te ajutăm să alegi cea mai bună variantă pentru tine.
          </p>
        </div>

        {/* CONTACT GLASS - DARK FROSTED GLASS */}

        {/* CONTACT GLASS - DARK FROSTED GLASS */}
        <div className="absolute bottom-[50px] left-1/2 z-20 w-[calc(100%-100px)] max-w-[1340px] -translate-x-1/2 rounded-[25px] border border-white/30 bg-[#101010]/35 px-8 py-9 shadow-[0_12px_45px_rgba(0,0,0,0.22),inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-2xl backdrop-saturate-50 max-md:bottom-7 max-md:w-[calc(100%-32px)] max-md:px-6 max-md:py-6">
          <div className="grid grid-cols-[1.15fr_1fr_0.85fr] divide-x divide-white/20 max-md:grid-cols-1 max-md:grid-cols-1 max-md:divide-x-0 max-md:divide-y">
            {/* E-mail */}
            <a
              href="mailto:contact@buildstrong.ro"
              className="flex min-w-0 flex-col gap-3 pr-5 lg:pr-8 max-md:py-4 max-md:first:pt-0"
            >
              <span className="text-[10px] font-bold tracking-[0.25em] text-white/75">
                E-MAIL
              </span>
              <span className="whitespace-nowrap text-[18px] font-bold text-[#f3e5d9]">
                contact@buildstrong.ro
              </span>
            </a>

            {/* Telefon */}
            <a
              href="tel:+40723456789"
              className="flex min-w-0 flex-col gap-3 px-5 lg:px-8 max-md:px-0 max-md:py-4"
            >
              <span className="text-[10px] font-bold tracking-[0.25em] text-white/75">
                TELEFON
              </span>
              <span className="whitespace-nowrap text-[18px] font-bold text-[#f3e5d9]">
                +40 723 456 789
              </span>
            </a>

            {/* Program */}
            <div className="flex min-w-0 flex-col gap-3 pl-5 lg:pl-8 max-md:py-4 max-md:pl-0 max-md:pb-0">
              <span className="text-[10px] font-bold tracking-[0.25em] text-white/75">
                PROGRAM
              </span>
              <span className="text-[18px] font-bold leading-[1.35] text-[#f3e5d9]">
                Luni – Vineri
                <br />
                09:00 – 18:00
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CONTACT US */}
      <section className="bg-[#f3e5d9] px-[5.3%] py-[85px] max-md:px-6 max-md:py-14">
        <div className="mx-auto grid max-w-[1440px] grid-cols-[1.2fr_1fr_1fr_1fr] items-start max-md:grid-cols-1">
          {/* Section title */}
          <div className="pr-8 max-md:mb-8">
            <h2 className="text-[36px] font-bold leading-[1.08] tracking-[-0.055em] max-md:text-[32px]">
              De ce să
              <br />
              <span className="text-[#bd6878]">ne contactezi?</span>
            </h2>
          </div>

          {/* Reasons */}
          {contactReasons.map((reason) => (
            <div
              key={reason.title}
              className="flex h-full flex-col justify-start border-l border-[#171514]/20 px-8 max-md:border-l-0 max-md:border-t max-md:px-0 max-md:py-6"
            >
              <h3 className="mb-5 text-[17px] font-bold leading-tight tracking-tight">
                {reason.title}
              </h3>

              <p className="max-w-[240px] text-[14px] leading-[1.65] text-[#171514]/85">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative isolate overflow-hidden bg-[#080808] px-[7%] py-[115px] text-[#f3e5d9] max-md:px-6 max-md:py-20">
        {/* Background atmosphere */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_75%_50%,rgba(234,145,165,0.07),transparent_55%),linear-gradient(110deg,#080808_0%,#111111_55%,#080808_100%)]" />

        <div className="absolute right-[-100px] top-[-180px] -z-10 h-[500px] w-[500px] rounded-full bg-[#ea91a5]/[0.04] blur-[100px]" />

        <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-12 max-md:flex-col max-md:items-start">
          {/* CTA text */}
          <div className="max-w-[570px]">
            <div className="mb-7 flex items-center gap-5">
              <span className="text-[11px] font-bold tracking-[0.25em] text-[#f3e5d9]/80">
                ÎNCĂ AI NELĂMURIRI?
              </span>
              <span className="h-px w-20 bg-[#f3e5d9]/35" />
            </div>

            <h2 className="text-[clamp(40px,5vw,56px)] font-bold leading-[1.08] tracking-[-0.05em]">
              Scrie-ne sau
              <br />
              <span className="text-[#ea91a5]">sună-ne direct.</span>
            </h2>

            <p className="mt-7 max-w-[390px] text-[16px] leading-[1.7] text-[#f3e5d9]/80">
              Îți răspundem în cel mai scurt timp și te ghidăm pas cu pas.
            </p>
          </div>

          {/* CTA actions */}
          <div className="flex flex-col gap-4 max-md:w-full">
            <a
              href="mailto:contact@buildstrong.ro?subject=Solicitare%20informatii%20Build%20Strong"
              className="group flex min-w-[260px] items-center justify-between gap-8 rounded-full border border-[#f3e5d9]/35 px-7 py-5 transition-all duration-300 hover:border-[#ea91a5] hover:bg-[#ea91a5]/10"
            >
              <span className="text-[14px] font-semibold">
                Trimite un e-mail
              </span>

              <span className="text-xl text-[#ea91a5] transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>

            <a
              href="tel:+40723456789"
              className="group flex min-w-[260px] items-center justify-between gap-8 rounded-full bg-[#ea91a5] px-7 py-5 text-[#171514] transition-all duration-300 hover:bg-[#f3b6c5]"
            >
              <span className="text-[14px] font-bold">Sună-ne acum</span>

              <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
