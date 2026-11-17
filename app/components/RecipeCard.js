import Image from "next/image";

export default function RecipeCard({ recipe, onClick }) {
  return (
    <article className="group relative aspect-[4/5] min-w-0 overflow-hidden rounded-[16px]  shadow-[0_8px_25px_rgba(23,21,20,0.10)] lg:aspect-auto lg:h-[250px] xl:h-[270px]">
      <button
        type="button"
        onClick={onClick}
        aria-label={`Vezi rețeta ${recipe.title}`}
        className="absolute inset-0 h-full w-full cursor-pointer text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-[#F5B6C6]"
      >
        <Image
          src={recipe.image}
          alt={recipe.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.045] motion-reduce:transition-none"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#171514]/95 via-[#171514]/15 to-transparent" />

        <span className="absolute left-3 top-3 rounded-full bg-[#F5B6C6] px-3 py-[6px] text-[10px] font-semibold text-[#171514]">
          {recipe.category}
        </span>

        <div className="absolute inset-x-0 bottom-0 p-4">
          <h3 className="max-w-[300px] font-heading text-[15px] font-bold leading-[1.25] text-white lg:text-[16px]">
            {recipe.title}
          </h3>

          <div className="mt-2 flex items-center gap-3 text-[11px] font-medium text-white/75">
            <span>{recipe.time}</span>

            <span className="h-3 w-px bg-white/40" />

            <span>{recipe.calories}</span>
          </div>
        </div>

        {/* Hover indicator */}
        <span className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border border-white/50 bg-black/20 text-white opacity-0 backdrop-blur-md transition-opacity duration-300 group-hover:opacity-100">
          <span className="text-lg">↗</span>
        </span>
      </button>
    </article>
  );
}
