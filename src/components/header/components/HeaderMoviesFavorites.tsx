"use client";

import React from "react";
import { RootState, useAppSelector } from "@/store";
import { SearchMoviesFavorites } from "./SearchMoviesFavorites";

export const HeaderMoviesFavorites = () => {
  const { dataUser } = useAppSelector((state: RootState) => {
    return state.auth;
  });

  return (
    <div className="flex flex-wrap gap-3 bg-zinc-900 mx-1 py-3 mb-1 px-2 text-white flex-col-reverse lg:flex-row sm:items-end  lg:justify-between">
      <SearchMoviesFavorites />
    </div>
  );
};
