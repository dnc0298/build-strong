import Image from "next/image";
import Link from "next/link";
import HeroHeading from "./HeroHeading";

export default function HeroSection() {
  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-[#171514]">
      {/* BACKGROUND IMAGE */}
      <Image
        src="/heroimage.png"
        alt="Build Strong Fitness"
        fill
        priority
        sizes="100vw"
        className="
          object-cover object-center
          max-md:object-[34%_center]
          md:max-lg:object-[30%_center]
          [@media(orientation:portrait)]:md:max-lg:object-[60%_center]
          [@media(min-width:700px)_and_(max-width:1500px)_and_(any-pointer:coarse)]:!object-[45%_center]
          [@media(min-width:900px)_and_(max-width:1500px)_and_(orientation:landscape)_and_(any-pointer:coarse)]:!object-[48%_center]
        "
      />

      {/* DESKTOP OVERLAYS */}
      <div className="absolute inset-0 hidden bg-black/15 lg:block [@media(min-width:700px)_and_(max-width:1500px)_and_(any-pointer:coarse)]:!hidden" />

      <div className="absolute inset-y-0 right-0 hidden w-[62%] bg-gradient-to-l from-black/55 via-black/30 to-transparent lg:block [@media(min-width:700px)_and_(max-width:1500px)_and_(any-pointer:coarse)]:!hidden" />

      <div className="absolute bottom-0 left-0 hidden h-[55%] w-[48%] bg-gradient-to-tr from-black/55 via-black/20 to-transparent lg:block [@media(min-width:700px)_and_(max-width:1500px)_and_(any-pointer:coarse)]:!hidden" />

      <div className="absolute inset-x-0 bottom-0 hidden h-[35%] bg-gradient-to-t from-black/35 to-transparent lg:block [@media(min-width:700px)_and_(max-width:1500px)_and_(any-pointer:coarse)]:!hidden" />

      {/* TABLET OVERLAYS */}
      <div className="absolute inset-0 hidden bg-black/15 md:max-lg:block [@media(min-width:700px)_and_(max-width:1500px)_and_(any-pointer:coarse)]:!block" />

      <div
        className="
          absolute inset-y-0 right-0 hidden w-[58%]
          bg-gradient-to-l from-black/50 via-black/20 to-transparent
          md:max-lg:block
          [@media(min-width:700px)_and_(max-width:1500px)_and_(any-pointer:coarse)]:!block
          [@media(min-width:700px)_and_(max-width:1500px)_and_(orientation:portrait)_and_(any-pointer:coarse)]:!w-[72%]
        "
      />

      <div
        className="
          absolute inset-x-0 bottom-0 hidden h-[38%]
          bg-gradient-to-t from-black/45 to-transparent
          md:max-lg:block
          [@media(min-width:700px)_and_(max-width:1500px)_and_(any-pointer:coarse)]:!block
          [@media(min-width:700px)_and_(max-width:1500px)_and_(orientation:portrait)_and_(any-pointer:coarse)]:!h-[43%]
        "
      />

      {/* MOBILE OVERLAY */}
      <div
        className="
          absolute inset-0 hidden
          bg-gradient-to-b from-black/30 via-black/10 via-[42%] to-black/65
          max-md:block
          [@media(min-width:700px)_and_(max-width:1500px)_and_(any-pointer:coarse)]:!hidden
        "
      />

      <div className="relative z-10 min-h-screen">
        {/* MAIN HEADING */}
        <HeroHeading />

        {/* HANDWRITTEN HERO */}
        <div
          className="
            absolute bottom-[25%] left-[4.5%] z-20

            max-md:!left-1/2
            max-md:!right-auto
            max-md:!top-[69%]
            max-md:!bottom-auto
            max-md:!-translate-x-1/2
            max-md:!-translate-y-1/2
            max-md:!w-max
            max-md:!max-w-[88%]
            max-md:flex max-md:items-center max-md:justify-center

            md:max-lg:!bottom-[26%] md:max-lg:left-[4%]
            md:max-lg:!max-w-[58%]

            [@media(orientation:portrait)]:md:max-lg:!bottom-[25%]
            [@media(orientation:portrait)]:md:max-lg:left-[4%]
            [@media(orientation:portrait)]:md:max-lg:!max-w-[58%]

            [@media(min-width:700px)_and_(max-width:1500px)_and_(any-pointer:coarse)]:!bottom-[27%]
            [@media(min-width:700px)_and_(max-width:1500px)_and_(any-pointer:coarse)]:!left-[4%]
            [@media(min-width:700px)_and_(max-width:1500px)_and_(any-pointer:coarse)]:!w-max
            [@media(min-width:700px)_and_(max-width:1500px)_and_(any-pointer:coarse)]:!max-w-[58%]

            [@media(min-width:700px)_and_(max-width:1100px)_and_(orientation:portrait)_and_(any-pointer:coarse)]:!bottom-[25%]
            [@media(min-width:700px)_and_(max-width:1100px)_and_(orientation:portrait)_and_(any-pointer:coarse)]:!max-w-[60%]

            /* SMALL TABLET FIX */
            [@media(min-width:600px)_and_(max-width:767px)_and_(any-pointer:coarse)]:!left-[5%]
            [@media(min-width:600px)_and_(max-width:767px)_and_(any-pointer:coarse)]:!right-[5%]
            [@media(min-width:600px)_and_(max-width:767px)_and_(any-pointer:coarse)]:!top-auto
            [@media(min-width:600px)_and_(max-width:767px)_and_(any-pointer:coarse)]:!bottom-[25%]
            [@media(min-width:600px)_and_(max-width:767px)_and_(any-pointer:coarse)]:!translate-x-0
            [@media(min-width:600px)_and_(max-width:767px)_and_(any-pointer:coarse)]:!translate-y-0
            [@media(min-width:600px)_and_(max-width:767px)_and_(any-pointer:coarse)]:!w-max
            [@media(min-width:600px)_and_(max-width:767px)_and_(any-pointer:coarse)]:!max-w-[88%]
            [@media(min-width:600px)_and_(max-width:767px)_and_(any-pointer:coarse)]:!flex
            [@media(min-width:600px)_and_(max-width:767px)_and_(any-pointer:coarse)]:!justify-start
          "
        >
          <div
            className="
              relative w-max max-w-full
              [@media(min-width:600px)_and_(max-width:767px)_and_(any-pointer:coarse)]:!max-w-full
            "
          >
            <p
              className="
                rotate-[-7deg] font-handwritten
                text-[clamp(34px,3.8vw,60px)] leading-[1.2] text-white
                max-md:text-[clamp(32px,9vw,40px)]
                md:max-lg:text-[clamp(40px,5.2vw,58px)]
                [@media(orientation:portrait)]:md:max-lg:text-[clamp(42px,5.5vw,62px)]
                [@media(min-width:600px)_and_(max-width:767px)_and_(any-pointer:coarse)]:!text-[clamp(30px,5.5vw,38px)]
              "
            >
              <span className="flex items-baseline gap-[0.3em] whitespace-nowrap max-md:justify-center [@media(min-width:600px)_and_(max-width:767px)_and_(any-pointer:coarse)]:!justify-start">
                {["Corpul", "pe", "care"].map((word, index) => (
                  <span
                    key={word}
                    className="handwritten-word"
                    style={{ animationDelay: `${0.5 + index * 0.65}s` }}
                  >
                    {word}
                  </span>
                ))}
              </span>

              <span
                className="
                  ml-10 flex items-baseline gap-[0.3em] whitespace-nowrap
                  max-md:ml-0 max-md:justify-center
                  [@media(min-width:600px)_and_(max-width:767px)_and_(any-pointer:coarse)]:!ml-0
                  [@media(min-width:600px)_and_(max-width:767px)_and_(any-pointer:coarse)]:!justify-start
                "
              >
                {["ți-l", "iubești."].map((word, index) => (
                  <span
                    key={word}
                    className="handwritten-word"
                    style={{ animationDelay: `${2.45 + index * 0.65}s` }}
                  >
                    {word}
                  </span>
                ))}
              </span>
            </p>

            {/* UNDERLINE */}
            <svg
              viewBox="0 0 300 30"
              className="
                absolute -bottom-6 left-5 w-[280px]
                rotate-[-7deg] overflow-visible
                max-md:left-1/2 max-md:w-[95%] max-md:-translate-x-1/2
                md:max-lg:-bottom-8 md:max-lg:left-2 md:max-lg:w-[100%]
                [@media(orientation:portrait)]:md:max-lg:-bottom-9
                [@media(orientation:portrait)]:md:max-lg:left-2
                [@media(orientation:portrait)]:md:max-lg:w-[100%]
                [@media(min-width:600px)_and_(max-width:767px)_and_(any-pointer:coarse)]:!left-0
                [@media(min-width:600px)_and_(max-width:767px)_and_(any-pointer:coarse)]:!w-full
                [@media(min-width:600px)_and_(max-width:767px)_and_(any-pointer:coarse)]:!translate-x-0
              "
            >
              <path
                d="M5 22 C75 2 175 4 290 8"
                fill="none"
                stroke="#EA91A5"
                strokeWidth="3"
                strokeLinecap="round"
                pathLength="1"
                className="animate-underline-draw"
              />
            </svg>
          </div>
        </div>

        {/* SCROLL INDICATOR - TABLET & DESKTOP */}
        <div
          className="
            absolute bottom-[calc(7%+24px)] left-[4.5%]
            flex items-center gap-5
            max-md:hidden
            md:max-lg:!bottom-[calc(5%+13px)] md:max-lg:left-[4%]
            [@media(orientation:portrait)]:md:max-lg:!bottom-[calc(7%+13px)]
            [@media(min-width:700px)_and_(max-width:1500px)_and_(any-pointer:coarse)]:!bottom-[calc(5%+13px)]
            [@media(min-width:700px)_and_(max-width:1500px)_and_(orientation:portrait)_and_(any-pointer:coarse)]:!bottom-[calc(7%+13px)]
            [@media(min-width:700px)_and_(max-width:1500px)_and_(any-pointer:coarse)]:!left-[4%]
          "
        >
          <div className="relative flex h-[48px] w-[28px] items-center justify-center overflow-hidden rounded-full border-[2px] border-white/90">
            <svg
              viewBox="0 0 24 32"
              fill="none"
              className="h-5 w-4 animate-[scroll-arrow_1.5s_linear_infinite]"
            >
              <path
                d="M12 3V22M5 15L12 22L19 15"
                stroke="pink"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <span className="text-[9px] font-medium tracking-[3.5px] text-white/90">
            SCROLEAZĂ
          </span>
        </div>

        {/* NEXT STEP - TABLET & DESKTOP */}
        <div
          className="
            absolute bottom-[7%] right-[5%] w-[310px]
            max-md:hidden
            md:max-lg:bottom-[5%] md:max-lg:right-[5%] md:max-lg:w-[250px]
            [@media(orientation:portrait)]:md:max-lg:right-[4%]
            [@media(orientation:portrait)]:md:max-lg:bottom-[7%]
            [@media(min-width:700px)_and_(max-width:1500px)_and_(any-pointer:coarse)]:!right-[5%]
            [@media(min-width:700px)_and_(max-width:1100px)_and_(orientation:portrait)_and_(any-pointer:coarse)]:!right-[4%]
          "
        >
          <p
            className="
              mb-3 ml-2 text-[9px] font-bold
              tracking-[2.5px] text-white
              md:max-lg:text-[8px]
            "
          >
            URMĂTORUL PAS
          </p>

          <Link
            href="/programe"
            className="
              group flex items-center gap-3.5
              rounded-xl border border-white/20
              bg-black/45 p-3.5 backdrop-blur-xl
              transition-colors duration-300 hover:bg-black/65
              md:max-lg:gap-2.5 md:max-lg:p-2.5
            "
          >
            <div
              className="
                relative h-[68px] w-[68px] shrink-0
                overflow-hidden rounded-xl
                md:max-lg:h-[54px] md:max-lg:w-[54px]
              "
            >
              <Image
                src="/antrenamente.png"
                alt="Programe de antrenament"
                fill
                sizes="68px"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            <span className="text-[13px] font-medium leading-snug text-white md:max-lg:text-[11px]">
              Programe pentru
              <br />
              fiecare nivel
            </span>

            <span
              className="
                relative ml-auto h-9 w-[60px] shrink-0
                md:max-lg:!flex md:max-lg:!h-8 md:max-lg:!w-8
                md:max-lg:!items-center md:max-lg:!justify-center
                md:max-lg:!rounded-full md:max-lg:!bg-white/15
                [@media(min-width:700px)_and_(max-width:1500px)_and_(any-pointer:coarse)]:!flex
                [@media(min-width:700px)_and_(max-width:1500px)_and_(any-pointer:coarse)]:!h-8
                [@media(min-width:700px)_and_(max-width:1500px)_and_(any-pointer:coarse)]:!w-8
                [@media(min-width:700px)_and_(max-width:1500px)_and_(any-pointer:coarse)]:!items-center
                [@media(min-width:700px)_and_(max-width:1500px)_and_(any-pointer:coarse)]:!justify-center
                [@media(min-width:700px)_and_(max-width:1500px)_and_(any-pointer:coarse)]:!rounded-full
                [@media(min-width:700px)_and_(max-width:1500px)_and_(any-pointer:coarse)]:!bg-white/15
              "
            >
              <span
                className="
                  absolute right-0 top-0 h-9 w-9 rounded-full
                  bg-white/15 transition-colors duration-300
                  group-hover:bg-[#EA91A5]
                  md:max-lg:hidden
                  [@media(min-width:700px)_and_(max-width:1500px)_and_(any-pointer:coarse)]:!hidden
                "
              />

              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="
                  absolute left-0 top-1/2 h-6 w-6
                  -translate-y-1/2 text-white
                  transition-transform duration-500
                  ease-in-out group-hover:translate-x-[30px]
                  md:max-lg:hidden
                  [@media(min-width:700px)_and_(max-width:1500px)_and_(any-pointer:coarse)]:!hidden
                "
              >
                <path
                  d="M3 12H20M13 5L20 12L13 19"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="
                  hidden h-4 w-4 text-white
                  md:max-lg:!block
                  [@media(min-width:700px)_and_(max-width:1500px)_and_(any-pointer:coarse)]:!block
                "
              >
                <path
                  d="M3 12H20M13 5L20 12L13 19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </Link>
        </div>

        {/* MOBILE BOTTOM ROW */}
        <div
          className="
            absolute bottom-[7%] left-[6%] right-[6%]
            hidden max-md:flex
            items-start justify-between gap-2
          "
        >
          {/* MOBILE SCROLL */}
          <div className="flex flex-col items-center">
            <span className="whitespace-nowrap text-[8px] font-medium tracking-[2px] text-white/90">
              SCROLEAZĂ
            </span>

            <div className="relative mt-2 flex h-[40px] w-[24px] items-center justify-center overflow-hidden rounded-full border-[1.8px] border-white/90">
              <svg
                viewBox="0 0 24 32"
                fill="none"
                className="h-4 w-3 animate-[scroll-arrow_1.5s_linear_infinite]"
              >
                <path
                  d="M12 3V22M5 15L12 22L19 15"
                  stroke="#F5B6C6"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          {/* MOBILE NEXT STEP */}
          <div className="w-[min(205px,62vw)] shrink-0">
            <p className="mb-2 ml-1 text-[8px] font-bold tracking-[2px] text-white">
              URMĂTORUL PAS
            </p>

            <Link
              href="/programe"
              className="
                group flex items-center gap-2
                rounded-xl border border-white/20
                bg-black/45 p-2 backdrop-blur-xl
                transition-colors duration-300 hover:bg-black/65
              "
            >
              <div className="relative h-[44px] w-[44px] shrink-0 overflow-hidden rounded-lg">
                <Image
                  src="/antrenamente.png"
                  alt="Programe de antrenament"
                  fill
                  sizes="44px"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <span className="min-w-0 flex-1 text-[10px] font-medium leading-snug text-white">
                Programe pentru
                <br />
                fiecare nivel
              </span>

              <span
                className="
                  relative flex h-7 w-7 shrink-0 items-center justify-center
                  rounded-full bg-white/15
                  transition-colors duration-300 group-hover:bg-[#EA91A5]
                "
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-4 w-4 text-white"
                >
                  <path
                    d="M3 12H20M13 5L20 12L13 19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
