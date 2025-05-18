import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LoaderState {
  isLoading: boolean;
}

const initialState: LoaderState = {
  isLoading: false,
};

const itemSlice = createSlice({
  name: "loader",
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setLoading } = itemSlice.actions;
export default itemSlice.reducer;
