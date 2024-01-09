import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface HistoricalState {
  error: string | undefined;
}

const initialState: HistoricalState = {
  error: undefined,
};

export const historicalSlice = createSlice({
  name: "historical",
  initialState,
  reducers: {
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
  },
});

export const { setError } = historicalSlice.actions;
export default historicalSlice.reducer;
