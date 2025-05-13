"use client";

import React, { useEffect } from "react";
import { moviesCategories } from "../constants/FilterByCategories";
import { RootState, useAppDispatch, useAppSelector } from "@/store";
import { changeCategorieSelected } from "@/store/sidebar/sidebarSlice";
import { useRouter } from "next/navigation";
import { MovieCategory } from "../interfaces/FilterByCategories";

export const FilterByCategories = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const { categorieSelected } = useAppSelector((state: RootState) => {
    return state.sidebar;
  });

  useEffect(() => {
    const category = localStorage.getItem("category");
    if (category) {
      dispatch(changeCategorieSelected(JSON.parse(category)));
    }
  }, []);

  const handleSelectCategorie = (category: MovieCategory) => {
    dispatch(changeCategorieSelected(category));

    localStorage.setItem("category", JSON.stringify(category));

    const searchParams = new URLSearchParams(window.location.search);
    if (categorieSelected === category) {
      searchParams.delete("category");
    } else {
      searchParams.set("category", category.key);
    }
    const newPathname = `/dashboard/movies`;
    router.push(`${newPathname}?${searchParams.toString()}`);
  };

  return (
    <div className="my-2 px-5">
      <h1 className="my-2">Categorias</h1>
      <div className="flex flex-wrap font-normal mb-5">
        {moviesCategories.map((category) => (
          <button
            key={category.id}
            onClick={() => handleSelectCategorie(category)}
            className={`mr-2 capitalize px-3 py-1 m-1 rounded-lg border border-gray-50 text-gray-50 text-xs cursor-auto active:opacity-5 ${
              categorieSelected && categorieSelected.id === category.id
                ? "bg-gray-200 text-zinc-800 font-semibold"
                : ""
            }`}
          >
            <span className="cursor-auto">{category.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};
