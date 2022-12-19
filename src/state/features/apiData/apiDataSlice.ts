import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: { data: GameData | null } = { data: null };

export interface GameData {
  question: string;
  allwords: string[];
  goodwords: string[];
}

export const apiDataSlice = createSlice({
  name: "apiData",
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<GameData>) => {
      state.data = action.payload;
    },
  },
});
