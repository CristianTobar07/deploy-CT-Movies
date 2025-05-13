import { MovieCategory } from "@/components/sidebar";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface SidebarState {
  categorieSelected?: MovieCategory;
}

const initialState: SidebarState = {
  categorieSelected: undefined,
};

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    changeCategorieSelected(state, action: PayloadAction<MovieCategory>) {
      if (state.categorieSelected?.id === action.payload.id) {
        state.categorieSelected = undefined;
        return;
      }
      state.categorieSelected = action.payload;
    },
    resetCategorieSelected(state) {
      state.categorieSelected = undefined;
    },
  },
});

export const { changeCategorieSelected, resetCategorieSelected } =
  sidebarSlice.actions;

export default sidebarSlice.reducer;
