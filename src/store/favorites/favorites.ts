import { Movie } from "@/components/movies";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface favoritesState {
  moviesOrg: Movie[];
  movies: Movie[];
}

const initialState: favoritesState = {
  moviesOrg: [],
  movies: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    setFavoriteMovie(state, action: PayloadAction<Movie[]>) {
      state.moviesOrg = action.payload;
      state.movies = action.payload;
    },

    toggleFavorite(state, action: PayloadAction<Movie>) {
      const movie = action.payload;
      const { imdbID } = movie;

      const movieExist = state.movies.find((movie) => movie.imdbID === imdbID);

      if (movieExist) {
        state.movies = state.movies.filter((movie) => movie.imdbID !== imdbID);
      } else {
        state.movies.unshift(action.payload);
      }

      localStorage.setItem("favorites-movies", JSON.stringify(state.movies));
    },
    searchFavoritesMovies(state, action: PayloadAction<string>) {
      state.movies = state.moviesOrg.filter((movie) =>
        movie.Title?.toLocaleLowerCase().includes(
          action.payload.toLocaleLowerCase()
        )
      );
    },
  },
});

export const { toggleFavorite, setFavoriteMovie, searchFavoritesMovies } =
  favoritesSlice.actions;

export default favoritesSlice.reducer;
