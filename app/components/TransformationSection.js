"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import CurvedArrow from "./CurvedArrow";
import CustomButton from "./CustomButton";

const firstLine = ["Mai", "mult", "decât", "un", "aspect,"];
const secondLine = ["o", "versiune", "mai", "puternică."];

export default function TransformationSection() {
  const storyRef = useRef(null);
  const [storyVisible, setStoryVisible] = useState(false);

  useEffect(() => {
    const section = storyRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStoryVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={storyRef}
      className="relative overflow-hidden bg-[#1B1918] py-24 text-[#F3E5D9] md:py-28"
    >
      <div className="mx-auto grid w-[86%] max-w-[1400px] grid-cols-1 gap-14 lg:grid-cols-[0.95fr_1.2fr] lg:gap-16">
        {/* LEFT - STORY */}
        <div>
          <div className="mb-8 flex items-center gap-5">
            <span className="text-[11px] font-bold tracking-[2px] text-[#D7BEB1]">
              O TRANSFORMARE REALĂ
            </span>
            <span className="h-px w-32 bg-[#D7BEB1]/40" />
          </div>

          <h2 className="font-heading text-[clamp(37px,4.4vw,58px)] font-bold leading-[1.08] tracking-[-0.045em] text-white">
            De la cine eram,
            <br />
            <span className="text-[#F0A8B8]">la cine sunt acum.</span>
          </h2>

          <div className="mt-6 space-y-4 text-[14px] leading-[1.85] text-[#D1C8C2] md:text-[15px]">
            <p>Aceasta este transformarea mea.</p>

            <p>
              Am fost o perioadă în care mă simțeam lipsită de energie, fără
              încredere în mine și prinsă într-o rutină care nu mă reprezenta.
            </p>

            <p>
              Totul s-a schimbat în momentul în care am început să fiu
              consecventă. Prin antrenamente, un plan alimentar echilibrat și
              multă răbdare, am construit pas cu pas o versiune mai puternică și
              mai sănătoasă a mea.
            </p>

            <p>
              Astăzi mă simt mai energică, mai încrezătoare și mai fericită. Nu
              este vorba doar despre aspectul fizic, ci despre cum mă simt în
              pielea mea și despre libertatea de a face lucrurile pe care le
              iubesc.
            </p>

            <p>Exact asta îmi doresc să transmiți și ție.</p>
          </div>

          {/* CUSTOM BUTTON */}
          <div className="mt-7">
            <CustomButton href="/programe">Începe și tu</CustomButton>
          </div>
        </div>

        {/* RIGHT - PHOTOS AND ANNOTATIONS */}
        <div className="relative flex flex-col justify-center pt-28 lg:pt-32">
          {/* PHOTOS */}
          <div className="relative grid grid-cols-3 items-end gap-2 sm:flex sm:justify-center sm:gap-5">
            {/* 2021 */}
            <div className="relative w-full max-w-[210px] sm:w-[31%]">
              <div className="absolute -top-[105px] left-[-4px] z-30 whitespace-nowrap sm:left-[-15px]">
                <span
                  className={`story-word font-handwritten text-[30px] text-[#E9A1B1] md:text-[36px] ${
                    storyVisible ? "story-visible" : ""
                  }`}
                  style={{ animationDelay: "0.2s" }}
                >
                  Înainte
                </span>
              </div>

              <CurvedArrow type="before" visible={storyVisible} delay={1.3} />

              <div className="relative aspect-[0.66] overflow-hidden bg-[#302B29]">
                <Image
                  src="/selfie1.png"
                  alt="Transformare 2021"
                  fill
                  sizes="(max-width: 640px) 28vw, 210px"
                  className="object-cover"
                />

                <span className="absolute bottom-2 left-2 border border-white/40 bg-black/60 px-2 py-1 text-[10px] font-bold tracking-[1px] text-white backdrop-blur-sm sm:bottom-3 sm:left-3 sm:px-3 sm:py-1.5 sm:text-[12px]">
                  2021
                </span>
              </div>
            </div>

            {/* 2022 */}
            <div className="relative mb-[-20px] w-full max-w-[210px] sm:mb-[-28px] sm:w-[31%]">
              <div className="relative aspect-[0.66] overflow-hidden bg-[#302B29]">
                <Image
                  src="/selfie2.png"
                  alt="Transformare 2022"
                  fill
                  sizes="(max-width: 640px) 28vw, 210px"
                  className="object-cover"
                />

                <span className="absolute bottom-2 left-2 border border-white/40 bg-black/60 px-2 py-1 text-[10px] font-bold tracking-[1px] text-white backdrop-blur-sm sm:bottom-3 sm:left-3 sm:px-3 sm:py-1.5 sm:text-[12px]">
                  2022
                </span>
              </div>
            </div>

            {/* 2024 */}
            <div className="relative w-full max-w-[210px] sm:w-[31%]">
              <div className="absolute -top-[105px] right-[-4px] z-30 whitespace-nowrap sm:right-0">
                <span
                  className={`story-word font-handwritten text-[30px] text-[#E9A1B1] md:text-[38px] ${
                    storyVisible ? "story-visible" : ""
                  }`}
                  style={{ animationDelay: "2.8s" }}
                >
                  Acum
                </span>
              </div>

              <CurvedArrow type="now" visible={storyVisible} delay={3.9} />

              <div className="relative aspect-[0.66] overflow-hidden bg-[#302B29]">
                <Image
                  src="/selfie3.png"
                  alt="Transformare 2024"
                  fill
                  sizes="(max-width: 640px) 28vw, 210px"
                  className="object-cover"
                />

                <span className="absolute bottom-2 left-2 border border-white/40 bg-black/60 px-2 py-1 text-[10px] font-bold tracking-[1px] text-white backdrop-blur-sm sm:bottom-3 sm:left-3 sm:px-3 sm:py-1.5 sm:text-[12px]">
                  2024
                </span>
              </div>
            </div>
          </div>

          {/* FINAL HANDWRITTEN MESSAGE */}
          <div className="relative mt-12 flex justify-start sm:mt-10 lg:mt-19">
            <div className="relative w-full max-w-[380px]">
              <p className="font-handwritten text-[clamp(30px,8vw,39px)] leading-[1.4] text-[#E9A1B1] md:text-[clamp(37px,3vw,39px)]">
                <span className="flex flex-wrap items-baseline gap-x-[0.22em]">
                  {firstLine.map((word, index) => (
                    <span
                      key={word}
                      className={`story-word ${
                        storyVisible ? "story-visible" : ""
                      }`}
                      style={{
                        animationDelay: `${4.7 + index * 0.3}s`,
                      }}
                    >
                      {word}
                    </span>
                  ))}
                </span>

                <span className="flex flex-wrap items-baseline gap-x-[0.22em]">
                  {secondLine.map((word, index) => (
                    <span
                      key={word}
                      className={`story-word ${
                        storyVisible ? "story-visible" : ""
                      }`}
                      style={{
                        animationDelay: `${6.2 + index * 0.3}s`,
                      }}
                    >
                      {word}
                    </span>
                  ))}
                </span>
              </p>

              {/* FINAL UNDERLINE */}
              <svg
                viewBox="0 0 340 30"
                fill="none"
                aria-hidden="true"
                className={`story-draw absolute -bottom-7 left-[4%] w-[88%] overflow-visible sm:-bottom-8 ${
                  storyVisible ? "story-visible" : ""
                }`}
                style={{ "--arrow-delay": "8.4s" }}
              >
                <path
                  className="underline-path"
                  d="M4 20 C90 3 220 7 335 12"
                  pathLength="1"
                  stroke="#E9A1B1"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
