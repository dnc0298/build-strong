"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const navigation = [
  { label: "Acasă", href: "/" },
  { label: "Programe", href: "/programe" },
  { label: "Nutriție", href: "/nutritie" },
  { label: "Contact", href: "/contact" },
];

const legalLinks = [
  { label: "Termeni și condiții", href: "/termeni-si-conditii" },
  { label: "Politica de cookies", href: "/politica-cookie" },
  {
    label: "Politica de confidențialitate",
    href: "/politica-de-confidentialitate",
  },
  {
    label: "Soluționarea litigiilor",
    href: "/solutionarea-litigiilor",
  },
];

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-[19px] w-[19px]">
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
      <circle cx="17.5" cy="6.7" r="1" fill="currentColor" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-[19px] w-[19px]">
      <path
        d="M14 3V15.2a4.2 4.2 0 1 1-4-4.2M14 3c.5 3 2.3 4.8 5 5.2"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Footer({ children }) {
  const pathname = usePathname();
  const footerRef = useRef(null);
  const contentRef = useRef(null);
  const spacerRef = useRef(null);

  const [height, setHeight] = useState(0);
  // true = footer fixed + efect de reveal; false = footer static (fallback)
  const [reveal, setReveal] = useState(false);
  // top-ul sticky al conținutului (negativ dacă e mai înalt decât ecranul)
  const [stickyTop, setStickyTop] = useState(0);

  /* 0. La schimbarea paginii, mergem mereu sus (Next sare peste elementele sticky) */
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  /* 1. Măsurăm footerul și decidem dacă are loc în viewport */
  useEffect(() => {
    const el = footerRef.current;
    if (!el) return;

    const measure = () => {
      const h = el.offsetHeight;
      setHeight(h);
      // reveal doar dacă footerul încape în ecran (altfel ar fi tăiat sus)
      setReveal(h <= window.innerHeight);
    };

    measure();

    const ro = new ResizeObserver(measure);
    ro.observe(el);
    window.addEventListener("resize", measure);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  /* 2. Calculăm top-ul sticky al conținutului (prin state, nu prin DOM) */
  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;

    const compute = () => {
      setStickyTop(Math.min(0, window.innerHeight - el.offsetHeight));
    };

    compute();

    const ro = new ResizeObserver(compute);
    ro.observe(el);
    window.addEventListener("resize", compute);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", compute);
    };
  }, []);

  /* 3. Progresul scroll-ului -> translateY pe footer */
  useEffect(() => {
    const footer = footerRef.current;
    const spacer = spacerRef.current;
    if (!footer || !spacer) return;

    if (!reveal || !height) {
      footer.style.transform = "";
      footer.style.visibility = "";
      return;
    }

    let raf = 0;

    const update = () => {
      raf = 0;
      const rect = spacer.getBoundingClientRect();
      const vh = window.innerHeight;

      // 0 = spacerul abia intră în ecran, 1 = final de pagină
      const progress = Math.min(1, Math.max(0, (vh - rect.top) / height));

      footer.style.transform = `translate3d(0, ${(1 - progress) * 100}%, 0)`;
      footer.style.visibility = progress <= 0 ? "hidden" : "visible";
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [reveal, height]);

  return (
    <>
      <div id="page-content" className="relative">
        {/* Conținutul paginii: rămâne pinned cât urcă footerul */}
        <div
          ref={contentRef}
          style={reveal ? { position: "sticky", top: stickyTop } : undefined}
        >
          {children}
        </div>

        {/* SPACER: creează spațiul de scroll în care urcă footerul */}
        <div
          ref={spacerRef}
          aria-hidden="true"
          style={{ height: reveal ? height : 0 }}
        />
      </div>

      <footer
        ref={footerRef}
        className={`isolate overflow-hidden px-[4%] pb-3 pt-6 text-[#F3E5D9] will-change-transform sm:pb-5 sm:pt-10 md:px-[5%] lg:pt-20 ${
          reveal
            ? "fixed inset-x-0 bottom-0 z-40 bg-gradient-to-t from-black/70 via-black/25 to-transparent"
            : "relative bg-[#090909]"
        }`}
      >
        {/* ATMOSPHERE (doar în varianta statică; în reveal se vede conținutul din spate) */}
        {!reveal && (
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_12%_20%,rgba(245,182,198,0.09),transparent_35%),radial-gradient(ellipse_at_90%_80%,rgba(245,182,198,0.055),transparent_40%),linear-gradient(135deg,#111010,#080808_65%,#121010)]"
          />
        )}

        <div className="mx-auto max-w-[1500px]">
          {/* MAIN GLASS CONTAINER */}
          <div className="relative overflow-hidden rounded-[20px] border border-white/[0.16] bg-black/45 shadow-[0_20px_80px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-2xl sm:rounded-[24px]">
            {/* GLASS REFLECTION */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,0.07),transparent_30%,transparent_70%,rgba(245,182,198,0.045))]"
            />

            <div className="relative z-10 grid grid-cols-2 gap-x-6 gap-y-6 p-5 sm:grid-cols-3 sm:gap-x-8 sm:gap-y-7 sm:p-7 lg:grid-cols-[1.05fr_0.8fr_1.2fr_1.05fr] lg:gap-8 lg:p-12">
              {/* BRAND + SOCIAL */}
              <div className="col-span-2 flex items-center justify-between gap-4 sm:col-span-1 sm:flex-col sm:items-stretch sm:gap-8 lg:gap-12">
                <div>
                  <Link href="/" className="inline-flex items-center">
                    <Image
                      src="/homepage-white.svg"
                      alt="Build Strong"
                      width={155}
                      height={65}
                      className="h-auto w-[110px] object-contain sm:w-[120px] lg:w-[145px]"
                    />
                  </Link>

                  <p className="mt-5 hidden max-w-[230px] text-[13px] leading-[1.8] text-white/55 sm:block">
                    Construiește o versiune mai puternică și mai sănătoasă a ta.
                  </p>
                </div>

                {/* SOCIAL */}
                <div>
                  <p className="mb-4 hidden text-[10px] font-bold tracking-[2.5px] text-white/55 sm:block">
                    URMĂREȘTE-NE
                  </p>

                  <div className="flex items-center gap-3">
                    <a
                      href="https://www.instagram.com/"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Instagram Build Strong"
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/[0.04] text-[#F3E5D9] transition-all duration-300 hover:border-[#F5B6C6] hover:bg-[#F5B6C6] hover:text-[#171514] sm:h-11 sm:w-11"
                    >
                      <InstagramIcon />
                    </a>

                    <a
                      href="https://www.tiktok.com/"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="TikTok Build Strong"
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/[0.04] text-[#F3E5D9] transition-all duration-300 hover:border-[#F5B6C6] hover:bg-[#F5B6C6] hover:text-[#171514] sm:h-11 sm:w-11"
                    >
                      <TikTokIcon />
                    </a>
                  </div>
                </div>
              </div>

              {/* NAVIGATION */}
              <div className="lg:border-l lg:border-white/15 lg:pl-8">
                <p className="mb-4 text-[10px] font-bold tracking-[2.5px] text-white/45 sm:mb-5 lg:mb-7">
                  EXPLOREAZĂ
                </p>

                <nav className="flex flex-col items-start gap-3 sm:gap-4 lg:gap-5">
                  {navigation.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="group flex items-center gap-2 text-[13px] font-medium text-white/75 transition-colors duration-300 hover:text-[#F5B6C6] sm:text-[14px]"
                    >
                      <span className="hidden h-[5px] w-[5px] rounded-full bg-[#F5B6C6] opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:block" />
                      {item.label}
                    </Link>
                  ))}
                </nav>
              </div>

              {/* LEGAL */}
              <div className="lg:border-l lg:border-white/15 lg:pl-8">
                <p className="mb-4 text-[10px] font-bold tracking-[2.5px] text-white/45 sm:mb-5 lg:mb-7">
                  INFORMAȚII LEGALE
                </p>

                <nav className="flex flex-col items-start gap-3 sm:gap-4 lg:gap-5">
                  {legalLinks.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="text-[12px] leading-snug text-white/70 transition-colors duration-300 hover:text-[#F5B6C6] sm:text-[13px] sm:leading-relaxed"
                    >
                      {item.label}
                    </Link>
                  ))}

                  {/* ANPC - TEXT INFORMATIV, FĂRĂ LINK */}
                  <div className="flex items-center gap-3 sm:pt-1">
                    <span className="h-px w-7 bg-[#F5B6C6]/60" />

                    <span className="text-[13px] font-bold tracking-[1px] text-[#F5B6C6]">
                      ANPC
                    </span>
                  </div>
                </nav>
              </div>

              {/* CONTACT GLASS CARD */}
              <div className="relative col-span-2 self-start sm:col-span-3 overflow-hidden rounded-[16px] border border-[#F5B6C6]/30 bg-black/30 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] sm:rounded-[18px] sm:p-5 lg:col-span-1 lg:p-6">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute right-0 top-0 h-32 w-32 rounded-full bg-[#F5B6C6]/[0.07] blur-[55px]"
                />

                <div className="relative flex flex-col items-center gap-3.5 text-center sm:grid sm:grid-cols-[1.5fr_1fr_1fr] sm:items-start sm:gap-6 sm:text-left lg:block lg:space-y-7">
                  {/* EMAIL */}
                  <div>
                    <p className="mb-1 text-[9px] font-bold tracking-[2px] text-white/45 sm:mb-2">
                      E-MAIL
                    </p>

                    <a
                      href="mailto:contact@buildstrong.ro"
                      className="break-all text-[15px] font-medium text-[#F3E5D9] transition-colors hover:text-[#F5B6C6] sm:text-[14px] lg:text-[16px]"
                    >
                      contact@buildstrong.ro
                    </a>
                  </div>

                  <div className="hidden h-px w-full bg-white/10 lg:block" />

                  {/* PHONE */}
                  <div>
                    <p className="mb-1 text-[9px] font-bold tracking-[2px] text-white/45 sm:mb-2">
                      TELEFON
                    </p>

                    <a
                      href="tel:+40723456789"
                      className="text-[15px] font-semibold text-[#F3E5D9] transition-colors hover:text-[#F5B6C6] sm:text-[16px] lg:text-[19px]"
                    >
                      +40 723 456 789
                    </a>
                  </div>

                  <div className="hidden h-px w-full bg-white/10 lg:block" />

                  {/* PROGRAM */}
                  <div>
                    <p className="mb-1 text-[9px] font-bold tracking-[2px] text-white/45 sm:mb-3">
                      PROGRAM
                    </p>

                    <p className="text-[13px] leading-[1.6] text-white/80 sm:text-[14px] sm:leading-[1.8]">
                      Luni – Vineri
                      <br />
                      09:00 – 18:00
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* BOTTOM BAR */}
          <div className="mt-3 flex flex-col items-center justify-between gap-1.5 border-t border-white/10 py-3 sm:mt-4 sm:flex-row sm:gap-5 sm:py-4 lg:mt-5 lg:py-6">
            {/* BRAND */}
            <Link href="/" className="hidden items-center gap-3 sm:flex">
              <span className="text-[11px] font-bold tracking-[3px] text-white/45">
                BUILD STRONG
              </span>
            </Link>

            {/* COPYRIGHT - STATIC YEAR */}
            <p className="text-center text-[10px] tracking-wide text-white/35">
              © 2026 Build Strong. Toate drepturile rezervate.
            </p>

            {/* DEVELOPER */}
            <div className="flex items-center gap-3">
              <span className="text-[10px] tracking-[2px] text-white/40">
                MADE BY DNC
              </span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
