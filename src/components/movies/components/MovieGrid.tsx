"use client";

import { Movie } from "../interfaces/movies-response";
import { MovieCard } from "./MovieCard";

interface MovieGridProps {
  movies: Movie[];
}
export const MovieGrid = (props: MovieGridProps) => {
  return (
    <div className="flex flex-wrap gap-2 items-center justify-center mb-2">
      {props.movies.length === 0 ? (
        <div className="text-center text-gray-500 mt-4">
          No se encontraron resultados
        </div>
      ) : (
        props.movies.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))
      )}
    </div>
  );
};
