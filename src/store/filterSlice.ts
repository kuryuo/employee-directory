import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FiltersState } from "../types";

const initialState: FiltersState = {
  position: [],
  gender: [],
  stack: [],
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setFilters(state, action: PayloadAction<FiltersState>) {
      return action.payload;
    },
    resetFilters() {
      return initialState;
    },
  },
});

export const { setFilters, resetFilters } = filtersSlice.actions;
export default filtersSlice.reducer;
