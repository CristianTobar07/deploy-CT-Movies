"use client";

import React from "react";
import { SearchMovies } from "./SearchMovies";

export const Header = () => {
  return (
    <div className="flex flex-wrap gap-3 bg-zinc-900 mx-1 py-3 mb-1 px-2 text-white flex-col-reverse lg:flex-row sm:items-end  lg:justify-between">
      <SearchMovies />
    </div>
  );
};
