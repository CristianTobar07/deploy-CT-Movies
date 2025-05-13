"use client";

import { RootState, useAppSelector } from "@/store";
import { MovieGrid } from "./MovieGrid";
import { IoHeartOutline } from "react-icons/io5";

export const FavoriteMovies = () => {
  const { movies } = useAppSelector((state: RootState) => {
    return state.favorites;
  });

  return (
    <div className="flex flex-col overflow-y-auto h-full pb-2">
      {movies.length === 0 ? <NoFavorites /> : <MovieGrid movies={movies} />}
    </div>
  );
};

export const NoFavorites = () => {
  return (
    <div className="flex flex-col h-[50vh] items-center justify-center text-gray-600 ">
      <IoHeartOutline size={100} />
      <span className="font-normal">No hay favoritos</span>
    </div>
  );
};
