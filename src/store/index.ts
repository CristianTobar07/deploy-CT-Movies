import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";

import favoritesReducer from "./favorites/favorites";
import SidebarReducer from "./sidebar/sidebarSlice";

export const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
    sidebar: SidebarReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
