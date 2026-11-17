"use client";

import { useState } from "react";
import Image from "next/image";
import RecipeModal from "./RecipeModal";
import RecipeCard from "./RecipeCard";
import { categories, recipes } from "../data/recipes";

export default function RecipesCatalog() {
  const [activeCategory, setActiveCategory] = useState("Toate rețetele");
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [selectedOrigin, setSelectedOrigin] = useState(null);

  const filteredRecipes =
    activeCategory === "Toate rețetele"
      ? recipes
      : recipes.filter((recipe) => recipe.category === activeCategory);

  const handleRecipeClick = (event, recipe) => {
    const rect = event.currentTarget.getBoundingClientRect();

    setSelectedOrigin({
      left: rect.left,
      top: rect.top,
      width: rect.width,
      height: rect.height,
    });

    setSelectedRecipe(recipe);
  };

  const handleModalClose = () => {
    setSelectedRecipe(null);
    setSelectedOrigin(null);
  };

  return (
    <>
      {/* CATEGORY NAVIGATION */}
      <section className="bg-[#171514] px-[6%] py-5 md:px-[7%] md:py-6">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-5 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
          {/* TITLE */}
          <h2 className="shrink-0 font-heading text-[19px] font-bold text-[#F3E5D9] sm:text-[21px]">
            Explorează <span className="text-[#F5B6C6]">rețetele</span>
          </h2>

          {/* CATEGORY FILTERS */}
          <div className="grid w-full grid-cols-3 gap-2 sm:gap-3 lg:flex lg:w-auto lg:flex-wrap lg:justify-end">
            {categories.map((category) => {
              const isActive = activeCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  aria-pressed={isActive}
                  className={`flex min-h-[38px] w-full items-center justify-center whitespace-nowrap rounded-full border px-2 py-2 text-[10px] font-medium transition-all duration-300 motion-reduce:transition-none sm:px-3 sm:text-[11px] lg:w-auto lg:px-4 lg:py-[9px] ${
                    isActive
                      ? "border-[#F5B6C6] bg-[#F5B6C6] text-[#171514]"
                      : "border-white/35 bg-transparent text-white/85 hover:border-[#F5B6C6] hover:text-[#F5B6C6]"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* RECIPES CATALOG */}
      <section className="relative isolate overflow-hidden bg-[#F3E5D9] px-[6%] py-10 md:px-[7%] md:py-12 lg:py-11">
        {/* BACKGROUND IMAGE */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 -z-10"
          style={{
            height: "clamp(760px, 57.14vw, 1200px)",
          }}
        >
          <Image
            src="/slide3.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-top"
          />
        </div>

        {/* BACKGROUND OVERLAY */}
        <div className="pointer-events-none absolute inset-0 -z-0 bg-[#F3E5D9]/35" />

        <div className="relative z-10 mx-auto max-w-[1240px]">
          {/* SECTION HEADING */}
          <div className="mb-8 flex flex-col gap-5 lg:mb-9 lg:flex-row lg:items-center lg:gap-7">
            <div className="shrink-0">
              <div className="mb-3 flex items-center gap-4">
                <span className="text-[10px] font-bold tracking-[2.5px] text-[#171514]/65">
                  REȚETE BUILD STRONG
                </span>

                <span className="h-px w-12 bg-[#171514]/35" />
              </div>

              <h2 className="font-heading text-[clamp(27px,3vw,37px)] font-bold leading-[1.12] tracking-[-1px] text-[#171514]">
                Rețete pentru
                <br />
                un stil de viață <span className="text-[#D77D8D]">activ.</span>
              </h2>
            </div>

            <div className="flex flex-col items-start lg:ml-1 lg:flex-row lg:items-center">
              <div className="h-px w-12 shrink-0 bg-[#171514]/30 lg:h-[76px] lg:w-px" />

              <p className="mt-4 max-w-[340px] text-[13px] leading-[1.7] text-[#171514]/75 md:text-[14px] lg:ml-5 lg:mt-0">
                Descoperă o colecție de rețete echilibrate, ușor de pregătit, cu
                ingrediente simple și nutritive.
              </p>
            </div>
          </div>

          {/* RECIPE CARDS */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-4">
            {filteredRecipes.map((recipe) => (
              <RecipeCard
                key={recipe.id}
                recipe={recipe}
                onClick={(event) => handleRecipeClick(event, recipe)}
              />
            ))}
          </div>

          {/* EMPTY STATE */}
          {filteredRecipes.length === 0 && (
            <p className="py-16 text-center text-[14px] text-[#171514]/70">
              Nu există momentan rețete în această categorie.
            </p>
          )}
        </div>
      </section>

      {/* RECIPE MODAL */}
      <RecipeModal
        recipe={selectedRecipe}
        origin={selectedOrigin}
        onClose={handleModalClose}
      />
    </>
  );
}
