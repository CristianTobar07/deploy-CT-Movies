import { HeaderMoviesFavorites } from "@/components/header";
import { FavoriteMovies } from "@/components/movies";

export const metadata = {
  title: "Favoritos",
  description: "Pagina de favoritos",
};

export default async function FavoritesPage() {
  return (
    <div className="flex flex-col h-screen ml-2">
      <HeaderMoviesFavorites />
      <FavoriteMovies />
    </div>
  );
}
