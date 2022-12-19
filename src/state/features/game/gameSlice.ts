import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: { nickname: string; stillPlaying: boolean } = {
  nickname: "",
  stillPlaying: false,
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setNickname: (state, action: PayloadAction<string>) => {
      state.nickname = action.payload;
      if (state.nickname !== "") {
        state.stillPlaying = true;
      }
    },
    finishGame: (state) => {
      state.stillPlaying = false;
    },
  },
});
