import { Filters } from "@/components/contacts/contacts.types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type UIState = {
  selectedId: string | null;
  filters: Filters;
};

const initialState: UIState = {
  selectedId: null,
  filters: {
    name: "",
    city: "",
    active: true,
  },
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setSelectedId: (state, action: PayloadAction<string | null>) => {
      state.selectedId = action.payload;
    },
    setFilters: (state, action: PayloadAction<Filters>) => {
      state.filters = action.payload;
    },
  },
});

export const { setSelectedId, setFilters } = uiSlice.actions;
export default uiSlice.reducer;
