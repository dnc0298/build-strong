export default function CurvedArrow({ type, visible, delay }) {
  const before = type === "before";

  return (
    <svg
      viewBox="0 0 180 145"
      fill="none"
      aria-hidden="true"
      className={`story-draw pointer-events-none absolute z-20 h-auto overflow-visible ${
        before
          ? "left-[22px] bottom-full mb-[-10px] w-[100px] md:left-[10px] md:w-[85px] lg:left-[12px] lg:w-[95px]"
          : "right-[-4px] bottom-full mb-[-10px] w-[100px] md:right-[0px] md:w-[85px] lg:right-[0px] lg:w-[95px]"
      } ${visible ? "story-visible" : ""}`}
      style={{ "--arrow-delay": `${delay}s` }}
    >
      {before ? (
        <>
          <path
            className="arrow-flourish"
            d="M7 27 C-2 8 16 -1 29 12 C39 22 29 35 19 30"
            pathLength="1"
            stroke="#E9A1B1"
            strokeWidth="2.2"
            strokeLinecap="round"
          />

          <path
            className="arrow-line"
            d="M22 24 C55 0 105 19 126 67 C136 89 139 105 145 119"
            pathLength="1"
            stroke="#E9A1B1"
            strokeWidth="2.2"
            strokeLinecap="round"
          />

          <path
            className="arrow-head"
            d="M128 104 Q137 115 145 119 Q148 106 157 99"
            pathLength="1"
            stroke="#E9A1B1"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </>
      ) : (
        <>
          <path
            className="arrow-flourish"
            d="M170 28 C181 8 163 -1 150 12 C140 22 150 35 160 30"
            pathLength="1"
            stroke="#E9A1B1"
            strokeWidth="2.2"
            strokeLinecap="round"
          />

          <path
            className="arrow-line"
            d="M157 24 C125 0 75 19 54 67 C44 89 41 105 35 119"
            pathLength="1"
            stroke="#E9A1B1"
            strokeWidth="2.2"
            strokeLinecap="round"
          />

          <path
            className="arrow-head"
            d="M52 104 Q43 115 35 119 Q32 106 23 99"
            pathLength="1"
            stroke="#E9A1B1"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </>
      )}
    </svg>
  );
}
