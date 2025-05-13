import { Header } from "@/components/header";
import { MovieGrid, MoviesResponse } from "@/components/movies";

export const metadata = {
  title: "Peliculas",
  description: "Buscar Películas Online",
};

const getMovies = async (
  title?: string,
  category?: string
): Promise<MoviesResponse> => {
  const response = await fetch(
    `https://www.omdbapi.com/?apikey=31c47d20&s=${
      title || "dragon"
    }&type=${category}`
  );
  return response.json();
};

export default async function MoviesPage({
  params,
  searchParams,
}: {
  params: { page: string };
  searchParams: { title?: string; category?: string };
}) {
  const titleMovie = searchParams.title || "";
  const categoryMovie = searchParams.category || "";

  const responseMovies = await getMovies(titleMovie, categoryMovie);

  return (
    <div className="flex flex-col h-screen ml-2">
      <Header />

      <div className="flex flex-col overflow-y-auto h-full">
        <MovieGrid movies={responseMovies.Search || []} />
      </div>
    </div>
  );
}
