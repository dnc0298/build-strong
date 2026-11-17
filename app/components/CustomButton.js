import Link from "next/link";

/**
 * Dimensiuni controlate prin variabile CSS:
 * - telefon (< md):  înălțime 44px, cerc 50px
 * - tabletă/desktop: înălțime 50px, cerc 56px
 * Clip-path-ul folosește aceeași variabilă (--circle), deci rămâne mereu aliniat cu cercul roz.
 *
 * Comportament:
 * - Desktop cu mouse: pastila albă se extinde la hover / focus de la tastatură.
 * - Telefon și tabletă (fără hover) + ecrane sub md: butonul e mereu în starea finală.
 * - Respectă prefers-reduced-motion.
 */

const FULL_WHITE =
  "group-hover:[clip-path:inset(0_0_0_0_round_9999px)] group-focus-visible:[clip-path:inset(0_0_0_0_round_9999px)] max-md:[clip-path:inset(0_0_0_0_round_9999px)] [@media(hover:none)]:[clip-path:inset(0_0_0_0_round_9999px)]";

export default function CustomButton({
  href = "/contact",
  children = "Începe transformarea",
  className = "",
}) {
  return (
    <Link
      href={href}
      className={`group relative inline-flex h-[var(--btn-h)] max-w-full items-center rounded-full outline-none [--btn-h:44px] [--circle:46px] focus-visible:ring-2 focus-visible:ring-[#F5B6C6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#171514] md:[--btn-h:50px] md:[--circle:56px] ${className}`}
    >
      {/* O SINGURĂ FORMĂ ALBĂ: normal = doar în spatele textului, hover/touch = tot butonul */}
      <span
        aria-hidden="true"
        className={`absolute inset-0 z-0 rounded-full bg-white [clip-path:inset(0_var(--circle)_0_0_round_9999px)] transition-[clip-path] duration-500 ease-in-out motion-reduce:transition-none ${FULL_WHITE}`}
      />

      {/* TEXT */}
      <span className="relative z-10 flex h-[var(--btn-h)] min-w-0 items-center justify-center whitespace-nowrap pl-4 pr-3 text-[13px] font-medium text-[#171514] md:px-6 md:text-[14px]">
        {children}
      </span>

      {/* CERC ROZ + SĂGEȚI */}
      <span className="relative z-20 flex h-[var(--btn-h)] w-[var(--circle)] shrink-0 items-center justify-center overflow-hidden rounded-full">
        <span
          aria-hidden="true"
          className="absolute inset-0 rounded-full bg-[#F5B6C6] transition-[inset] duration-500 ease-in-out motion-reduce:transition-none group-hover:inset-[4px] group-focus-visible:inset-[4px] max-md:inset-[3px] [@media(hover:none)]:inset-[3px]"
        />

        {/* SĂGEATĂ INIȚIALĂ */}
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
          className="absolute z-10 h-[17px] w-[17px] translate-x-0 opacity-100 transition-all duration-500 ease-in-out motion-reduce:transition-none md:h-[19px] md:w-[19px] group-hover:translate-x-8 group-hover:opacity-0 group-focus-visible:translate-x-8 group-focus-visible:opacity-0 max-md:translate-x-8 max-md:opacity-0 [@media(hover:none)]:translate-x-8 [@media(hover:none)]:opacity-0"
        >
          <path
            d="M5 12H19M12 5L19 12L12 19"
            stroke="#171514"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        {/* SĂGEATĂ CARE INTRĂ */}
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
          className="absolute z-10 h-[17px] w-[17px] -translate-x-8 opacity-0 transition-all duration-500 ease-in-out motion-reduce:transition-none md:h-[19px] md:w-[19px] group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100 max-md:translate-x-0 max-md:opacity-100 [@media(hover:none)]:translate-x-0 [@media(hover:none)]:opacity-100"
        >
          <path
            d="M5 12H19M12 5L19 12L12 19"
            stroke="#171514"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </Link>
  );
}
