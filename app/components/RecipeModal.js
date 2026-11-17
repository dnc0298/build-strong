"use client";

import Image from "next/image";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

export default function RecipeModal({ recipe, origin, onClose }) {
  const modalRef = useRef(null);
  const closeTimer = useRef(null);
  const closing = useRef(false);

  const [target, setTarget] = useState(null);
  const [expanded, setExpanded] = useState(false);

  useLayoutEffect(() => {
    if (!recipe || !origin || !modalRef.current) return;

    closing.current = false;

    const element = modalRef.current;

    const measure = () => {
      const width = Math.min(740, window.innerWidth - 24);

      element.style.width = `${width}px`;
      element.style.maxHeight = `${Math.min(
        window.innerHeight * 0.76,
        window.innerHeight - 24,
      )}px`;

      const height = element.offsetHeight;

      const left = (window.innerWidth - width) / 2;
      const top = (window.innerHeight - height) / 2;

      setTarget({ left, top, width, height });
    };

    measure();

    const frame = requestAnimationFrame(() => {
      requestAnimationFrame(() => setExpanded(true));
    });

    return () => cancelAnimationFrame(frame);
  }, [recipe, origin]);

  useEffect(() => {
    if (!recipe) return;

    // Salvăm stilurile originale
    const previousOverflow = document.body.style.overflow;
    const previousPaddingRight = document.body.style.paddingRight;

    // Calculăm lățimea scrollbar-ului
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    // Blocăm scroll-ul și compensăm spațiul scrollbar-ului
    document.body.style.overflow = "hidden";

    if (scrollbarWidth > 0) {
      const currentPadding =
        parseFloat(window.getComputedStyle(document.body).paddingRight) || 0;

      document.body.style.paddingRight = `${currentPadding + scrollbarWidth}px`;
    }

    const handleEscape = (event) => {
      if (event.key === "Escape") handleClose();
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      // Restaurăm exact stilurile inițiale
      document.body.style.overflow = previousOverflow;
      document.body.style.paddingRight = previousPaddingRight;

      window.removeEventListener("keydown", handleEscape);

      if (closeTimer.current) {
        clearTimeout(closeTimer.current);
        closeTimer.current = null;
      }
    };
  }, [recipe]);

  if (!recipe || !origin) return null;

  const handleClose = () => {
    if (closing.current) return;

    closing.current = true;
    setExpanded(false);

    closeTimer.current = setTimeout(() => {
      onClose();
    }, 450);
  };

  const initialTransform = target
    ? `translate(${origin.left - target.left}px, ${origin.top - target.top}px) scale(${origin.width / target.width}, ${origin.height / target.height})`
    : "none";

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-3 backdrop-blur-[7px] transition-opacity duration-[450ms] ${
        expanded ? "opacity-100" : "opacity-0"
      }`}
      onClick={handleClose}
    >
      {/* MODAL - DESIGN ORIGINAL */}
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="recipe-modal-title"
        onClick={(event) => event.stopPropagation()}
        style={{
          position: "fixed",
          left: target?.left ?? 0,
          top: target?.top ?? 0,
          transformOrigin: "top left",
          transform: expanded ? "none" : initialTransform,
          transition: "transform 450ms cubic-bezier(0.22, 1, 0.36, 1)",
          visibility: target ? "visible" : "hidden",
        }}
        className="relative flex max-h-[76vh] w-full max-w-[740px] flex-col overflow-hidden rounded-[22px] border border-white/[0.16] bg-[#171514]/75 shadow-[0_25px_90px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.12)] backdrop-blur-2xl backdrop-saturate-150 md:flex-row"
      >
        {/* Glass reflection */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 z-20 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"
        />

        {/* Close button */}
        <button
          type="button"
          onClick={handleClose}
          aria-label="Închide rețeta"
          className="absolute right-3 top-3 z-30 flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-black/40 text-xl text-white backdrop-blur-xl transition-all duration-300 hover:border-[#F5B6C6] hover:bg-[#F5B6C6] hover:text-[#171514]"
        >
          ×
        </button>

        {/* Recipe image */}
        <div className="relative h-[180px] shrink-0 overflow-hidden bg-[#171514] md:h-auto md:w-[40%]">
          <Image
            src={recipe.image}
            alt={recipe.title}
            fill
            sizes="(max-width: 768px) 100vw, 296px"
            className="object-cover object-center"
          />

          <span className="absolute bottom-4 left-4 rounded-full border border-white/30 bg-[#F5B6C6] px-3 py-1.5 text-[9px] font-semibold text-[#171514]">
            {recipe.category}
          </span>
        </div>

        {/* Recipe content */}
        <div className="relative min-h-0 flex-1 overflow-y-auto overscroll-contain p-4 sm:p-5">
          {/* Header */}
          <div className="mb-4 pr-8">
            <span className="text-[8px] font-bold tracking-[2.5px] text-white/55">
              BUILD STRONG · REȚETĂ
            </span>

            <h2
              id="recipe-modal-title"
              className="mt-2 font-heading text-[21px] font-bold leading-[1.15] tracking-[-0.5px] text-white sm:text-[23px]"
            >
              {recipe.title}
            </h2>

            <div className="mt-3 flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="text-[#F5B6C6]">◷</span>
                <span className="text-[11px] font-medium text-white">
                  {recipe.time}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-[#F5B6C6]">✦</span>
                <span className="text-[11px] font-medium text-white">
                  {recipe.calories}
                </span>
              </div>
            </div>
          </div>

          <div className="h-px bg-white/15" />

          {/* Ingredients */}
          <div className="py-4">
            <div className="mb-3 flex items-center justify-between">
              <h3 className="font-heading text-[15px] font-bold text-white">
                Ingrediente
              </h3>

              <span className="text-[9px] font-medium text-white/60">
                1 porție
              </span>
            </div>

            <div className="grid grid-cols-1 gap-x-4 gap-y-2.5 sm:grid-cols-2">
              {recipe.ingredients.map((ingredient, index) => (
                <div key={index} className="flex items-start gap-2">
                  <span className="mt-[2px] flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#F5B6C6]/20 text-[9px] text-[#F5B6C6]">
                    ✓
                  </span>

                  <span className="text-[11px] leading-[1.5] text-white/90">
                    {ingredient}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="h-px bg-white/15" />

          {/* Preparation */}
          <div className="py-4">
            <h3 className="mb-4 font-heading text-[15px] font-bold text-white">
              Mod de preparare
            </h3>

            <div className="space-y-3">
              {recipe.steps.map((step, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#F5B6C6]/30 bg-[#F5B6C6]/10 text-[9px] font-semibold text-[#F5B6C6]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p className="pt-0.5 text-[11px] leading-[1.65] text-white/90">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Nutrition note */}
          <div className="rounded-lg border border-white/15 bg-white/[0.06] p-3">
            <p className="text-[10px] leading-[1.6] text-white/70">
              Valorile nutriționale sunt estimative și pot varia în funcție de
              ingredientele și cantitățile utilizate.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
