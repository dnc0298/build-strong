import Link from "next/link";
import CustomButton from "./CustomButton";

export default function HeroHeading() {
  return (
    <div
      className="
        absolute right-[5%] top-[21%] w-[48%] max-w-[650px]

        max-md:right-auto max-md:left-[6%]
        max-md:top-[25%] max-md:w-[min(88%,360px)]

        md:max-lg:right-[5%] md:max-lg:top-[20%] md:max-lg:w-[52%]

        [@media(orientation:portrait)]:md:max-lg:right-[4%]
        [@media(orientation:portrait)]:md:max-lg:top-[13%]
        [@media(orientation:portrait)]:md:max-lg:w-[51%]

        [@media(min-width:700px)_and_(max-width:1500px)_and_(any-pointer:coarse)]:!right-[5%]
        [@media(min-width:700px)_and_(max-width:1500px)_and_(any-pointer:coarse)]:!top-[17%]
        [@media(min-width:700px)_and_(max-width:1500px)_and_(any-pointer:coarse)]:!w-[56%]
        [@media(min-width:700px)_and_(max-width:1500px)_and_(any-pointer:coarse)]:!max-w-[720px]

        [@media(min-width:700px)_and_(max-width:1100px)_and_(orientation:portrait)_and_(any-pointer:coarse)]:!right-[4%]
        [@media(min-width:700px)_and_(max-width:1100px)_and_(orientation:portrait)_and_(any-pointer:coarse)]:!top-[14%]
        [@media(min-width:700px)_and_(max-width:1100px)_and_(orientation:portrait)_and_(any-pointer:coarse)]:!w-[57%]

        [@media(min-width:600px)_and_(max-width:767px)_and_(any-pointer:coarse)]:!left-[6%]
        [@media(min-width:600px)_and_(max-width:767px)_and_(any-pointer:coarse)]:!right-[6%]
        [@media(min-width:600px)_and_(max-width:767px)_and_(any-pointer:coarse)]:!top-[19%]
        [@media(min-width:600px)_and_(max-width:767px)_and_(any-pointer:coarse)]:!w-[88%]
        [@media(min-width:600px)_and_(max-width:767px)_and_(any-pointer:coarse)]:!max-w-none
      "
    >
      <div className="block w-full">
        {/* TITLE */}
        <h1
          className="
            w-fit max-w-full
            font-heading font-bold tracking-[-0.025em] text-white
            text-[clamp(41px,5.6vw,75px)] leading-[1.05]

            max-md:text-[clamp(38px,9.5vw,44px)]

            md:max-lg:text-[clamp(44px,5.5vw,62px)]
            [@media(orientation:portrait)]:md:max-lg:text-[clamp(52px,6.5vw,70px)]
            [@media(orientation:portrait)]:md:max-lg:leading-[1.04]

            [@media(min-width:700px)_and_(max-width:1500px)_and_(any-pointer:coarse)]:!text-[clamp(52px,5.8vw,74px)]
            [@media(min-width:700px)_and_(max-width:1500px)_and_(any-pointer:coarse)]:!leading-[1.04]

            [@media(min-width:700px)_and_(max-width:1100px)_and_(orientation:portrait)_and_(any-pointer:coarse)]:!text-[clamp(52px,6.5vw,70px)]

            [@media(min-width:600px)_and_(max-width:767px)_and_(any-pointer:coarse)]:!text-[clamp(36px,6.2vw,44px)]
            [@media(min-width:600px)_and_(max-width:767px)_and_(any-pointer:coarse)]:!leading-[1.04]
          "
        >
          Construiește
          <br />
          corpul pe care
          <br />
          <span className="text-[#F5B6C6]">ți-l dorești.</span>
        </h1>

        {/* SUBTITLE */}
        <p
          className="
            mt-8 flex w-fit items-center justify-start gap-[6px]
            whitespace-nowrap text-[8px] font-bold
            tracking-[0.6px] text-white

            max-md:mt-5

            md:max-lg:mt-6
            [@media(orientation:portrait)]:md:max-lg:mt-5

            [@media(min-width:700px)_and_(max-width:1500px)_and_(any-pointer:coarse)]:!mt-6

            [@media(min-width:600px)_and_(max-width:767px)_and_(any-pointer:coarse)]:!mt-4
            [@media(min-width:600px)_and_(max-width:767px)_and_(any-pointer:coarse)]:!text-[7px]
            [@media(min-width:600px)_and_(max-width:767px)_and_(any-pointer:coarse)]:!tracking-[0.4px]
          "
        >
          <span>ANTRENAMENTE</span>
          <span className="text-[#EA91A5]">•</span>
          <span>PLAN ALIMENTAR</span>
          <span className="text-[#EA91A5]">•</span>
          <span>REZULTATE REALE</span>
        </p>
      </div>

      {/* HERO CTA */}
      {/* HERO CTA */}
      <div
        className="
    mt-7

    max-md:mt-6

    md:max-lg:mt-7
    [@media(orientation:portrait)]:md:max-lg:mt-7

    [@media(min-width:700px)_and_(max-width:1500px)_and_(any-pointer:coarse)]:!mt-7

    [@media(min-width:600px)_and_(max-width:767px)_and_(any-pointer:coarse)]:!mt-5
  "
      >
        <CustomButton href="/programe">Începe transformarea</CustomButton>
      </div>
    </div>
  );
}
