"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const navItems = [
  { label: "Acasă", href: "/" },
  { label: "Programe", href: "/programe" },
  { label: "Nutriție", href: "/nutritie" },
  { label: "Contact", href: "/contact" },
];

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-[21px] w-[21px]">
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="17.5" cy="6.8" r="1.1" fill="currentColor" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-[21px] w-[21px]">
      <path
        d="M14 3v11.2a4.1 4.1 0 1 1-3.5-4.05M14 3c.4 2.6 2 4.2 5 4.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Închide meniul automat când ecranul devine tabletă/desktop
  useEffect(() => {
    // Meniul mobil e vizibil doar când NU se potrivește niciuna dintre aceste condiții:
    // - ecran >= 768px (tabletă/desktop)
    // - tabletă mică tactilă (600-767px, any-pointer: coarse)
    const desktopQuery = window.matchMedia("(min-width: 768px)");
    const smallTabletQuery = window.matchMedia(
      "(min-width: 600px) and (max-width: 767px) and (any-pointer: coarse)",
    );

    const closeIfNotMobile = () => {
      if (desktopQuery.matches || smallTabletQuery.matches) {
        setMenuOpen(false);
      }
    };

    closeIfNotMobile();

    desktopQuery.addEventListener("change", closeIfNotMobile);
    smallTabletQuery.addEventListener("change", closeIfNotMobile);

    return () => {
      desktopQuery.removeEventListener("change", closeIfNotMobile);
      smallTabletQuery.removeEventListener("change", closeIfNotMobile);
    };
  }, []);

  return (
    <>
      <header className="fixed left-[5%] right-[5%] top-6 z-50 flex items-center gap-8 xl:gap-10 max-md:top-8 [@media(min-width:600px)_and_(max-width:767px)_and_(any-pointer:coarse)]:!top-4 [@media(min-width:600px)_and_(max-width:767px)_and_(any-pointer:coarse)]:!gap-3">
        {/* LOGO */}
        <Link
          href="/"
          onClick={() => setMenuOpen(false)}
          aria-label="Build Strong - Acasă"
          className="relative z-[60] shrink-0 max-md:absolute max-md:left-0 max-md:right-0 max-md:mx-auto max-md:w-fit [@media(min-width:600px)_and_(max-width:767px)_and_(any-pointer:coarse)]:!static [@media(min-width:600px)_and_(max-width:767px)_and_(any-pointer:coarse)]:!mx-0 [@media(min-width:600px)_and_(max-width:767px)_and_(any-pointer:coarse)]:!w-auto"
        >
          <Image
            src={menuOpen ? "/homepage-white.svg" : "/homepage-pink.svg"}
            alt="Build Strong"
            width={140}
            height={60}
            priority
            className="h-auto w-[135px] shrink-0 max-md:w-[115px] [@media(min-width:600px)_and_(max-width:767px)_and_(any-pointer:coarse)]:!w-[100px] drop-shadow-[0_2px_5px_rgba(0,0,0,0.85)]"
          />
        </Link>

        {/* DESKTOP + TABLET NAVIGATION */}
        <nav className="hidden w-full max-w-[540px] items-center justify-between rounded-full border border-white/30 bg-soft-black/55 px-9 py-3.5 shadow-sm backdrop-blur-md md:flex [@media(min-width:600px)_and_(max-width:767px)_and_(any-pointer:coarse)]:!flex [@media(min-width:600px)_and_(max-width:767px)_and_(any-pointer:coarse)]:!max-w-none [@media(min-width:600px)_and_(max-width:767px)_and_(any-pointer:coarse)]:!px-4 [@media(min-width:600px)_and_(max-width:767px)_and_(any-pointer:coarse)]:!py-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="whitespace-nowrap text-[13px] font-normal text-white transition-colors duration-300 hover:text-[#EA91A5] [@media(min-width:600px)_and_(max-width:767px)_and_(any-pointer:coarse)]:!text-[10px]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* MOBILE MENU BUTTON */}
        <div className="relative z-[60] ml-auto md:hidden [@media(min-width:600px)_and_(max-width:767px)_and_(any-pointer:coarse)]:!hidden">
          <button
            type="button"
            onClick={() => setMenuOpen((previous) => !previous)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Închide meniul" : "Deschide meniul"}
            className={`inline-flex h-[38px] w-[76px] items-center justify-center whitespace-nowrap rounded-full border-0 border-l border-t px-3 text-xs font-semibold tracking-[0.3px] text-white shadow-sm backdrop-blur-md transition-colors duration-300 focus:outline-none ${
              menuOpen
                ? "border-l-white/30 border-t-white/30 bg-gray-700/25"
                : "border-l-white/30 border-t-white/30 bg-soft-black/55"
            }`}
          >
            {menuOpen ? "X" : "MENIU"}
          </button>
        </div>
      </header>

      {/* MOBILE FULLSCREEN OVERLAY - OUTSIDE HEADER */}
      <div
        className={`fixed inset-0 z-[45] md:hidden [@media(min-width:600px)_and_(max-width:767px)_and_(any-pointer:coarse)]:!hidden ${
          menuOpen
            ? "visible pointer-events-auto"
            : "invisible pointer-events-none"
        }`}
      >
        {/* FULLSCREEN BACKGROUND */}
        <button
          type="button"
          aria-label="Închide meniul"
          onClick={() => setMenuOpen(false)}
          className={`absolute inset-0 h-full w-full bg-[#171514]/40 backdrop-blur-lg transition-opacity duration-500 ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* MENU CONTENT */}
        <div className="absolute left-[5%] right-[5%] top-[116px] isolate">
          {/* LOCAL DARK BACKDROP */}
          <div
            className={`pointer-events-none absolute -inset-x-3 -inset-y-4 z-0 rounded-[30px] border border-white/[0.04] bg-gradient-to-b from-black/65 via-[#100D0E]/75 to-black/80 backdrop-blur-xl transition-opacity duration-500 ${
              menuOpen ? "opacity-100" : "opacity-0"
            }`}
          />

          {/* NAVIGATION LINKS */}
          <nav className="relative z-10 flex flex-col gap-[10px]">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  opacity: menuOpen ? 1 : 0,
                  transform: menuOpen ? "translateY(0)" : "translateY(-10px)",
                  transitionDelay: menuOpen ? `${index * 70}ms` : "0ms",
                }}
                className="flex h-[54px] items-center justify-between rounded-full border border-white/20 bg-white/[0.08] px-5 text-[13px] font-medium text-white shadow-lg backdrop-blur-xl transition-all duration-300 hover:border-[#EA91A5]/60 hover:bg-white/[0.16] hover:text-[#EA91A5]"
              >
                {item.label}
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-4 w-4 text-white/65"
                >
                  <path
                    d="M9 5L16 12L9 19"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            ))}
          </nav>

          {/* SOCIAL MEDIA */}
          <div
            className={`relative z-10 mt-6 border-t border-white/20 pt-5 transition-opacity duration-500 ${
              menuOpen ? "opacity-100" : "opacity-0"
            }`}
            style={{ transitionDelay: menuOpen ? "350ms" : "0ms" }}
          >
            <div className="flex items-center justify-center gap-7 text-white">
              <span aria-label="Instagram" role="img">
                <InstagramIcon />
              </span>
              <span aria-label="TikTok" role="img">
                <TikTokIcon />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
