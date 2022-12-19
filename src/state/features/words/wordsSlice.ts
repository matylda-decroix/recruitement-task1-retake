import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: Record<string, boolean> = {};

export const wordsSlice = createSlice({
  name: "words",
  initialState,
  reducers: {
    toggleWord: (state, action: PayloadAction<string>) => {
      const word = action.payload;
      if (state[word] === true) {
        delete state[word];
      } else {
        state[word] = true;
      }
    },
  },
});
