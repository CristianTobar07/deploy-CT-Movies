"use client";

import Link from "next/link";
import { IoHeart, IoHeartOutline } from "react-icons/io5";
import { useAppDispatch, useAppSelector } from "@/store";
import { toggleFavorite } from "@/store/favorites/favorites";
import { Movie } from "../interfaces/movies-response";

interface MovieCardProps {
  movie: Movie;
}

export const MovieCard = (movieCard: MovieCardProps) => {
  const { Title, Poster, Type, Year, imdbID } = movieCard.movie;

  const isFavorite = useAppSelector(
    (state) => !!state.favorites.movies.find((movie) => movie.imdbID === imdbID)
  );
  const dispatch = useAppDispatch();

  const onToggle = () => {
    dispatch(toggleFavorite(movieCard.movie));
  };

  return (
    <div className="mx-1 right-0 mt-2 w-80 lg:w-48 md:w-48 lg:mx-auto md:mx-auto">
      <div className="flex flex-col bg-zinc-800 rounded overflow-hidden">
        <div className="flex flex-col text-center  border-b">
          {Poster?.length > 3 ? (
            <img
              key={imdbID}
              src={Poster}
              width={130}
              height={80}
              alt={Title}
              style={{
                objectFit: "cover",
                borderRadius: "5px",
                width: "100%",
                height: "200px",
              }}
            />
          ) : (
            <div className="flex items-center justify-center h-48 bg-gray-700">
              <p className="text-gray-400">No image available</p>
            </div>
          )}

          <p
            className="pt-2 text-sm font-semibold text-gray-50 capitalize anilist-title-text-large"
            title={Title}
          >
            {Title}
          </p>

          <hr />

          <p className="pt-2  text-gray-50 text-xs capitalize anilist-title-text-large">
            <span className="">Año: </span> <i>{Year}</i>
          </p>

          <p className="pt-0  text-gray-50 text-xs capitalize anilist-title-text-large">
            <span className="">Tipo: </span> <i>{Type}</i>
          </p>

          <div className="mb-5 mt-4">
            <Link
              href={`dashboard/movie/${imdbID}`}
              className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100"
              placeholder={`dashboard/movie/${imdbID}`}
            >
              More information
            </Link>
          </div>
        </div>
        <div className="border-b">
          <div
            onClick={onToggle}
            className="px-4 py-2 hover:bg-gray-600 flex items-center cursor-pointer"
          >
            <div className="text-gray-400">
              {isFavorite ? (
                <IoHeart size={25} />
              ) : (
                <IoHeartOutline size={25} />
              )}
            </div>
            <div className="pl-3">
              <p className="text-sm font-medium text-yellow-50 leading-none">
                {isFavorite ? "Es favorito" : "No es favorito"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
